/**
 * Footer Section - BEM Component
 * Block: footer
 * Elements: footer__logo, footer__title, footer__subtitle, footer__cta, footer__copyright
 */
"use client";

import { useState } from "react";
import Image from "next/image";
import { DiagnosticModal } from "@/components/ui/diagnostic-modal";

export function FooterSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleReserveDiagnostic = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  return (
    <>
      <footer className="footer">
        <div className="footer__container">
          <Image
            src="https://res.cloudinary.com/dgjsq5fnl/image/upload/v1767366698/logo_pour_Abby-removebg-preview_qqcfi4.png"
            alt="Logo"
            width={80}
            height={80}
            className="footer__logo"
          />
          <h2 className="footer__title">Prêt(e) à reprendre la main sur votre organisation ?</h2>
          <p className="footer__subtitle">
            En 15 minutes, on identifie ensemble le levier le plus simple pour vous libérer du temps dès ce mois-ci.
          </p>
          <a
            href="https://calendly.com/celassistpro/15min"
            target="_blank"
            rel="noreferrer"
            className="footer__cta"
            onClick={handleReserveDiagnostic}
          >
            Réserver mon diagnostic offert (15 min)
          </a>
          <div className="footer__copyright">
            © 2025 CelAssistPro. Tous droits réservés.
          </div>
        </div>
      </footer>

      <DiagnosticModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
