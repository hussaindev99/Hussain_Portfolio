import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { firstName, lastName, email, message } = await request.json();

    const { error } = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "mirxahussain4@gmail.com",
      subject: `New Message from ${firstName} ${lastName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error) {
    return NextResponse.json(
      { error: error.message || "Internal server error" },
      { status: 500 }
    );
  }
}
