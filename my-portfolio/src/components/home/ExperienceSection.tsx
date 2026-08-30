"use client";

import Reveal from "@/components/ui/Reveal";

import { experiences } from "@/data/home";
import { messages, type Language } from "@/i18n";

import { usePortfolio } from "@/providers/PortfolioProvider";

/* =========================================================
   EXPERIENCE SECTION
========================================================= */

export default function ExperienceSection() {
  const { language } = usePortfolio();

  const t = messages[language].experience;

  return (
    <section id="experience" className="section site-shell">
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
          EXPERIENCE LIST
      ===================================================== */}

      <div className="experience-list">
        {experiences.map((experience, index) => (
          <ExperienceItem
            key={`${experience.company}-${experience.period}`}
            experience={experience}
            index={index}
            language={language}
          />
        ))}
      </div>
    </section>
  );
}

/* =========================================================
   TYPES
========================================================= */

type Experience = (typeof experiences)[number];

type ExperienceItemProps = {
  experience: Experience;
  index: number;
  language: Language;
};

/* =========================================================
   EXPERIENCE ITEM
========================================================= */

function ExperienceItem({ experience, index, language }: ExperienceItemProps) {
  const { period, company, role, type } = experience;

  return (
    <Reveal delay={(index % 4) * 40}>
      <article className="experience-row">
        <span className="experience-period">{period}</span>

        <h3 className="experience-company">{company}</h3>

        <p className="experience-role">{role}</p>

        <span className="experience-type">{type[language]}</span>
      </article>
    </Reveal>
  );
}
