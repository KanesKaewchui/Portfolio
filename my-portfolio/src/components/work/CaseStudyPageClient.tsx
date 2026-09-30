"use client";

import CaseStudyContent from "@/components/work/CaseStudyContent";
import CaseStudyHero from "@/components/work/CaseStudyHero";

import { getWorkProjectContent } from "@/data/work";

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
  const project = getWorkProjectContent(slug);

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
