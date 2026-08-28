"use client";

import { usePortfolio } from "@/providers/PortfolioProvider";

/* =========================================================
   THEME TOGGLE
========================================================= */

export default function ThemeToggle() {
  const { theme, setTheme } = usePortfolio();

  /* =======================================================
     THEME STATE
  ======================================================= */

  const isLightTheme = theme === "light";

  const nextTheme = isLightTheme ? "dark" : "light";

  /* =======================================================
     HANDLER
  ======================================================= */

  const handleToggleTheme = () => {
    setTheme(nextTheme);
  };

  /* =======================================================
     RENDER
  ======================================================= */

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={handleToggleTheme}
      aria-label={`Switch to ${nextTheme} theme`}
      title={`Switch to ${nextTheme} theme`}>
      <span aria-hidden="true">{isLightTheme ? "◐" : "◑"}</span>
    </button>
  );
}
