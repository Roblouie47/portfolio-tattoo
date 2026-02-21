import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const data = await req.json();
    const { name, email, phone, idea } = data;

    const mailRes = await fetch('https://api.maillayer.com/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': process.env.MAILLAYER_API_KEY,
      },
      body: JSON.stringify({
        to: 'roblouie47@gmail.com', // Change to your real email
        subject: 'New Tattoo Booking',
        text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nIdea: ${idea}`,
      }),
    });

    if (!mailRes.ok) {
      const errorText = await mailRes.text();
      console.error('MailLayer error:', errorText);
      return NextResponse.json({ error: 'Failed to send email', details: errorText }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('API error:', err);
    return NextResponse.json({ error: 'Server error', details: err.message }, { status: 500 });
  }
}