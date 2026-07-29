import Image from "next/image";
import Link from "next/link";

import type { WorkProject } from "@/types/work";

type OtherWorkCardProps = {
  project: WorkProject;
};

export default function OtherWorkCard({ project }: OtherWorkCardProps) {
  const detailsHref = project.caseStudy
    ? `/work/${project.slug}`
    : project.links?.[0]?.href;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-background transition duration-200 hover:-translate-y-1 hover:border-brand/30 hover:shadow-lg">
      {detailsHref ? (
        <Link
          href={detailsHref}
          target={project.caseStudy ? undefined : "_blank"}
          rel={project.caseStudy ? undefined : "noopener noreferrer"}
          aria-label={`View ${project.title}`}
          className="relative block aspect-[16/10] overflow-hidden bg-surface">
          <Image
            src={project.cover}
            alt={project.coverAlt}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </Link>
      ) : (
        <div className="relative aspect-[16/10] overflow-hidden bg-surface">
          <Image
            src={project.cover}
            alt={project.coverAlt}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover"
          />
        </div>
      )}

      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-brand">
          <span>{project.category}</span>
          <span aria-hidden="true">·</span>
          <span>{project.year}</span>
        </div>

        <h3 className="mt-3 text-xl font-bold leading-tight text-foreground">
          {project.title}
        </h3>

        <p className="mt-3 line-clamp-3 text-sm leading-6 text-muted">
          {project.summary}
        </p>

        <ul
          aria-label={`Skills used in ${project.title}`}
          className="mt-4 flex flex-wrap gap-2">
          {project.services.slice(0, 3).map((service) => (
            <li
              key={service}
              className="rounded-full border border-border bg-surface px-2.5 py-1 text-xs text-muted">
              {service}
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-5">
          <p className="text-xs text-muted">{project.role}</p>

          {project.caseStudy ? (
            <Link
              href={`/work/${project.slug}`}
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-foreground transition hover:text-brand">
              View Case Study
              <span aria-hidden="true">→</span>
            </Link>
          ) : (
            <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
              {project.links?.map((link) => (
                <a
                  key={`${project.slug}-${link.href}`}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-foreground transition hover:text-brand">
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
