"use client";

import { FormEvent, useMemo, useState } from "react";

const MAX_MESSAGE_LENGTH = 400;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const remaining = useMemo(
    () => MAX_MESSAGE_LENGTH - formData.message.length,
    [formData.message.length],
  );

  const handleChange = (field: keyof typeof formData, value: string) => {
    setFormData((current) => ({ ...current, [field]: value }));
    if (status) setStatus(null);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus(null);

    const payload = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      subject: formData.subject.trim(),
      message: formData.message.trim(),
    };

    if (!payload.name || !payload.phone || !payload.email || !payload.subject || !payload.message) {
      setStatus({ type: "error", message: "Please complete all required fields before submitting." });
      return;
    }

    if (!emailRegex.test(payload.email)) {
      setStatus({ type: "error", message: "Please enter a valid email address." });
      return;
    }

    if (payload.message.length > MAX_MESSAGE_LENGTH) {
      setStatus({
        type: "error",
        message: `Your message must be ${MAX_MESSAGE_LENGTH} characters or fewer.`,
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = (await response.json()) as { error?: string; message?: string; ok?: boolean };

      if (!response.ok) {
        throw new Error(result.error ?? "Unable to submit the message right now.");
      }

      setStatus({
        type: "success",
        message:
          result.message ??
          "Your message has been received. We will review it and follow up shortly.",
      });
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unable to submit the message right now.";
      setStatus({ type: "error", message });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5 rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="space-y-2 text-sm font-medium text-slate-700">
          Full name *
          <input
            required
            value={formData.name}
            onChange={(event) => handleChange("name", event.target.value)}
            className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-emerald-500 focus:bg-white"
            placeholder="Your name"
          />
        </label>
        <label className="space-y-2 text-sm font-medium text-slate-700">
          Phone *
          <input
            type="tel"
            required
            value={formData.phone}
            onChange={(event) => handleChange("phone", event.target.value)}
            className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-emerald-500 focus:bg-white"
            placeholder="Your phone number"
          />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="space-y-2 text-sm font-medium text-slate-700">
          Email *
          <input
            type="email"
            required
            value={formData.email}
            onChange={(event) => handleChange("email", event.target.value)}
            className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-emerald-500 focus:bg-white"
            placeholder="you@company.com"
          />
        </label>
        <label className="space-y-2 text-sm font-medium text-slate-700">
          Subject *
          <input
            required
            value={formData.subject}
            onChange={(event) => handleChange("subject", event.target.value)}
            className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-emerald-500 focus:bg-white"
            placeholder="How can we help?"
          />
        </label>
      </div>

      <label className="block space-y-2 text-sm font-medium text-slate-700">
        Message *
        <textarea
          required
          rows={6}
          value={formData.message}
          onChange={(event) => handleChange("message", event.target.value.slice(0, MAX_MESSAGE_LENGTH))}
          maxLength={MAX_MESSAGE_LENGTH}
          className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-emerald-500 focus:bg-white"
          placeholder="Tell us about your technology needs."
        />
      </label>

      <div className="flex items-center justify-between gap-4 text-xs text-slate-500">
        <span>Maximum {MAX_MESSAGE_LENGTH} characters</span>
        <span className={remaining < 50 ? "font-semibold text-amber-600" : ""}>
          {remaining} characters remaining
        </span>
      </div>

      {status ? (
        <div
          aria-live="polite"
          className={
            status.type === "success"
              ? "rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700"
              : "rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700"
          }
        >
          {status.message}
        </div>
      ) : null}

      <button
        type="submit"
        disabled={isSubmitting}
        aria-busy={isSubmitting}
        className="inline-flex w-full items-center justify-center rounded-full bg-emerald-700 px-5 py-3 font-medium text-white transition hover:bg-emerald-800 disabled:cursor-not-allowed disabled:bg-emerald-400"
      >
        {isSubmitting ? "Sending..." : "Send enquiry"}
      </button>
    </form>
  );
}
