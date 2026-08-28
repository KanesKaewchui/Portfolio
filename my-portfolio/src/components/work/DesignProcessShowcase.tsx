import Image from "next/image";

import type { WorkProcessStep } from "@/types/work";

/* =========================================================
   TYPES
========================================================= */

type DesignProcessShowcaseProps = {
  steps: readonly WorkProcessStep[];
};

type ProcessStepItemProps = {
  step: WorkProcessStep;
  index: number;
};

/* =========================================================
   DESIGN PROCESS SHOWCASE
========================================================= */

export default function DesignProcessShowcase({
  steps,
}: DesignProcessShowcaseProps) {
  return (
    <div className="design-process">
      {steps.map((step, index) => (
        <ProcessStepItem key={step.title} step={step} index={index} />
      ))}
    </div>
  );
}

/* =========================================================
   PROCESS STEP ITEM
========================================================= */

function ProcessStepItem({ step, index }: ProcessStepItemProps) {
  const { title, description, image, layout = "image-right" } = step;

  const number = String(index + 1).padStart(2, "0");

  const className = ["process-showcase", `process-showcase--${layout}`].join(
    " ",
  );

  return (
    <article className={className}>
      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="process-showcase-copy">
        {/* -------------------------------------------------
            NUMBER
        ------------------------------------------------- */}

        <span className="process-showcase-number">{number}</span>

        {/* -------------------------------------------------
            TITLE
        ------------------------------------------------- */}

        <h3>{title}</h3>

        {/* -------------------------------------------------
            DESCRIPTION
        ------------------------------------------------- */}

        <p>{description}</p>
      </div>

      {/* =====================================================
          VISUAL
      ===================================================== */}

      <ProcessStepVisual title={title} image={image} />
    </article>
  );
}

/* =========================================================
   PROCESS STEP VISUAL
========================================================= */

type ProcessStepVisualProps = {
  title: WorkProcessStep["title"];
  image: WorkProcessStep["image"];
};

function ProcessStepVisual({ title, image }: ProcessStepVisualProps) {
  return (
    <div className="process-showcase-visual">
      <Image
        src={image}
        alt={title}
        width={1600}
        height={1000}
        sizes="
          (max-width: 767px) 100vw,
          (max-width: 1199px) 90vw,
          60vw
        "
        className="process-showcase-image"
      />
    </div>
  );
}
