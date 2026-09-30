"use client";

import Reveal from "@/components/ui/Reveal";

import { experiences } from "@/data/home";
import { messages } from "@/i18n";

/* =========================================================
   EXPERIENCE SECTION
========================================================= */

export default function ExperienceSection() {
  const t = messages.en.experience;

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
};

/* =========================================================
   EXPERIENCE ITEM
========================================================= */

function ExperienceItem({ experience, index }: ExperienceItemProps) {
  const { period, company, role, type } = experience;

  return (
    <Reveal delay={(index % 4) * 40}>
      <article className="experience-row">
        <span className="experience-period">{period}</span>

        <h3 className="experience-company">{company}</h3>

        <p className="experience-role">{role}</p>

        <span className="experience-type">{type.en}</span>
      </article>
    </Reveal>
  );
}
