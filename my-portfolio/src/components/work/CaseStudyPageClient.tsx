"use client";

import CaseStudyContent from "@/components/work/CaseStudyContent";
import CaseStudyHero from "@/components/work/CaseStudyHero";

import { getLocalizedWorkProject } from "@/data/work";

import { usePortfolio } from "@/providers/PortfolioProvider";

/* =========================================================
   TYPES
========================================================= */

type CaseStudyPageClientProps = {
  slug: string;
};

/* =========================================================
   CASE STUDY PAGE CLIENT
========================================================= */

export default function CaseStudyPageClient({
  slug,
}: CaseStudyPageClientProps) {
  const { language } = usePortfolio();

  const project = getLocalizedWorkProject(slug, language);

  /* =======================================================
     EMPTY STATE
  ======================================================= */

  if (!project) {
    return null;
  }

  /* =======================================================
     RENDER
  ======================================================= */

  return (
    <>
      <CaseStudyHero project={project} />

      <CaseStudyContent project={project} />
    </>
  );
}
