/* =========================================================
   LAYOUT
========================================================= */

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

/* =========================================================
   HOME SECTIONS
========================================================= */

import HeroSection from "@/components/home/HeroSection";
import SelectedWorkSection from "@/components/home/SelectedWorkSection";
import MoreWorkSection from "@/components/home/MoreWorkSection";
import AboutSection from "@/components/home/AboutSection";
import ExperienceSection from "@/components/home/ExperienceSection";
import CertificationsSection from "@/components/home/CertificationsSection";
import ContactSection from "@/components/home/ContactSection";

/* =========================================================
   HOME PAGE
========================================================= */

export default function HomePage() {
  return (
    <>
      <Header />

      <main>
        <HeroSection />
        <SelectedWorkSection />
        <MoreWorkSection />
        <AboutSection />
        <ExperienceSection />
        <CertificationsSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
