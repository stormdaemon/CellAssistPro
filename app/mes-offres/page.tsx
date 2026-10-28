import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CalendarCheck, Handshake } from "lucide-react";
import { FaqAccordion } from "@/components/site/faq-accordion";
import { JsonLd } from "@/components/site/json-ld";
import { LeadMagnet } from "@/components/site/lead-magnet";
import { PageHero } from "@/components/site/page-hero";
import { pageMetadata } from "@/lib/metadata";
import { CTA, offers, offerFaqs, SITE } from "@/lib/site-data";
import { breadcrumbJsonLd, faqJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = pageMetadata("offers");

export default function OffersPage() {
  return (
    <main>
      <JsonLd data={breadcrumbJsonLd("Mes offres", "/mes-offres")} />
      <JsonLd data={faqJsonLd()} />

      <PageHero
        eyebrow="Gestion administrative TPE et PME · Charente et à distance"
        title="Trois formules pour structurer, remettre à plat ou automatiser votre gestion"
      >
        <p>
          Pas de catalogue de tâches imposées, pas de minimum d'heures. Trois formules claires pour
          les TPE et les PME, du coup de main ponctuel à la délégation complète. Toutes commencent
          par un diagnostic gratuit de 15 minutes, toutes font l'objet d'un devis personnalisé.
        </p>
        <p>
          Ces formules décrivent <strong>comment</strong> nous travaillons ensemble. Pour savoir{" "}
          <strong>ce que</strong> je peux prendre en charge, voyez l'
          <Link href="/assistante-administrative">assistance administrative</Link>, l'
          <Link href="/assistante-administrative-btp">expertise artisans et BTP</Link> ou le{" "}
          <Link href="/bras-droit-automatisation">bras droit et l'automatisation</Link>.
        </p>
      </PageHero>

      <section className="section section--white">
        <div className="container split-intro">
          <div className="highlight-panel">
            <div className="highlight-panel__icon">
              <Handshake aria-hidden="true" />
            </div>
            <h2>L'avantage du freelance</h2>
            <p>
              Une heure de formation, une mission d'une journée, un accompagnement récurrent ou une
              délégation totale : vous faites appel à moi exactement à la hauteur de votre besoin.
              Pas de contrat de travail, pas de charges, pas d'engagement minimum — la souplesse
              qu'un recrutement ne vous donnera jamais.
            </p>
          </div>
          <Image
            src="/images/celine/05-celine-offres-bleu-marine.jpg"
            alt="Céline Bardan, directrice des opérations externalisée"
            width={1024}
            height={1024}
            sizes="(min-width: 900px) 36vw, 100vw"
          />
        </div>
      </section>

      <section className="section section--cream">
        <div className="container">
          <nav className="offer-anchor-nav" aria-label="Aller à une offre">
            {offers.map((offer, index) => (
              <a href={`#offre-${index + 1}`} key={offer.name}>
                <span aria-hidden="true">{index + 1}</span>
                {offer.name}
              </a>
            ))}
          </nav>

          <div className="offer-detail-list" aria-label="Détail des offres">
            {offers.map((offer, index) => {
              return (
                <article
                  className={
                    offer.badge ? "offer-detail-panel offer-detail-panel--featured" : "offer-detail-panel"
                  }
                  id={`offre-${index + 1}`}
                  key={offer.name}
                >
                  <div className="offer-detail-panel__intro">
                    <offer.icon aria-hidden="true" />
                    <div>
                      {offer.badge ? <span className="badge">{offer.badge}</span> : null}
                      <h2>{offer.name}</h2>
                      <p className="offer-detail-panel__lede">{offer.short}</p>
                    </div>
                  </div>

                  <div className="offer-detail-panel__grid">
                    <div>
                      <h3>{offer.name} : pour qui ?</h3>
                      <p>{offer.audience}</p>
                    </div>
                    <div>
                      <h3>{offer.name} : ce que c'est</h3>
                      <p>{offer.what}</p>
                    </div>
                    <div className="offer-detail-panel__result">
                      <h3>{offer.name} : le résultat</h3>
                      <p>{offer.result}</p>
                    </div>
                  </div>

                  {offer.promise ? <p className="gold-note">{offer.promise}</p> : null}

                  <a className="button button--gold" href={SITE.calendlyUrl}>
                    {CTA.primary}
                  </a>
                </article>
              );
            })}
          </div>

          <div className="monthly-band">
            <CalendarCheck aria-hidden="true" />
            <div>
              <h2>Le fil rouge — le pilotage mensuel</h2>
              <p>
                Après la structuration ou la restructuration, je peux assurer votre pilotage au mois :
                gestion courante, suivi des impayés, pré-compta, tableaux de suivi — du simple coup de
                main à la délégation complète. Et au fur et à mesure que nous automatisons, ce forfait
                s'allège. Votre gestion coûte de moins en moins cher, en tournant de mieux en mieux.
              </p>
            </div>
            <a className="button button--gold" href={SITE.calendlyUrl}>
              {CTA.primary}
            </a>
          </div>
        </div>
      </section>

      <section className="section section--white" aria-labelledby="price-title">
        <div className="container narrow">
          <div className="section-heading">
            <h2 id="price-title">Comment est fixé le prix ?</h2>
            <p>Un devis personnalisé, après un diagnostic gratuit, pour les TPE et les PME.</p>
          </div>
          <div className="story">
            <p>
              CelAssistPro ne publie pas de grille tarifaire : chaque mission est chiffrée sur devis
              personnalisé, envoyé sous 48 heures après le diagnostic gratuit de 15 minutes, parce que
              deux entreprises n'ont jamais le même volume de travail ni les mêmes outils.
            </p>
            <p>
              Le devis tient compte de ce qui fait varier le coût : le volume, la complexité des
              tâches (une tâche bornée, une restructuration ou un pilotage continu), l'urgence, l'état
              de départ de votre organisation, la sensibilité des données, les déplacements et la durée
              de la mission.
            </p>
            <p>
              Une mission ponctuelle se chiffre à sa taille. Un pilotage mensuel se chiffre en forfait,
              qui s'allège à mesure que les automatisations sont installées. Les accompagnements sont
              sans engagement au-delà du préavis prévu au contrat.
            </p>
            <p>
              Pour situer ces montants par rapport au marché, lisez notre{" "}
              <Link href="/blog/tarif-assistante-administrative-independante-facteurs">
                article sur les tarifs de l'assistance administrative indépendante
              </Link>{" "}
              : il présente des repères sourcés et datés, qui ne valent pas tarif de CelAssistPro.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--cream" id="faq">
        <div className="container narrow">
          <div className="section-heading section-heading--center">
            <p className="eyebrow">FAQ</p>
            <h2>Les questions que l'on me pose souvent</h2>
          </div>
          <FaqAccordion faqs={offerFaqs} />
        </div>
      </section>

      <div className="container">
        <LeadMagnet />
      </div>
    </main>
  );
}
