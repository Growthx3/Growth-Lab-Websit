import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, subject, message } = body;

        // Logic to forward email to romano@growthx3.net
        // Since this requires an API key for a service like Resend or SendGrid,
        // we log it for now. In production, you'd call the provider's SDK here.
        console.log("Contact Form Submission:", { name, email, subject, message });

        // EXAMPLE (Uncomment and add key when ready):
        /*
        const res = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
          },
          body: JSON.stringify({
            from: 'Growth3 Lab <onboarding@resend.dev>',
            to: ['romano@growthx3.net'],
            subject: `New Inquiry: ${subject}`,
            html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong> ${message}</p>`,
          }),
        });
        */

        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ success: false }, { status: 500 });
    }
}
