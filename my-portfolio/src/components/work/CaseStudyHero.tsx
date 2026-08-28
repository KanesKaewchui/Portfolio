"use client";

import Image from "next/image";
import Link from "next/link";

import { messages } from "@/i18n";
import { usePortfolio } from "@/providers/PortfolioProvider";

import type { LocalizedWorkProject } from "@/types/work";

/* =========================================================
   TYPES
========================================================= */

type CaseStudyHeroProps = {
  project: LocalizedWorkProject;
};

type CaseStudyMetaProps = {
  project: LocalizedWorkProject;
  labels: {
    role: string;
    platform: string;
    year: string;
  };
};

type CaseStudyCoverProps = {
  project: LocalizedWorkProject;
  placeholder: string;
};

/* =========================================================
   CASE STUDY HERO
========================================================= */

export default function CaseStudyHero({ project }: CaseStudyHeroProps) {
  const { language } = usePortfolio();

  const t = messages[language].caseStudy;

  const description = project.overview ?? project.summary;

  return (
    <section className="case-hero site-shell">
      {/* =====================================================
          BACK LINK
      ===================================================== */}

      <Link href="/#work" className="case-back-link">
        <span aria-hidden="true">←</span>

        <span>{t.backToWork}</span>
      </Link>

      {/* =====================================================
          PROJECT HEADING
      ===================================================== */}

      <div className="case-hero-heading">
        {/* -------------------------------------------------
            CATEGORY
        ------------------------------------------------- */}

        <p className="eyebrow">{project.category}</p>

        {/* -------------------------------------------------
            TITLE
        ------------------------------------------------- */}

        <h1>{project.title}</h1>

        {/* -------------------------------------------------
            SUBTITLE
        ------------------------------------------------- */}

        <h2>{project.subtitle}</h2>

        {/* -------------------------------------------------
            OVERVIEW
        ------------------------------------------------- */}

        <p className="case-hero-description">{description}</p>
      </div>

      {/* =====================================================
          PROJECT METADATA
      ===================================================== */}

      <CaseStudyMeta
        project={project}
        labels={{
          role: t.role,
          platform: t.platform,
          year: t.year,
        }}
      />

      {/* =====================================================
          PROJECT COVER
      ===================================================== */}

      <CaseStudyCover project={project} placeholder={t.coverPlaceholder} />
    </section>
  );
}

/* =========================================================
   CASE STUDY META
========================================================= */

function CaseStudyMeta({ project, labels }: CaseStudyMetaProps) {
  const metaItems = [
    {
      label: labels.role,
      value: project.role,
    },
    {
      label: labels.platform,
      value: project.platform ?? "—",
    },
    {
      label: labels.year,
      value: project.year,
    },
  ] as const;

  return (
    <div className="case-meta">
      {metaItems.map((item) => (
        <div key={item.label} className="case-meta-item">
          <span>{item.label}</span>

          <b>{item.value}</b>
        </div>
      ))}
    </div>
  );
}

/* =========================================================
   CASE STUDY COVER
========================================================= */

function CaseStudyCover({ project, placeholder }: CaseStudyCoverProps) {
  const { title, tone, caseCover } = project;

  return (
    <div className={`case-cover case-cover--${tone}`}>
      {caseCover ? (
        <Image
          src={caseCover}
          alt={`${title} project`}
          width={1800}
          height={1100}
          sizes="
            (max-width: 767px) 100vw,
            (max-width: 1199px) 90vw,
            80vw
          "
          className="case-cover-image"
          priority
        />
      ) : (
        <span className="case-cover-placeholder">{placeholder}</span>
      )}
    </div>
  );
}
