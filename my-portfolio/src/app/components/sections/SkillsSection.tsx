type Props = { skills: ReadonlyArray<string> };

export default function SkillsSection({ skills }: Props) {
  return (
    <section
      id="skills"
      className="section-y container-px mx-auto scroll-mt-16">
      <h2 className="text-2xl font-bold mt-4">Skills</h2>
      <ul className="mt-4 flex flex-wrap gap-2">
        {skills.map((s) => (
          <li
            key={s}
            className="text-sm px-3 py-1 rounded-full bg-white/10 border border-white/10">
            {s}
          </li>
        ))}
      </ul>
    </section>
  );
}
