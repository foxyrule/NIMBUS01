'use client';

import { useState, type FormEvent } from 'react';

const messageLimit = 400;

export function ContactForm() {
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [feedback, setFeedback] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('sending');
    setFeedback('');

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get('name') ?? '').trim(),
      email: String(formData.get('email') ?? '').trim(),
      subject: String(formData.get('subject') ?? '').trim(),
      service: String(formData.get('service') ?? ''),
      message: String(formData.get('message') ?? ''),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message || 'Your message could not be sent. Please try again.');
      }

      form.reset();
      setMessage('');
      setStatus('success');
      setFeedback('Your message has been sent. Nimbus will follow up by email.');
    } catch (error) {
      setStatus('error');
      setFeedback(error instanceof Error ? error.message : 'Your message could not be sent. Please try again.');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="mb-2 block text-sm font-semibold text-slate-800">Name</label>
          <input id="contact-name" name="name" autoComplete="name" required maxLength={100} className="form-control" />
        </div>
        <div>
          <label htmlFor="contact-email" className="mb-2 block text-sm font-semibold text-slate-800">Email</label>
          <input id="contact-email" name="email" type="email" autoComplete="email" required maxLength={254} className="form-control" />
        </div>
      </div>
      <div>
        <label htmlFor="contact-subject" className="mb-2 block text-sm font-semibold text-slate-800">Subject</label>
        <input id="contact-subject" name="subject" required maxLength={150} autoComplete="off" className="form-control" />
      </div>
      <div>
        <label htmlFor="contact-service" className="mb-2 block text-sm font-semibold text-slate-800">Service area</label>
        <select id="contact-service" name="service" defaultValue="" className="form-control">
          <option value="">Choose a service area (optional)</option>
          <option>Managed IT Services</option>
          <option>RALICARE / Healthcare Records Management</option>
          <option>Real Estate Services</option>
          <option>Fantasy Sports</option>
          <option>Talent Scouting</option>
          <option>Other</option>
        </select>
      </div>
      <div>
        <div className="mb-2 flex items-baseline justify-between gap-4">
          <label htmlFor="contact-message" className="text-sm font-semibold text-slate-800">Message</label>
          <span id="message-count" className="text-xs tabular-nums text-slate-500" aria-live="polite">{message.length}/{messageLimit}</span>
        </div>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          maxLength={messageLimit}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          aria-describedby="message-count message-help"
          className="form-control resize-y"
        />
        <p id="message-help" className="mt-2 text-xs text-slate-500">Maximum 400 characters.</p>
      </div>
      {feedback ? <p role={status === 'error' ? 'alert' : 'status'} className={status === 'error' ? 'text-sm font-medium text-red-700' : 'text-sm font-medium text-emerald-800'}>{feedback}</p> : null}
      <button type="submit" disabled={status === 'sending'} className="inline-flex min-h-12 items-center justify-center rounded-md bg-brand-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-700 disabled:cursor-wait disabled:opacity-60">
        {status === 'sending' ? 'Sending…' : 'Send message'}
      </button>
    </form>
  );
}