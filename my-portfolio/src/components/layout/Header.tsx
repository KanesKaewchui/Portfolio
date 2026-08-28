"use client";

import { useState } from "react";

import Link from "next/link";

import LanguageToggle from "@/components/ui/LanguageToggle";
import ThemeToggle from "@/components/ui/ThemeToggle";

import { siteConfig } from "@/config/site";
import { messages } from "@/i18n";
import { usePortfolio } from "@/providers/PortfolioProvider";

/* =========================================================
   HEADER
========================================================= */

export default function Header() {
  const [open, setOpen] = useState(false);

  const { language } = usePortfolio();
  const t = messages[language];

  /* =======================================================
     NAVIGATION DATA
  ======================================================= */

  const navItems = [
    {
      label: t.nav.work,
      href: "/#work",
    },
    {
      label: t.nav.about,
      href: "/#about",
    },
    {
      label: t.nav.experience,
      href: "/#experience",
    },
  ] as const;

  /* =======================================================
     HANDLERS
  ======================================================= */

  const toggleMenu = () => {
    setOpen((value) => !value);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  /* =======================================================
     RENDER
  ======================================================= */

  return (
    <header className="site-header">
      <div className="site-shell header-inner">
        {/* =================================================
            BRAND
        ================================================= */}

        <Link href="/" className="brand" aria-label="Kanes home">
          Kanes.
        </Link>

        {/* =================================================
            DESKTOP NAVIGATION
        ================================================= */}

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        {/* =================================================
            HEADER ACTIONS
        ================================================= */}

        <div className="header-actions">
          <LanguageToggle />

          <ThemeToggle />

          <a
            className="resume-link"
            href={siteConfig.resumePath}
            target="_blank"
            rel="noreferrer">
            {t.nav.resume}
          </a>

          {/* ---------------------------------------------
              MOBILE MENU BUTTON
          --------------------------------------------- */}

          <button
            type="button"
            className="mobile-menu-button"
            onClick={toggleMenu}
            aria-expanded={open}
            aria-controls="mobile-navigation">
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {/* ===================================================
          MOBILE NAVIGATION
      =================================================== */}

      {open && (
        <nav
          id="mobile-navigation"
          className="mobile-nav site-shell"
          aria-label="Mobile navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </Link>
          ))}

          <a
            href={siteConfig.resumePath}
            target="_blank"
            rel="noreferrer"
            onClick={closeMenu}>
            {t.nav.resume}
          </a>
        </nav>
      )}
    </header>
  );
}
