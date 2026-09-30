"use client";

import { siteConfig } from "@/config/site";
import { messages } from "@/i18n";

/* =========================================================
   CONTACT SECTION
========================================================= */

export default function ContactSection() {
  const t = messages.en.contact;

  const socialLinks = [
    {
      label: "LinkedIn",
      href: siteConfig.social.linkedin,
    },
    {
      label: "GitHub",
      href: siteConfig.social.github,
    },
  ] as const;

  return (
    <section id="contact" className="contact-section">
      <div className="contact-glow" aria-hidden="true" />

      <div className="contact-inner site-shell">
        {/* =================================================
            TOP LINE
        ================================================= */}

        <div className="contact-topline">
          <p>{t.eyebrow}</p>
        </div>

        {/* =================================================
            MAIN GRID
        ================================================= */}

        <div className="contact-grid">
          <div className="contact-main">
            <h2
            className="contact-title">
              {t.title.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </h2>

            <div className="contact-accent" aria-hidden="true">
              <span />
              <span />
            </div>

          </div>

          <aside className="contact-meta">
            <div className="contact-email">
              <span className="contact-label">{t.emailLabel}</span>

              <a className="email-link" href={`mailto:${siteConfig.email}`}>
                <span className="email-link-text">{siteConfig.email}</span>

                <span className="email-link-icon" aria-hidden="true">
                  ↗
                </span>
              </a>
            </div>

            <div className="social-links">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer">
                  {link.label}

                  <span aria-hidden="true">↗</span>
                </a>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
