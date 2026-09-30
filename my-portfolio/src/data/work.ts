import type { LocalizedWorkProject, WorkProject } from "@/types/work";

/* =========================================================
   01 — SOLARPOLE+
========================================================= */

const solarPoleProject = {
  slug: "solarpole-plus",
  year: "2026",
  featured: true,

  tone: "green",
  visualType: "solarpole",

  cover: "/images/work/solarpole-plus/cover.webp",

  caseCover: "/images/work/solarpole-plus/case-cover.jpg",

  links: [
    {
      label: "View in Figma",
      href: "",
      type: "prototype",
    },
  ],

  content: {
    en: {
      title: "SolarPole+",

      subtitle: "CCTV & AI Management Platform for Solar-Powered Safety Poles",

      summary:
        "A web-based management platform for organizing and managing CCTV cameras and AI capabilities connected to SolarPole+ units.",

      category: "Product Design",

      role: "UX/UI Designer",

      platform: "Web Application",

      overview:
        "SolarPole+ is a solar-powered safety pole equipped with lighting, CCTV cameras, and AI capabilities. This project focused on designing a web-based back-office system for managing cameras connected to SolarPole+ units, bringing camera information and system management into a clear and centralized interface.",

      problem:
        "Managing multiple CCTV cameras connected to SolarPole+ units can become difficult when camera information, device details, and management tasks are not organized in one clear system. Operators need an interface that helps them understand and manage camera-related information efficiently.",

      goal: "Design a clear back-office experience that helps operators manage CCTV cameras connected to SolarPole+ units, review relevant camera information, and navigate system functions without unnecessary complexity.",

      research: [
        "System requirement review",
        "Camera and device information review",
        "Information architecture",
        "Camera management workflow mapping",
        "Interface structure exploration",
      ],

      decisions: [
        {
          title: "Organize the system around camera management",

          body: "The information architecture was structured around the main camera-management tasks so operators can move between camera information and related system functions without unnecessary steps.",
        },
        {
          title: "Keep camera information easy to scan",

          body: "Important camera and device information is grouped into clear sections to help operators understand each unit without having to search through dense technical information.",
        },
        {
          title: "Connect cameras with their SolarPole+ context",

          body: "The interface keeps the relationship between each CCTV camera and its SolarPole+ unit clear, helping operators understand which camera belongs to which installed unit.",
        },
      ],

      process: [
        {
          title: "Information Architecture",

          description:
            "Organized the system structure around camera management, device information, and related functions so operators can understand where information belongs and move through the system more clearly.",

          image: "/images/work/solarpole-plus/information-architecture.png",

          layout: "image-right",
        },

        {
          title: "Camera Management Flow",

          description:
            "Mapped the core workflow from reviewing the camera list to opening camera details and accessing related management functions.",

          image: "/images/work/solarpole-plus/user-flow.png",

          layout: "image-left",
        },

        {
          title: "Wireframes",

          description:
            "Explored the structure of key screens before visual design, focusing on information hierarchy, navigation, and camera-management tasks.",

          image: "/images/work/solarpole-plus/wireframes.png",

          layout: "image-right",
        },

        {
          title: "Final Interface",

          description:
            "Translated the system structure and workflows into a clear back-office interface for managing SolarPole+ cameras and related information.",

          image: "/images/work/solarpole-plus/final-ui.png",

          layout: "full",
        },
      ],

      // reflection:
      //   "This project helped me think more deeply about designing back-office systems where clarity, information structure, and efficient management workflows are more important than visual complexity.",
    },
  },
} satisfies WorkProject;

/* =========================================================
   02 — ANTI-HUMAN TRAFFICKING DIVISION PLATFORM
========================================================= */

