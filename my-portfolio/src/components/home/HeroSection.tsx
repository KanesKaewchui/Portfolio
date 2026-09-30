"use client";

import { messages } from "@/i18n";

/* =========================================================
   HERO SECTION
========================================================= */

export default function HeroSection() {
  const t = messages.en.hero;

  return (
    <section className="hero-section site-shell">
      {/* =====================================================
          SECTION LABEL
      ===================================================== */}

      <p className="eyebrow">{t.eyebrow}</p>

      {/* =====================================================
          HEADLINE
      ===================================================== */}

      <h1 className="hero-title">
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
