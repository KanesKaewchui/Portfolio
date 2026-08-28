import type { Language } from "@/i18n";

/* =========================================================
   WORK LINKS
========================================================= */

export type WorkLinkType = "website" | "prototype" | "behance" | "line";

export type WorkLink = {
  label: string;
  href: string;
  type: WorkLinkType;
};

/* =========================================================
   DESIGN DECISIONS
   03 — DESIGN DECISIONS
========================================================= */

export type WorkDecision = {
  title: string;
  body: string;
};

/* =========================================================
   DESIGN PROCESS
   04 — SOLUTION
========================================================= */

export type WorkProcessLayout = "image-right" | "image-left" | "full";

export type WorkProcessStep = {
  /* Step title */
  title: string;

  /* Step description */
  description: string;

  /* Case Study image */
  image: string;

  /*
    image-right
    = Text left / Image right

    image-left
    = Image left / Text right

    full
    = Text top / Full-width image
  */
  layout?: WorkProcessLayout;
};

/* =========================================================
   LOCALIZED PROJECT CONTENT
   EN / TH
========================================================= */

export type WorkProjectContent = {
  /* -------------------------------------------------------
     BASIC INFORMATION
  ------------------------------------------------------- */

  title: string;
  subtitle: string;
  summary: string;

  category: string;
  role: string;
  platform?: string;

  /* -------------------------------------------------------
     01 — OVERVIEW
  ------------------------------------------------------- */

  overview?: string;

  problem?: string;

  goal?: string;

  /* -------------------------------------------------------
     02 — RESEARCH & INPUTS
  ------------------------------------------------------- */

  research?: readonly string[];

  /* -------------------------------------------------------
     03 — DESIGN DECISIONS
  ------------------------------------------------------- */

  decisions?: readonly WorkDecision[];

  /* -------------------------------------------------------
     04 — SOLUTION
  ------------------------------------------------------- */

  process?: readonly WorkProcessStep[];

  /* -------------------------------------------------------
     05 — REFLECTION
  ------------------------------------------------------- */

  reflection?: string;
};

/* =========================================================
   PROJECT VISUAL
========================================================= */

export type WorkVisualType = "solarpole" | "fixflow" | "hardware" | "kachen";

/* =========================================================
   PROJECT TONE
========================================================= */

export type WorkTone =
  | "green"
  | "risk"
  | "fixflow"
  | "hardware"
  | "kachen"
  | "neutral";

/* =========================================================
   RAW PROJECT DATA
   Shared data that does not change by language
========================================================= */

export type WorkProject = {
  /* -------------------------------------------------------
     IDENTITY
  ------------------------------------------------------- */

  slug: string;

  year: string;

  featured: boolean;

  /* -------------------------------------------------------
     VISUAL
  ------------------------------------------------------- */

  tone: WorkTone;

  visualType?: WorkVisualType;

  /* -------------------------------------------------------
     IMAGES
  ------------------------------------------------------- */

  /* Homepage / Featured Work */
  cover?: string;

  /* Case Study Hero */
  caseCover?: string;

  /* -------------------------------------------------------
     EXTERNAL LINKS
  ------------------------------------------------------- */

  links?: readonly WorkLink[];

  /* -------------------------------------------------------
     LOCALIZED CONTENT
  ------------------------------------------------------- */

  content: Record<Language, WorkProjectContent>;
};

/* =========================================================
   LOCALIZED PROJECT
========================================================= */

/*
  ใช้หลังจากเลือกภาษาแล้ว

  จาก:
  project.content.en.title

  เป็น:
  project.title
*/

export type LocalizedWorkProject = Omit<WorkProject, "content"> &
  WorkProjectContent;
