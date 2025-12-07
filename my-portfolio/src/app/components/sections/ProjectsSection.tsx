import ProjectCard from "../ProjectCard";

type Project = {
  title: string;
  description: string;
  image: string;
  tags?: ReadonlyArray<string>;
  href?: string;
  prototype?: string;
};

type Props = { projects: ReadonlyArray<Project> };

export default function ProjectsSection({ projects }: Props) {
  return (
    <section
      id="projects"
      className="py-10 md:py-14 lg:py-16 container-px mx-auto scroll-mt-16">
      <div className="flex items-end justify-between gap-3 mt-2">
        <h2 className="text-2xl font-bold">Projects</h2>
      </div>

      <div className="mt-5 grid gap-4 md:gap-5 lg:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-stretch">
        {projects.map((p) => (
          <div key={p.title} className="h-full">
            <ProjectCard {...p} />
          </div>
        ))}
      </div>
    </section>
  );
}
