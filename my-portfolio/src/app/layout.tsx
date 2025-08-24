import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio | Your Name",
  description: "Personal portfolio built with Next.js + Tailwind",
  icons: { icon: "/favicon.ico" },
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Portfolio | Your Name",
    description: "Personal portfolio built with Next.js + Tailwind",
    url: "https://example.com",
    siteName: "Portfolio",
    images: [{ url: "/profile.jpg", width: 1200, height: 630, alt: "Profile" }],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
