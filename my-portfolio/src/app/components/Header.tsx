"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    document.documentElement.classList.toggle("menu-open", open);

    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onEsc);
    return () => {
      document.body.style.overflow = "";
      document.documentElement.classList.remove("menu-open");
      window.removeEventListener("keydown", onEsc);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="shadow-sm md:backdrop-blur-md bg-white border-gray-200 sticky top-0 z-50 bg-white dark:bg-[#0b0f14] md:bg-white/80 md:dark:bg-[#0b0f14]/70  md:supports-[backdrop-filter]:bg-white/60 md:supports-[backdrop-filter]:dark:bg-[#0b0f14]/50 border-b border-black/10 dark:border-white/10">
      <nav className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        <Link href="#home" className="font-bold">
          Kanes Kaewchui
        </Link>

        {/* เมนูเดสก์ท็อป */}
        <ul className="hidden md:flex items-center gap-6 text-sm">
          <li>
            <a href="#about" className="hover:opacity-80">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:opacity-80">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:opacity-80">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:opacity-80">
              Contact
            </a>
          </li>
        </ul>

        {/* ปุ่ม Hamburger (มือถือ) */}
        <button
          type="button"
          onClick={() => setOpen(true)}
          className={`md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg transition
            ${
              open
                ? "bg-white/10 border border-white/20"
                : "border border-white/10 hover:bg-white/5"
            }`}
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-pressed={open}>
          <span className="sr-only">Open main menu</span>
          <svg
            className={`w-5 h-5 transition-transform ${
              open ? "scale-90 opacity-80" : ""
            }`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true">
            <path
              d="M4 6h16M4 12h16M4 18h16"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </nav>

      {/* Mobile slide-over menu (LEFT, smooth) */}
      <div
        id="mobile-menu"
        className={`md:hidden fixed inset-0 z-50 ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
        role="dialog"
        aria-modal="true"
        aria-hidden={!open}>
        {/* Overlay เข้ม */}
        <div
          className={`absolute inset-0 bg-black/80 transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={close}
        />

        {/* แผงเมนู: สไลด์จากซ้าย */}
        <div
          className={`
            absolute left-0 top-0 h-full w-5/6 max-w-xs
            bg-[#0b0f14] border-r border-white/10 shadow-2xl p-6
            transform transition-transform duration-300 ease-out
            will-change-transform motion-reduce:transition-none
            ${open ? "translate-x-0" : "-translate-x-full"}
          `}>
          <div className="flex items-center justify-between">
            <span className="font-bold">Menu</span>
            <button
              onClick={close}
              aria-label="Close menu"
              className="inline-flex items-center justify-center w-9 h-9 rounded-lg border border-white/10 hover:bg-white/5">
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true">
                <path
                  d="M6 6l12 12M6 18L18 6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          <ul className="mt-6 space-y-2 text-sm">
            <li>
              <a
                href="#about"
                onClick={close}
                className="block rounded-lg px-3 py-2 hover:bg-white/5">
                About
              </a>
            </li>
            <li>
              <a
                href="#skills"
                onClick={close}
                className="block rounded-lg px-3 py-2 hover:bg-white/5">
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={close}
                className="block rounded-lg px-3 py-2 hover:bg-white/5">
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={close}
                className="block rounded-lg px-3 py-2 hover:bg-white/5">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
