"use client";

import { useState, FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    setStatus("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Submission failed");

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="py-10">
        <h3 className="font-display uppercase text-2xl sm:text-3xl font-bold text-brand-blue mb-3">
          Message sent.
        </h3>
        <p className="text-brand-ink/70 text-lg leading-relaxed">
          Thanks for reaching out — we read every message and reply within one business day.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-brand-blue text-sm font-semibold uppercase hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Honeypot for spam protection */}
      <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />

      <div>
        <label htmlFor="name" className="block text-sm text-brand-ink/60 mb-2">Your name</label>
        <input
          id="name"
          type="text"
          name="name"
          required
          disabled={status === "submitting"}
          className="w-full bg-transparent border-b border-brand-ink/20 pb-3 text-brand-ink text-lg placeholder:text-brand-ink/30 focus:border-brand-blue focus:outline-none transition-colors disabled:opacity-50"
          placeholder="Rahul Sharma"
        />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm text-brand-ink/60 mb-2">Phone number</label>
        <input
          id="phone"
          type="tel"
          name="phone"
          required
          disabled={status === "submitting"}
          className="w-full bg-transparent border-b border-brand-ink/20 pb-3 text-brand-ink text-lg placeholder:text-brand-ink/30 focus:border-brand-blue focus:outline-none transition-colors disabled:opacity-50"
          placeholder="+91 98765 43210"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm text-brand-ink/60 mb-2">Email address</label>
        <input
          id="email"
          type="email"
          name="email"
          required
          disabled={status === "submitting"}
          className="w-full bg-transparent border-b border-brand-ink/20 pb-3 text-brand-ink text-lg placeholder:text-brand-ink/30 focus:border-brand-blue focus:outline-none transition-colors disabled:opacity-50"
          placeholder="rahul@business.com"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm text-brand-ink/60 mb-2">Message</label>
        <textarea
          id="message"
          name="message"
          rows={3}
          required
          disabled={status === "submitting"}
          className="w-full bg-transparent border-b border-brand-ink/20 pb-3 text-brand-ink text-lg placeholder:text-brand-ink/30 focus:border-brand-blue focus:outline-none transition-colors resize-none disabled:opacity-50"
          placeholder="Tell us about your business and goals..."
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-400">
          Something went wrong sending your message. Please try again, or reach us on WhatsApp.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full py-4 bg-brand-orange text-brand-ink font-semibold uppercase text-base hover:bg-brand-orange-vivid transition-colors mt-4 disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
