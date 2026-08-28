"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/* =========================================================
   TYPES
========================================================= */

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

/* =========================================================
   CONSTANTS
========================================================= */

const REVEAL_THRESHOLD = 0.16;

/* =========================================================
   REVEAL
========================================================= */

export default function Reveal({
  children,
  delay = 0,
  className = "",
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  const [visible, setVisible] = useState(false);

  /* =======================================================
     INTERSECTION OBSERVER
  ======================================================= */

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return;
        }

        setVisible(true);

        observer.disconnect();
      },
      {
        threshold: REVEAL_THRESHOLD,
      },
    );

    observer.observe(element);

    /* -------------------------------------------------------
       CLEANUP
    ------------------------------------------------------- */

    return () => {
      observer.disconnect();
    };
  }, []);

  /* =======================================================
     CLASS NAME
  ======================================================= */

  const revealClassName = [
    "reveal",
    visible ? "reveal--visible" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  /* =======================================================
     RENDER
  ======================================================= */

  return (
    <div
      ref={ref}
      className={revealClassName}
      style={{
        transitionDelay: `${delay}ms`,
      }}>
      {children}
    </div>
  );
}
