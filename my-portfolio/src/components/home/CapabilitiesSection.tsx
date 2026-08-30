"use client";

import { useEffect, useRef } from "react";

import Reveal from "@/components/ui/Reveal";

import { capabilities, capabilityMarquee } from "@/data/home";

import { messages, type Language } from "@/i18n";

import { usePortfolio } from "@/providers/PortfolioProvider";

/* =========================================================
   CONSTANTS
========================================================= */

const MARQUEE_SPEED = 45;

/* =========================================================
   CAPABILITIES SECTION
========================================================= */

export default function CapabilitiesSection() {
  const { language } = usePortfolio();

  const t = messages[language].capabilities;

  return (
    <section id="capabilities" className="section site-shell">
      {/* =====================================================
          SECTION HEADING
      ===================================================== */}

      <div className="section-heading">
        <div>
          <p className="eyebrow">{t.eyebrow}</p>

          <h2>{t.title}</h2>
        </div>

        <p>{t.description}</p>
      </div>

      {/* =====================================================
          CAPABILITIES GRID
      ===================================================== */}

      <div className="capabilities-grid">
        {capabilities.map((capability, index) => {
          const number = String(index + 1).padStart(2, "0");

          return (
            <Reveal key={capability.en} delay={(index % 4) * 40}>
              <div className="capability-row">
                <span className="capability-number">{number}</span>

                <h3 className="capability-title">{capability[language]}</h3>
              </div>
            </Reveal>
          );
        })}
      </div>

      {/* =====================================================
          MARQUEE
      ===================================================== */}

      <CapabilityMarquee language={language} />
    </section>
  );
}

/* =========================================================
   MARQUEE
========================================================= */

type CapabilityMarqueeProps = {
  language: Language;
};

function CapabilityMarquee({ language }: CapabilityMarqueeProps) {
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const track = trackRef.current;

    if (!track) {
      return;
    }

    let animationFrame = 0;
    let offset = 0;

    let previousTime = performance.now();

    const animate = (currentTime: number) => {
      const deltaTime = (currentTime - previousTime) / 1000;

      previousTime = currentTime;

      const groupWidth = track.scrollWidth / 2;

      offset -= MARQUEE_SPEED * deltaTime;

      if (groupWidth > 0 && Math.abs(offset) >= groupWidth) {
        offset += groupWidth;
      }

      track.style.transform = `translate3d(${offset}px, 0, 0)`;

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div className="capability-marquee" aria-hidden="true">
      <div ref={trackRef} className="capability-marquee-track">
        <MarqueeGroup language={language} />

        <MarqueeGroup language={language} />
      </div>
    </div>
  );
}

/* =========================================================
   MARQUEE GROUP
========================================================= */

type MarqueeGroupProps = {
  language: Language;
};

function MarqueeGroup({ language }: MarqueeGroupProps) {
  return (
    <div className="capability-marquee-group">
      {capabilityMarquee.map((item) => (
        <span key={item.en} className="capability-marquee-item">
          {item[language]}

          <span className="capability-marquee-separator" aria-hidden="true">
            —
          </span>
        </span>
      ))}
    </div>
  );
}
