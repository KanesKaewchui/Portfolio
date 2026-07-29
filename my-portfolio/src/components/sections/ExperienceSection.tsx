import { experiences } from "@/data/experience";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="container-px section-y scroll-mt-20">
      {/* Section heading */}
      <div className="max-w-5xl">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand md:text-base">
          Experience
        </p>

        <h2
          id="experience-title"
          className="mt-3 max-w-4xl text-balance text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl">
          Experience across product design and front-end development.
        </h2>
      </div>

      {/* Experience timeline */}
      <ol className="relative mt-12 md:mt-16">
        {experiences.map((experience, index) => {
          const isLastItem = index === experiences.length - 1;

          return (
            <li
              key={experience.id}
              className={`relative grid gap-6 pb-10 md:grid-cols-[180px_1fr] md:gap-10 md:pb-12 ${
                isLastItem ? "pb-0 md:pb-0" : ""
              }`}>
              {/* Timeline line */}
              {!isLastItem && (
                <div
                  aria-hidden="true"
                  className="absolute bottom-0 left-[7px] top-5 w-px bg-border md:left-[197px]"
                />
              )}

              {/* Period */}
              <div className="pl-8 md:pl-0 md:pt-1">
                <p className="text-sm font-semibold text-foreground">
                  {experience.period}
                </p>

                <p className="mt-1 text-sm text-muted">
                  {experience.employmentType}
                </p>
              </div>

              {/* Timeline marker */}
              <div
                aria-hidden="true"
                className={`absolute left-0 top-1.5 h-[15px] w-[15px] rounded-full border-4 border-background md:left-[190px] ${
                  experience.current
                    ? "bg-brand shadow-[0_0_0_4px_rgba(59,130,246,0.15)]"
                    : "bg-muted"
                }`}
              />

              {/* Experience content */}
              <article className="card ml-8 p-5 md:ml-0 md:p-6 lg:p-8">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-xl font-bold text-foreground md:text-2xl">
                        {experience.role}
                      </h3>

                      {experience.current && (
                        <span className="rounded-full border border-brand/30 bg-brand/10 px-2.5 py-1 text-xs font-semibold text-brand">
                          Current
                        </span>
                      )}
                    </div>

                    <p className="mt-2 font-semibold text-brand">
                      {experience.company}
                    </p>
                  </div>

                  <time
                    dateTime={experience.startDate}
                    className="shrink-0 text-sm text-muted md:hidden">
                    {experience.period}
                  </time>
                </div>

                <p className="mt-5 max-w-3xl leading-7 text-muted">
                  {experience.summary}
                </p>

                {/* Responsibilities */}
                <ul
                  aria-label={`Responsibilities at ${experience.company}`}
                  className="mt-6 grid gap-3">
                  {experience.responsibilities.map((responsibility) => (
                    <li
                      key={responsibility}
                      className="flex items-start gap-3 text-sm leading-6 text-muted md:text-base md:leading-7">
                      <span
                        aria-hidden="true"
                        className="mt-[0.65rem] h-1.5 w-1.5 shrink-0 rounded-full bg-brand"
                      />

                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>

                {/* Related skills */}
                <ul
                  aria-label={`Skills used at ${experience.company}`}
                  className="mt-6 flex flex-wrap gap-2 border-t border-border pt-5">
                  {experience.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-full border border-border bg-background/50 px-3 py-1.5 text-xs text-muted">
                      {skill}
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          );
        })}
      </ol>

      {/* Background note */}
      <div className="mt-12 rounded-2xl border border-border bg-surface p-5 md:flex md:items-center md:justify-between md:gap-8 md:p-6">
        <div className="max-w-3xl">
          <p className="font-semibold text-foreground">
            Earlier visual design experience
          </p>

          <p className="mt-2 text-sm leading-6 text-muted">
            Before moving into digital product design and development, I worked
            in graphic and visual design. That experience continues to support
            my understanding of hierarchy, composition, branding, and visual
            communication.
          </p>
        </div>

        <a
          href="/documents/CV - Kanes Kaewchui.pdf"
          download
          className="btn-secondary mt-5 shrink-0 md:mt-0">
          View Full Resume
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
    </section>
  );
}
