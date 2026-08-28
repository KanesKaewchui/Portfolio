"use client";

/* =========================================================
   FOOTER
========================================================= */

export default function Footer() {
  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="site-footer">
      <div className="site-shell footer-inner">
        {/* =====================================================
            MAIN FOOTER
        ===================================================== */}

        <div className="footer-grid">
          {/* -------------------------------------------------
              IDENTITY
          ------------------------------------------------- */}

          <div className="footer-identity">
            <p className="footer-name">Kanes Kaewchui</p>

            <p className="footer-role">UX/UI Designer</p>
          </div>

          {/* -------------------------------------------------
              PORTFOLIO META
          ------------------------------------------------- */}

          <div className="footer-meta">
            <p className="footer-meta-title">Portfolio 2026</p>

            <p className="footer-meta-copy">
              Designed &amp; built with Next.js
            </p>
          </div>

          {/* -------------------------------------------------
              BACK TO TOP
          ------------------------------------------------- */}

          <button
            type="button"
            className="footer-back-top"
            onClick={handleBackToTop}
            aria-label="Back to top">
            <span className="footer-back-top-icon" aria-hidden="true">
              ↑
            </span>

            <span className="footer-back-top-label">Back to top</span>
          </button>
        </div>

        {/* =====================================================
            BOTTOM
        ===================================================== */}

        <div className="footer-bottom">
          <p>© 2026 Kanes Kaewchui</p>

          <p>UX/UI · Product Thinking · Front-end</p>
        </div>
      </div>
    </footer>
  );
}
