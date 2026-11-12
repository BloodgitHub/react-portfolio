import { useState } from "react";
import { ArrowUpRight, CheckCircle2, Mail } from "lucide-react";
import { profile } from "../data/portfolio";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function validate() {
    const next = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = "Enter a valid email address.";
    if (form.message.trim().length < 10) next.message = "Message must be at least 10 characters.";
    return next;
  }

  function handleSubmit(event) {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) setSubmitted(true);
  }

  function handleChange(event) {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
    setSubmitted(false);
  }

  return (
    <section className="section container contact-section" id="contact">
      <div className="contact-copy">
        <p className="section-kicker">HAVE A PROJECT IN MIND?</p>
        <h2>Let's make something <span className="gradient-text">great.</span></h2>
        <p>Have an opportunity, idea, or just want to say hello? Send me a message.</p>
        <a className="email-link" href={`mailto:${profile.email}`}><Mail size={18} /> {profile.email}</a>
      </div>
      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <label htmlFor="name">Your name</label>
        <input id="name" name="name" value={form.name} onChange={handleChange} placeholder="John Doe" aria-invalid={Boolean(errors.name)} />
        {errors.name && <span className="field-error">{errors.name}</span>}
        <label htmlFor="email">Email address</label>
        <input id="email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="john@example.com" aria-invalid={Boolean(errors.email)} />
        {errors.email && <span className="field-error">{errors.email}</span>}
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows="4" value={form.message} onChange={handleChange} placeholder="Tell me a little about your idea..." aria-invalid={Boolean(errors.message)} />
        {errors.message && <span className="field-error">{errors.message}</span>}
        <button className="button button-primary submit-button" type="submit">Send message <ArrowUpRight size={17} /></button>
        {submitted && <p className="success-message"><CheckCircle2 size={17} /> Form validated! Connect an email service to receive messages.</p>}
        <p className="form-note">This demo validates your message in the browser; it does not send or store it.</p>
      </form>
    </section>
  );
}