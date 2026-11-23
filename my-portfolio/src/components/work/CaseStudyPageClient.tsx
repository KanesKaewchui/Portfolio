"use client";

import { useEffect, useState } from "react";

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
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(
        scrollable > 0
          ? Math.min(100, Math.round((window.scrollY / scrollable) * 100))
          : 100,
      );
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

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
      <div
        className="case-progress"
        role="progressbar"
        aria-label="Case study reading progress"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={progress}
        style={{ transform: `scaleX(${progress / 100})` }}
      />
      <CaseStudyHero project={project} />

      <CaseStudyContent project={project} />
    </>
  );
}
