const recipients = ['foxyrule@gmail.com', 'contactus@nimbustechllc.com'];
const messageLimit = 400;
const requestLimit = 8192;
const allowedServices = new Set([
  'Managed IT Services',
  'RALICARE / Healthcare Records Management',
  'Real Estate Services',
  'Fantasy Sports',
  'Talent Scouting',
  'Other',
]);

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  subject?: unknown;
  service?: unknown;
  message?: unknown;
};

function invalid(message: string, status = 400) {
  return Response.json({ message }, { status });
}

export async function POST(request: Request) {
  if (!request.headers.get('content-type')?.includes('application/json')) {
    return invalid('Send the contact form as JSON.', 415);
  }
  if (Number(request.headers.get('content-length') || 0) > requestLimit) {
    return invalid('The submitted form is too large.', 413);
  }

  let parsed: unknown;
  try {
    const reader = request.body?.getReader();
    if (!reader) return invalid('The submitted form could not be read. Please check it and try again.');

    const decoder = new TextDecoder();
    let body = '';
    let bytesRead = 0;
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      bytesRead += value.byteLength;
      if (bytesRead > requestLimit) {
        await reader.cancel();
        return invalid('The submitted form is too large.', 413);
      }
      body += decoder.decode(value, { stream: true });
    }
    body += decoder.decode();
    parsed = JSON.parse(body) as unknown;
  } catch {
    return invalid('The submitted form could not be read. Please check it and try again.');
  }
  if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) {
    return invalid('The submitted form is not valid. Please check it and try again.');
  }
  const payload = parsed as ContactPayload;

  const name = typeof payload.name === 'string' ? payload.name.trim() : '';
  const email = typeof payload.email === 'string' ? payload.email.trim() : '';
  const subject = typeof payload.subject === 'string' ? payload.subject.trim() : '';
  const service = typeof payload.service === 'string' ? payload.service.trim() : '';
  const message = typeof payload.message === 'string' ? payload.message : '';

  if (!name || name.length > 100) return invalid('Enter a name using no more than 100 characters.');
  if (!email || email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return invalid('Enter a valid email address.');
  }
  if (!subject || subject.length > 150 || /[\r\n]/.test(subject)) {
    return invalid('Enter a subject using no more than 150 characters.');
  }
  if (!message.trim()) return invalid('Enter a message before sending.');
  if (message.length > messageLimit) return invalid(`Messages must be ${messageLimit} characters or fewer.`);
  if (service && !allowedServices.has(service)) return invalid('The selected service area is not valid.');

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  if (!apiKey || !from) {
    console.error('Contact delivery is not configured. Set RESEND_API_KEY and CONTACT_FROM_EMAIL.');
    return invalid('The contact service is temporarily unavailable. Please email Nimbus directly.', 503);
  }

  try {
    const delivery = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to: recipients,
        reply_to: email,
        subject: `Nimbus website inquiry: ${subject}`,
        text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nService area: ${service || 'Not specified'}\n\n${message}`,
      }),
    });

    if (!delivery.ok) {
      console.error('Contact delivery provider returned an error:', delivery.status);
      return invalid('Your message could not be delivered right now. Please try again later.', 502);
    }
  } catch (error) {
    console.error('Contact delivery request failed:', error);
    return invalid('Your message could not be delivered right now. Please try again later.', 502);
  }

  return Response.json({ message: 'Message sent.' });
}