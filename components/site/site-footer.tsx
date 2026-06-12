import Link from "next/link";
import { Camera, Mail, MapPin, MessageCircle, Network } from "lucide-react";
import { BrandLogo } from "@/components/site/brand-logo";
import { NAVIGATION, SITE } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <BrandLogo inverted />
          <a href={`mailto:${SITE.email}`} className="site-footer__contact">
            <Mail aria-hidden="true" />
            {SITE.email}
          </a>
          <a href={SITE.googleBusinessUrl} className="site-footer__contact">
            <MapPin aria-hidden="true" />
            Google Business Profile
          </a>
        </div>

        <nav aria-label="Navigation pied de page">
          <h2>Navigation</h2>
          {NAVIGATION.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <nav aria-label="Ressources">
          <h2>Ressources</h2>
          <Link href="/diagnostic">Auto-diagnostic gratuit</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/mes-offres#faq">FAQ</Link>
          <Link href="/cas-concrets">Résultats clients</Link>
        </nav>

        <div className="site-footer__socials">
          <h2>Suivez-moi</h2>
          <div>
            <a href={SITE.socials.linkedin} aria-label="LinkedIn">
              <Network aria-hidden="true" />
            </a>
            <a href={SITE.socials.facebook} aria-label="Facebook">
              <MessageCircle aria-hidden="true" />
            </a>
            <a href={SITE.socials.instagram} aria-label="Instagram">
              <Camera aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      <div className="site-footer__bottom">
        <p>© 2026 CelAssistPro — Tous droits réservés</p>
        <Link href="/mentions-legales">Mentions légales</Link>
        <Link href="/politique-confidentialite">Politique de confidentialité</Link>
      </div>
    </footer>
  );
}
