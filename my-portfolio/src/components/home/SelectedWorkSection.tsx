"use client";

import Image from "next/image";
import Link from "next/link";

import ProjectMockup from "@/components/home/ProjectMockup";
import Reveal from "@/components/ui/Reveal";

import { getLocalizedFeaturedWorks } from "@/data/work";
import { messages } from "@/i18n";
import { usePortfolio } from "@/providers/PortfolioProvider";

/* =========================================================
   SELECTED WORK SECTION
========================================================= */

export default function SelectedWorkSection() {
  const { language } = usePortfolio();

  const t = messages[language].work;
  const featuredWorks = getLocalizedFeaturedWorks(language);

  return (
    <section id="work" className="section site-shell">
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
          FEATURED WORK
      ===================================================== */}

      <div className="featured-work">
        {featuredWorks.map((project, index) => (
          <FeaturedProject
            key={project.slug}
            project={project}
            index={index}
            exploreLabel={t.exploreProject}
          />
        ))}
      </div>
    </section>
  );
}

/* =========================================================
   TYPES
========================================================= */

type FeaturedProjectData = ReturnType<typeof getLocalizedFeaturedWorks>[number];

type FeaturedProjectProps = {
  project: FeaturedProjectData;
  index: number;
  exploreLabel: string;
};

/* =========================================================
   FEATURED PROJECT
========================================================= */

function FeaturedProject({
  project,
  index,
  exploreLabel,
}: FeaturedProjectProps) {
  const { slug, title, subtitle, summary, category, year, tone } = project;

  const projectNumber = String(index + 1).padStart(2, "0");

  const projectHref = `/work/${slug}`;

  return (
    <Reveal delay={index * 60}>
      <article className={`featured-project featured-project--${index + 1}`}>
        {/* =================================================
            PROJECT CONTENT
        ================================================= */}

        <div className="project-copy">
          {/* ---------------------------------------------
              META
          --------------------------------------------- */}

          <p className="project-meta">
            {projectNumber}
            {" — "}
            {category}
            {" / "}
            {year}
          </p>

          {/* ---------------------------------------------
              TITLE
          --------------------------------------------- */}

          <h3>{title}</h3>

          <h4>{subtitle}</h4>

          {/* ---------------------------------------------
              SUMMARY
          --------------------------------------------- */}

          <p>{summary}</p>

          {/* ---------------------------------------------
              PROJECT LINK
          --------------------------------------------- */}

          <Link href={projectHref} className="project-link">
            <span className="project-link-label">{exploreLabel}</span>

            <span className="project-link-icon" aria-hidden="true">
              ↗
            </span>
          </Link>
        </div>

        {/* =================================================
            PROJECT VISUAL
        ================================================= */}

        <Link
          href={projectHref}
          className={`project-visual project-visual--${tone}`}
          aria-label={`${exploreLabel} ${title}`}>
          <ProjectVisual project={project} />
        </Link>
      </article>
    </Reveal>
  );
}

/* =========================================================
   PROJECT VISUAL
========================================================= */

type ProjectVisualProps = {
  project: FeaturedProjectData;
};

function ProjectVisual({ project }: ProjectVisualProps) {
  const { title, cover, visualType } = project;

  /* ---------------------------------------------------------
     PROJECT COVER
  --------------------------------------------------------- */

  if (cover) {
    return (
      <Image
        src={cover}
        alt={title}
        width={1600}
        height={1000}
        sizes="
          (max-width: 767px) 100vw,
          (max-width: 1199px) 90vw,
          60vw
        "
        className="project-cover-image"
      />
    );
  }

  /* ---------------------------------------------------------
     GENERATED MOCKUP
  --------------------------------------------------------- */

  if (visualType) {
    return <ProjectMockup kind={visualType} />;
  }

  /* ---------------------------------------------------------
     FALLBACK
  --------------------------------------------------------- */

  return <span className="project-cover-fallback">{title}</span>;
}
