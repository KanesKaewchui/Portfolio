import type { CaseStudyProject, WorkProject } from "@/types/work";

export const workProjects = [
  /*
   * ======================================================
   * FEATURED CASE STUDIES
   * ======================================================
   */

  {
    slug: "solarpole-plus",
    title:
      "SolarPole+ AI video search and camera management platform dashboard interface",
    summary:
      "Designed an enterprise platform for managing companies, users, cameras, and AI-powered historical video search workflows.",
    overview:
      "A web-based platform that helps administrators manage customer companies, users, cameras, video files, and AI-powered video searches from one centralized system.",
    challenge:
      "The system needed to support different user types, large amounts of camera data, search history, video results, and complex management workflows while remaining clear and easy to navigate.",
    category: "Product Design",
    projectType: "Enterprise Platform",
    role: "UX/UI Designer",
    year: "2026",
    cover: "/images/work/SolarPole+.svg",
    coverAlt:
      "SolarPole+ AI video search and camera management platform dashboard interface",
    services: [
      "Requirement Analysis",
      "Information Architecture",
      "User Flow",
      "Wireframing",
      "UI Design",
      "Prototyping",
    ],
    responsibilities: [
      "Analyzed product requirements with the project manager and development team.",
      "Structured navigation and workflows for Superadmin and customer users.",
      "Designed user flows for company, user, camera, video, and search history management.",
      "Created wireframes and high-fidelity interface designs in Figma.",
      "Prepared reusable UI patterns and specifications for developer handoff.",
    ],
    featured: true,
    caseStudy: true,
  },

  {
    slug: "kachen-corporate-website",
    title: "Kachen Corporate Website Redesign",
    summary:
      "Redesigned and developed a responsive corporate website with reusable components, a consistent design system, and an improved SEO foundation.",
    overview:
      "A redesign and front-end migration project for a corporate website covering company information, services, solutions, portfolio, articles, and contact journeys.",
    challenge:
      "The original website needed a clearer visual direction, more consistent page structures, improved responsive behavior, and a codebase that could be maintained and expanded more easily.",
    category: "UX/UI Design",
    projectType: "Corporate Website",
    role: "UX/UI Designer & Front-end Developer",
    year: "2026",
    cover: "/images/work/Kachen.svg",
    coverAlt: "Kachen corporate website redesign shown on desktop screens",
    services: [
      "Information Architecture",
      "Responsive Design",
      "Design System",
      "UI Design",
      "Next.js",
      "SEO",
    ],
    responsibilities: [
      "Reviewed and reorganized the existing website content and page structure.",
      "Designed responsive layouts for the main pages and product solution pages.",
      "Established reusable visual patterns, components, and design tokens.",
      "Developed the website using Next.js and Tailwind CSS.",
      "Implemented page metadata and foundational SEO improvements.",
    ],
    featured: true,
    caseStudy: true,
    links: [
      {
        label: "Visit Website",
        href: "https://kachen.co",
        type: "website",
      },
    ],
  },

  {
    slug: "hardware-house-line-crm",
    title: "Hardware House LINE CRM",
    summary:
      "Designed and developed LINE CRM interfaces and operational workflows for customer communication, engagement, and day-to-day customer management.",
    overview:
      "A LINE-connected customer relationship management platform designed to support customer information, communication, campaigns, content, and operational workflows within one centralized system.",
    challenge:
      "The platform needed to organize customer data and multiple operational functions into clear workflows while remaining easy to use for staff handling frequent day-to-day customer interactions.",
    category: "Product Design",
    projectType: "LINE CRM",
    role: "UX/UI Designer & Front-end Developer",
    year: "2024–2025",
    cover: "/images/work/hardwarehouse.svg",
    coverAlt:
      "Hardware House LINE CRM interface and customer management workflow",
    services: [
      "UX/UI Design",
      "Requirement Analysis",
      "User Flow",
      "Figma Prototyping",
      "Front-end Development",
      "CRM Workflow",
    ],
    responsibilities: [
      "Analyzed business requirements and translated them into clear LINE CRM workflows.",
      "Designed user flows for customer information, communication, campaigns, and operational management.",
      "Created wireframes, high-fidelity interfaces, and interactive prototypes in Figma.",
      "Developed selected front-end interfaces using PHP, MySQL, and jQuery.",
      "Collaborated with the development team to review implementation details and refine the user experience.",
    ],
    featured: true,
    caseStudy: true,
    links: [
      {
        label: "View Prototype",
        href: "https://www.figma.com/proto/F7V3iduaHQ8ew1sQCOWdrX/Hardwarehouse?node-id=276-10529&p=f&t=U3fFIyF6AkurV7Sm-1&scaling=scale-down&content-scaling=fixed&page-id=1%3A29462&starting-point-node-id=276%3A10529&show-proto-sidebar=0",
        type: "prototype",
      },
      {
        label: "Open LINE",
        href: "https://line.me/R/ti/p/@xdx1131v",
        type: "line",
      },
    ],
  },

  /*
   * ======================================================
   * OTHER SELECTED WORK
   * ======================================================
   */

  {
    slug: "prompt-design-website",
    title: "Prompt Design Corporate Website",
    summary:
      "Designed and developed a responsive corporate information website for presenting services, company information, and customer contact channels.",
    category: "UX/UI Design",
    projectType: "Corporate Website",
    role: "UX/UI Designer & Front-end Developer",
    year: "2025",
    cover: "/images/work/promptdesign.svg",
    coverAlt:
      "Prompt Design corporate website displayed on desktop and mobile screens",
    services: [
      "UX/UI Design",
      "Responsive Design",
      "Next.js",
      "Tailwind CSS",
      "Front-end Development",
    ],
    featured: false,
    caseStudy: false,
    links: [
      {
        label: "Visit Website",
        href: "https://prompt-design.code-play.net/en",
        type: "website",
      },
    ],
  },

  {
    slug: "siripen-school-website",
    title: "Siripen School Website",
    summary:
      "Designed and developed a responsive school information website for presenting courses, educational information, announcements, and contact channels.",
    category: "UX/UI Design",
    projectType: "Education Website",
    role: "UX/UI Designer & Front-end Developer",
    year: "2025",
    cover: "/images/work/siripenschool.svg",
    coverAlt: "Siripen School responsive information website interface",
    services: [
      "UX/UI Design",
      "Responsive Design",
      "Next.js",
      "Tailwind CSS",
      "Front-end Development",
    ],
    featured: false,
    caseStudy: false,
    links: [
      {
        label: "Visit Website",
        href: "https://www.siripenschool.ac.th/th",
        type: "website",
      },
    ],
  },

  {
    slug: "acdelco-line-crm",
    title: "ACDelco LINE CRM",
    summary:
      "Designed LINE-based customer journeys and CRM interfaces for customer engagement, information management, and campaign interactions.",
    category: "Product Design",
    projectType: "LINE CRM",
    role: "UX/UI Designer & Front-end Developer",
    year: "2024–2025",
    cover: "/images/work/ACDelco.svg",
    coverAlt: "ACDelco Thailand LINE CRM interface and customer journey",
    services: [
      "UX/UI Design",
      "User Flow",
      "Figma Prototype",
      "Vue",
      "PHP",
      "MySQL",
    ],
    featured: false,
    caseStudy: false,
    links: [
      {
        label: "Open LINE",
        href: "https://line.me/R/ti/p/@964qjojv",
        type: "line",
      },
      {
        label: "View Prototype",
        href: "https://www.figma.com/proto/kvkZCfdhnsaZy7VNzkX2iT/ACDelco_Thailand?node-id=43-3356&p=f&t=zOrjOzNV2XGeYirF-1&scaling=scale-down&content-scaling=fixed&page-id=22%3A3277&starting-point-node-id=43%3A3356&show-proto-sidebar=1",
        type: "prototype",
      },
    ],
  },

  {
    slug: "farm-mae-jard",
    title: "Farm Mae Jard Website",
    summary:
      "Created a responsive website concept for presenting farm products, brand information, and customer-facing content.",
    category: "UX/UI Design",
    projectType: "Website Concept",
    role: "UX/UI Designer",
    year: "2024",
    cover: "/images/work/FARMMAEJARD.svg",
    coverAlt: "Farm Mae Jard responsive website design prototype",
    services: [
      "UX/UI Design",
      "Information Architecture",
      "Responsive Design",
      "Figma",
      "Prototyping",
    ],
    featured: false,
    caseStudy: false,
    links: [
      {
        label: "View Prototype",
        href: "https://www.figma.com/proto/lMXPjSmSPGafZ7c9dxaGSQ/Mae-Jard-Farm?node-id=7-58&p=f&t=ZZDOyn1uKh8lRXkL-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=7%3A58&show-proto-sidebar=1",
        type: "prototype",
      },
    ],
  },

  {
    slug: "buffet-anytime-anywhere",
    title: "Buffet Anytime Anywhere",
    summary:
      "Designed a mobile application concept for discovering buffet restaurants and exploring restaurant information through a user-centered interface.",
    category: "UX/UI Design",
    projectType: "Mobile App Concept",
    role: "UX/UI Designer",
    year: "2022",
    cover: "/images/work/Buffet.svg",
    coverAlt: "Buffet Anytime Anywhere mobile application UX/UI case study",
    services: [
      "UX Research",
      "User Flow",
      "Wireframing",
      "UI Design",
      "Figma",
      "Prototyping",
    ],
    featured: false,
    caseStudy: false,
    links: [
      {
        label: "View on Behance",
        href: "https://www.behance.net/gallery/151281615/Portfolio-UXUI",
        type: "behance",
      },
    ],
  },
] satisfies readonly WorkProject[];

/**
 * ใช้สำหรับหน้า Case Study
 * จะคืนเฉพาะโปรเจกต์ที่มี caseStudy: true
 */
export function getWorkProject(slug: string): CaseStudyProject | undefined {
  const project = workProjects.find((item) => item.slug === slug);

  if (!project || !project.caseStudy) {
    return undefined;
  }

  return project;
}

/**
 * ผลงานหลักที่แสดงเป็น Case Study Card ขนาดใหญ่
 */
export const featuredWorkProjects = workProjects.filter(
  (project) => project.featured && project.caseStudy,
);

/**
 * ผลงานรองที่แสดงเป็น Grid
 */
export const otherWorkProjects = workProjects.filter(
  (project) => !project.featured,
);
