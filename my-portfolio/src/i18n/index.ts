import { en } from "./en";
import { th } from "./th";

/* =========================================================
   MESSAGES
========================================================= */

export const messages = {
  en,
  th,
} as const;

/* =========================================================
   LANGUAGE TYPE
========================================================= */

export type Language = keyof typeof messages;
