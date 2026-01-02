/**
 * Hero Section - BEM Component
 * Block: hero
 * Elements: hero__nav, hero__content, hero__badge, hero__title, hero__cta, hero__image
 */
import Image from "next/image";

export function HeroSection() {
  return (
    <header className="hero">
      {/* Navigation */}
      <nav className="hero__nav">
        {/* Mobile: 3 lignes centrées */}
        <div className="hero__nav-mobile">
          <div className="hero__logo">
            <Image
              src="https://res.cloudinary.com/dgjsq5fnl/image/upload/v1767366698/logo_pour_Abby-removebg-preview_qqcfi4.png"
              alt="CelAssistPro Logo"
              width={96}
              height={96}
              className="hero__logo-img"
            />
            <h1 className="hero__logo-title">
              <span className="hero__logo-title--accent">Cel</span>
              <span className="hero__logo-title--base">Assist</span>
              <span className="hero__logo-title--accent">Pro</span>
            </h1>
          </div>
          <a
            href="https://calendly.com/celassistpro/15min"
            target="_blank"
            rel="noreferrer"
            className="hero__cta hero__cta--outline"
          >
            Réserver un appel
          </a>
        </div>

        {/* Desktop: Layout horizontal */}
        <div className="hero__nav-desktop">
          <div className="hero__brand">
            <Image
              src="https://res.cloudinary.com/dgjsq5fnl/image/upload/v1767366698/logo_pour_Abby-removebg-preview_qqcfi4.png"
              alt="CelAssistPro Logo"
              width={80}
              height={80}
              className="hero__logo-img"
            />
            <h1 className="hero__logo-title">
              <span className="hero__logo-title--accent">Cel</span>
              <span className="hero__logo-title--base">Assist</span>
              <span className="hero__logo-title--accent">Pro</span>
            </h1>
          </div>
          <a
            href="https://calendly.com/celassistpro/15min"
            target="_blank"
            rel="noreferrer"
            className="hero__cta hero__cta--outline"
          >
            Réserver un appel
          </a>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="hero__content flex flex-col-reverse lg:flex-row items-center gap-8 md:gap-12">
        <div className="hero__text">
          <div className="hero__badge">
            <svg className="hero__badge-icon" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
            <span className="hero__badge-text">Dirigeants & Entrepreneurs</span>
          </div>

          <h1 className="hero__title">
            Votre Co-pilote <br />
            <span className="hero__title--gradient">Administrative & Digitale</span>
          </h1>

          <h2 className="hero__subtitle">Bras droit stratégique</h2>

          <p className="hero__quote">
            "Je ne suis pas une simple assistante, je suis l'architecte de votre système administratif."
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

        <div className="hero__visual">
          <div className="hero__visual-wrapper">
            <div className="hero__visual-glow"></div>
            <div className="hero__visual-image-wrapper">
              <Image
                src="https://res.cloudinary.com/dgjsq5fnl/image/upload/v1767366432/profile_pic_y4tjp5.png"
                alt="Céline"
                width={500}
                height={500}
                className="hero__visual-image"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Transition fluide */}
      <div className="hero__transition"></div>
    </header>
  );
}
