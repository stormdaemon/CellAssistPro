import type { Metadata } from "next";
import Image from "next/image";
import {
  Bot,
  CalendarCheck,
  Handshake,
  Layers3,
  ShieldCheck,
} from "lucide-react";
import { FaqAccordion } from "@/components/site/faq-accordion";
import { JsonLd } from "@/components/site/json-ld";
import { LeadMagnet } from "@/components/site/lead-magnet";
import { PageHero } from "@/components/site/page-hero";
import { pageMetadata } from "@/lib/metadata";
import { offers, offerFaqs, SITE } from "@/lib/site-data";
import { breadcrumbJsonLd, faqJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = pageMetadata("offers");

const icons = [Layers3, ShieldCheck, Bot];

export default function OffersPage() {
  return (
    <main>
      <JsonLd data={breadcrumbJsonLd("Mes offres", "/mes-offres")} />
      <JsonLd data={faqJsonLd()} />

      <PageHero
        eyebrow="Gestion administrative TPE Angoulême & Charente"
        title="Des offres construites autour d'une seule question : de combien de temps avez-vous besoin ?"
      >
        <p>
          Pas de catalogue de tâche imposées, pas de minimum d'heures. Trois formules claires, du
          coup de main ponctuel à la délégation complète. Toutes commencent par un diagnostic
          gratuit, toutes font l'objet d'un devis personnalisé.
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
              const Icon = icons[index];
              return (
                <article
                  className={
                    offer.badge ? "offer-detail-panel offer-detail-panel--featured" : "offer-detail-panel"
                  }
                  id={`offre-${index + 1}`}
                  key={offer.name}
                >
                  <div className="offer-detail-panel__intro">
                    <Icon aria-hidden="true" />
                    <div>
                      {offer.badge ? <span className="badge">{offer.badge}</span> : null}
                      <h2>{offer.name}</h2>
                      <p className="offer-detail-panel__lede">{offer.short}</p>
                    </div>
                  </div>

                  <div className="offer-detail-panel__grid">
                    <div>
                      <h3>Pour qui</h3>
                      <p>{offer.audience}</p>
                    </div>
                    <div>
                      <h3>Ce que c'est</h3>
                      <p>{offer.what}</p>
                    </div>
                    <div className="offer-detail-panel__result">
                      <h3>Le résultat</h3>
                      <p>{offer.result}</p>
                    </div>
                  </div>

                  {offer.promise ? <p className="gold-note">{offer.promise}</p> : null}

                  <a className="button button--gold" href={SITE.calendlyUrl}>
                    Demander mon devis
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
                Après la structuration ou la restructuration, je peux assurer votre pilotage au mois
                : gestion courante, suivi des impayés, pré-compta, reporting — du simple coup de
                main à la délégation complète. Et au fur et à mesure que nous automatisons, ce
                forfait s'allège. Votre gestion coûte de moins en moins cher, en tournant de mieux
                en mieux.
              </p>
            </div>
            <a className="button button--gold" href={SITE.calendlyUrl}>
              Construire mon parcours — diagnostic gratuit 15 min
            </a>
          </div>
        </div>
      </section>

      <section className="section section--white" id="faq">
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
