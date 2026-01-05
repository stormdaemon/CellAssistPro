/**
 * Hero Section - BEM Component
 * Block: hero
 * Layout: Header + Split 50/50 with vertical gradient
 */
import Image from "next/image";

export function HeroSection() {
  return (
    <div className="hero">
      {/* Header - Top Bar */}
      <div className="hero__header">
        <div className="hero__header-container">
          {/* Left: Logo */}
          <div className="hero__logo">
            <Image
              src="https://res.cloudinary.com/dgjsq5fnl/image/upload/v1767366698/logo_pour_Abby-removebg-preview_qqcfi4.png"
              alt="CelAssistPro Logo"
              width={136}
              height={136}
              className="hero__logo-img"
            />
            <h1 className="hero__logo-title">
              <span className="hero__logo-title--accent">Cel</span>
              <span className="hero__logo-title--base">Assist</span>
              <span className="hero__logo-title--accent">Pro</span>
            </h1>
          </div>

          {/* Center: Title */}
          <div className="hero__header-title">
            Gagnez jusqu'à 30 heures par mois sur votre organisation, sans recruter
          </div>

          {/* Right: CTA */}
          <a
            href="https://calendly.com/celassistpro/15min"
            target="_blank"
            rel="noreferrer"
            className="hero__cta hero__cta--header"
          >
            Prendre Rendez-vous
          </a>
        </div>
      </div>

      {/* Main Content: Split 50/50 */}
      <div className="hero__split">
        {/* Left Column: Content with purple gradient */}
        <div className="hero__left">
          <div className="hero__left-content">
            <div className="hero__badge">
              <svg className="hero__badge-icon" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
              <span className="hero__badge-text">Dirigeants & Entrepreneurs</span>
            </div>

            <h2 className="hero__title">
              Votre co-pilote administratif & digital, bras droit stratégique des dirigeants
            </h2>

            <h3 className="hero__subtitle">
              Administrative & Digitale
            </h3>

            <p className="hero__quote">
              "Je ne suis pas une simple assistante, je suis l'architecte de votre système administratif."
            </p>

            <p className="hero__slogan">
              Libérez jusqu'à 30 heures par mois grâce à des systèmes administratifs qui tournent sans vous.
            </p>

            <div className="hero__actions">
              <a
                href="https://calendly.com/celassistpro/15min"
                target="_blank"
                rel="noreferrer"
                className="hero__cta hero__cta--primary"
              >
                Réserver mon diagnostic offert
                <svg className="hero__cta-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Full height image */}
        <div className="hero__right">
          <Image
            src="https://res.cloudinary.com/dgjsq5fnl/image/upload/v1767615310/photocelassistpro_fqlopi.png"
            alt="Céline"
            width={800}
            height={1200}
            className="hero__image"
            priority
          />
        </div>
      </div>
    </div>
  );
}
