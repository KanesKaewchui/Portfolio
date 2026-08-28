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

import type { Language } from "@/i18n";

/* =========================================================
   TYPES
========================================================= */

type Theme = "light" | "dark";

type PortfolioContextValue = {
  theme: Theme;
  language: Language;

  setTheme: (theme: Theme) => void;

  setLanguage: (language: Language) => void;
};

type PortfolioProviderProps = {
  children: ReactNode;
};

/* =========================================================
   CONSTANTS
========================================================= */

const THEME_STORAGE_KEY = "portfolio-theme";

const LANGUAGE_STORAGE_KEY = "portfolio-language";

const DEFAULT_THEME: Theme = "light";

const DEFAULT_LANGUAGE: Language = "en";

/* =========================================================
   HELPERS
========================================================= */

function isTheme(value: string | null): value is Theme {
  return value === "light" || value === "dark";
}

function isLanguage(value: string | null): value is Language {
  return value === "en" || value === "th";
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

  const [language, setLanguageState] = useState<Language>(DEFAULT_LANGUAGE);

  /* =======================================================
     INITIAL SETTINGS
  ======================================================= */

  useEffect(() => {
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);

    const savedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY);

    /* -------------------------------------------------------
       THEME
    ------------------------------------------------------- */

    const systemTheme: Theme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";

    const nextTheme: Theme = isTheme(savedTheme) ? savedTheme : systemTheme;

    /* -------------------------------------------------------
       LANGUAGE
       Default = EN
    ------------------------------------------------------- */

    const nextLanguage: Language = isLanguage(savedLanguage)
      ? savedLanguage
      : DEFAULT_LANGUAGE;

    /* -------------------------------------------------------
       UPDATE STATE
    ------------------------------------------------------- */

    setThemeState(nextTheme);

    setLanguageState(nextLanguage);

    /* -------------------------------------------------------
       UPDATE DOCUMENT
    ------------------------------------------------------- */

    document.documentElement.dataset.theme = nextTheme;

    document.documentElement.lang = nextLanguage;
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
     SET LANGUAGE
  ======================================================= */

  const setLanguage = useCallback((value: Language) => {
    setLanguageState(value);

    localStorage.setItem(LANGUAGE_STORAGE_KEY, value);

    document.documentElement.lang = value;
  }, []);

  /* =======================================================
     CONTEXT VALUE
  ======================================================= */

  const value = useMemo<PortfolioContextValue>(
    () => ({
      theme,
      language,
      setTheme,
      setLanguage,
    }),
    [theme, language, setTheme, setLanguage],
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