const antiHumanTraffickingProject = {
  slug: "anti-human-trafficking-risk-platform",
  year: "2026",
  featured: true,

  /* =========================================================
     VISUAL
  ========================================================= */

  tone: "risk",

  /* Homepage / Featured Work */
  cover: "/images/work/anti-human/cover.svg",

  /* Case Study Hero */
  caseCover: "/images/work/anti-human/case-cover.png",

  links: [
    {
      label: "View in Figma",
      href: "",
      type: "prototype",
    },
  ],

  /* =========================================================
     LOCALIZED CONTENT
  ========================================================= */

  content: {
    /* =======================================================
       ENGLISH
    ======================================================= */

    en: {
      /* -----------------------------------------------------
         BASIC INFORMATION
      ----------------------------------------------------- */

      title: "Anti-Human Trafficking Division Platform",

      subtitle: "Risk Monitoring & Field Investigation Support System",

      summary:
        "A web application that turns collected risk-related data into area-level insights, helping officers identify locations that require closer attention and further field investigation.",

      category: "Product Design",

      role: "UX/UI Designer",

      platform: "Web Application",

      /* -----------------------------------------------------
         01 — OVERVIEW
      ----------------------------------------------------- */

      overview:
        "The platform helps officers monitor human-trafficking-related risk information across different areas. It organizes collected data into risk levels, priority items, area rankings, and investigation records so officers can identify locations that may require further attention and on-site investigation.",

      problem:
        "When risk-related information is spread across many records and locations, it can be difficult to understand the overall situation, identify high-risk areas, and determine which locations should be prioritized for further investigation.",

      goal: "Design a clear monitoring experience that helps officers understand the current risk situation, identify priority areas, review supporting information, and use those insights to support field investigation planning.",

      /* -----------------------------------------------------
         02 — DISCOVERY & INPUTS
      ----------------------------------------------------- */

      research: [
        "System requirement review",
        "Risk data structure review",
        "Area and location hierarchy",
        "Field investigation workflow mapping",
        "Dashboard and risk-map structure exploration",
      ],

      /* -----------------------------------------------------
         03 — DESIGN DECISIONS
      ----------------------------------------------------- */

      decisions: [
        {
          title: "Prioritize risk before detailed records",

          body: "The dashboard surfaces critical risk levels, priority items, and high-risk areas first so officers can understand what requires attention before reviewing detailed records.",
        },

        {
          title: "Use geographic hierarchy to support investigation planning",

          body: "Risk information is organized by province and district to make it easier to move from a broader overview toward specific areas that may require further investigation.",
        },

        {
          title: "Connect overview data with field action",

          body: "The interface connects risk summaries, area rankings, investigation records, and time-based statistics so officers can use the information to support decisions about where further field investigation may be needed.",
        },
      ],

      /* -----------------------------------------------------
         04 — SOLUTION
      ----------------------------------------------------- */

      process: [
        {
          title: "Information Architecture",

          description:
            "Structured the platform around the main monitoring tasks, separating the dashboard, risk map, area-level information, and investigation-related data so officers can understand where information belongs and move through the system more clearly.",

          image: "/images/work/anti-human/information-architecture.png",

          layout: "image-right",
        },

        {
          title: "Risk Monitoring Flow",

          description:
            "Mapped the core workflow from reviewing the overall risk situation to identifying a high-risk area, opening supporting information, and using those insights to determine whether further field investigation should be considered.",

          image: "/images/work/anti-human/risk-monitoring-flow.png",

          layout: "image-left",
        },

        {
          title: "Wireframes",

          description:
            "Explored low-fidelity layouts for the dashboard, risk map, and supporting information views to establish hierarchy, navigation, and data relationships before moving into visual design.",

          image: "/images/work/anti-human/wireframes.png",

          layout: "image-right",
        },

        {
          title: "Final Interface",

          description:
            "Translated the information structure and monitoring workflow into a data-heavy operational interface that helps officers review risk levels, identify priority areas, compare geographic patterns, and access information needed for further investigation.",

          image: "/images/work/anti-human/final-interface.png",

          layout: "full",
        },
      ],

      /* -----------------------------------------------------
         05 — REFLECTION
      ----------------------------------------------------- */

      // reflection:
      // "This project strengthened my experience designing data-heavy operational interfaces where the main challenge is not simply displaying information, but helping users understand priority, risk, and what should be investigated next.",
    },

    /* =======================================================
       THAI
    ======================================================= */
  },
} satisfies WorkProject;

/* =========================================================
   03 — KACHEN CORPORATE WEBSITE
========================================================= */

