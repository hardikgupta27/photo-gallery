
import { useState } from "react";

function About() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
    event.target.reset();
  }

  return (
    <main className="about-page">
      <h1>About FRAME & FOCUS</h1>

      <p>
        FRAME & FOCUS is a photography gallery created to
        showcase the beauty of nature, travel destinations
        and architecture. Our purpose is to capture moments
        and share stories through photographs.
      </p>

      <h2>Our Theme</h2>
      <p>
        Every photograph has a story. We bring together
        different places, landscapes and structures in one gallery.
      </p>

      <h2>Contact Us</h2>
      <p>Have a question or gallery enquiry? Send us a message.</p>

      <form onSubmit={handleSubmit} className="contact-form">
        <label htmlFor="name">Your Name</label>
        <input id="name" type="text" placeholder="Enter your name" required />

        <label htmlFor="email">Your Email</label>
        <input id="email" type="email" placeholder="Enter your email" required />

        <label htmlFor="message">Your Message</label>
        <textarea id="message" placeholder="Write your message" required />

        <button type="submit">Send Message</button>
      </form>

      {submitted && (
        <p className="success-message">
          Thank you! Your enquiry has been received.
        </p>
      )}
    </main>
  );
}

export default About;
