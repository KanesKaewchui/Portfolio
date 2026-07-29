import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { getWorkProject, workProjects } from "@/data/work";

type WorkPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return workProjects
    .filter((project) => project.caseStudy)
    .map((project) => ({
      slug: project.slug,
    }));
}

export async function generateMetadata({
  params,
}: WorkPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getWorkProject(slug);

  if (!project) {
    return {
      title: "Case Study Not Found",
    };
  }

  return {
    title: `${project.title} | Kanes Kaewchui`,
    description: project.summary,
  };
}

export default async function WorkPage({ params }: WorkPageProps) {
  const { slug } = await params;
  const project = getWorkProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <main>
      {/* Case study hero */}
      <section className="container-px pb-16 pt-12 md:pb-20 md:pt-16 lg:pb-24">
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 text-sm font-semibold text-muted transition-colors hover:text-foreground">
          <span aria-hidden="true">←</span>
          Back to Selected Work
        </Link>

        <header className="mt-10 max-w-4xl">
          <div className="flex flex-wrap items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-brand">
            <span>{project.category}</span>
            <span aria-hidden="true">·</span>
            <span>{project.projectType}</span>
          </div>

          <h1 className="mt-5 text-4xl font-extrabold leading-[1.1] tracking-tight text-foreground md:text-5xl lg:text-6xl">
            {project.title}
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">
            {project.summary}
          </p>

          <dl className="mt-8 grid gap-6 border-y border-border py-6 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <dt className="text-sm text-muted">Role</dt>
              <dd className="mt-1 font-semibold text-foreground">
                {project.role}
              </dd>
            </div>

            <div>
              <dt className="text-sm text-muted">Project type</dt>
              <dd className="mt-1 font-semibold text-foreground">
                {project.projectType}
              </dd>
            </div>

            <div>
              <dt className="text-sm text-muted">Year</dt>
              <dd className="mt-1 font-semibold text-foreground">
                {project.year}
              </dd>
            </div>
          </dl>
        </header>

        <div className="relative mt-12 aspect-[16/9] overflow-hidden rounded-3xl border border-border bg-surface">
          <Image
            src={project.cover}
            alt={project.coverAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </section>

      {/* Project overview */}
      <section className="container-px pb-20 md:pb-28">
        <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand">
              Project Overview
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground">
              Understanding the product
            </h2>
          </div>

          <div className="max-w-3xl">
            <p className="text-lg leading-8 text-muted">{project.overview}</p>

            <h3 className="mt-10 text-xl font-semibold text-foreground">
              The challenge
            </h3>

            <p className="mt-4 leading-7 text-muted">{project.challenge}</p>
          </div>
        </div>
      </section>

      {/* Responsibilities */}
      <section className="border-y border-border bg-surface">
        <div className="container-px py-16 md:py-20">
          <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand">
                My Contribution
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground">
                Role and responsibilities
              </h2>
            </div>

            <ul className="grid gap-4 sm:grid-cols-2">
              {project.responsibilities.map((responsibility) => (
                <li
                  key={responsibility}
                  className="rounded-2xl border border-border bg-background/40 p-5 text-sm leading-6 text-muted">
                  {responsibility}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
