const strengths = [
  {
    number: "01",
    title: "Product thinking",
    description:
      "I translate business requirements and user needs into clear structures, flows, and practical interface solutions.",
  },
  {
    number: "02",
    title: "Technical collaboration",
    description:
      "My front-end background helps me understand responsive behavior, reusable components, and implementation constraints.",
  },
  {
    number: "03",
    title: "Visual design foundation",
    description:
      "My experience in visual design helps me create interfaces with clear hierarchy, consistency, and attention to detail.",
  },
] as const;

export default function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="container-px section-y scroll-mt-20">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-stretch lg:gap-16">
        {/* Main content */}
        <div className="flex h-full max-w-2xl flex-col">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand md:text-base">
            About Me
          </p>

          <h2
            id="about-title"
            className="mt-3 text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Designing practical products with users and implementation in mind.
          </h2>

          <div className="mt-6 space-y-5 text-base leading-7 text-muted md:text-lg md:leading-8">
            <p>
              I&apos;m a UX/UI and Product Designer with a background in
              front-end development and visual design.
            </p>

            <p>
              I focus on designing clear and scalable digital products,
              especially enterprise platforms, data-heavy systems, and workflows
              involving multiple user roles.
            </p>

            <p>
              My technical background helps me understand responsive behavior,
              component structures, design systems, and development constraints.
              This allows me to communicate effectively with developers and
              create designs that can be implemented realistically.
            </p>
          </div>
        </div>

        {/* Strengths */}
        <div className="flex h-full flex-col">
          <div className="grid flex-1 gap-4 lg:grid-rows-3">
            {strengths.map((strength) => (
              <article
                key={strength.number}
                className="group flex h-full items-center rounded-2xl border border-border bg-surface p-5 transition duration-200 hover:border-brand/30 hover:bg-surface-hover md:p-6">
                <div className="flex items-start gap-4 md:gap-5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border bg-background text-sm font-semibold text-brand">
                    {strength.number}
                  </span>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {strength.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-muted md:text-base md:leading-7">
                      {strength.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Process summary */}
          <div className="mt-4 rounded-2xl border border-brand/20 bg-brand/5 p-5 md:p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand">
              From idea to implementation
            </p>

            <p className="mt-3 leading-7 text-muted">
              My workflow covers requirement analysis, information architecture,
              user flows, wireframes, interactive prototypes, UI design, design
              systems, and developer handoff.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
