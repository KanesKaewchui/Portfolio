import Link from "next/link";

import { navigationItems } from "@/data/navigation";

const externalLinks = [
  {
    label: "GitHub",
    href: "https://github.com/KanesKaewchui",
  },
  {
    label: "Behance",
    href: "https://www.behance.net/Portfoliokanes",
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="container-px py-10 md:py-12">
        {/* Main footer */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.8fr]">
          {/* Brand */}
          <div className="max-w-md">
            <Link
              href="/#home"
              aria-label="Go to portfolio home"
              className="inline-flex items-center gap-3 rounded-lg">
              <span
                aria-hidden="true"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand text-sm font-bold text-white">
                K
              </span>

              <span>
                <span className="block font-bold text-foreground">
                  Kanes Kaewchui
                </span>

                <span className="mt-0.5 block text-sm text-muted">UX/UI</span>
              </span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-6 text-muted">
              Designing clear and scalable digital products for complex
              workflows, supported by a front-end development background.
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer navigation">
            <p className="text-sm font-semibold text-foreground">Navigation</p>

            <ul className="mt-4 space-y-3">
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted transition hover:text-foreground">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* External links */}
          <div>
            <p className="text-sm font-semibold text-foreground">Elsewhere</p>

            <ul className="mt-4 space-y-3">
              {externalLinks.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 text-sm text-muted transition hover:text-foreground">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="mt-10 flex flex-col gap-4 border-t border-border pt-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} Kanes Kaewchui. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
