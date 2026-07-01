import type { Metadata } from "next";
import Image from "next/image";
import { CalendarDays, Mail, MapPin, MessageSquareText, PhoneCall } from "lucide-react";
import { ContactForm } from "@/components/site/contact-form";
import { pageMetadata } from "@/lib/metadata";
import { SITE } from "@/lib/site-data";

export const metadata: Metadata = pageMetadata("contact");

export default function ContactPage() {
  return (
    <main>
      <section className="contact-hero">
        <div className="container contact-hero__grid">
          <div>
            <p className="eyebrow">Contact</p>
            <h1>Parlons de votre temps</h1>
            <p>
              Mission ponctuelle, récurrente ou même très courte — d'une heure de formation à la
              délégation complète, toutes les portes sont ouvertes. Choisissez la vôtre.
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
            <PhoneCall aria-hidden="true" />
            <h2>Coordonnées directes</h2>
            <ul className="contact-list">
              <li>
                <Mail aria-hidden="true" />
                <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              </li>
              <li>
                <MapPin aria-hidden="true" />
                Basée en Charente — déplacements dans tout le département · à distance partout en
                France
              </li>
              <li>
                <MapPin aria-hidden="true" />
                <a href={SITE.googleBusinessUrl}>Voir mon profil Google Business</a>
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
