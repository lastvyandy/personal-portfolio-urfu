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
      <p className="intro">Feel free to get in touch or visit my <a href="https://github.com/lastvyandy">GitHub profile</a>.</p>
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
    </section>
  );
}
