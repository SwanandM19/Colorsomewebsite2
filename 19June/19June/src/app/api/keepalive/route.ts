import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Free Supabase projects pause after about a week with no activity, which
// would make the consultation form fail. Vercel Cron (see vercel.json) calls
// this once a day; it runs one tiny read so the project always counts as active.
//
// Vercel sends "Authorization: Bearer <CRON_SECRET>" automatically when a
// CRON_SECRET environment variable is set. Without the secret this route
// refuses to run, so strangers can't use it.
export const dynamic = 'force-dynamic';

export async function GET(req: Request) {
  const secret = process.env.CRON_SECRET;
  if (!secret || req.headers.get('authorization') !== `Bearer ${secret}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) {
    return NextResponse.json({ ok: false, error: 'Supabase not configured' }, { status: 500 });
  }

  try {
    const { error } = await createClient(url, key)
      .from('consultations')
      .select('id', { count: 'exact', head: true });
    if (error) throw new Error(error.message);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Supabase keep-alive failed:', err);
    // Non-200 so the failure shows up in Vercel's cron logs.
    return NextResponse.json({ ok: false }, { status: 502 });
  }
}
