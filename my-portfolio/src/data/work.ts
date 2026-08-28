import type { Language } from "@/i18n";

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

  /* หน้า Project Detail */
  caseCover: "/images/work/solarpole-plus/case-cover.jpg",

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

    th: {
      title: "SolarPole+",

      subtitle: "ระบบจัดการกล้อง CCTV และ AI สำหรับเสาไฟโซลาร์เซลล์",

      summary:
        "Web Application หลังบ้านสำหรับจัดการข้อมูลกล้อง CCTV และความสามารถด้าน AI ที่เชื่อมต่อกับ SolarPole+ แต่ละจุดติดตั้ง",

      category: "Product Design",

      role: "UX/UI Designer",

      platform: "Web Application",

      overview:
        "SolarPole+ เป็นเสาไฟพลังงานแสงอาทิตย์ที่รวมระบบแสงสว่าง กล้อง CCTV และความสามารถด้าน AI โปรเจกต์นี้เน้นการออกแบบ Web Application หลังบ้านสำหรับจัดการกล้องที่เชื่อมต่อกับ SolarPole+ โดยนำข้อมูลและฟังก์ชันที่เกี่ยวข้องกับกล้องมาจัดให้อยู่ในระบบที่ชัดเจนและจัดการได้ง่ายขึ้น",

      problem:
        "เมื่อมีการติดตั้ง SolarPole+ และกล้อง CCTV หลายจุด การจัดการข้อมูลของกล้อง รายละเอียดอุปกรณ์ และฟังก์ชันที่เกี่ยวข้องอาจซับซ้อนขึ้น หากข้อมูลไม่ได้ถูกจัดให้อยู่ในระบบเดียวกัน เจ้าหน้าที่จะใช้เวลาในการค้นหาและจัดการข้อมูลมากขึ้น",

      goal: "ออกแบบระบบหลังบ้านที่ช่วยให้เจ้าหน้าที่สามารถจัดการกล้อง CCTV ที่เชื่อมต่อกับ SolarPole+ ตรวจสอบข้อมูลที่เกี่ยวข้อง และเข้าถึงฟังก์ชันต่าง ๆ ของระบบได้อย่างชัดเจนและไม่ซับซ้อน",

      research: [
        "ทบทวน Requirement ของระบบ",
        "ทบทวนข้อมูลของกล้องและอุปกรณ์",
        "วางโครงสร้าง Information Architecture",
        "วางขั้นตอนการจัดการกล้อง",
        "ทดลองโครงสร้างหน้าจอและการนำเสนอข้อมูล",
      ],

      decisions: [
        {
          title: "จัดโครงสร้างระบบโดยยึดการจัดการกล้องเป็นหลัก",

          body: "วาง Information Architecture จากงานหลักที่เกี่ยวข้องกับการจัดการกล้อง เพื่อให้เจ้าหน้าที่สามารถเข้าถึงข้อมูลและฟังก์ชันที่เกี่ยวข้องได้โดยไม่ต้องผ่านขั้นตอนที่ซับซ้อน",
        },
        {
          title: "จัดข้อมูลของกล้องให้อ่านและตรวจสอบได้ง่าย",

          body: "แยกข้อมูลของกล้องและอุปกรณ์ออกเป็นกลุ่มที่ชัดเจน เพื่อลดความหนาแน่นของข้อมูลและช่วยให้เจ้าหน้าที่มองหาข้อมูลที่ต้องการได้เร็วขึ้น",
        },
        {
          title: "ทำให้ความสัมพันธ์ระหว่างกล้องกับ SolarPole+ ชัดเจน",

          body: "ออกแบบการนำเสนอข้อมูลให้เห็นได้ว่ากล้องแต่ละตัวเชื่อมโยงกับ SolarPole+ จุดใด เพื่อช่วยให้เข้าใจบริบทของอุปกรณ์แต่ละจุดได้ง่ายขึ้น",
        },
      ],
      process: [
        {
          title: "Information Architecture",

          description:
            "จัดโครงสร้างระบบโดยยึดการจัดการกล้อง ข้อมูลอุปกรณ์ และฟังก์ชันที่เกี่ยวข้องเป็นหลัก เพื่อให้เจ้าหน้าที่เข้าใจว่าข้อมูลแต่ละส่วนอยู่ตรงไหนและเข้าถึงได้ง่าย",

          image:
            "/images/work/solarpole-plus/process/information-architecture.webp",

          layout: "image-right",
        },

        {
          title: "Camera Management Flow",

          description:
            "วาง Flow หลักตั้งแต่การดูรายการกล้อง เปิดดูรายละเอียด ไปจนถึงการเข้าถึงฟังก์ชันที่เกี่ยวข้องกับการจัดการกล้อง",

          image: "/images/work/solarpole-plus/process/user-flow.webp",

          layout: "image-left",
        },

        {
          title: "Wireframes",

          description:
            "ทดลองโครงสร้างของหน้าจอหลักก่อนลงรายละเอียดด้าน Visual โดยให้ความสำคัญกับลำดับข้อมูล Navigation และงานที่เกี่ยวข้องกับการจัดการกล้อง",

          image: "/images/work/solarpole-plus/process/wireframes.webp",

          layout: "image-right",
        },

        {
          title: "Final Interface",

          description:
            "นำโครงสร้างระบบและ Workflow มาพัฒนาเป็นหน้าจอหลังบ้านที่ช่วยให้การจัดการกล้องและข้อมูลของ SolarPole+ มีความชัดเจนมากขึ้น",

          image: "/images/work/solarpole-plus/process/final-ui.webp",

          layout: "full",
        },
      ],

      //   reflection:
      //     "โปรเจกต์นี้ทำให้ผมได้ฝึกคิดการออกแบบระบบหลังบ้านที่มีข้อมูลอุปกรณ์หลายส่วน โดยให้ความสำคัญกับโครงสร้างข้อมูล ความชัดเจน และขั้นตอนการจัดการมากกว่าการเพิ่มองค์ประกอบบนหน้าจอโดยไม่จำเป็น",
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

    th: {
      /* -----------------------------------------------------
         BASIC INFORMATION
      ----------------------------------------------------- */

      title: "ระบบติดตามและวิเคราะห์ความเสี่ยงด้านการค้ามนุษย์",

      subtitle: "ระบบติดตามความเสี่ยงและสนับสนุนการตรวจสอบพื้นที่",

      summary:
        "Web Application ที่นำข้อมูลความเสี่ยงมาจัดเป็นภาพรวมระดับพื้นที่ เพื่อช่วยให้เจ้าหน้าที่มองเห็นจุดที่ควรเฝ้าระวังและนำไปตรวจสอบเพิ่มเติมในพื้นที่จริง",

      category: "Product Design",

      role: "UX/UI Designer",

      platform: "Web Application",

      /* -----------------------------------------------------
         01 — OVERVIEW
      ----------------------------------------------------- */

      overview:
        "ระบบช่วยให้เจ้าหน้าที่ติดตามข้อมูลความเสี่ยงที่เกี่ยวข้องกับการค้ามนุษย์ในแต่ละพื้นที่ โดยนำข้อมูลที่รวบรวมมาแสดงเป็นระดับความเสี่ยง รายการที่ควรเร่งดำเนินการ อันดับพื้นที่เสี่ยง และประวัติการตรวจ เพื่อช่วยให้มองเห็นพื้นที่ที่ควรให้ความสนใจและนำไปตรวจสอบจริงต่อไป",

      problem:
        "เมื่อข้อมูลความเสี่ยงมีจำนวนมากและกระจายอยู่ในหลายพื้นที่ การมองเห็นภาพรวม การระบุพื้นที่ที่มีความเสี่ยงสูง และการตัดสินใจว่าพื้นที่ใดควรได้รับการตรวจสอบก่อนอาจทำได้ยาก",

      goal: "ออกแบบประสบการณ์การติดตามข้อมูลที่ช่วยให้เจ้าหน้าที่เข้าใจสถานการณ์ความเสี่ยง มองเห็นพื้นที่ที่ควรให้ความสำคัญ ตรวจสอบข้อมูลประกอบ และใช้ข้อมูลเหล่านั้นสนับสนุนการวางแผนลงพื้นที่",

      /* -----------------------------------------------------
         02 — DISCOVERY & INPUTS
      ----------------------------------------------------- */

      research: [
        "ทบทวน Requirement ของระบบ",
        "ทบทวนโครงสร้างข้อมูลความเสี่ยง",
        "วิเคราะห์ลำดับพื้นที่ จังหวัด และเขต/อำเภอ",
        "วาง Flow การติดตามและตรวจสอบพื้นที่",
        "ทดลองโครงสร้าง Dashboard และ Risk Map",
      ],

      /* -----------------------------------------------------
         03 — DESIGN DECISIONS
      ----------------------------------------------------- */

      decisions: [
        {
          title: "แสดงความเสี่ยงและสิ่งที่ต้องเร่งดำเนินการก่อนรายละเอียด",

          body: "นำระดับความเสี่ยง รายการสำคัญ และพื้นที่ที่ต้องเฝ้าระวังขึ้นมาเป็นข้อมูลแรก เพื่อให้เจ้าหน้าที่มองเห็นสิ่งที่ควรให้ความสำคัญก่อนลงไปดูข้อมูลรายละเอียด",
        },

        {
          title: "ใช้ลำดับพื้นที่ช่วยให้เจาะจากภาพรวมไปสู่จุดตรวจสอบ",

          body: "จัดข้อมูลความเสี่ยงตามจังหวัดและเขตหรืออำเภอ เพื่อให้สามารถเริ่มจากภาพรวมแล้วเจาะลงไปยังพื้นที่ที่ควรตรวจสอบเพิ่มเติมได้ง่ายขึ้น",
        },

        {
          title: "เชื่อมข้อมูลภาพรวมเข้ากับการดำเนินงานภาคสนาม",

          body: "ออกแบบให้ข้อมูลระดับความเสี่ยง อันดับพื้นที่ ประวัติการตรวจ และข้อมูลตามช่วงเวลาช่วยสนับสนุนการตัดสินใจว่าพื้นที่ใดควรได้รับการติดตามหรือตรวจสอบต่อ",
        },
      ],

      /* -----------------------------------------------------
         04 — SOLUTION
      ----------------------------------------------------- */

      process: [
        {
          title: "Information Architecture",

          description:
            "จัดโครงสร้างระบบตามงานหลักของเจ้าหน้าที่ โดยแยก Dashboard, Risk Map, ข้อมูลระดับพื้นที่ และข้อมูลที่เกี่ยวข้องกับการตรวจสอบออกจากกันอย่างชัดเจน เพื่อให้เข้าใจว่าข้อมูลแต่ละประเภทอยู่ตรงไหนและสามารถเข้าถึงได้ง่ายขึ้น",

          image: "/images/work/anti-human/information-architecture.webp",

          layout: "image-right",
        },

        {
          title: "Risk Monitoring Flow",

          description:
            "วาง Flow หลักตั้งแต่การดูภาพรวมสถานการณ์ความเสี่ยง การพบพื้นที่ที่ควรให้ความสนใจ การเจาะดูข้อมูลประกอบ ไปจนถึงการนำข้อมูลเหล่านั้นมาใช้พิจารณาว่าควรตรวจสอบพื้นที่จริงเพิ่มเติมหรือไม่",

          image: "/images/work/anti-human/risk-monitoring-flow.webp",

          layout: "image-left",
        },

        {
          title: "Wireframes",

          description:
            "ทดลองโครงสร้างหน้าจอระดับ Low-fidelity สำหรับ Dashboard, Risk Map และหน้าข้อมูลที่เกี่ยวข้อง เพื่อกำหนดลำดับข้อมูล Navigation และความสัมพันธ์ระหว่างข้อมูลก่อนพัฒนาเป็น Final UI",

          image: "/images/work/anti-human/wireframes.webp",

          layout: "image-right",
        },

        {
          title: "Final Interface",

          description:
            "นำโครงสร้างข้อมูลและ Flow การติดตามความเสี่ยงมาพัฒนาเป็นหน้าจอสำหรับการปฏิบัติงานจริง ช่วยให้เจ้าหน้าที่ตรวจสอบระดับความเสี่ยง มองเห็นพื้นที่สำคัญ เปรียบเทียบข้อมูลตามพื้นที่ และเข้าถึงข้อมูลประกอบที่ใช้สำหรับการตรวจสอบต่อได้ง่ายขึ้น",

          image: "/images/work/anti-human/final-interface.webp",

          layout: "full",
        },
      ],

      /* -----------------------------------------------------
         05 — REFLECTION
      ----------------------------------------------------- */

      // reflection:
      // "โปรเจกต์นี้ทำให้ผมได้ฝึกออกแบบระบบที่มีข้อมูลจำนวนมากและมีผลต่อการตัดสินใจ โดยโจทย์สำคัญไม่ใช่เพียงการแสดงข้อมูล แต่คือการช่วยให้ผู้ใช้เข้าใจลำดับความสำคัญ ความเสี่ยง และสิ่งที่ควรนำไปตรวจสอบต่อ",
    },
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

         process ใช้แทน solutions
         และ image จะอยู่ในแต่ละ Step
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

    th: {
      /* -----------------------------------------------------
         BASIC INFORMATION
      ----------------------------------------------------- */

      title: "Kachen Corporate Website",

      subtitle: "เว็บไซต์องค์กรสำหรับ Enterprise Software และ Ethical AI",

      summary:
        "ออกแบบและพัฒนาเว็บไซต์ Kachen ใหม่ เพื่อให้ข้อมูลด้าน Software และ AI ที่ค่อนข้างซับซ้อนเข้าใจง่ายขึ้น ใช้งานได้ชัดเจน และดูแลต่อได้ในระยะยาว",

      category: "UX/UI + Front-end",

      role: "UX/UI Designer & Front-end Developer",

      platform: "Corporate Website",

      /* -----------------------------------------------------
         01 — OVERVIEW
      ----------------------------------------------------- */

      overview:
        "Kachen เป็นบริษัทเทคโนโลยีที่ให้บริการด้าน Enterprise Software และ AI โปรเจกต์นี้เน้นการออกแบบเว็บไซต์องค์กรใหม่และพัฒนาด้วย Next.js โดยปรับทั้งโครงสร้างข้อมูล ประสบการณ์การใช้งาน และโครงสร้าง Front-end เพื่อให้เว็บไซต์เข้าใจง่าย มีความสม่ำเสมอ และสามารถดูแลหรือขยายต่อได้ง่ายขึ้น",

      problem:
        "เว็บไซต์ต้องนำเสนอผลิตภัณฑ์และบริการหลายประเภทที่มีระดับความซับซ้อนแตกต่างกัน หากโครงสร้างข้อมูลและรูปแบบการนำเสนอไม่ชัดเจน ผู้ใช้อาจเข้าใจได้ยากว่าบริษัทให้บริการอะไร รวมถึงทำให้การเพิ่มหรือปรับปรุงเนื้อหาในอนาคตทำได้ยากขึ้น",

      goal: "ออกแบบโครงสร้างเว็บไซต์ที่ช่วยให้ผู้เข้าชมเข้าใจ Kachen สำรวจบริการและโซลูชันต่าง ๆ และเข้าถึงข้อมูลผลิตภัณฑ์ที่ต้องการได้ง่ายขึ้น พร้อมวางโครงสร้าง Front-end ที่สามารถนำกลับมาใช้ซ้ำและขยายต่อได้ในอนาคต",

      /* -----------------------------------------------------
         02 — DISCOVERY & INPUTS
      ----------------------------------------------------- */

      research: [
        "ทบทวนเว็บไซต์และเนื้อหาเดิม",
        "ทบทวนโครงสร้างหน้าและ Navigation",
        "วาง Information Architecture",
        "วางแนวทาง Responsive Layout",
        "ทบทวนโครงสร้าง SEO และ Metadata",
      ],

      /* -----------------------------------------------------
         03 — DESIGN DECISIONS
      ----------------------------------------------------- */

      decisions: [
        {
          title: "จัดโครงสร้างเว็บไซต์ให้แบ่งประเภทข้อมูลชัดเจน",

          body: "จัดกลุ่มเนื้อหาออกเป็นส่วนต่าง ๆ เช่น ข้อมูลบริษัท บริการ โซลูชัน ผลงาน บทความ และช่องทางติดต่อ เพื่อช่วยให้ผู้ใช้เข้าใจว่าข้อมูลแต่ละประเภทควรหาได้จากส่วนใด",
        },

        {
          title: "ทำให้ข้อมูลของโซลูชันที่ซับซ้อนอ่านได้ง่ายขึ้น",

          body: "ปรับลำดับหัวข้อ การแบ่งกลุ่มเนื้อหา และ Visual Hierarchy ของหน้า Product และ Solution เพื่อให้ผู้ใช้สามารถสแกนข้อมูลสำคัญก่อนเลือกอ่านรายละเอียดเพิ่มเติม",
        },

        {
          title: "สร้าง Component ที่สามารถนำกลับมาใช้ซ้ำได้",

          body: "พัฒนาเว็บไซต์ด้วย Next.js และวาง Component ร่วมสำหรับรูปแบบที่ใช้งานซ้ำ เพื่อลดการเขียนโค้ดซ้ำและช่วยให้การเพิ่มหรือแก้ไขหน้าในอนาคตทำได้ง่ายขึ้น",
        },

        {
          title: "เชื่อมการออกแบบกับการพัฒนาให้เป็นระบบเดียวกัน",

          body: "ออกแบบ UX/UI โดยคำนึงถึงข้อจำกัดและพฤติกรรมของ Front-end ตั้งแต่ต้น ทำให้ Responsive Design, Component และโครงสร้างเนื้อหาสอดคล้องกันระหว่าง Design และ Implementation",
        },
      ],

      /* -----------------------------------------------------
         04 — SOLUTION
      ----------------------------------------------------- */

      process: [
        {
          title: "Site Architecture",

          description:
            "ปรับโครงสร้างเว็บไซต์ใหม่ให้แบ่งข้อมูลออกเป็น Home, About, Services, Solutions, Portfolio, Blog และ Contact อย่างชัดเจน เพื่อช่วยให้ผู้ใช้เข้าใจว่าข้อมูลแต่ละประเภทอยู่ตรงไหนและสามารถไปยังส่วนที่ต้องการได้ง่ายขึ้น",

          image: "/images/work/kachen/site-architecture.webp",

          layout: "image-right",
        },

        {
          title: "Page Structure & User Journey",

          description:
            "วางโครงสร้างหน้าหลักให้รองรับเส้นทางตั้งแต่การทำความเข้าใจ Kachen สำรวจบริการและโซลูชัน ดูรายละเอียดผลิตภัณฑ์ที่สนใจ ไปจนถึงการติดต่อเมื่อผู้ใช้ต้องการข้อมูลเพิ่มเติม",

          image: "/images/work/kachen/page-structure.webp",

          layout: "image-left",
        },

        {
          title: "Visual System",

          description:
            "กำหนดรูปแบบร่วมของ Typography, Spacing, Button, Card, Section Layout และ Responsive Behavior เพื่อให้แต่ละหน้ามีความสม่ำเสมอและสามารถนำรูปแบบกลับมาใช้ซ้ำได้",

          image: "/images/work/kachen/visual-system.webp",

          layout: "image-right",
        },

        {
          title: "Final Interface",

          description:
            "นำโครงสร้างข้อมูลและ Visual System มาพัฒนาเป็นหน้าจอ Responsive สำหรับเว็บไซต์จริง ครอบคลุมหน้า Home, Services, Solutions, Product, Portfolio, Blog และ Contact",

          image: "/images/work/kachen/final-interface.webp",

          layout: "full",
        },

        {
          title: "Front-end Implementation",

          description:
            "พัฒนาเว็บไซต์ใหม่ด้วย Next.js โดยใช้ Reusable Components, Responsive Layout, Shared Design Patterns และโครงสร้าง Metadata เพื่อให้เว็บไซต์สามารถดูแลและขยายต่อได้ง่ายขึ้น",

          image: "/images/work/kachen/frontend-implementation.webp",

          layout: "image-left",
        },
      ],

      /* -----------------------------------------------------
         05 — REFLECTION
      ----------------------------------------------------- */

      // reflection:
      // "โปรเจกต์นี้ช่วยให้ผมได้ใช้ทั้งมุมมองด้าน UX/UI และ Front-end กับงานเดียวกัน ทำให้ไม่ได้คิดเพียงว่าหน้าจอควรหน้าตาอย่างไร แต่รวมถึงโครงสร้างข้อมูล Responsive Behavior การนำ Component กลับมาใช้ซ้ำ และการทำให้เว็บไซต์สามารถเติบโตต่อได้ในระยะยาว",
    },
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

    th: {
      title: "Hardware House LINE CRM",
      subtitle: "ระบบจัดการลูกค้าและแคมเปญผ่าน LINE",
      summary:
        "ออกแบบขั้นตอนการจัดการลูกค้า การสื่อสาร และการทำแคมเปญให้ทีมงานใช้งานได้ง่ายและเป็นระบบมากขึ้น",
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

function localizeProject(
  project: WorkProject,
  language: Language,
): LocalizedWorkProject {
  const { content, ...projectData } = project;

  return {
    ...projectData,
    ...content[language],
  };
}

/* =========================================================
   PROJECT SELECTORS
========================================================= */

export function getWorkProject(slug: string): WorkProject | undefined {
  return workProjects.find((project) => project.slug === slug);
}

export function getLocalizedWorkProject(
  slug: string,
  language: Language,
): LocalizedWorkProject | undefined {
  const project = getWorkProject(slug);

  if (!project) {
    return undefined;
  }

  return localizeProject(project, language);
}

export function getLocalizedFeaturedWorks(
  language: Language,
): LocalizedWorkProject[] {
  return workProjects
    .filter((project) => project.featured)
    .map((project) => localizeProject(project, language));
}

export function getLocalizedWorkProjects(
  language: Language,
): LocalizedWorkProject[] {
  return workProjects.map((project) => localizeProject(project, language));
}
