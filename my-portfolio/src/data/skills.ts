import type { SkillGroup } from "@/types/skill";

export const skillGroups: readonly SkillGroup[] = [
  {
    id: "product-design",
    number: "01",
    title: "Product Design",
    description:
      "Structuring digital products around user needs, business goals, and clear workflows.",
    skills: [
      "Requirement Analysis",
      "Information Architecture",
      "User Flow",
      "Task Flow",
      "Wireframing",
      "Prototyping",
      "Interaction Design",
      "Responsive Design",
      "Design Systems",
      "Developer Handoff",
    ],
  },
  {
    id: "design-tools",
    number: "02",
    title: "Design Tools",
    description:
      "Creating interface concepts, interactive prototypes, visual assets, and development-ready specifications.",
    skills: [
      "Figma",
      "Figma Prototyping",
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Component Libraries",
      "Design Documentation",
    ],
  },
  {
    id: "front-end",
    number: "03",
    title: "Front-end Knowledge",
    description:
      "Using technical knowledge to create responsive, reusable, and realistic interface solutions.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Responsive Development",
      "Git",
      "API Integration",
    ],
  },
];
