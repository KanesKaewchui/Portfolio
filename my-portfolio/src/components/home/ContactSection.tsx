"use client";

import { messages } from "@/i18n";
import { usePortfolio } from "@/providers/PortfolioProvider";

/* =========================================================
   CONTACT DATA
========================================================= */

const EMAIL = "kaneskaewchui1@gmail.com";

const SOCIAL_LINKS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/kanes-kaewchui-131851235/",
  },
  {
    label: "Cv",
    href: "/documents/CV - Kanes Kaewchui.pdf",
  },
  {
    label: "GitHub",
    href: "https://github.com/KanesKaewchui",
  },
] as const;

const FOCUS_AREAS = [
  "UX/UI Design",
  "Product Thinking",
  "Design Systems",
  "Front-end Collaboration",
] as const;

/* =========================================================
   CONTACT SECTION
========================================================= */

export default function ContactSection() {
  const { language } = usePortfolio();

  const t = messages[language].contact;

  return (
    <section id="contact" className="contact-section">
      {/* =====================================================
          DECORATIVE BACKGROUND
      ===================================================== */}

      <div className="contact-glow" aria-hidden="true" />

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="contact-inner site-shell">
        {/* -------------------------------------------------
            TOP LINE
        ------------------------------------------------- */}

        <div className="contact-topline">
          <p>{t.eyebrow}</p>

          <p>{t.availability}</p>
        </div>

        {/* =================================================
            MAIN GRID
        ================================================= */}

        <div className="contact-grid">
          {/* ===============================================
              MAIN CONTENT
          =============================================== */}

          <div className="contact-main">
            {/* ---------------------------------------------
                TITLE
            --------------------------------------------- */}

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

            {/* ---------------------------------------------
                ACCENT
            --------------------------------------------- */}

            <div className="contact-accent" aria-hidden="true">
              <span />
              <span />
            </div>

            {/* ---------------------------------------------
                DESCRIPTION
            --------------------------------------------- */}

            <p className="contact-copy">{t.description}</p>

            {/* ===============================================
                EMAIL
            =============================================== */}

            <div className="contact-email">
              <span className="contact-label">{t.emailLabel}</span>

              <a className="email-link" href={`mailto:${EMAIL}`}>
                <span className="email-link-text">{EMAIL}</span>

                <span className="email-link-icon" aria-hidden="true">
                  ↗
                </span>
              </a>
            </div>

            {/* ===============================================
                SOCIAL LINKS
            =============================================== */}

            <div className="social-links">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer">
                  <span>{link.label}</span>

                  <span aria-hidden="true">↗</span>
                </a>
              ))}
            </div>
          </div>

          {/* ===============================================
              CONTACT META
          =============================================== */}

          <aside className="contact-meta">
            {/* ---------------------------------------------
                LOCATION
            --------------------------------------------- */}

            <ContactMetaGroup label={t.basedInLabel}>
              <p>Bangkok, Thailand</p>
            </ContactMetaGroup>

            {/* ---------------------------------------------
                FOCUS
            --------------------------------------------- */}

            <ContactMetaGroup label={t.focusLabel}>
              <div className="contact-focus">
                {FOCUS_AREAS.map((area) => (
                  <p key={area}>{area}</p>
                ))}
              </div>
            </ContactMetaGroup>

            {/* ---------------------------------------------
                AVAILABILITY
            --------------------------------------------- */}

            <ContactMetaGroup label={t.statusLabel}>
              <div className="status-pill">{t.status}</div>
            </ContactMetaGroup>
          </aside>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   CONTACT META GROUP
========================================================= */

type ContactMetaGroupProps = {
  label: string;
  children: React.ReactNode;
};

function ContactMetaGroup({ label, children }: ContactMetaGroupProps) {
  return (
    <div className="contact-meta-group">
      <span className="contact-meta-label">{label}</span>

      {children}
    </div>
  );
}
