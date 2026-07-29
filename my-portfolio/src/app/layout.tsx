import type { Metadata } from "next";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

import "./globals.css";

export const metadata: Metadata = {
  title: "Kanes Kaewchui | UX/UI & Product Designer",
  description:
    "UX/UI and Product Designer with a front-end development background, focused on complex workflows and scalable digital products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}
