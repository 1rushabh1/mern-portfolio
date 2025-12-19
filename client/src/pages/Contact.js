import React, { useState } from "react";
import emailjs from "@emailjs/browser";

export default () => {
  const [f, s] = useState({ name: "", email: "", message: "" });

  const h = (e) => s({ ...f, [e.target.name]: e.target.value });

  const sub = (e) => {
    e.preventDefault();

    emailjs
      .send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        f,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        () => alert("✅ Message sent successfully!"),
        () => alert("❌ Something went wrong. Please try again.")
      );
  };

  return (
    <section className="contact">
      <div className="contact-wrapper container">

        {/* LEFT CONTENT */}
        <div className="contact-info">
          <span className="badge">GET IN TOUCH</span>
          <h2>Let’s build something meaningful</h2>
          <p>
            Have an idea, opportunity, or just want to say hello?
            My inbox is always open.
          </p>
        </div>

        {/* FORM */}
        <form onSubmit={sub} className="contact-form">
          <div className="field">
            <input
              name="name"
              placeholder="Your name"
              value={f.name}
              onChange={h}
              required
            />
          </div>

          <div className="field">
            <input
              name="email"
              type="email"
              placeholder="Your email"
              value={f.email}
              onChange={h}
              required
            />
          </div>

          <div className="field">
            <textarea
              name="message"
              placeholder="Your message"
              rows="5"
              value={f.message}
              onChange={h}
              required
            />
          </div>

          <button className="btn primary" type="submit">
            Send Message
          </button>
        </form>

      </div>
    </section>
  );
};
