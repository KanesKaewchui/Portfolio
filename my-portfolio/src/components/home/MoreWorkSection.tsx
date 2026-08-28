import Image from "next/image";

import Reveal from "@/components/ui/Reveal";

import { moreWork } from "@/data/home";

/* =========================================================
   MORE WORK SECTION
========================================================= */

export default function MoreWorkSection() {
  return (
    <section id="more-work" className="section site-shell">
      {/* =====================================================
          SECTION HEADING
      ===================================================== */}

      <div className="section-heading">
        <div>
          <p className="eyebrow">07 — MORE WORK</p>

          <h2>More Work</h2>
        </div>

        <p>Smaller projects, visual experiments, and selected client work.</p>
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
  const { title, type, image, number, tone, href } = project;

  const className = [
    "more-work-item",
    `tone-${tone}`,
    href ? "more-work-item--linked" : "more-work-item--static",
  ].join(" ");

  const content = (
    <>
      <MoreWorkVisual
        title={title}
        image={image}
        number={number}
        hasLink={Boolean(href)}
      />

      <MoreWorkInfo title={title} type={type} />
    </>
  );

  /* ---------------------------------------------------------
     CLICKABLE PROJECT
  --------------------------------------------------------- */

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={className}
        aria-label={`View ${title}`}>
        {content}
      </a>
    );
  }

  /* ---------------------------------------------------------
     STATIC PROJECT
  --------------------------------------------------------- */

  return <article className={className}>{content}</article>;
}

/* =========================================================
   PROJECT VISUAL
========================================================= */

type MoreWorkVisualProps = {
  title: MoreWorkProject["title"];
  image: MoreWorkProject["image"];
  number: MoreWorkProject["number"];
  hasLink: boolean;
};

function MoreWorkVisual({
  title,
  image,
  number,
  hasLink,
}: MoreWorkVisualProps) {
  return (
    <div className="more-work-visual">
      {/* -----------------------------------------------------
          IMAGE
      ----------------------------------------------------- */}

      <Image
        src={image}
        alt={`${title} project`}
        width={1600}
        height={1000}
        sizes="
          (max-width: 767px) 100vw,
          (max-width: 1024px) 50vw,
          33vw
        "
        className="more-work-image"
      />

      {/* -----------------------------------------------------
          PROJECT NUMBER
      ----------------------------------------------------- */}

      <span className="more-work-number">{number}</span>

      {/* -----------------------------------------------------
          LINK INDICATOR
      ----------------------------------------------------- */}

      {hasLink && (
        <span className="more-work-arrow" aria-hidden="true">
          ↗
        </span>
      )}

      {/* -----------------------------------------------------
          HOVER OVERLAY
      ----------------------------------------------------- */}

      <span className="more-work-overlay" aria-hidden="true" />
    </div>
  );
}

/* =========================================================
   PROJECT INFO
========================================================= */

type MoreWorkInfoProps = {
  title: MoreWorkProject["title"];
  type: MoreWorkProject["type"];
};

function MoreWorkInfo({ title, type }: MoreWorkInfoProps) {
  return (
    <div className="more-work-info">
      <h3>{title}</h3>

      <p>{type}</p>
    </div>
  );
}
