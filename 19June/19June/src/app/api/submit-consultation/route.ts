import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { sendConsultationEmail } from '@/src/lib/consultationEmail';
import type { Consultation, ConsultationInput } from '@/src/lib/supabase';

// Server-only client using the service-role key. This bypasses Row-Level
// Security entirely, which is intentional here: the public/anon key has no
// insert policy on `consultations`, and this route is the one trusted,
// server-side place allowed to write to that table. The key is read from a
// non-NEXT_PUBLIC_ env var, so it's never bundled into client-side code.
function getAdminClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !serviceRoleKey) {
    throw new Error('Missing Supabase server credentials.');
  }
  return createClient(url, serviceRoleKey);
}

function required(value: unknown): value is string {
  return typeof value === 'string' && value.trim().length > 0;
}

// Spam protection. This endpoint is public, so it needs three cheap layers:
//  1. a honeypot field real visitors never see or fill,
//  2. a per-IP limit (in-memory — resets on cold start, so it only slows bursts),
//  3. a database check for the same phone submitting again within a few minutes,
//     which holds across every serverless instance.
const MAX_PER_IP = 5;
const IP_WINDOW_MS = 60 * 60 * 1000;
const DUPLICATE_WINDOW_MS = 10 * 60 * 1000;
const ipHits = new Map<string, number[]>();

function tooManyFromIp(ip: string) {
  const now = Date.now();
  const recent = (ipHits.get(ip) ?? []).filter((t) => now - t < IP_WINDOW_MS);
  recent.push(now);
  ipHits.set(ip, recent);
  if (ipHits.size > 5000) {
    for (const [key, hits] of ipHits) if (hits.every((t) => now - t >= IP_WINDOW_MS)) ipHits.delete(key);
  }
  return recent.length > MAX_PER_IP;
}

// Generous caps — far above anything a real enquiry needs.
const LIMITS: Record<string, number> = {
  name: 80, phone: 20, email: 120, city: 80, property_type: 60,
  interior_exterior: 60, area_size: 60, preferred_finish: 60, timeline: 60, notes: 600,
};

export async function POST(req: Request) {
  try {
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0].trim() || 'unknown';
    if (tooManyFromIp(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later or call us directly.' },
        { status: 429 }
      );
    }

    const body = (await req.json()) as ConsultationInput & { website?: unknown };

    // Honeypot: bots fill every field. Pretend it worked so they don't retry.
    if (typeof body.website === 'string' && body.website.trim() !== '') {
      return NextResponse.json({ success: true });
    }

    for (const [field, max] of Object.entries(LIMITS)) {
      const value = (body as unknown as Record<string, unknown>)[field];
      if (value != null && (typeof value !== 'string' || value.length > max)) {
        return NextResponse.json({ error: 'One of the fields is too long or invalid.' }, { status: 400 });
      }
    }

    // Defense-in-depth: the form already validates client-side, but never
    // trust the client — re-check the required fields here too.
    if (!required(body.name) || !required(body.phone) || !required(body.city) || !required(body.property_type) || !required(body.interior_exterior)) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
    }
    if (!/^(\+?91)?[6-9]\d{9}$/.test(body.phone.replace(/[\s-]/g, ''))) {
      return NextResponse.json({ error: 'Invalid phone number.' }, { status: 400 });
    }
    if (body.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
      return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 });
    }

    const payload = {
      name: body.name.trim(),
      phone: body.phone.trim(),
      email: body.email || null,
      city: body.city.trim(),
      property_type: body.property_type,
      interior_exterior: body.interior_exterior,
      area_size: body.area_size || null,
      preferred_finish: body.preferred_finish || null,
      timeline: body.timeline || null,
      notes: body.notes || null,
    };

    // A lead must never be lost because one service is down. Order of work:
    //   1. duplicate check (needs the database — skipped if it's unreachable),
    //   2. alert email to the owner (the notification that actually gets acted on),
    //   3. save to the database (the searchable record).
    // The customer sees success if EITHER the email or the save worked; they only
    // see an error (and keep their typed answers) if both failed.
    let db: ReturnType<typeof getAdminClient> | null = null;
    try {
      db = getAdminClient();
      const since = new Date(Date.now() - DUPLICATE_WINDOW_MS).toISOString();
      const { count: recentCount, error: dupError } = await db
        .from('consultations')
        .select('id', { count: 'exact', head: true })
        .eq('phone', payload.phone)
        .gte('created_at', since);
      if (dupError) {
        console.error('Duplicate check skipped (database unreachable):', dupError.message);
      } else if ((recentCount ?? 0) > 0) {
        return NextResponse.json(
          { error: "We've already received your request - our team will call you shortly." },
          { status: 429 }
        );
      }
    } catch (dbSetupError) {
      console.error('Database unavailable for duplicate check:', dbSetupError);
    }

    // Same id goes into the email's reference number and the database row.
    const lead: Consultation = {
      id: crypto.randomUUID(),
      created_at: new Date().toISOString(),
      status: 'new',
      ...payload,
    };

    let emailSent = false;
    try {
      await sendConsultationEmail(lead);
      emailSent = true;
    } catch (emailError) {
      console.error('Alert email failed:', emailError);
    }

    let saved: Consultation | null = null;
    if (db) {
      try {
        const { data, error } = await db
          .from('consultations')
          .insert([{ id: lead.id, ...payload }])
          .select()
          .single();
        if (error) console.error('Supabase insert error:', error.message);
        else saved = data as Consultation;
      } catch (insertError) {
        console.error('Supabase insert threw:', insertError);
      }
    }

    if (!emailSent && !saved) {
      return NextResponse.json({ error: 'Failed to submit your request.' }, { status: 500 });
    }
    if (!saved) {
      console.error(`LEAD NOT IN DATABASE (owner was emailed) — reference ${lead.id}`);
    }

    return NextResponse.json({ success: true, consultation: saved ?? lead });
  } catch (error) {
    console.error('submit-consultation error:', error);
    return NextResponse.json({ error: 'Unexpected server error.' }, { status: 500 });
  }
}
