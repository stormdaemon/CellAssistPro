import type { Metadata } from "next";
import { AgendaCalendly } from "@/components/papeterie/agenda-calendly";
import { Mots, Tampon } from "@/components/papeterie/objets";
import { SceneContact } from "@/components/papeterie/scenes";
import { ContactForm } from "@/components/site/contact-form";
import { JsonLd } from "@/components/site/json-ld";
import { pageMetadata } from "@/lib/metadata";
import { SITE } from "@/lib/site-data";
import { breadcrumbJsonLd, contactPageJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = pageMetadata("contact");

export default function ContactPage() {
  return (
    <main data-chemise="rose">
      <JsonLd data={contactPageJsonLd()} />
      <JsonLd data={breadcrumbJsonLd("Contact", "/contact")} />

      <section className="page-hero contact-hero">
        <div className="container page-hero__inner">
          <div className="page-hero__contenu">
            <p className="eyebrow">Contact</p>
            <h1>
              <Mots>Contacter Céline Bardan</Mots>
            </h1>
            <div className="page-hero__text">
              <p>
                Pour contacter CelAssistPro, trois moyens existent. Le plus simple&nbsp;: réserver directement
                un entretien gratuit de 15&nbsp;minutes avec Céline Bardan dans son agenda en ligne, sans
                formulaire ni engagement.
              </p>
              <p>
                Vous pouvez aussi remplir le formulaire de contact ou écrire à{" "}
                <a href={`mailto:${SITE.email}`}>{SITE.email}</a>&nbsp;; la réponse arrive sous 24&nbsp;heures
                ouvrées. CelAssistPro est basée à Champagne-Vigny, en Charente&nbsp;: Céline Bardan se déplace
                dans tout le département et travaille à distance partout en France. Toutes les demandes
                sont possibles, d’une heure de formation à la délégation complète de la gestion
                administrative.
              </p>
            </div>
          </div>
          <div className="page-hero__objet">
            <SceneContact />
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="container contact-grid">
          <article className="contact-card contact-card--agenda">
            <h2>Le plus simple</h2>
            <p>
              Réservez directement 15&nbsp;minutes dans mon agenda. Pas de formulaire, pas d’attente, pas
              d’engagement.
            </p>
            <AgendaCalendly />
          </article>

          <article className="contact-card contact-card--lettre">
            <h2>Vous préférez écrire</h2>
            <ContactForm />
          </article>

          <article className="contact-card contact-card--visite">
            <h2>Coordonnées directes</h2>
            <ul className="contact-list">
              <li>
                CelAssistPro · Céline Bardan EI
                <br />
                Champagne-Vigny (16250), Charente
              </li>
              <li>
                <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              </li>
              <li>Zone&nbsp;: sur place en Charente, à distance partout en France</li>
              <li>
                <a href={SITE.googleBusinessUrl}>Voir la fiche Google</a>
              </li>
            </ul>
            <Tampon className="cachet-16">
              16
              <small>Charente</small>
            </Tampon>
          </article>
        </div>
      </section>
    </main>
  );
}
