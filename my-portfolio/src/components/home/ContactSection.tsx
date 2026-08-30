"use client";

import { siteConfig } from "@/config/site";
import { messages } from "@/i18n";

import { usePortfolio } from "@/providers/PortfolioProvider";

/* =========================================================
   CONTACT SECTION
========================================================= */

export default function ContactSection() {
  const { language } = usePortfolio();

  const t = messages[language].contact;

  const socialLinks = [
    {
      label: "LinkedIn",
      href: siteConfig.social.linkedin,
    },
    {
      label: "Cv",
      href: siteConfig.resumePath,
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

          <p>{t.availability}</p>
        </div>

        {/* =================================================
            MAIN GRID
        ================================================= */}

        <div className="contact-grid">
          <div className="contact-main">
            <h2
              className={[
                "contact-title",
                language === "th" ? "contact-title--th" : "",
              ]
                .filter(Boolean)
                .join(" ")}>
              {t.title.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </h2>

            <div className="contact-accent" aria-hidden="true">
              <span />
              <span />
            </div>

            <p className="contact-copy">{t.description}</p>

            {/* =============================================
                EMAIL
            ============================================= */}

            <div className="contact-email">
              <span className="contact-label">{t.emailLabel}</span>

              <a className="email-link" href={`mailto:${siteConfig.email}`}>
                <span className="email-link-text">{siteConfig.email}</span>

                <span className="email-link-icon" aria-hidden="true">
                  ↗
                </span>
              </a>
            </div>

            {/* =============================================
                SOCIAL
            ============================================= */}

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
          </div>

          {/* ===============================================
              META
          =============================================== */}

          <aside className="contact-meta">
            <div className="contact-meta-group">
              <span className="contact-meta-label">{t.basedInLabel}</span>

              <p>{t.location}</p>
            </div>

            <div className="contact-meta-group">
              <span className="contact-meta-label">{t.focusLabel}</span>

              <div className="contact-focus">
                {t.focusAreas.map((area) => (
                  <p key={area}>{area}</p>
                ))}
              </div>
            </div>

            <div className="contact-meta-group">
              <span className="contact-meta-label">{t.statusLabel}</span>

              <div className="status-pill">{t.status}</div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
