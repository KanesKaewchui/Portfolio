"use client";

import Reveal from "@/components/ui/Reveal";

import { certifications } from "@/data/home";

/* =========================================================
   CERTIFICATIONS SECTION
========================================================= */

export default function CertificationsSection() {
  return (
    <section id="certifications" className="section site-shell">
      {/* =====================================================
          SECTION HEADING
      ===================================================== */}

      <div className="section-heading">
        <div>
          <p className="eyebrow">05 — CERTIFICATIONS</p>

          <h2>Certifications</h2>
        </div>

        <p>
          Selected courses and programs that have shaped how I approach design
          and technology.
        </p>
      </div>

      {/* =====================================================
          CERTIFICATION LIST
      ===================================================== */}

      <div className="certification-list">
        {certifications.map((certification, index) => (
          <CertificationItem
            key={`${certification.provider}-${certification.program}`}
            certification={certification}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}

/* =========================================================
   TYPES
========================================================= */

type Certification = (typeof certifications)[number];

type CertificationItemProps = {
  certification: Certification;
  index: number;
};

/* =========================================================
   CERTIFICATION ITEM
========================================================= */

function CertificationItem({ certification, index }: CertificationItemProps) {
  const { year, provider, program, credentialUrl } = certification;

  return (
    <Reveal delay={index * 50}>
      <article className="certification-row">
        {/* -------------------------------------------------
            YEAR
        ------------------------------------------------- */}

        <span className="certification-year">{year}</span>

        {/* -------------------------------------------------
            PROVIDER
        ------------------------------------------------- */}

        <h3 className="certification-provider">{provider}</h3>

        {/* -------------------------------------------------
            PROGRAM
        ------------------------------------------------- */}

        <p className="certification-program">{program}</p>

        {/* -------------------------------------------------
            CREDENTIAL
        ------------------------------------------------- */}

        <a
          className="certification-link"
          href={credentialUrl}
          target="_blank"
          rel="noreferrer"
          aria-label={`View ${program} credential`}>
          <span className="certification-link-label">View credential</span>

          <span className="certification-link-icon" aria-hidden="true">
            ↗
          </span>
        </a>
      </article>
    </Reveal>
  );
}
