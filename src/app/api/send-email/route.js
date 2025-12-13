import { NextResponse } from "next/server";
import { Resend } from "resend";

// const resend = new Resend(`re_123456789`);
const resend = new Resend(`re_TyNidk3L_Hzd1Lw3KPfxtRLrSzVgB5x6G`);

export async function POST(request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, message } = body;

    const { data, error } = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "mirxahussain4gmail.com",
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

    return NextResponse.json({
      message: "Email sent successfully",
    });
  } catch (error) {
    return NextResponse.json(
      { error: error.message || "Internal server error" },
      { status: 500 }
    );
  }
}
