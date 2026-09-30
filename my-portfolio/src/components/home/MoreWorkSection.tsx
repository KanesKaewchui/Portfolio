"use client";

import Image from "next/image";

import Reveal from "@/components/ui/Reveal";

import { moreWork } from "@/data/home";
import { messages } from "@/i18n";

/* =========================================================
   MORE WORK SECTION
========================================================= */

export default function MoreWorkSection() {
  const t = messages.en.moreWork;

  return (
    <section id="more-work" className="section site-shell">
      {/* =====================================================
          SECTION HEADING
      ===================================================== */}

      <div className="section-heading">
        <div>
          <p className="eyebrow">{t.eyebrow}</p>

          <h2>{t.title}</h2>
        </div>

      </div>

      {/* =====================================================
          PROJECT GRID
      ===================================================== */}

      <div className="more-work-grid">
        {moreWork.map((project, index) => (
          <div
            key={project.title}
            className={`more-work-cell more-work-cell--${index + 1}`}>
            <Reveal delay={(index % 4) * 50}>
              <MoreWorkItem project={project} />
            </Reveal>
          </div>
        ))}
      </div>
    </section>
  );
}

/* =========================================================
   TYPES
========================================================= */

type MoreWorkProject = (typeof moreWork)[number];

type MoreWorkItemProps = {
  project: MoreWorkProject;
};

/* =========================================================
   MORE WORK ITEM
========================================================= */

function MoreWorkItem({ project }: MoreWorkItemProps) {
  const className = [
    "more-work-item",
    `tone-${project.tone}`,
    project.href ? "more-work-item--linked" : "more-work-item--static",
  ].join(" ");

  const content = (
    <>
      <div className="more-work-visual">
        <Image
          src={project.image}
          alt={`${project.title} project`}
          width={1600}
          height={1000}
          sizes="
            (max-width: 767px) 100vw,
            (max-width: 1024px) 50vw,
            33vw
          "
          className="more-work-image"
        />

        <span className="more-work-number">{project.number}</span>

        {project.href && (
          <span className="more-work-arrow" aria-hidden="true">
            ↗
          </span>
        )}

        <span className="more-work-overlay" aria-hidden="true" />
      </div>

      <div className="more-work-info">
        <h3>{project.title}</h3>

        <p>{project.type.en}</p>
      </div>
    </>
  );

  if (project.href) {
    return (
      <a
        href={project.href}
        target="_blank"
        rel="noreferrer"
        className={className}
        aria-label={`View ${project.title}`}>
        {content}
      </a>
    );
  }

  return <article className={className}>{content}</article>;
}
