import type { Metadata } from "next";

import { notFound } from "next/navigation";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

import CaseStudyPageClient from "@/components/work/CaseStudyPageClient";

import { getWorkProject, workProjects } from "@/data/work";

import type { WorkProject } from "@/types/work";

/* =========================================================
   TYPES
========================================================= */

type WorkPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

/* =========================================================
   ROUTE CONFIG
========================================================= */

export const dynamicParams = false;

/* =========================================================
   HELPERS
========================================================= */

function hasCaseStudy(project: WorkProject) {
  return Boolean(project.content.en.overview);
}

/* =========================================================
   STATIC PARAMS
========================================================= */

export function generateStaticParams() {
  return workProjects.filter(hasCaseStudy).map((project) => ({
    slug: project.slug,
  }));
}

/* =========================================================
   METADATA
========================================================= */

export async function generateMetadata({
  params,
}: WorkPageProps): Promise<Metadata> {
  const { slug } = await params;

  const project = getWorkProject(slug);

  if (!project) {
    return {
      title: "Case Study Not Found | Kanes Kaewchui",
    };
  }

  const content = project.content.en;

  return {
    title: `${content.title} | Kanes Kaewchui`,

    description: content.summary,
  };
}

/* =========================================================
   WORK PAGE
========================================================= */

export default async function WorkPage({ params }: WorkPageProps) {
  const { slug } = await params;

  const project = getWorkProject(slug);

  /* =======================================================
     NOT FOUND
  ======================================================= */

  if (!project || !hasCaseStudy(project)) {
    notFound();
  }

  /* =======================================================
     RENDER
  ======================================================= */

  return (
    <>
      <Header />

      <main>
        <CaseStudyPageClient slug={slug} />
      </main>

      <Footer />
    </>
  );
}
