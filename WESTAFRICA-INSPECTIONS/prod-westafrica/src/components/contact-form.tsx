"use client";

import { FormEvent, useState } from "react";

const MAX_MESSAGE_WORDS = 400;

function countWords(value: string) {
  const trimmed = value.trim();
  return trimmed ? trimmed.split(/\s+/).length : 0;
}

export function ContactForm() {
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [feedback, setFeedback] = useState("");
  const wordCount = countWords(message);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (wordCount > MAX_MESSAGE_WORDS) {
      setStatus("error");
      setFeedback(`Your message must be no more than ${MAX_MESSAGE_WORDS} words.`);
      return;
    }

    setStatus("sending");
    setFeedback("");
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result: { error?: string } = await response.json();

      if (!response.ok) {
        setStatus("error");
        setFeedback(result.error ?? "Your message could not be sent. Please try again.");
        return;
      }

      form.reset();
      setMessage("");
      setStatus("sent");
      setFeedback("Thank you. Your message has been sent.");
    } catch {
      setStatus("error");
      setFeedback("A connection problem prevented your message from being sent. Please try again.");
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-field">
        <label htmlFor="contact-name">Name</label>
        <input autoComplete="name" id="contact-name" name="name" maxLength={120} required />
      </div>
      <div className="form-field">
        <label htmlFor="contact-email">Email</label>
        <input
          autoComplete="email"
          id="contact-email"
          name="email"
          type="email"
          maxLength={254}
          required
        />
      </div>
      <div className="form-field">
        <label htmlFor="contact-subject">Subject</label>
        <input id="contact-subject" name="subject" maxLength={200} required />
      </div>
      <div className="form-field">
        <label htmlFor="contact-message">Message</label>
        <textarea
          id="contact-message"
          name="message"
          rows={6}
          required
          value={message}
          onChange={(event) => {
            setMessage(event.target.value);
            if (status === "error") {
              setStatus("idle");
              setFeedback("");
            }
          }}
          aria-describedby="message-word-count"
        />
        <p
          className={`word-count${wordCount > MAX_MESSAGE_WORDS ? " word-count-error" : ""}`}
          id="message-word-count"
          aria-live="polite"
        >
          {wordCount} / {MAX_MESSAGE_WORDS} words
        </p>
      </div>
      <button className="button button-dark form-submit" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send message"}
        {status !== "sending" ? <span aria-hidden="true">↗</span> : null}
      </button>
      {feedback ? (
        <p className={`form-feedback form-feedback-${status}`} role={status === "error" ? "alert" : "status"}>
          {feedback}
        </p>
      ) : null}
    </form>
  );
}
