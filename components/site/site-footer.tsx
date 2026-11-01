import Image from "next/image";
import Link from "next/link";
import { Camera, Mail, MapPin, MessageCircle, Network } from "lucide-react";
import { Tampon } from "@/components/papeterie/objets";
import { CTA, FOOTER_NAVIGATION, SITE } from "@/lib/site-data";
import { fr } from "@/lib/typo";

/** Le pied de page est une grande enveloppe : son rabat se ferme quand on arrive au bout. */
export function SiteFooter() {
  return (
    <footer className="site-footer" data-vu="">
      <span aria-hidden="true" className="site-footer__rabat" />
      <div className="site-footer__inner">
        <div className="site-footer__haut">
          {/* Coordonnées identiques partout (site, fiche Google, annuaires). */}
          <address className="site-footer__address">
            <strong>{SITE.name}</strong>
            <span>
              {SITE.legalName} · SIREN&nbsp;{fr(SITE.siren)}
            </span>
            <span>
              {SITE.address.town} ({SITE.address.postalCode}), {SITE.address.department}
            </span>
            <span>Sur place en Charente, à distance partout en France</span>
          </address>

          <div aria-hidden="true" className="site-footer__affranchissement">
            <span className="site-footer__timbre">
              <Image
                src="/images/logos/celassistpro-flame-240.png"
                alt=""
                width={240}
                height={455}
              />
              <small>Charente</small>
            </span>
            <Tampon className="site-footer__cachet">
              <small>Champagne-Vigny</small>
              16250
            </Tampon>
          </div>
        </div>

        <div className="site-footer__colonnes">
          <nav aria-label="Navigation pied de page">
            <p className="site-footer__title">Navigation</p>
            {FOOTER_NAVIGATION.map((item) => (
              <Link key={item.href} href={item.href}>
                {fr(item.label)}
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

          <div className="site-footer__coordonnees">
            <p className="site-footer__title">Écrire ou suivre</p>
            <a href={`mailto:${SITE.email}`} className="site-footer__contact">
              <Mail aria-hidden="true" />
              {SITE.email}
            </a>
            <a href={SITE.googleBusinessUrl} className="site-footer__contact">
              <MapPin aria-hidden="true" />
              Voir la fiche Google
            </a>
            <div className="site-footer__socials">
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
      </div>
    </footer>
  );
}
