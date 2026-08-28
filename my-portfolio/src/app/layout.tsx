import type { Metadata } from "next";
import type { ReactNode } from "react";

import { PortfolioProvider } from "@/providers/PortfolioProvider";

import "./globals.css";

/* =========================================================
   METADATA
========================================================= */

export const metadata: Metadata = {
  title: "Kanes Kaewchui - UX/UI Designer",
  description: "UX/UI with a Full Stack Developer background.",
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
