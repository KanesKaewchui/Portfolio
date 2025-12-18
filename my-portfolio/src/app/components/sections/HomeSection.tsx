import Image from "next/image";

export default function HomeSection() {
  return (
    <section
      id="home"
      className="section-y container-px mx-auto mt-10 scroll-mt-16">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <p className="text-brand font-semibold">Hello, I&apos;m</p>
          <h1 className="mt-2 text-4xl md:text-5xl font-extrabold leading-tight">
            Kanes Kaewchui
          </h1>
          <p className="mt-3 text-lg text-[var(--muted)]">
            Full-Stack Developer • UX/UI Designer
          </p>
          <p className="mt-4 text-[var(--muted)] max-w-prose">
            Simple, inclusive, goal-driven design.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a className="btn-primary" href="#projects">
              View Projects
            </a>
            <a
              className="inline-flex items-center justify-center rounded-xl px-4 py-2 font-semibold border border-white/15 hover:bg-white/5 transition"
              href="https://drive.google.com/file/d/10XW2iL1WjLffyUYZaMOmXviMlU8KG3UG/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer">
              View CV
            </a>
          </div>
        </div>

        <div className="relative aspect-square w-full max-w-[360px] mx-auto mb-6 overflow-hidden rounded-2xl border border-white/10 shadow-xl bg-gradient-to-b from-white/5 to-transparent">
          <Image
            src="/profile.svg"
            alt="Kanes Kaewchui — Profile"
            fill
            priority
            sizes="(max-width: 768px) 90vw, 360px"
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