const kachenCorporateWebsiteProject = {
  slug: "kachen-corporate-website",
  year: "2026",
  featured: true,

  /* =========================================================
     VISUAL
  ========================================================= */

  tone: "kachen",
  visualType: "kachen",

  /* Homepage / Featured Work */
  cover: "/images/work/kachen/cover.svg",

  /* Case Study Hero */
  caseCover: "/images/work/kachen/case-cover.png",

  links: [
    {
      label: "View in Website",
      href: "https://www.kachen.co/",
      type: "website",
    },
  ],

  /* =========================================================
     LOCALIZED CONTENT
  ========================================================= */

  content: {
    /* =======================================================
       ENGLISH
    ======================================================= */

    en: {
      /* -----------------------------------------------------
         BASIC INFORMATION
      ----------------------------------------------------- */

      title: "Kachen Corporate Website",

      subtitle: "Enterprise Software & Ethical AI Corporate Website",

      summary:
        "Redesigned and rebuilt Kachen’s corporate website to make complex software and AI solutions easier to understand, navigate, and maintain.",

      category: "UX/UI + Front-end",

      role: "UX/UI Designer & Front-end Developer",

      platform: "Corporate Website",

      /* -----------------------------------------------------
         01 — OVERVIEW
      ----------------------------------------------------- */

      overview:
        "Kachen is a technology company offering enterprise software and AI solutions. The project focused on redesigning the corporate website and rebuilding it with Next.js, creating a clearer information structure, a more consistent user experience, and a frontend architecture that is easier to maintain and expand.",

      problem:
        "The website needed to communicate multiple products and services with different levels of complexity while keeping the overall experience clear and consistent. The existing structure also made ongoing content updates and future expansion more difficult than necessary.",

      goal: "Create a clearer website structure that helps visitors understand Kachen, explore its services and solutions, and reach relevant product information while establishing a reusable and scalable frontend foundation for future development.",

      /* -----------------------------------------------------
         02 — DISCOVERY & INPUTS
      ----------------------------------------------------- */

      research: [
        "Existing website and content review",
        "Page and navigation structure review",
        "Information architecture",
        "Responsive layout planning",
        "SEO and metadata structure review",
      ],

      /* -----------------------------------------------------
         03 — DESIGN DECISIONS
      ----------------------------------------------------- */

      decisions: [
        {
          title: "Organize the website around a clearer content hierarchy",

          body: "The site was reorganized into clear sections for company information, services, solutions, portfolio, blog, and contact, helping visitors understand where different types of information belong.",
        },

        {
          title: "Make complex solutions easier to scan",

          body: "Product and solution pages use clearer headings, content grouping, visual hierarchy, and consistent page patterns so visitors can understand key information before moving into more detailed content.",
        },

        {
          title: "Build reusable components for long-term maintenance",

          body: "The website was rebuilt with reusable Next.js components and shared design patterns, reducing repeated implementation and making future pages and content easier to maintain.",
        },

        {
          title: "Connect design decisions with implementation",

          body: "UX/UI decisions were made with frontend feasibility in mind, allowing responsive behavior, reusable components, and content structure to remain consistent between design and implementation.",
        },
      ],

      /* -----------------------------------------------------
         04 — SOLUTION

      ----------------------------------------------------- */

      process: [
        {
          title: "Site Architecture",

          description:
            "Reorganized the website into a clearer hierarchy across Home, About, Services, Solutions, Portfolio, Blog, and Contact, making it easier for visitors to understand where information belongs and move between different parts of the site.",

          image: "/images/work/kachen/site-architecture.png",

          layout: "image-right",
        },

        {
          title: "Page Structure & User Journey",

          description:
            "Structured key pages around a simple journey: understand Kachen, explore services and solutions, review relevant product information, and continue toward contact when more information is needed.",

          image: "/images/work/kachen/page-structure.png",

          layout: "image-left",
        },

        {
          title: "Visual System",

          description:
            "Created consistent patterns for typography, spacing, buttons, cards, section layouts, and responsive behavior so different pages feel connected while remaining flexible enough for different types of content.",

          image: "/images/work/kachen/visual-system.png",

          layout: "image-right",
        },

        {
          title: "Final Interface",

          description:
            "Translated the new information structure and visual system into responsive interfaces across the corporate website, including the homepage, services, solutions, product pages, portfolio, blog, and contact experience.",

          image: "/images/work/kachen/final-interface.png",

          layout: "full",
        },

        {
          title: "Front-end Implementation",

          description:
            "Rebuilt the website with Next.js using reusable components, responsive layouts, shared design patterns, and structured metadata to create a frontend foundation that is easier to maintain and extend.",

          image: "/images/work/kachen/frontend-implementation.png",

          layout: "image-left",
        },
      ],

      /* -----------------------------------------------------
         05 — REFLECTION
      ----------------------------------------------------- */

      // reflection:
      // "This project strengthened the way I connect UX/UI decisions with frontend implementation. Designing and building the same product helped me think beyond individual screens and consider information structure, responsive behavior, maintainability, and how the website can continue to grow over time.",
    },

    /* =======================================================
       THAI
    ======================================================= */
  },
} satisfies WorkProject;

/* =========================================================
   04 — HARDWARE HOUSE LINE CRM
========================================================= */

const hardwareHouseLineCrmProject = {
  slug: "hardware-house-line-crm",
  year: "2024–2025",
  featured: false,

  tone: "hardware",
  visualType: "hardware",

  content: {
    en: {
      title: "Hardware House LINE CRM",
      subtitle: "Customer Management & Campaign Workflow",
      summary:
        "Designing clearer customer-management, communication, and operational workflows.",
      category: "Product Design",
      role: "UX/UI Designer & Front-end Developer",
      platform: "CRM Platform",
    },
  },
} satisfies WorkProject;

/* =========================================================
   WORK PROJECTS
========================================================= */

export const workProjects = [
  solarPoleProject,
  antiHumanTraffickingProject,
  kachenCorporateWebsiteProject,
  hardwareHouseLineCrmProject,
] as const satisfies readonly WorkProject[];

/* =========================================================
   LOCALIZATION
========================================================= */

function localizeProject(project: WorkProject): LocalizedWorkProject {
  const { content, ...projectData } = project;

  return {
    ...projectData,
    ...content.en,
  };
}

/* =========================================================
   PROJECT SELECTORS
========================================================= */

export function getWorkProject(slug: string): WorkProject | undefined {
  return workProjects.find((project) => project.slug === slug);
}

export function getWorkProjectContent(
  slug: string,
): LocalizedWorkProject | undefined {
  const project = getWorkProject(slug);

  if (!project) {
    return undefined;
  }

  return localizeProject(project);
}

export function getFeaturedWorks(): LocalizedWorkProject[] {
  return workProjects
    .filter((project) => project.featured)
    .map((project) => localizeProject(project));
}

export function getWorkProjects(): LocalizedWorkProject[] {
  return workProjects.map((project) => localizeProject(project));
}
