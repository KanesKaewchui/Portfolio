"use client";

import { messages } from "@/i18n";
import { usePortfolio } from "@/providers/PortfolioProvider";

/* =========================================================
   HERO DATA
========================================================= */

const HERO_META = [
  {
    label: "BASED IN",
    type: "location",
  },
  {
    label: "FOCUS",
    value: "UX/UI Design · Product Thinking · Design Systems",
  },
  {
    label: "BACKGROUND",
    value: "Full Stack Development",
  },
] as const;

/* =========================================================
   HERO SECTION
========================================================= */

export default function HeroSection() {
  const { language } = usePortfolio();

  const t = messages[language].hero;

  return (
    <section className="hero-section site-shell">
      {/* =====================================================
          SECTION LABEL
      ===================================================== */}

      <p className="eyebrow">{t.eyebrow}</p>

      {/* =====================================================
          HEADLINE
      ===================================================== */}

      <h1
        className={["hero-title", language === "th" ? "hero-title--th" : ""]
          .filter(Boolean)
          .join(" ")}>
        {t.headline.map((line) => (
          <span key={line}>{line}</span>
        ))}
      </h1>

      {/* =====================================================
          ACCENT
      ===================================================== */}

      <div className="hero-accent" aria-hidden="true">
        <span />
        <span />
      </div>

      {/* =====================================================
          DESCRIPTION
      ===================================================== */}

      <p className="hero-description">{t.description}</p>

      {/* =====================================================
          META
      ===================================================== */}

      <div className="hero-meta">
        {HERO_META.map((item) => (
          <div key={item.label} className="hero-meta-item">
            <span className="meta-label">{item.label}</span>

            <span>
              {"type" in item && item.type === "location"
                ? t.basedIn
                : "value" in item
                  ? item.value
                  : null}
            </span>
          </div>
        ))}
      </div>

      {/* =====================================================
          ACTIONS
      ===================================================== */}

      <div className="hero-actions">
        <a href="#work" className="button button--primary">
          {t.primaryCta}
        </a>

        <a href="#about" className="button button--ghost">
          {t.secondaryCta}
        </a>
      </div>
    </section>
  );
}
