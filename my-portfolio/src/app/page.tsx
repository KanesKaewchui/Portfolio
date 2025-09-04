import Image from "next/image";
import Link from "next/link";
import { projects } from "./data/projects";
import ProjectCard from "./components/ProjectCard";

export default function Home() {
  return (
    <main>
      {/* Header / Nav */}
      <header className="sticky top-0 z-50 backdrop-blur border-b border-white/10 bg-black/20">
        <nav className="container-px mx-auto flex h-14 items-center justify-between">
          <Link href="#home" className="font-bold tracking-wide">
            Kanes Kaewchui
          </Link>
          <ul className="hidden md:flex items-center gap-6 text-sm">
            <li>
              <a href="#about" className="hover:opacity-80">
                About
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:opacity-80">
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:opacity-80">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:opacity-80">
                Contact
              </a>
            </li>
          </ul>
          <a className="btn-primary text-sm" href="#contact">
            Hire me
          </a>
        </nav>
      </header>
      {/* Hero */}
      <section id="home" className="section-y container-px mx-auto mt-10">
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
              I build clean, accessible interfaces with a focus on business
              goals and delightful user experience.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a className="btn-primary" href="#projects">
                View Projects
              </a>
              <a
                className="inline-flex items-center justify-center rounded-xl px-4 py-2 font-semibold border border-white/15 hover:bg-white/5 transition"
                href="https://drive.google.com/file/d/1-soLEUUyV10DZIimOpCZrBLXH9RceKpr/view?usp=sharing"
                target="_blank">
                View CV
              </a>
            </div>
          </div>
          <div className="relative h-[280px] md:h-[360px] w-full">
            <Image
              src="/profile.jpg"
              alt="Profile"
              fill
              className="object-cover rounded-2xl border border-white/10"
            />
          </div>
        </div>
      </section>
      {/* About */}
      <section id="about" className="section-y container-px mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 card p-6">
            <h2 className="text-2xl font-bold">About</h2>
            <p className="mt-3 text-[var(--muted)]">
              I merge creativity with technical expertise as a full stack
              developer, with a strong focus on frontend development. Leveraging
              my background in multimedia and graphic design, I specialize in
              crafting interactive, responsive, and user-centric web
              experiences. I have hands-on experience working on CRM systems and
              web information platforms, utilizing modern frameworks and
              technologies. I&apos;m also capable of handling backend
              development, ensuring full-cycle delivery from UI to server-side
              logic. Eager to contribute to innovative digital solutions, I
              continuously seek to grow and stay updated with emerging
              technologies
            </p>
          </div>
          <div className="card p-6">
            <h3 className="font-semibold">Contact</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                Email:{" "}
                <a
                  className="link-underline"
                  href="mailto:kaneskaewchui1@gmail.com">
                  kaneskaewchui1@gmail.com
                </a>
              </li>
              <li>
                GitHub:{" "}
                <a
                  className="link-underline"
                  href="https://github.com/KanesKaewchui"
                  target="_blank">
                  KanesKaewchui
                </a>
              </li>
              <li>
                LinkedIn:{" "}
                <a
                  className="link-underline"
                  href="https://www.linkedin.com/in/kanes-kaewchui-131851235/"
                  target="_blank">
                  Kanes Kaewchui
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* Skills */}
      <section id="skills" className="section-y container-px mx-auto">
        <h2 className="text-2xl font-bold">Skills</h2>
        <ul className="mt-4 flex flex-wrap gap-2">
          {[
            "Next.js",
            "React",
            "TypeScript",
            "Tailwind",
            "UX/UI",
            "Node.js",
            "postgreSQL",
            "MySQL",
            "PHP",
            "Figma",
            "Git",
          ].map((s) => (
            <li
              key={s}
              className="text-sm px-3 py-1 rounded-full bg-white/10 border border-white/10">
              {s}
            </li>
          ))}
        </ul>
      </section>
      {/* Projects */}
      <section id="projects" className="section-y container-px mx-auto">
        <div className="flex items-end justify-between gap-3">
          <h2 className="text-2xl font-bold">Projects</h2>
          <Link
            className="text-sm link-underline"
            href="hhttps://github.com/KanesKaewchui?tab=repositories"
            target="_blank">
            All Repos →
          </Link>
        </div>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </section>
      {/* Contact CTA */}
      <section id="contact" className="section-y container-px mx-auto md:mt-8">
        <div className="card p-6 md:p-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold">
            Let&apos;s work together
          </h2>
          <p className="mt-3 text-[var(--muted)]">
            Got a project or an idea? I’d love to hear about it.
          </p>
          <a className="mt-5 btn-primary" href="mailto:you@example.com">
            Say Hello
          </a>
        </div>
      </section>
      {/* Footer */}
      <footer className="py-8 border-t border-white/10">
        <div className="container-px mx-auto flex items-center justify-between text-sm text-[var(--muted)]">
          <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
          <p>Built with Next.js & Tailwind</p>
        </div>
      </footer>
    </main>
  );
}
