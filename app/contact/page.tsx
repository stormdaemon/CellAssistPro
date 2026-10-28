import type { Metadata } from "next";
import Image from "next/image";
import { Building2, CalendarDays, Mail, MapPin, MessageSquareText } from "lucide-react";
import { ContactForm } from "@/components/site/contact-form";
import { JsonLd } from "@/components/site/json-ld";
import { pageMetadata } from "@/lib/metadata";
import { SITE } from "@/lib/site-data";
import { breadcrumbJsonLd, contactPageJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = pageMetadata("contact");

export default function ContactPage() {
  return (
    <main>
      <JsonLd data={contactPageJsonLd()} />
      <JsonLd data={breadcrumbJsonLd("Contact", "/contact")} />

      <section className="contact-hero">
        <div className="container contact-hero__grid">
          <div>
            <p className="eyebrow">Contact</p>
            <h1>Contacter Céline Bardan</h1>
            <p>
              Pour contacter CelAssistPro, trois moyens existent. Le plus simple : réserver directement
              un entretien gratuit de 15 minutes avec Céline Bardan dans son agenda en ligne, sans
              formulaire ni engagement.
            </p>
            <p>
              Vous pouvez aussi remplir le formulaire de contact ou écrire à{" "}
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a> ; la réponse arrive sous 24 heures
              ouvrées. CelAssistPro est basée à Champagne-Vigny, en Charente : Céline Bardan se déplace
              dans tout le département et travaille à distance partout en France. Toutes les demandes
              sont possibles, d'une heure de formation à la délégation complète de la gestion
              administrative.
            </p>
          </div>
          <Image
            src="/images/celine/04-celine-contact-sourire.jpg"
            alt="Céline Bardan, fondatrice de CelAssistPro"
            width={1024}
            height={1024}
            priority
            sizes="(min-width: 900px) 36vw, 100vw"
          />
        </div>
      </section>

      <section className="section section--white">
        <div className="container contact-grid">
          <article className="contact-card contact-card--calendar">
            <CalendarDays aria-hidden="true" />
            <h2>Le plus simple</h2>
            <p>
              Réservez directement 15 minutes dans mon agenda. Pas de formulaire, pas d'attente, pas
              d'engagement.
            </p>
            <iframe
              title="Agenda Calendly CelAssistPro"
              src="https://calendly.com/celassistpro/15min"
              loading="lazy"
            />
          </article>

          <article className="contact-card">
            <MessageSquareText aria-hidden="true" />
            <h2>Vous préférez écrire</h2>
            <ContactForm />
          </article>

          <article className="contact-card">
            <Building2 aria-hidden="true" />
            <h2>Coordonnées directes</h2>
            <ul className="contact-list">
              <li>
                <Building2 aria-hidden="true" />
                <span>
                  CelAssistPro · Céline Bardan EI
                  <br />
                  Champagne-Vigny (16250), Charente
                </span>
              </li>
              <li>
                <Mail aria-hidden="true" />
                <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              </li>
              <li>
                <MapPin aria-hidden="true" />
                <span>Zone : sur place en Charente, à distance partout en France</span>
              </li>
              <li>
                <MapPin aria-hidden="true" />
                <a href={SITE.googleBusinessUrl}>Voir la fiche Google</a>
              </li>
            </ul>
            <div className="charente-map" aria-hidden="true">
              <span>16</span>
              <p>Charente</p>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
