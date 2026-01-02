/**
 * Footer Section - BEM Component
 * Block: footer
 * Elements: footer__logo, footer__title, footer__cta, footer__copyright
 */
import Image from "next/image";

export function FooterSection() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <Image
          src="https://res.cloudinary.com/dgjsq5fnl/image/upload/v1767366698/logo_pour_Abby-removebg-preview_qqcfi4.png"
          alt="Logo"
          width={80}
          height={80}
          className="footer__logo"
        />
        <h2 className="footer__title">Prêt à libérer votre potentiel ?</h2>
        <a
          href="https://calendly.com/celassistpro/15min"
          target="_blank"
          rel="noreferrer"
          className="footer__cta"
        >
          Réserver mon diagnostic offert
        </a>
        <div className="footer__copyright">
          © 2025 CelAssistPro. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
