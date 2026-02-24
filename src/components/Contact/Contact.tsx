import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { useLanguage } from "../../contexts/LanguageContext";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import "./Contact.css";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as
  | string
  | undefined;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as
  | string
  | undefined;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as
  | string
  | undefined;
const EMAILJS_CONFIGURED = !!(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY);

// Initialize once at module load — required in some EmailJS v4 setups
if (EMAILJS_CONFIGURED) {
  emailjs.init({ publicKey: PUBLIC_KEY! });
}

const contactItems = [
  {
    key: "email" as const,
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    value: "mguimfack@hotmail.com",
    href: "mailto:mguimfack@hotmail.com",
  },
  {
    key: "phone" as const,
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a2 2 0 012-2.18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 6.37a16 16 0 006.72 6.72l.81-.81a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
    value: "(438) 835-4940",
    href: "tel:+14388354940",
  },
  {
    key: "location" as const,
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    value: "Montréal, QC",
    href: null,
  },
  {
    key: "linkedin" as const,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
    value: "linkedin.com/in/melvice-guimfack",
    href: "https://www.linkedin.com/in/melvice-jr-guimfack-b-ing-b91433221?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B0sIQZ2uaTF24OxZgIOwycg%3D%3D",
  },
  {
    key: "github" as const,
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
      </svg>
    ),
    value: "github.com/mguimfack",
    href: "https://github.com/Melvice",
  },
];

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const { t } = useLanguage();
  const f = t.contact.form;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const formRef = useRef<HTMLFormElement>(null);
  const sectionRef = useScrollAnimation() as React.RefObject<HTMLElement>;

  // name attr on each input matches state key — no mismatch
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    const { name, email, subject, message } = formData;

    const openMailto = () => {
      const mailtoLink = `mailto:mguimfack@hotmail.com?subject=${encodeURIComponent(subject || `Contact from ${name}`)}&body=${encodeURIComponent(`From: ${name} (${email})\n\n${message}`)}`;
      window.open(mailtoLink, '_self');
    };

    if (EMAILJS_CONFIGURED) {
      try {
        await emailjs.send(
          SERVICE_ID!,
          TEMPLATE_ID!,
          {
            from_name: name,
            from_email: email,
            reply_to: email,
            subject: subject || `Contact from ${name}`,
            message,
            to_name: 'Melvice',
            to_email: 'mguimfack@hotmail.com',
          },
        );
        setStatus('sent');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus('idle'), 3000);
      } catch (err) {
        console.error('[EmailJS error]', err);
        // EmailJS failed — fallback to mailto so the message is never lost
        openMailto();
        setStatus('sent');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus('idle'), 3000);
      }
    } else {
      openMailto();
      setStatus('sent');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <section
      className="section"
      id="contact"
      ref={sectionRef as React.RefObject<HTMLElement>}
    >
      <div className="container">
        <div className="section-header">
          <span className="section-label animate-in">{t.contact.label}</span>
          <h2 className="section-title animate-in delay-1">
            {t.contact.title}
            <span>{t.contact.titleHighlight}</span>
          </h2>
          <p className="contact-intro animate-in delay-2">{t.contact.intro}</p>
        </div>

        <div className="contact-layout">
          {/* Info column */}
          <div className="contact-info animate-in">
            <h3 className="contact-info-title">{t.contact.infoTitle}</h3>
            <div className="contact-links">
              {contactItems.map((item) =>
                item.href ? (
                  <a
                    key={item.key}
                    href={item.href}
                    className="contact-link"
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                  >
                    <span className="contact-link-icon">{item.icon}</span>
                    <div>
                      <span className="contact-link-label">
                        {t.contact.linkLabels[item.key]}
                      </span>
                      <span className="contact-link-value">{item.value}</span>
                    </div>
                  </a>
                ) : (
                  <div
                    key={item.key}
                    className="contact-link contact-link-static"
                  >
                    <span className="contact-link-icon">{item.icon}</span>
                    <div>
                      <span className="contact-link-label">
                        {t.contact.linkLabels[item.key]}
                      </span>
                      <span className="contact-link-value">{item.value}</span>
                    </div>
                  </div>
                ),
              )}
            </div>

            <div className="availability-badge">
              <span className="badge-dot" />
              <div>
                <p className="avail-title">{t.contact.availTitle}</p>
                <p className="avail-sub">{t.contact.availSub}</p>
              </div>
            </div>

            {!EMAILJS_CONFIGURED && (
              <p className="emailjs-note">{f.configNote}</p>
            )}
          </div>

          {/* Form */}
          <form
            ref={formRef}
            className="contact-form animate-in delay-2"
            onSubmit={handleSubmit}
          >
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">{f.nameLbl}</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder={f.namePh}
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={status === "sending"}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">{f.emailLbl}</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder={f.emailPh}
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={status === "sending"}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="subject">{f.subjectLbl}</label>
              <input
                id="subject"
                name="subject"
                type="text"
                placeholder={f.subjectPh}
                value={formData.subject}
                onChange={handleChange}
                disabled={status === "sending"}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">{f.msgLbl}</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder={f.msgPh}
                value={formData.message}
                onChange={handleChange}
                required
                disabled={status === "sending"}
              />
            </div>

            <button
              type="submit"
              className={`btn btn-primary submit-btn ${status}`}
              disabled={status === "sending" || status === "sent"}
            >
              {status === "sent" ? (
                <>
                  <span>✓</span> {f.sent}
                </>
              ) : status === "error" ? (
                <>
                  <span>✗</span> {f.error}
                </>
              ) : status === "sending" ? (
                <>
                  <span className="spinner" /> {f.sending}
                </>
              ) : (
                <>
                  {f.submit}
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
