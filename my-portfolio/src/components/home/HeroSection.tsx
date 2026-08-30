"use client";

import { messages } from "@/i18n";
import { usePortfolio } from "@/providers/PortfolioProvider";

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
        <div className="hero-meta-item">
          <span className="meta-label">{t.basedInLabel}</span>

          <span>{t.basedIn}</span>
        </div>

        <div className="hero-meta-item">
          <span className="meta-label">{t.focusLabel}</span>

          <span>{t.focus}</span>
        </div>

        <div className="hero-meta-item">
          <span className="meta-label">{t.backgroundLabel}</span>

          <span>{t.background}</span>
        </div>
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
