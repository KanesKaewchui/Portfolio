"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { createPortal } from "react-dom";
import { useCallback, useEffect, useRef, useState } from "react";

import { navigationItems } from "@/data/navigation";

const focusableSelector = [
  "a[href]",
  "button:not([disabled])",
  '[tabindex]:not([tabindex="-1"])',
].join(",");

export default function Header() {
  const [isMounted, setIsMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pathname = usePathname();

  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuPanelRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  const closeMenu = useCallback((returnFocus = false) => {
    setIsMenuOpen(false);

    if (returnFocus) {
      window.requestAnimationFrame(() => {
        menuButtonRef.current?.focus();
      });
    }
  }, []);

  // ปิดเมนูเมื่อเปลี่ยนหน้า
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // ปิดเมนูเมื่อขยายหน้าจอเป็น Desktop
  useEffect(() => {
    const desktopMedia = window.matchMedia("(min-width: 768px)");

    const handleDesktopChange = () => {
      if (desktopMedia.matches) {
        setIsMenuOpen(false);
      }
    };

    desktopMedia.addEventListener("change", handleDesktopChange);

    return () => {
      desktopMedia.removeEventListener("change", handleDesktopChange);
    };
  }, []);

  // จัดการ Scroll lock, Escape และ Focus trap
  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const focusFrame = window.requestAnimationFrame(() => {
      closeButtonRef.current?.focus();
    });

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu(true);
        return;
      }

      if (event.key !== "Tab" || !menuPanelRef.current) {
        return;
      }

      const focusableElements = Array.from(
        menuPanelRef.current.querySelectorAll<HTMLElement>(focusableSelector),
      ).filter(
        (element) =>
          !element.hasAttribute("disabled") && element.tabIndex !== -1,
      );

      if (focusableElements.length === 0) {
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      }

      if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.cancelAnimationFrame(focusFrame);
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen, closeMenu]);

  const mobileNavigation = (
    <div
      id="mobile-navigation"
      aria-hidden={!isMenuOpen}
      className={`fixed inset-0 z-[100] md:hidden ${
        isMenuOpen ? "pointer-events-auto" : "pointer-events-none"
      }`}>
      {/* Overlay */}
      <button
        type="button"
        tabIndex={-1}
        aria-label="Close navigation menu"
        onClick={() => closeMenu(true)}
        className={`absolute inset-0 z-0 h-full w-full bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Drawer */}
      <div
        ref={menuPanelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="mobile-navigation-title"
        className={`absolute inset-y-0 right-0 z-10 flex h-dvh w-[88vw] max-w-[360px] flex-col overflow-y-auto overscroll-contain border-l border-border bg-background p-5 shadow-2xl transition-transform duration-300 ease-out will-change-transform sm:p-6 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}>
        {/* Drawer header */}
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <p
              id="mobile-navigation-title"
              className="truncate font-bold text-foreground">
              Kanes Kaewchui
            </p>

            <p className="mt-1 text-sm text-muted">UX/UI</p>
          </div>

          <button
            ref={closeButtonRef}
            type="button"
            tabIndex={isMenuOpen ? 0 : -1}
            onClick={() => closeMenu(true)}
            aria-label="Close navigation menu"
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border text-foreground transition hover:bg-surface-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-5 w-5">
              <path
                d="M6 6l12 12M18 6 6 18"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Drawer navigation */}
        <nav aria-label="Mobile navigation" className="mt-8">
          <ul className="space-y-1">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  tabIndex={isMenuOpen ? 0 : -1}
                  onClick={() => closeMenu()}
                  className="group flex min-h-12 items-center justify-between rounded-xl px-4 py-3 text-base font-semibold text-muted transition hover:bg-surface-hover hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand">
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-xl">
        <nav
          aria-label="Main navigation"
          className="container-px flex h-16 items-center justify-between md:h-[72px]">
          {/* Brand */}
          <Link
            href="/#home"
            aria-label="Kanes Kaewchui portfolio home"
            className="group inline-flex min-w-0 items-center gap-3 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand">
            <span
              aria-hidden="true"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand text-sm font-bold text-white transition-transform duration-300 group-hover:-rotate-3">
              K
            </span>

            <span className="flex min-w-0 flex-col">
              <span className="truncate text-sm font-bold leading-tight text-foreground md:text-base">
                Kanes Kaewchui
              </span>

              <span className="mt-0.5 hidden text-xs leading-tight text-muted sm:block">
                UX/UI
              </span>
            </span>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-7 md:flex">
            <ul className="flex items-center gap-7 text-sm font-medium">
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="relative rounded-md py-2 text-muted transition-colors after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-brand after:transition-all hover:text-foreground hover:after:w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile menu button */}
          <button
            ref={menuButtonRef}
            type="button"
            onClick={openMenu}
            aria-label="Open navigation menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border text-foreground transition hover:bg-surface-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand md:hidden">
            <span className="sr-only">Open navigation menu</span>

            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-5 w-5">
              <path
                d="M4 7h16M4 12h16M4 17h16"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </nav>
      </header>

      {isMounted && createPortal(mobileNavigation, document.body)}
    </>
  );
}
