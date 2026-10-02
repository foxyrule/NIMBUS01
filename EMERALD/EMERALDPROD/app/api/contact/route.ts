import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const MAX_MESSAGE_LENGTH = 400;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      name?: string;
      email?: string;
      phone?: string;
      subject?: string;
      message?: string;
    };

    const name = (body.name ?? "").trim();
    const email = (body.email ?? "").trim();
    const phone = (body.phone ?? "").trim();
    const subject = (body.subject ?? "").trim();
    const message = (body.message ?? "").trim();

    if (!name || !email || !phone || !subject || !message) {
      return NextResponse.json(
        { ok: false, error: "Please complete all required fields before submitting." },
        { status: 400 },
      );
    }

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { ok: false, error: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    if (message.length > MAX_MESSAGE_LENGTH) {
      return NextResponse.json(
        { ok: false, error: `Your message must be ${MAX_MESSAGE_LENGTH} characters or fewer.` },
        { status: 400 },
      );
    }

    const targetRecipients = [process.env.CONTACT_TO_FOXY, process.env.CONTACT_TO_SSWFO]
      .filter((value): value is string => Boolean(value && value.trim() && value.includes("@")));

    if (!targetRecipients.length) {
      return NextResponse.json(
        {
          ok: true,
          message:
            "The contact form has been validated successfully. Add CONTACT_TO_FOXY and CONTACT_TO_SSWFO environment variables to enable delivery to both recipients.",
        },
        { status: 200 },
      );
    }

    const smtpHost = process.env.SMTP_HOST?.trim();
    const smtpPort = Number(process.env.SMTP_PORT ?? "587");
    const smtpUser = process.env.SMTP_USER?.trim();
    const smtpPass = process.env.SMTP_PASS?.trim();
    const smtpFrom = process.env.SMTP_FROM?.trim() || "do-not-reply@emeraldtechsvcs.com";

    if (!smtpHost || !smtpUser || !smtpPass) {
      return NextResponse.json(
        {
          ok: true,
          message:
            "The form has been validated successfully. SMTP configuration is not set in this environment, so delivery is waiting on the server-side mail setup.",
        },
        { status: 200 },
      );
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    await transporter.sendMail({
      from: smtpFrom,
      to: targetRecipients,
      replyTo: email,
      subject: `[Emerald Contact] ${subject}`,
      text: `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #0f172a;">
          <h2 style="margin-bottom: 16px;">New Emerald contact enquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <div style="margin-top: 16px;">
            <strong>Message:</strong>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json(
      {
        ok: true,
        message: "Your message has been validated and successfully sent to both configured Emerald recipients.",
      },
      { status: 200 },
    );
  } catch {
    return NextResponse.json(
      { ok: false, error: "Unable to process your message right now. Please try again later." },
      { status: 500 },
    );
  }
}
