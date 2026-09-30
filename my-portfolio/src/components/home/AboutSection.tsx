"use client";

import type { CSSProperties } from "react";

import Reveal from "@/components/ui/Reveal";

import { backgroundPath, strengths } from "@/data/home";

import { messages } from "@/i18n";

/* =========================================================
   ABOUT SECTION
========================================================= */

export default function AboutSection() {
  const t = messages.en.about;

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
        <Reveal>
          <div className="about-copy">
            <h2 className="about-statement">
              {t.statement.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </h2>

          </div>
        </Reveal>

        {/* =================================================
            STRENGTHS
        ================================================= */}

        <div className="strength-list">
          {strengths.map((item, index) => (
            <Reveal key={item.number} delay={index * 60}>
              <div className="strength-row">
                <span className="strength-number">{item.number}</span>

                <div className="strength-content">
                  <b>{item.title.en}</b>

                  <p>{item.body.en}</p>
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

          } as CSSProperties;

          return (
            <article
              key={item.title.en}
              className={["path-step", item.current ? "is-current" : ""]
                .filter(Boolean)
                .join(" ")}
              style={style}>
              <span className="path-year">{item.year}</span>

              <h3 className="path-title">{item.title.en}</h3>

              <p className="path-description">{item.description.en}</p>

              <span className="path-accent-line" aria-hidden="true" />
            </article>
          );
        })}
      </div>
    </section>
  );
}
