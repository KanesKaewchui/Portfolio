import type { Metadata } from "next";
import type { ReactNode } from "react";

import { PortfolioProvider } from "@/providers/PortfolioProvider";

import "./globals.css";

/* =========================================================
   METADATA
========================================================= */

export const metadata: Metadata = {
  title: "Kanes Kaewchui - Frontend Developer",
  description:
    "Frontend Developer building responsive web experiences with React, Next.js, and TypeScript.",
};

/* =========================================================
   TYPES
========================================================= */

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

/* =========================================================
   ROOT LAYOUT
========================================================= */

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <PortfolioProvider>{children}</PortfolioProvider>
      </body>
    </html>
  );
}
