"use client";

import type { CSSProperties } from "react";

import Reveal from "@/components/ui/Reveal";

import { backgroundPath, strengths } from "@/data/home";

import { messages } from "@/i18n";
import { usePortfolio } from "@/providers/PortfolioProvider";

/* =========================================================
   ABOUT SECTION
========================================================= */

export default function AboutSection() {
  const { language } = usePortfolio();

  const t = messages[language].about;

  return (
    <section id="about" className="section site-shell">
      {/* =====================================================
          SECTION LABEL
      ===================================================== */}

      <p className="eyebrow">{t.eyebrow}</p>

      {/* =====================================================
          ABOUT CONTENT
      ===================================================== */}

      <div className="about-layout">
        {/* -------------------------------------------------
            MAIN STATEMENT
        ------------------------------------------------- */}

        <Reveal>
          <div className="about-copy">
            <h2
              className={`about-statement ${
                language === "th" ? "about-statement--th" : ""
              }`}>
              {t.statement.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </h2>

            <p className="about-body">{t.description}</p>
          </div>
        </Reveal>

        {/* -------------------------------------------------
            STRENGTHS
        ------------------------------------------------- */}

        <div className="strength-list">
          {strengths.map((item, index) => (
            <Reveal key={item.number} delay={index * 60}>
              <div className="strength-row">
                <span className="strength-number">{item.number}</span>

                <div className="strength-content">
                  <b>{item.title}</b>

                  <p>{item.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* =====================================================
          CAREER EVOLUTION
      ===================================================== */}

      <div className="background-path">
        {backgroundPath.map((item) => {
          const style = {
            "--accent": item.accent,
            "--hover-bg": item.hoverBg,
          } as CSSProperties;

          const className = ["path-step", item.current ? "is-current" : ""]
            .filter(Boolean)
            .join(" ");

          return (
            <article
              key={`${item.number}-${item.title}-${item.year}`}
              className={className}
              style={style}>
              {/* ---------------------------------------------
                  STEP HEADER
              --------------------------------------------- */}

              <div className="path-topline">
                <span className="path-number">{item.number}</span>

                {item.current && <span className="path-current">CURRENT</span>}
              </div>

              {/* ---------------------------------------------
                  YEAR
              --------------------------------------------- */}

              <span className="path-year">{item.year}</span>

              {/* ---------------------------------------------
                  TITLE
              --------------------------------------------- */}

              <h3 className="path-title">{item.title}</h3>

              {/* ---------------------------------------------
                  DESCRIPTION
              --------------------------------------------- */}

              <p className="path-description">{item.description}</p>

              {/* ---------------------------------------------
                  ACCENT LINE
              --------------------------------------------- */}

              <span className="path-accent-line" aria-hidden="true" />
            </article>
          );
        })}
      </div>
    </section>
  );
}
