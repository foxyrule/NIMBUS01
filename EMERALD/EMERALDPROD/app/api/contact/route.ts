import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import type { SentMessageInfo } from "nodemailer";

const MAX_MESSAGE_LENGTH = 400;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };

    return entities[character];
  });
}

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Please submit a valid contact form request." },
      { status: 400 },
    );
  }

  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return NextResponse.json(
      { ok: false, error: "Please submit a valid contact form request." },
      { status: 400 },
    );
  }

  const fields = body as Record<string, unknown>;
  if (
    typeof fields.name !== "string" ||
    typeof fields.email !== "string" ||
    typeof fields.phone !== "string" ||
    typeof fields.subject !== "string" ||
    typeof fields.message !== "string"
  ) {
    return NextResponse.json(
      { ok: false, error: "Please complete all required fields before submitting." },
      { status: 400 },
    );
  }

  const name = fields.name.trim();
  const email = fields.email.trim();
  const phone = fields.phone.trim();
  const subject = fields.subject.trim();
  const message = fields.message.trim();

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

  const targetRecipients = [
    process.env.CONTACT_TO_FOXY?.trim() ?? "",
    process.env.CONTACT_TO_SSWFO?.trim() ?? "",
    process.env.CONTACT_TO_EMERALD?.trim() ?? "",
  ];

  if (targetRecipients.some((recipient) => !emailRegex.test(recipient))) {
    console.error("Contact form email delivery is missing a valid recipient configuration.");
    return NextResponse.json(
      { ok: false, error: "Contact email delivery is not configured. Please contact us directly." },
      { status: 503 },
    );
  }

  const smtpHost = process.env.SMTP_HOST?.trim();
  const smtpPort = Number(process.env.SMTP_PORT?.trim() || "587");
  const smtpUser = process.env.SMTP_USER?.trim();
  const smtpPass = process.env.SMTP_PASS?.trim();
  const smtpFrom = process.env.SMTP_FROM?.trim() || "do-not-reply@emeraldtechsvcs.com";

  if (
    !smtpHost ||
    !smtpUser ||
    !smtpPass ||
    !Number.isInteger(smtpPort) ||
    smtpPort < 1 ||
    smtpPort > 65535 ||
    !emailRegex.test(smtpFrom)
  ) {
    console.error("Contact form SMTP configuration is missing or invalid.");
    return NextResponse.json(
      { ok: false, error: "Contact email delivery is not configured. Please contact us directly." },
      { status: 503 },
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

  let result: SentMessageInfo;
  try {
    result = await transporter.sendMail({
      from: smtpFrom,
      to: targetRecipients,
      replyTo: email,
      subject: `[Emerald Contact] ${subject}`,
      text: `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #0f172a;">
          <h2 style="margin-bottom: 16px;">New Emerald contact enquiry</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
          <div style="margin-top: 16px;">
            <strong>Message:</strong>
            <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
          </div>
        </div>
      `,
    });
  } catch (error) {
    console.error("Contact form email delivery failed.", error);
    return NextResponse.json(
      { ok: false, error: "Unable to send your message right now. Please try again later." },
      { status: 502 },
    );
  }

  const acceptedRecipients = new Set(
    (result.accepted ?? []).map((recipient) => recipient.toLowerCase()),
  );

  if (
    (result.rejected?.length ?? 0) > 0 ||
    targetRecipients.some((recipient) => !acceptedRecipients.has(recipient.toLowerCase()))
  ) {
    console.error("Contact form email provider did not accept every configured recipient.");
    return NextResponse.json(
      { ok: false, error: "Unable to send your message right now. Please try again later." },
      { status: 502 },
    );
  }

  return NextResponse.json(
    {
      ok: true,
      message: "Your enquiry was accepted by the email service. We will follow up shortly.",
    },
    { status: 200 },
  );
}
