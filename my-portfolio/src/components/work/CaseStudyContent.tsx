"use client";

import DesignProcessShowcase from "@/components/work/DesignProcessShowcase";

import { messages } from "@/i18n";
import { usePortfolio } from "@/providers/PortfolioProvider";

import type { LocalizedWorkProject } from "@/types/work";

/* =========================================================
   TYPES
========================================================= */

type CaseStudyContentProps = {
  project: LocalizedWorkProject;
};

type CaseStudyMessages = (typeof messages)[keyof typeof messages]["caseStudy"];

/* =========================================================
   CASE STUDY CONTENT
========================================================= */

export default function CaseStudyContent({ project }: CaseStudyContentProps) {
  const { language } = usePortfolio();

  const t = messages[language].caseStudy;

  return (
    <div className="case-content site-shell">
      {/* =====================================================
          PROBLEM / GOAL
      ===================================================== */}

      <OverviewSection project={project} t={t} />

      {/* =====================================================
          RESEARCH
      ===================================================== */}

      <ResearchSection project={project} t={t} />

      {/* =====================================================
          DECISIONS
      ===================================================== */}

      <DecisionsSection project={project} t={t} />

      {/* =====================================================
          SOLUTION
      ===================================================== */}

      <SolutionSection project={project} t={t} />

      {/* =====================================================
          REFLECTION
      ===================================================== */}

      <ReflectionSection project={project} t={t} />
    </div>
  );
}

/* =========================================================
   OVERVIEW SECTION
========================================================= */

type SectionProps = {
  project: LocalizedWorkProject;
  t: CaseStudyMessages;
};

function OverviewSection({ project, t }: SectionProps) {
  const { problem, goal } = project;

  if (!problem && !goal) {
    return null;
  }

  return (
    <section className="case-section">
      <p className="eyebrow">{t.overviewEyebrow}</p>

      <div className="case-two-col">
        {/* -------------------------------------------------
            PROBLEM
        ------------------------------------------------- */}

        {problem && (
          <div>
            <h2>{t.problem}</h2>

            <p>{problem}</p>
          </div>
        )}

        {/* -------------------------------------------------
            GOAL
        ------------------------------------------------- */}

        {goal && (
          <div className="case-callout">
            <span>{t.projectGoal}</span>

            <p>{goal}</p>
          </div>
        )}
      </div>
    </section>
  );
}

/* =========================================================
   RESEARCH SECTION
========================================================= */

function ResearchSection({ project, t }: SectionProps) {
  const { research } = project;

  if (!research?.length) {
    return null;
  }

  return (
    <section className="case-section">
      {/* -------------------------------------------------
          HEADING
      ------------------------------------------------- */}

      <p className="eyebrow">{t.researchEyebrow}</p>

      <h2>{t.researchInputs}</h2>

      {/* -------------------------------------------------
          RESEARCH INPUTS
      ------------------------------------------------- */}

      <div className="case-research-grid">
        {research.map((item, index) => {
          const number = String(index + 1).padStart(2, "0");

          return (
            <article key={item}>
              <span>{number}</span>

              <h3>{item}</h3>
            </article>
          );
        })}
      </div>

      {/* -------------------------------------------------
          RESEARCH INTEGRITY
      ------------------------------------------------- */}

      <div className="research-integrity">
        <b>{t.researchIntegrity}</b>

        <p>{t.researchIntegrityDescription}</p>
      </div>
    </section>
  );
}

/* =========================================================
   DECISIONS SECTION
========================================================= */

function DecisionsSection({ project, t }: SectionProps) {
  const { decisions } = project;

  if (!decisions?.length) {
    return null;
  }

  return (
    <section className="case-section">
      {/* -------------------------------------------------
          HEADING
      ------------------------------------------------- */}

      <p className="eyebrow">{t.decisionsEyebrow}</p>

      <h2>{t.keyDecisions}</h2>

      {/* -------------------------------------------------
          DECISION LIST
      ------------------------------------------------- */}

      <div className="decision-list">
        {decisions.map((decision, index) => {
          const number = String(index + 1).padStart(2, "0");

          return (
            <article key={decision.title}>
              <span>{number}</span>

              <div>
                <h3>{decision.title}</h3>

                <p>{decision.body}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

/* =========================================================
   SOLUTION SECTION
========================================================= */

function SolutionSection({ project, t }: SectionProps) {
  const { process } = project;

  if (!process?.length) {
    return null;
  }

  return (
    <section className="case-section">
      {/* -------------------------------------------------
          HEADING
      ------------------------------------------------- */}

      <p className="eyebrow">{t.solutionEyebrow}</p>

      <h2>{t.solutionTitle}</h2>

      {/* -------------------------------------------------
          DESIGN PROCESS
      ------------------------------------------------- */}

      <DesignProcessShowcase steps={process} />
    </section>
  );
}

/* =========================================================
   REFLECTION SECTION
========================================================= */

function ReflectionSection({ project, t }: SectionProps) {
  const { reflection } = project;

  if (!reflection) {
    return null;
  }

  return (
    <section className="case-section">
      {/* -------------------------------------------------
          HEADING
      ------------------------------------------------- */}

      <p className="eyebrow">{t.reflectionEyebrow}</p>

      <h2>{t.reflection}</h2>

      {/* -------------------------------------------------
          REFLECTION CONTENT
      ------------------------------------------------- */}

      <div className="case-callout">
        <p>{reflection}</p>
      </div>
    </section>
  );
}
