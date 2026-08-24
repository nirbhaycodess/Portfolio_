import React, { useState } from "react";
import { contactDetails } from "../Details";

function Contact() {
  const { email, phone } = contactDetails;
  const [form, setForm] = useState({ name: "", email: "", message: "", honey: "" });
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  // Formspree endpoint provided by user
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/xaewgerb";

  const handleChange = (e) => {
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // simple honeypot
    if (form.honey) return;
    setStatus("sending");
    setError("");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({ name: form.name, email: form.email, message: form.message }),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "", honey: "" });
      } else {
        const data = await res.json();
        setError(data.error || "Something went wrong");
        setStatus("error");
      }
    } catch (err) {
      setError(err.message || "Network error");
      setStatus("error");
    }
  };

  return (
    <main id="contact" className="container mx-auto max-width section">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div>
          <h1 className="text-2xl md:text-4xl font-semibold text-dark-heading dark:text-light-heading">
            Get in touch
          </h1>
          <p className="text-content mt-3">Prefer email? <a href={`mailto:${email}`} className="text-sky-600 dark:text-sky-400 font-medium hover:underline">{email}</a> or call <a href={`tel:${phone}`} className="text-sky-600 dark:text-sky-400 font-medium hover:underline">{phone}</a></p>
          <p className="text-content mt-4">Or send a message using the form — I read all messages.</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white dark:bg-dark-card rounded-lg p-6 shadow-md">
          <input type="hidden" name="_subject" value={`New message from ${process.env.REACT_APP_SITE_NAME || "Portfolio"}`} />
          <input type="text" name="honey" value={form.honey} onChange={handleChange} className="hidden" autoComplete="off" />

          <label className="block">
            <span className="text-sm text-dark-heading dark:text-light-heading">Name</span>
            <input name="name" value={form.name} onChange={handleChange} required className="mt-1 block w-full rounded-md border px-3 py-2" />
          </label>

          <label className="block mt-4">
            <span className="text-sm text-dark-heading dark:text-light-heading">Email</span>
            <input name="email" type="email" value={form.email} onChange={handleChange} required className="mt-1 block w-full rounded-md border px-3 py-2" />
          </label>

          <label className="block mt-4">
            <span className="text-sm text-dark-heading dark:text-light-heading">Message</span>
            <textarea name="message" value={form.message} onChange={handleChange} rows={5} required className="mt-1 block w-full rounded-md border px-3 py-2" />
          </label>

          <div className="mt-4 flex items-center gap-3">
            <button type="submit" disabled={status === "sending"} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-sky-500 to-purple-500 text-white">
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>
            {status === "success" && <span className="text-green-500">Message sent — thank you!</span>}
            {status === "error" && <span className="text-red-500">Error: {error}</span>}
          </div>
        </form>
      </div>
    </main>
  );
}

export default Contact;
