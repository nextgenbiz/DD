"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

const EMPTY_FORM = { name: "", email: "", phone: "", subject: "", message: "" };

export default function ContactForm() {
  const [form, setForm] = useState(EMPTY_FORM);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);

    // TODO: replace with a real API call, e.g.
    // await fetch("/api/contact", { method: "POST", body: JSON.stringify(form) });
    await new Promise((resolve) => setTimeout(resolve, 600));

    setSubmitting(false);
    setSubmitted(true);
    setForm(EMPTY_FORM);
  }

  return (
    <div className="rounded-2xl border border-gray-200 bg-gray-50/60 p-8">
      <h2 className="text-2xl font-extrabold text-navy-950">
        Send Us a Message
      </h2>
      <p className="mt-2 text-sm text-gray-500">
        Fill out the form below and our team will get back to you shortly.
      </p>

      {submitted && (
        <div className="mt-5 flex items-center gap-2 rounded-md bg-green-50 px-4 py-3 text-sm text-green-700">
          <CheckCircle2 size={18} />
          Thanks! Your message has been sent — we'll be in touch soon.
        </div>
      )}

      <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="rounded-md border border-gray-200 bg-white px-4 py-3 text-sm text-navy-950 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand/30"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="rounded-md border border-gray-200 bg-white px-4 py-3 text-sm text-navy-950 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand/30"
          />
        </div>

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          className="rounded-md border border-gray-200 bg-white px-4 py-3 text-sm text-navy-950 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand/30"
        />

        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={form.subject}
          onChange={handleChange}
          className="rounded-md border border-gray-200 bg-white px-4 py-3 text-sm text-navy-950 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand/30"
        />

        <textarea
          name="message"
          required
          rows={5}
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          className="resize-none rounded-md border border-gray-200 bg-white px-4 py-3 text-sm text-navy-950 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand/30"
        />

        <button
          type="submit"
          disabled={submitting}
          className="mt-2 inline-flex w-fit items-center gap-2 rounded-md bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-light disabled:cursor-not-allowed disabled:opacity-60"
        >
          {submitting ? "Sending..." : "Send Message"} <span aria-hidden>→</span>
        </button>
      </form>
    </div>
  );
}
