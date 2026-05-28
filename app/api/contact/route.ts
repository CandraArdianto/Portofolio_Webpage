import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
        return NextResponse.json({ error: "All fields required" }, { status: 400 });
    }

    try {
        await resend.emails.send({
            from: "Portfolio Contact <onboarding@resend.dev>",
            to: process.env.RECIPIENT_EMAIL!,
            subject: `New leads from ${name}`,
            html: `
                <h3>New portfolio contact</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `,
        });
        return NextResponse.json({ success: true });
    }   catch (error) {
        return NextResponse.json({ error: "Failed to send" },  { status : 500 });
    }
}