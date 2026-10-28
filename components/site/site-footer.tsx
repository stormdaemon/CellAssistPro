import Link from "next/link";
import { Camera, Mail, MapPin, MessageCircle, Network } from "lucide-react";
import { BrandLogo } from "@/components/site/brand-logo";
import { CTA, FOOTER_NAVIGATION, SITE } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <BrandLogo inverted />
          {/* Coordonnées identiques partout (site, fiche Google, annuaires). */}
          <address className="site-footer__address">
            <strong>{SITE.name}</strong>
            <span>
              {SITE.legalName} · SIREN {SITE.siren}
            </span>
            <span>
              {SITE.address.town} ({SITE.address.postalCode}), {SITE.address.department}
            </span>
            <span>Sur place en Charente, à distance partout en France</span>
          </address>
          <a href={`mailto:${SITE.email}`} className="site-footer__contact">
            <Mail aria-hidden="true" />
            {SITE.email}
          </a>
          <a href={SITE.googleBusinessUrl} className="site-footer__contact">
            <MapPin aria-hidden="true" />
            Voir la fiche Google
          </a>
        </div>

        <nav aria-label="Navigation pied de page">
          <p className="site-footer__title">Navigation</p>
          {FOOTER_NAVIGATION.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <nav aria-label="Ressources">
          <p className="site-footer__title">Ressources</p>
          <Link href="/diagnostic">{CTA.secondary}</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/facturation-electronique">Guide de la facturation électronique</Link>
          <Link href="/mes-offres#faq">FAQ</Link>
          <Link href="/cas-concrets">Résultats clients</Link>
        </nav>

        <div className="site-footer__socials">
          <p className="site-footer__title">Suivez-moi</p>
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
