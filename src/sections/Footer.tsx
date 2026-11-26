import { useState, type FormEvent } from "react";
import { Facebook, Mail, Phone } from "lucide-react";
import { INFO } from "../data/info";
import { Logo } from "./Nav";

const FIELDS = [
  ["first", "First Name", "text"],
  ["last", "Last Name", "text"],
  ["email", "Email", "email"],
  ["phone", "Phone", "tel"],
] as const;

export function Footer() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: POST new FormData(e.currentTarget) to your form service (Formspree, Netlify Forms, etc.)
    setSent(true);
  };

  return (
    <footer id="contact" className="footer dark">
      <div className="footer__grid">
        <div className="footer__left">
          <ul className="contact">
            <li>
              <Mail size={18} aria-hidden="true" />
              <a href={`mailto:${INFO.email}`}>{INFO.email}</a>
            </li>
            <li>
              <Phone size={18} aria-hidden="true" />
              <a href={`tel:${INFO.phone.replace(/\D/g, "")}`}>{INFO.phone}</a>
            </li>
            <li>
              <Facebook size={18} aria-hidden="true" />
              <a href={INFO.facebook} target="_blank" rel="noopener noreferrer">
                @ GOLDEN FLAVORS
              </a>
            </li>
          </ul>
          <Logo large />
        </div>
        <form className="form" onSubmit={onSubmit}>
          <h2 className="form_title">Message Us</h2>
          <div className="form__grid">
            {FIELDS.map(([name, label, type]) => (
              <div className="field" key={name}>
                <label htmlFor={name}>{label}</label>
                <input
                  id={name}
                  name={name}
                  type={type}
                  required={name === "email"}
                />
              </div>
            ))}
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows={4} required />
          </div>
          <button className="btn btn--yellow" type="submit">
            Send Message
          </button>
          <p role="status" className="form__status">
            {sent ? "Thanks! We'll get back to you soon." : ""}
          </p>
        </form>
      </div>
      <p className="footer__legal">
        <a href="/privacy">Privacy Policy</a> &nbsp;|&nbsp; © 2026
        Golden Flavors. All rights reserved. &nbsp;|&nbsp; Design & Developed by{" "}
        <a
          href="https://touxlor.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          TXL Web Design Studio
        </a>
      </p>
    </footer>
  );
}
