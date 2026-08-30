"use client";

import { siteConfig } from "@/config/site";
import { messages } from "@/i18n";

import { usePortfolio } from "@/providers/PortfolioProvider";

/* =========================================================
   FOOTER
========================================================= */

export default function Footer() {
  const { language } = usePortfolio();

  const t = messages[language].footer;

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
        <div className="footer-grid">
          {/* ===============================================
              IDENTITY
          =============================================== */}

          <div className="footer-identity">
            <p className="footer-name">{siteConfig.name}</p>

            <p className="footer-role">{t.role}</p>
          </div>

          {/* ===============================================
              META
          =============================================== */}

          <div className="footer-meta">
            <p className="footer-meta-title">{t.portfolio}</p>

            <p className="footer-meta-copy">{t.builtWith}</p>
          </div>

          {/* ===============================================
              BACK TO TOP
          =============================================== */}

          <button
            type="button"
            className="footer-back-top"
            onClick={handleBackToTop}
            aria-label={t.backToTop}>
            <span className="footer-back-top-icon" aria-hidden="true">
              ↑
            </span>

            <span className="footer-back-top-label">{t.backToTop}</span>
          </button>
        </div>

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
