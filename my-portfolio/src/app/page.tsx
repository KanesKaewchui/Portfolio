import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import HeroSection from "@/components/sections/HeroSection";
import ProcessSection from "@/components/sections/ProcessSection";
import SkillsSection from "@/components/sections/SkillsSection";
import WorkSection from "@/components/sections/WorkSection";

export default function Home() {
  return (
    <main id="main-content">
      <HeroSection />
      <WorkSection />
      <AboutSection />
      <ProcessSection />
      <ExperienceSection />
      <SkillsSection />
      <ContactSection />
    </main>
  );
}
