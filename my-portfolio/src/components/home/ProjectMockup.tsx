import type { WorkVisualType } from "@/types/work";

/* =========================================================
   PROJECT MOCKUP
========================================================= */

type ProjectMockupProps = {
  kind: WorkVisualType;
};

export default function ProjectMockup({ kind }: ProjectMockupProps) {
  switch (kind) {
    case "solarpole":
      return <SolarPoleMockup />;

    case "kachen":
      return <KachenMockup />;

    case "fixflow":
      return <DashboardMockup kind="fixflow" brand="FixFlow" />;

    case "hardware":
      return <DashboardMockup kind="hardware" brand="HWH CRM" />;

    default:
      return null;
  }
}

/* =========================================================
   SOLARPOLE MOCKUP
========================================================= */

function SolarPoleMockup() {
  return (
    <div className="mock-solarpole">
      {/* -----------------------------------------------------
          PRODUCT
      ----------------------------------------------------- */}

      <div className="mock-solarpole-product">SolarPole+</div>

      {/* -----------------------------------------------------
          PRODUCT INFO
      ----------------------------------------------------- */}

      <div className="mock-solarpole-info">
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}

/* =========================================================
   KACHEN MOCKUP
========================================================= */

function KachenMockup() {
  return (
    <div className="mock-browser mock-browser--kachen">
      {/* -----------------------------------------------------
          BROWSER BAR
      ----------------------------------------------------- */}

      <div className="mock-bar" />

      {/* -----------------------------------------------------
          HERO
      ----------------------------------------------------- */}

      <div className="mock-kachen-hero">
        <span />
        <span />
      </div>

      {/* -----------------------------------------------------
          CONTENT GRID
      ----------------------------------------------------- */}

      <div className="mock-kachen-grid">
        <i />
        <i />
        <i />
      </div>
    </div>
  );
}

/* =========================================================
   DASHBOARD MOCKUP
========================================================= */

type DashboardMockupProps = {
  kind: "fixflow" | "hardware";
  brand: string;
};

function DashboardMockup({ kind, brand }: DashboardMockupProps) {
  return (
    <div className={`mock-browser mock-browser--${kind}`}>
      {/* -----------------------------------------------------
          BROWSER BAR
      ----------------------------------------------------- */}

      <div className="mock-bar" />

      {/* -----------------------------------------------------
          DASHBOARD LAYOUT
      ----------------------------------------------------- */}

      <div className="mock-layout">
        <MockSidebar brand={brand} />

        <MockContent />
      </div>
    </div>
  );
}

/* =========================================================
   MOCK SIDEBAR
========================================================= */

type MockSidebarProps = {
  brand: string;
};

function MockSidebar({ brand }: MockSidebarProps) {
  return (
    <aside className="mock-sidebar">
      <b>{brand}</b>

      <i />
      <i />
      <i />
      <i />
      <i />
    </aside>
  );
}

/* =========================================================
   MOCK CONTENT
========================================================= */

function MockContent() {
  return (
    <div className="mock-content">
      {/* -----------------------------------------------------
          HEADING
      ----------------------------------------------------- */}

      <b />

      {/* -----------------------------------------------------
          DESCRIPTION
      ----------------------------------------------------- */}

      <i />

      {/* -----------------------------------------------------
          CARDS
      ----------------------------------------------------- */}

      <div>
        <span />
        <span />
      </div>

      {/* -----------------------------------------------------
          ACTION
      ----------------------------------------------------- */}

      <button type="button" tabIndex={-1} aria-hidden="true" />
    </div>
  );
}
