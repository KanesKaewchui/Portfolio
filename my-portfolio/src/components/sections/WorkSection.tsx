import WorkCard from "@/components/work/WorkCard";
import OtherWorkCard from "@/components/work/OtherWorkCard";
import { workProjects } from "@/data/work";

export default function WorkSection() {
  const featuredProjects = workProjects.filter((project) => project.featured);

  const otherProjects = workProjects
    .filter((project) => !project.featured)
    .slice(0, 6);

  return (
    <section
      id="work"
      aria-labelledby="work-title"
      className="container-px section-y scroll-mt-20">
      <div className="mb-10 max-w-3xl md:mb-14">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand md:text-base">
          Selected Work
        </p>

        <h2
          id="work-title"
          className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
          Case studies that connect user needs with real-world implementation.
        </h2>

        <p className="mt-5 max-w-2xl text-base leading-7 text-muted md:text-lg md:leading-8">
          A selection of product and web design projects focused on complex
          workflows, usability, scalable systems, and collaboration with
          development teams.
        </p>
      </div>

      {/* Featured case studies */}
      <div className="space-y-8 md:space-y-12">
        {featuredProjects.map((project, index) => (
          <WorkCard key={project.slug} project={project} index={index} />
        ))}
      </div>

      {/* Other selected projects */}
      {otherProjects.length > 0 && (
        <div className="mt-20 md:mt-24">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
                More Projects
              </p>

              <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                Other selected work
              </h2>

              <p className="mt-3 max-w-2xl leading-7 text-muted">
                Additional website, CRM, UX/UI, and front-end projects.
              </p>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {otherProjects.map((project) => (
              <OtherWorkCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
