"use client";

import { useEffect, useRef } from "react";

import Reveal from "@/components/ui/Reveal";

import { capabilities, capabilityMarquee } from "@/data/home";

/* =========================================================
   CONSTANTS
========================================================= */

const MARQUEE_SPEED = 45;

/* =========================================================
   CAPABILITIES SECTION
========================================================= */

export default function CapabilitiesSection() {
  return (
    <section id="capabilities" className="section site-shell">
      {/* =====================================================
          SECTION HEADING
      ===================================================== */}

      <div className="section-heading">
        <div>
          <p className="eyebrow">05 — CAPABILITIES</p>

          <h2>What I bring to product work</h2>
        </div>

        <p>A concise view of the work I do best.</p>
      </div>

      {/* =====================================================
          CAPABILITIES GRID
      ===================================================== */}

      <div className="capabilities-grid">
        {capabilities.map((capability, index) => (
          <CapabilityItem
            key={capability}
            capability={capability}
            index={index}
          />
        ))}
      </div>

      {/* =====================================================
          INFINITE MARQUEE
      ===================================================== */}

      <CapabilityMarquee />
    </section>
  );
}

/* =========================================================
   CAPABILITY ITEM
========================================================= */

type CapabilityItemProps = {
  capability: (typeof capabilities)[number];
  index: number;
};

function CapabilityItem({ capability, index }: CapabilityItemProps) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <Reveal delay={(index % 4) * 40}>
      <div className="capability-row">
        <span className="capability-number">{number}</span>

        <h3 className="capability-title">{capability}</h3>
      </div>
    </Reveal>
  );
}

/* =========================================================
   CAPABILITY MARQUEE
========================================================= */

function CapabilityMarquee() {
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const track = trackRef.current;

    if (!track) {
      return;
    }

    /* -------------------------------------------------------
       ANIMATION STATE
    ------------------------------------------------------- */

    let animationFrame = 0;
    let offset = 0;

    let previousTime = performance.now();

    /* -------------------------------------------------------
       ANIMATION LOOP
    ------------------------------------------------------- */

    const animate = (currentTime: number) => {
      /*
        เวลาที่ผ่านไปในแต่ละ Frame
        แปลงจาก milliseconds → seconds
      */
      const deltaTime = (currentTime - previousTime) / 1000;

      previousTime = currentTime;

      /*
        Track มีข้อความเหมือนกัน 2 Groups

        ดังนั้นครึ่งหนึ่งของ scrollWidth
        = ความกว้างของ Group หนึ่งชุด
      */
      const groupWidth = track.scrollWidth / 2;

      /*
        เลื่อนไปทางซ้ายตามความเร็ว
      */
      offset -= MARQUEE_SPEED * deltaTime;

      /*
        เมื่อ Group 01 เลื่อนออกไปหมด
        ย้ายตำแหน่งกลับหนึ่ง Group

        Group 02 มีข้อมูลเหมือนกัน
        จึงเกิด Infinite Loop
        โดยไม่เห็นจังหวะ Reset
      */
      if (groupWidth > 0 && Math.abs(offset) >= groupWidth) {
        offset += groupWidth;
      }

      /*
        ใช้ translate3d เพื่อให้ Browser
        จัดการ Animation ผ่าน GPU ได้ดีขึ้น
      */
      track.style.transform = `translate3d(${offset}px, 0, 0)`;

      animationFrame = requestAnimationFrame(animate);
    };

    /* -------------------------------------------------------
       START
    ------------------------------------------------------- */

    animationFrame = requestAnimationFrame(animate);

    /* -------------------------------------------------------
       CLEANUP
    ------------------------------------------------------- */

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div className="capability-marquee" aria-hidden="true">
      <div ref={trackRef} className="capability-marquee-track">
        {/* GROUP 01 */}

        <MarqueeGroup />

        {/* GROUP 02
            Duplicate สำหรับ Infinite Loop
        */}

        <MarqueeGroup />
      </div>
    </div>
  );
}

/* =========================================================
   MARQUEE GROUP
========================================================= */

function MarqueeGroup() {
  return (
    <div className="capability-marquee-group">
      {capabilityMarquee.map((item) => (
        <span key={item} className="capability-marquee-item">
          {item}

          <span className="capability-marquee-separator" aria-hidden="true">
            —
          </span>
        </span>
      ))}
    </div>
  );
}
