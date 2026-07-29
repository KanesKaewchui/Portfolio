import Link from "next/link";

const expertise = [
  "Product Design",
  "UX/UI Design",
  "Design Systems",
  "Front-end Collaboration",
] as const;

export default function HeroSection() {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative scroll-mt-20 overflow-hidden">
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-brand/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-0 h-80 w-80 rounded-full bg-cyan-400/5 blur-3xl"
      />

      <div className="container-px section-y relative">
        <div className="max-w-5xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand md:text-base">
            UX/UI
          </p>

          <h1
            id="hero-title"
            className="mt-4 max-w-[1000px] text-4xl font-extrabold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            I design clear and scalable digital products for{" "}
            <span className="text-brand">complex workflows.</span>
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-7 text-muted md:text-lg md:leading-8">
            I&apos;m{" "}
            <strong className="font-semibold text-foreground">
              Kanes Kaewchui
            </strong>
            , a UX/UI and Product Designer with a front-end development
            background. I create practical digital experiences that balance user
            needs, business goals, and technical feasibility.
          </p>

          <ul
            aria-label="Areas of expertise"
            className="mt-6 flex flex-wrap gap-2">
            {expertise.map((item) => (
              <li
                key={item}
                className="rounded-full border border-border bg-surface px-3 py-1.5 text-sm text-muted transition hover:border-brand/30 hover:text-foreground">
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link href="/#work" className="btn-primary">
              View Case Studies
            </Link>

            <a
              href="/documents/CV - Kanes Kaewchui.pdf"
              download
              className="btn-secondary">
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
