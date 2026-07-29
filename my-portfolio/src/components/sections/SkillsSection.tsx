import { skillGroups } from "@/data/skills";

export default function SkillsSection() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="section-y scroll-mt-20 border-y border-border bg-surface">
      <div className="container-px">
        {/* Section heading */}
        <div className="max-w-5xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand md:text-base">
            Skills &amp; Tools
          </p>

          <h2
            id="skills-title"
            className="mt-3 max-w-[950px] text-balance text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Product design capabilities supported by technical knowledge.
          </h2>
        </div>

        {/* Skill groups */}
        <div className="mt-12 grid gap-5 md:mt-16 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <article
              key={group.id}
              className="group flex h-full flex-col rounded-3xl border border-border bg-background/60 p-5 transition duration-200 hover:-translate-y-1 hover:border-brand/30 hover:bg-background md:p-6 lg:p-7">
              {/* Card heading */}
              <div className="flex items-center justify-between gap-4">
                <span className="text-sm font-semibold text-brand">
                  {group.number}
                </span>

                <span
                  aria-hidden="true"
                  className="h-2 w-2 rounded-full border border-brand bg-brand/20 transition group-hover:bg-brand"
                />
              </div>

              <h3 className="mt-6 text-2xl font-bold tracking-tight text-foreground">
                {group.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-muted">
                {group.description}
              </p>

              {/* Skills */}
              <ul
                aria-label={`${group.title} skills`}
                className="mt-6 flex flex-wrap gap-2 border-t border-border pt-5">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-border bg-surface px-3 py-1.5 text-xs leading-5 text-muted transition hover:border-brand/30 hover:text-foreground">
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* Supporting statement */}
        <div className="mt-8 grid gap-5 rounded-2xl border border-brand/20 bg-brand/5 p-5 md:grid-cols-[1fr_auto] md:items-center md:p-6">
          <div className="max-w-3xl">
            <p className="font-semibold text-foreground">
              Front-end is a supporting strength, not a separate design process.
            </p>

            <p className="mt-2 text-sm leading-6 text-muted">
              I use my technical background to evaluate feasibility, anticipate
              responsive states, prepare reusable design patterns, and
              communicate more clearly during developer handoff.
            </p>
          </div>

          <a
            href="/documents/CV - Kanes Kaewchui.pdf"
            download
            className="btn-secondary shrink-0">
            View Full Skill Set
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-4 w-4">
              <path
                d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
