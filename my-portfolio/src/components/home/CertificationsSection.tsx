"use client";

import Reveal from "@/components/ui/Reveal";

import { certifications } from "@/data/home";
import { messages } from "@/i18n";

import { usePortfolio } from "@/providers/PortfolioProvider";

/* =========================================================
   CERTIFICATIONS SECTION
========================================================= */

export default function CertificationsSection() {
  const { language } = usePortfolio();

  const t = messages[language].certifications;

  return (
    <section id="certifications" className="section site-shell">
      {/* =====================================================
          SECTION HEADING
      ===================================================== */}

      <div className="section-heading">
        <div>
          <p className="eyebrow">{t.eyebrow}</p>

          <h2>{t.title}</h2>
        </div>

        <p>{t.description}</p>
      </div>

      {/* =====================================================
          CERTIFICATION LIST
      ===================================================== */}

      <div className="certification-list">
        {certifications.map((certification, index) => (
          <Reveal
            key={`${certification.provider}-${certification.program}`}
            delay={index * 50}>
            <article className="certification-row">
              <span className="certification-year">{certification.year}</span>

              <h3 className="certification-provider">
                {certification.provider}
              </h3>

              <p className="certification-program">{certification.program}</p>

              <a
                className="certification-link"
                href={certification.credentialUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`${t.viewCredential}: ${certification.program}`}>
                <span className="certification-link-label">
                  {t.viewCredential}
                </span>

                <span className="certification-link-icon" aria-hidden="true">
                  ↗
                </span>
              </a>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
