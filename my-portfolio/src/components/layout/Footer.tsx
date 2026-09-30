"use client";

import { siteConfig } from "@/config/site";
import { messages } from "@/i18n";

/* =========================================================
   FOOTER
========================================================= */

export default function Footer() {
  const t = messages.en.footer;

  /* =======================================================
     BACK TO TOP
  ======================================================= */

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  /* =======================================================
     RENDER
  ======================================================= */

  return (
    <footer className="site-footer">
      <div className="site-shell footer-inner">
        <button
          type="button"
          className="footer-back-top"
          onClick={handleBackToTop}
          aria-label={t.backToTop}>
          <span className="footer-back-top-icon" aria-hidden="true">
            ↑
          </span>
        </button>

        {/* =================================================
            BOTTOM
        ================================================= */}

        <div className="footer-bottom">
          <p>
            © {siteConfig.portfolioYear} {siteConfig.name}
          </p>

          <p>{t.signature}</p>
        </div>
      </div>
    </footer>
  );
}
