import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { JsonLd } from "@/components/site/json-ld";
import { LeadMagnet } from "@/components/site/lead-magnet";
import { PageHero } from "@/components/site/page-hero";
import { pageMetadata } from "@/lib/metadata";
import { CTA, premiumPillars, SITE } from "@/lib/site-data";
import { breadcrumbJsonLd, serviceJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = pageMetadata("premium");

export default function BrasDroitAutomatisationPage() {
  return (
    <main>
      <JsonLd
        data={breadcrumbJsonLd("Bras droit & automatisation", "/bras-droit-automatisation")}
      />
      <JsonLd
        data={serviceJsonLd({
          path: "/bras-droit-automatisation",
          name: "Bras droit externalisé et automatisation",
          serviceType:
            "Structuration des processus, automatisation et pilotage de la gestion pour TPE",
        })}
      />

      <PageHero
        eyebrow="Bras droit externalisé & automatisation"
        title="Votre entreprise a grandi. Votre organisation doit suivre."
      >
        <p>
          Quand tout passe encore par le dirigeant, le problème n'est plus seulement le volume de
          travail : c'est l'organisation.
        </p>
        <p>
          Je structure les processus, clarifie les circuits, mets en place les outils adaptés et
          automatise les tâches répétitives afin que votre entreprise fonctionne avec moins de
          dépendance à vous.
        </p>
        <div className="actions">
          <a className="button button--gold" href={SITE.calendlyUrl}>
            {CTA.primary}
          </a>
          <Link className="button button--outline" href="/diagnostic">
            {CTA.secondary}
          </Link>
        </div>
      </PageHero>

      <section className="section section--white">
        <div className="container">
          <div className="section-heading section-heading--center">
            <h2>Structurer, automatiser, piloter</h2>
            <p>Dans cet ordre — automatiser le désordre ne fait qu'accélérer le désordre.</p>
          </div>
          <div className="cards-grid cards-grid--three">
            {premiumPillars.map((pillar) => (
              <article className="offer-preview" key={pillar.title}>
                <pillar.icon aria-hidden="true" />
                <h3>{pillar.title}</h3>
                <p>{pillar.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--cream">
        <div className="container narrow">
          <div className="highlight-panel">
            <h2>Ma promesse à contre-courant</h2>
            <p>
              Chaque automatisation installée réduit le coût de votre pilotage mensuel. Plus votre
              système travaille, moins vous payez. Mon objectif n'est pas de vous facturer des
              heures — c'est de les faire disparaître.
            </p>
            <Link className="button button--purple" href="/mes-offres">
              Voir comment nous travaillons ensemble <ArrowRight aria-hidden="true" />
            </Link>
          </div>
          <p className="transition-line">
            Avant de structurer, il faut souvent commencer par déléguer :{" "}
            <Link href="/assistante-administrative">
              découvrir l'assistance administrative
            </Link>
            . Et si vous êtes dans le bâtiment, le circuit à structurer est déjà connu —{" "}
            <Link href="/assistante-administrative-btp">voir l'expertise artisans et BTP</Link>.
          </p>
        </div>
      </section>

      <section className="section section--white">
        <div className="container">
          <div className="section-heading section-heading--center">
            <h2>Des systèmes qui tournent déjà</h2>
            <p>
              Devis envoyés sous 24 h, présentations client divisées par cinq, conformité à la
              facturation électronique en une heure de formation.
            </p>
          </div>
          <div className="center-action">
            <Link className="button button--purple" href="/cas-concrets">
              Voir les cas concrets <ArrowRight aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <div className="container">
        <LeadMagnet />
      </div>

      <section className="final-cta">
        <div className="container">
          <h2>Une entreprise qui tourne moins grâce à vous, et mieux sans vous.</h2>
          <a className="button button--gold" href={SITE.calendlyUrl}>
            {CTA.primary}
          </a>
        </div>
      </section>
    </main>
  );
}
