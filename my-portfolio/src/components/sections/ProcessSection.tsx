const processSteps = [
  {
    number: "01",
    title: "Understand",
    description:
      "Understand the business goals, user needs, project requirements, and technical constraints.",
    outputs: ["Requirements", "Goals", "Constraints"],
  },
  {
    number: "02",
    title: "Structure",
    description:
      "Organize information and define how users move through the product or system.",
    outputs: ["Information Architecture", "User Flow", "Task Flow"],
  },
  {
    number: "03",
    title: "Explore",
    description:
      "Explore layout and interaction approaches before investing in detailed visual design.",
    outputs: ["Sketches", "Wireframes", "Design Direction"],
  },
  {
    number: "04",
    title: "Design",
    description:
      "Create clear, consistent, and responsive interfaces supported by reusable design patterns.",
    outputs: ["UI Design", "Prototype", "Design System"],
  },
  {
    number: "05",
    title: "Collaborate",
    description:
      "Work with developers, review implementation details, and refine the product through feedback.",
    outputs: ["Developer Handoff", "Design Review", "Iteration"],
  },
] as const;

export default function ProcessSection() {
  return (
    <section
      id="process"
      aria-labelledby="process-title"
      className="section-y scroll-mt-20 border-y border-border bg-surface">
      <div className="container-px">
        {/* Section heading */}
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand md:text-base">
            How I Work
          </p>

          <h2
            id="process-title"
            className="mt-3 text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl">
            A practical process from requirements to implementation.
          </h2>
        </div>

        {/* Process steps */}
        <ol className="relative mt-12 grid items-stretch gap-4 md:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {processSteps.map((step, index) => (
            <li
              key={step.number}
              className="group relative flex h-full min-h-[300px] flex-col rounded-2xl border border-border bg-background/60 p-5 transition duration-200 hover:border-brand/30 hover:bg-background md:p-6">
              {/* Connecting line */}
              {index < processSteps.length - 1 && (
                <div
                  aria-hidden="true"
                  className="absolute left-full top-10 z-0 hidden h-px w-4 bg-border xl:block"
                />
              )}

              {/* Number */}
              <div className="flex items-center justify-between gap-4">
                <span className="text-sm font-semibold text-brand">
                  {step.number}
                </span>

                <span
                  aria-hidden="true"
                  className="h-2 w-2 rounded-full border border-brand bg-brand/20 transition group-hover:bg-brand"
                />
              </div>

              {/* Main content */}
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-foreground">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-muted">
                  {step.description}
                </p>
              </div>

              {/* Outputs */}
              <ul
                aria-label={`${step.title} outputs`}
                className="mt-auto space-y-2 border-t border-border pt-4">
                {step.outputs.map((output) => (
                  <li
                    key={output}
                    className="flex items-start gap-2 text-xs leading-5 text-muted">
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand"
                    />

                    <span>{output}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>

        {/* Supporting statement */}
        <div className="mt-8 grid gap-5 rounded-2xl border border-brand/20 bg-brand/5 p-5 md:grid-cols-[1fr_auto] md:items-center md:p-6">
          <div className="max-w-3xl">
            <p className="font-semibold text-foreground">
              Designing with implementation in mind
            </p>

            <p className="mt-2 text-sm leading-6 text-muted">
              My front-end background helps me consider responsive behavior,
              component reuse, edge cases, and technical feasibility throughout
              the design process.
            </p>
          </div>

          <a
            href="#work"
            className="group inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-foreground transition hover:text-brand">
            Explore my work
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-4 w-4 transition-transform group-hover:translate-x-1">
              <path
                d="M5 12h14m-5-5 5 5-5 5"
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
