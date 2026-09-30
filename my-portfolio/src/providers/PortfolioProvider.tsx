"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

/* =========================================================
   TYPES
========================================================= */

type Theme = "light" | "dark";

type PortfolioContextValue = {
  theme: Theme;

  setTheme: (theme: Theme) => void;
};

type PortfolioProviderProps = {
  children: ReactNode;
};

/* =========================================================
   CONSTANTS
========================================================= */

const THEME_STORAGE_KEY = "portfolio-theme";

const DEFAULT_THEME: Theme = "light";

/* =========================================================
   HELPERS
========================================================= */

function isTheme(value: string | null): value is Theme {
  return value === "light" || value === "dark";
}

/* =========================================================
   CONTEXT
========================================================= */

const PortfolioContext = createContext<PortfolioContextValue | null>(null);

/* =========================================================
   PORTFOLIO PROVIDER
========================================================= */

export function PortfolioProvider({ children }: PortfolioProviderProps) {
  const [theme, setThemeState] = useState<Theme>(DEFAULT_THEME);

  /* =======================================================
     INITIAL SETTINGS
  ======================================================= */

  useEffect(() => {
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);

    /* -------------------------------------------------------
       THEME
    ------------------------------------------------------- */

    const systemTheme: Theme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";

    const nextTheme: Theme = isTheme(savedTheme) ? savedTheme : systemTheme;

    /* -------------------------------------------------------
       UPDATE STATE
    ------------------------------------------------------- */

    setThemeState(nextTheme);

    /* -------------------------------------------------------
       UPDATE DOCUMENT
    ------------------------------------------------------- */

    document.documentElement.dataset.theme = nextTheme;

    document.documentElement.lang = "en";
  }, []);

  /* =======================================================
     SET THEME
  ======================================================= */

  const setTheme = useCallback((value: Theme) => {
    setThemeState(value);

    localStorage.setItem(THEME_STORAGE_KEY, value);

    document.documentElement.dataset.theme = value;
  }, []);

  /* =======================================================
     CONTEXT VALUE
  ======================================================= */

  const value = useMemo<PortfolioContextValue>(
    () => ({
      theme,
      setTheme,
    }),
    [theme, setTheme],
  );

  /* =======================================================
     RENDER
  ======================================================= */

  return (
    <PortfolioContext.Provider value={value}>
      {children}
    </PortfolioContext.Provider>
  );
}

/* =========================================================
   USE PORTFOLIO
========================================================= */

export function usePortfolio() {
  const context = useContext(PortfolioContext);

  if (!context) {
    throw new Error("usePortfolio must be used inside PortfolioProvider");
  }

  return context;
}
