import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import "../styles/Contact.css";

export default function Contact() {
  const formRef = useRef();
  const [status, setStatus] = useState(""); // To track message status

  const sendEmail = (e) => {
    e.preventDefault();

    setStatus("sending");

    emailjs
      .sendForm(
        "service_vbgy0yv",      // 🔹 Replace with your EmailJS Service ID
        "template_je9m1gg",     // 🔹 Replace with your EmailJS Template ID
        formRef.current,
        "X0lCQ5sWAEHr_pUWK"       // 🔹 Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("success");
          formRef.current.reset(); // clear form
        },
        (error) => {
          console.log(error.text);
          setStatus("error");
        }
      );
  };

  return (
    <section className="contact-section">
      <div className="contact-inner">
        <div className="map-container">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps?q=Bengaluru&output=embed"
            loading="lazy"
          ></iframe>
        </div>

        <div className="contact-form-wrapper">
          <h3 className="contact-title">Contact Form</h3>

          <form ref={formRef} onSubmit={sendEmail} className="contact-form">
            <div className="input-wrapper">
              <input
                type="text"
                name="name"
                placeholder="Full name"
                className="form-input"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email address"
                className="form-input"
                required
              />
            </div>

            <textarea
              name="message"
              className="form-input"
              placeholder="Your Message"
              required
            ></textarea>

            <button className="form-btn" type="submit">
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <p className="success-msg">✅ Message sent successfully!</p>
            )}
            {status === "error" && (
              <p className="error-msg">❌ Failed to send message. Try again.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
