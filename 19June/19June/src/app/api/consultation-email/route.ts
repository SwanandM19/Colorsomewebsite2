// import { NextResponse } from 'next/server';

// export async function POST(req: Request) {
//   try {
//     const body = await req.json();

//     const {
//       name,
//       phone,
//       email,
//       city,
//       property_type,
//       interior_exterior,
//       area_size,
//       preferred_finish,
//       timeline,
//       notes,
//       id,
//       created_at,
//     } = body;

//     const resendApiKey = process.env.RESEND_API_KEY;
//     const toEmail = process.env.CONSULTATION_ALERT_EMAIL;
//     const fromEmail = process.env.CONSULTATION_FROM_EMAIL;

//     if (!resendApiKey || !toEmail || !fromEmail) {
//       return NextResponse.json(
//         { error: 'Missing email configuration.' },
//         { status: 500 }
//       );
//     }

//     const html = `
//       <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #222;">
//         <h2>New Consultation Request</h2>
//         <p><strong>ID:</strong> ${id ?? '-'}</p>
//         <p><strong>Created At:</strong> ${created_at ?? '-'}</p>
//         <hr />
//         <p><strong>Name:</strong> ${name}</p>
//         <p><strong>Phone:</strong> ${phone}</p>
//         <p><strong>Email:</strong> ${email || '-'}</p>
//         <p><strong>City:</strong> ${city}</p>
//         <p><strong>Property Type:</strong> ${property_type}</p>
//         <p><strong>Requirement:</strong> ${interior_exterior}</p>
//         <p><strong>Area Size:</strong> ${area_size || '-'}</p>
//         <p><strong>Preferred Finish:</strong> ${preferred_finish || '-'}</p>
//         <p><strong>Timeline:</strong> ${timeline || '-'}</p>
//         <p><strong>Notes:</strong> ${notes || '-'}</p>
//       </div>
//     `;

//     const resendRes = await fetch('https://api.resend.com/emails', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${resendApiKey}`,
//       },
//       body: JSON.stringify({
//         from: fromEmail,
//         to: [toEmail],
//         subject: `New consultation request from ${name}`,
//         html,
//       }),
//     });

//     const resendData = await resendRes.json();

//     if (!resendRes.ok) {
//       return NextResponse.json(
//         { error: 'Email send failed', details: resendData },
//         { status: 500 }
//       );
//     }

//     return NextResponse.json({ success: true, resendData });
//   } catch (error) {
//     return NextResponse.json(
//       { error: 'Unexpected server error', details: String(error) },
//       { status: 500 }
//     );
//   }
// }

import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      id,
      created_at,
      name,
      phone,
      email,
      city,
      property_type,
      interior_exterior,
      area_size,
      preferred_finish,
      timeline,
      notes,
    } = body;

    const gmailUser = process.env.GMAIL_USER;
    const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;
    const alertEmail = process.env.CONSULTATION_ALERT_EMAIL;

    if (!gmailUser || !gmailAppPassword || !alertEmail) {
      return NextResponse.json(
        { error: 'Missing Gmail environment variables.' },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: gmailUser,
        pass: gmailAppPassword,
      },
    });

    const html = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #222;">
        <h2>New Assistance Request</h2>
        <p><strong>ID:</strong> ${id ?? '-'}</p>
        <p><strong>Created At:</strong> ${created_at ?? '-'}</p>
        <hr />
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email || '-'}</p>
        <p><strong>City:</strong> ${city}</p>
        <p><strong>Property Type:</strong> ${property_type}</p>
        <p><strong>Requirement:</strong> ${interior_exterior}</p>
        <p><strong>Area Size:</strong> ${area_size || '-'}</p>
        <p><strong>Preferred Finish:</strong> ${preferred_finish || '-'}</p>
        <p><strong>Timeline:</strong> ${timeline || '-'}</p>
        <p><strong>Notes:</strong> ${notes || '-'}</p>
      </div>
    `;

    await transporter.sendMail({
      from: gmailUser,
      to: alertEmail,
      subject: `New consultation request from ${name}`,
      html,
      replyTo: email || gmailUser,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Nodemailer error:', error);

    return NextResponse.json(
      {
        error: 'Failed to send email',
        details: String(error),
      },
      { status: 500 }
    );
  }
}