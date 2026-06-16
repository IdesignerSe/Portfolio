import { useEffect, useState } from "react";
import contactData from "../data/contact.json";

export default function Contact() {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    setContact(contactData);
  }, []);

  if (!contact) return null;

  return (
    <div className="contact-page">
      <h1 className="page-heading">Contact</h1>

      {/* Contact Info */}
      <div className="contact-info">
        <p><strong>Email:</strong> {contact.email}</p>
        <p><strong>Phone:</strong> {contact.phone}</p>
        <p><strong>Location:</strong> {contact.location}</p>

        <h3>Social Links</h3>
        <ul className="contact-socials">
          {contact.socials.map((social, index) => (
            <li key={index}>
              <a href={social.url} target="_blank">{social.name}</a>
            </li>
          ))}
        </ul>
      </div>

      {/* Contact Form UI */}
      <div className="contact-form">
        <h2>Send a Message</h2>

        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>

          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}
