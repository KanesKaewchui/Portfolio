"use client";

import { usePortfolio } from "@/providers/PortfolioProvider";

/* =========================================================
   LANGUAGE OPTIONS
========================================================= */

const LANGUAGE_OPTIONS = [
  {
    label: "EN",
    value: "en",
  },
  {
    label: "TH",
    value: "th",
  },
] as const;

/* =========================================================
   LANGUAGE TOGGLE
========================================================= */

export default function LanguageToggle() {
  const { language, setLanguage } = usePortfolio();

  return (
    <div className="lang-toggle" role="group" aria-label="Language">
      {LANGUAGE_OPTIONS.map((option) => {
        const isActive = language === option.value;

        return (
          <button
            key={option.value}
            type="button"
            className={isActive ? "is-active" : ""}
            onClick={() => setLanguage(option.value)}
            aria-pressed={isActive}>
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
