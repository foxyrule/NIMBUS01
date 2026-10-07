import { Resend } from "resend";
import { z } from "zod";

const recipients = ["oyesojio@hotmail.com", "mail@westafrica-inspections.com"];
const wordCount = (value: string) => value.trim().split(/\s+/).filter(Boolean).length;
const contactMessageSchema = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.email().max(254),
  subject: z.string().trim().min(1).max(200),
  message: z.string().trim().min(1).refine((value) => wordCount(value) <= 400, {
    message: "Your message must be no more than 400 words.",
  }),
});

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
    return Response.json({ error: "The submitted form data is invalid." }, { status: 400 });
  }

  const parsed = contactMessageSchema.safeParse(body);
  if (!parsed.success) {
    return Response.json({ error: parsed.error.issues[0]?.message ?? "Please check the form fields." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  if (!apiKey || !from) {
    console.error("Contact form email is not configured: RESEND_API_KEY and CONTACT_FROM_EMAIL are required.");
    return Response.json(
      { error: "The contact form is temporarily unavailable. Please contact us by phone or email." },
      { status: 503 },
    );
  }

  const { name, email, subject, message } = parsed.data;
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeSubject = escapeHtml(subject);
  const safeMessage = escapeHtml(message).replace(/\r?\n/g, "<br>");

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to: recipients,
      replyTo: email,
      subject: "WAIS website enquiry",
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\n${message}`,
      html: `<p><strong>Name:</strong> ${safeName}</p><p><strong>Email:</strong> ${safeEmail}</p><p><strong>Subject:</strong> ${safeSubject}</p><p>${safeMessage}</p>`,
    });

    if (error) {
      console.error("Contact form email provider returned an error:", error);
      return Response.json(
        { error: "Your message could not be sent right now. Please try again or contact us by phone or email." },
        { status: 502 },
      );
    }

    return Response.json({ message: "Your message has been sent." });
  } catch (error) {
    console.error("Contact form email delivery failed:", error);
    return Response.json(
      { error: "Your message could not be sent right now. Please try again or contact us by phone or email." },
      { status: 502 },
    );
  }
}
