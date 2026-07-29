import Image from "next/image";
import Link from "next/link";

import type { WorkProject } from "@/types/work";

type WorkCardProps = {
  project: WorkProject;
  index: number;
};

export default function WorkCard({ project, index }: WorkCardProps) {
  const isReversed = index % 2 !== 0;
  const projectLinks = project.links ?? [];
  const hasExternalLinks = projectLinks.length > 0;

  return (
    <article className="card group overflow-hidden p-4 md:p-6 lg:p-8">
      <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
        {/* Project cover */}
        <Link
          href={`/work/${project.slug}`}
          aria-label={`View case study: ${project.title}`}
          className={`relative block aspect-[16/10] overflow-hidden rounded-2xl border border-border bg-surface ${
            isReversed ? "lg:order-2" : ""
          }`}>
          <Image
            src={project.cover}
            alt={project.coverAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />

          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"
          />
        </Link>

        {/* Project information */}
        <div className="px-1 pb-2 md:px-2 lg:px-0 lg:py-4">
          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-brand">
            <span>{project.category}</span>

            <span
              aria-hidden="true"
              className="h-1 w-1 rounded-full bg-current opacity-60"
            />

            <span>{project.projectType}</span>
          </div>

          <h3 className="mt-4 max-w-xl text-2xl font-bold leading-tight tracking-tight text-foreground md:text-3xl lg:text-4xl">
            <Link
              href={`/work/${project.slug}`}
              className="transition-colors hover:text-brand">
              {project.title}
            </Link>
          </h3>

          <p className="mt-4 max-w-xl text-base leading-7 text-muted">
            {project.summary}
          </p>

          {/* Services */}
          <ul
            aria-label={`Services provided for ${project.title}`}
            className="mt-5 flex flex-wrap gap-2">
            {project.services.slice(0, 4).map((service) => (
              <li
                key={service}
                className="rounded-full border border-border bg-surface px-3 py-1.5 text-xs text-muted">
                {service}
              </li>
            ))}
          </ul>

          {/* Project metadata */}
          <dl className="mt-6 grid gap-4 border-y border-border py-5 sm:grid-cols-[1fr_auto]">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-muted">
                My role
              </dt>

              <dd className="mt-1 text-sm font-medium text-foreground">
                {project.role}
              </dd>
            </div>

            <div className="sm:text-right">
              <dt className="text-xs font-semibold uppercase tracking-wider text-muted">
                Year
              </dt>

              <dd className="mt-1 text-sm font-medium text-foreground">
                {project.year}
              </dd>
            </div>
          </dl>

          {/* Actions */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link
              href={`/work/${project.slug}`}
              className="group/case inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-brand px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-dark">
              View Case Study
            </Link>

            {hasExternalLinks &&
              projectLinks.map((link) => (
                <a
                  key={`${project.slug}-${link.type}`}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${link.label}: ${project.title}`}
                  className="group/link inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-border bg-background px-4 py-2.5 text-sm font-semibold text-foreground transition hover:border-brand/40 hover:bg-brand/5 hover:text-brand">
                  {link.label}
                </a>
              ))}
          </div>
        </div>
      </div>
    </article>
  );
}
