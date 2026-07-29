const contactLinks = [
  {
    label: "GitHub",
    href: "https://github.com/KanesKaewchui",
    description: "View development projects and source code",
  },
  {
    label: "Behance",
    href: "https://www.behance.net/Portfoliokanes",
    description: "Explore visual and UX/UI design work",
  },
] as const;

export default function ContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="container-px section-y scroll-mt-20">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-surface px-5 py-10 md:px-8 md:py-14 lg:px-12 lg:py-16">
        {/* Background decoration */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand/10 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-cyan-400/5 blur-3xl"
        />

        <div className="relative grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-16">
          {/* Main CTA */}
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand md:text-base">
              Let&apos;s Work Together
            </p>

            <h2
              id="contact-title"
              className="mt-3 text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl">
              Have a product, platform, or workflow that needs a clearer
              experience?
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-muted md:text-lg md:leading-8">
              I&apos;m interested in UX/UI and Product Design opportunities
              where I can contribute to user flows, interface systems, complex
              workflows, and collaboration with development teams.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="mailto:kaneskaewchui1@gmail.com"
                className="btn-primary group"
                aria-label="Send an email to Kanes Kaewchui">
                Get in Touch
              </a>

              <a
                href="/documents/CV - Kanes Kaewchui.pdf"
                download
                className="btn-secondary group"
                aria-label="Download Kanes Kaewchui CV as PDF">
                Download Resume
              </a>
            </div>
          </div>

          {/* Contact information */}
          <div className="rounded-2xl border border-border bg-background/60 p-5 md:p-6">
            <div className="border-b border-border pb-5">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                Email
              </p>

              <a
                href="mailto:your-email@example.com"
                className="mt-2 inline-flex break-all text-lg font-semibold text-foreground transition-colors hover:text-brand">
                kaneskaewchui1@gmail.com
              </a>

              <p className="mt-2 text-sm leading-6 text-muted">
                For job opportunities, design projects, and professional
                collaboration.
              </p>
            </div>

            <div className="pt-5">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                Elsewhere
              </p>

              <ul className="mt-4 space-y-4">
                {contactLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-start justify-between gap-4 rounded-xl transition-colors hover:text-brand">
                      <span>
                        <span className="block font-semibold text-foreground transition-colors group-hover:text-brand">
                          {link.label}
                        </span>

                        <span className="mt-1 block text-sm leading-5 text-muted">
                          {link.description}
                        </span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
