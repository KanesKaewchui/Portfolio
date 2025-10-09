import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeSection from "./components/sections/HomeSection";
import AboutSection from "./components/sections/AboutSection";
import ContactSection from "./components/sections/ContactSection";
import SkillsSection from "./components/sections/SkillsSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import { projects } from "./data/projects";

export default function Home() {
  const skills = [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind",
    "UX/UI",
    "Node.js",
    "postgreSQL",
    "MySQL",
    "PHP",
    "Figma",
    "Git",
  ] as const;

  return (
    <main>
      <div className="page-overlay md:hidden fixed inset-0 z-40 bg-black/80 transition-opacity"></div>
      <Header />
      <HomeSection />
      <AboutSection />
      <SkillsSection skills={skills} />
      <ProjectsSection projects={projects} />
      <ContactSection />
      <Footer />
    </main>
  );
}
