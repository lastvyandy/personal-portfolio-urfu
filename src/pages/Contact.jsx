import { useState } from "react";

const initialForm = { name: "", email: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;
    setForm(previous => ({ ...previous, [name]: value }));
    setStatus("");
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!form.name.trim() || !form.message.trim()) {
      setStatus("Please complete all fields.");
      return;
    }
    setStatus("Form submitted locally. This demo does not send emails.");
    setForm(initialForm);
  }

  return (
    <section>
      <h1>Contact Me</h1>
      <p className="intro">Feel free to contact me about software development, projects or job opportunities.</p>
      <div className="contact-grid">
        <div className="contact-details">
          <h2>Contact information</h2>
          <p><strong>Email</strong><br /><a href="mailto:jmanriquezA@yandex.ru">jmanriquezA@yandex.ru</a></p>
          <p><strong>Location</strong><br />Yekaterinburg, Russia</p>
          <p><a href="https://github.com/lastvyandy" target="_blank" rel="noreferrer">GitHub</a> · <a href="https://www.linkedin.com/in/jmanriquezac/" target="_blank" rel="noreferrer">LinkedIn</a></p>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input id="name" name="name" value={form.name} onChange={handleChange} autoComplete="name" required />
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" value={form.email} onChange={handleChange} autoComplete="email" required />
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows={5} value={form.message} onChange={handleChange} required />
          <button className="button" type="submit">Submit</button>
          <p className="muted" role="status">{status}</p>
        </form>
      </div>
    </section>
  );
}
