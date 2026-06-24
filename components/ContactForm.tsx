"use client";

import { useState } from "react";

// ponytail: no backend yet — submit opens a prefilled email. Swap for an API
// route / form service when one exists.
export function ContactForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const subject = encodeURIComponent("Project enquiry — CoreBuild");
    const body = encodeURIComponent(`From: ${email}\n\n${message}`);
    window.location.href = `mailto:welcome@corebuild-int.com?subject=${subject}&body=${body}`;
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <p className="contact-label">Request a quote</p>

      <label className="contact-form__field">
        <span className="contact-form__field-label">Email</span>
        <input
          type="email"
          name="email"
          required
          placeholder="you@company.com"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </label>

      <label className="contact-form__field">
        <span className="contact-form__field-label">Project details</span>
        <textarea
          name="message"
          rows={3}
          required
          placeholder="What are you building, and what do you need?"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
      </label>

      <button type="submit" className="contact-form__submit">
        Send enquiry
      </button>
    </form>
  );
}
