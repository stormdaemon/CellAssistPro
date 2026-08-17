import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, HardHat, Info } from "lucide-react";
import { JsonLd } from "@/components/site/json-ld";
import { LeadMagnet } from "@/components/site/lead-magnet";
import { PageHero } from "@/components/site/page-hero";
import { pageMetadata } from "@/lib/metadata";
import { btpTrades, btpWorkflow, CTA, SITE } from "@/lib/site-data";
import { breadcrumbJsonLd, serviceJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = pageMetadata("btp");

const BTP_CTA = "Faire le point sur mon administratif BTP — 15 min";

export default function AssistanteAdministrativeBtpPage() {
  return (
    <main>
      <JsonLd data={breadcrumbJsonLd("Expertise BTP", "/assistante-administrative-btp")} />
      <JsonLd
        data={serviceJsonLd({
          path: "/assistante-administrative-btp",
          name: "Assistance administrative BTP externalisée",
          serviceType:
            "Gestion administrative externalisée pour artisans et entreprises du BTP",
        })}
      />

      <PageHero
        eyebrow="Assistante administrative BTP & artisans"
        title="Votre administratif BTP ne devrait pas vous suivre jusqu'au soir."
      >
        <p>
          Depuis 2017, je pilote au quotidien l'administratif d'une entreprise du bâtiment. Je
          connais donc les réalités derrière les mots « gestion administrative » : les mesures
          envoyées depuis un chantier, le devis qui doit partir vite, l'acompte à suivre, les photos
          dans WhatsApp, les justificatifs à récupérer, la facture à envoyer et le comptable qui
          attend ses pièces.
        </p>
        <div className="actions">
          <a className="button button--gold" href={SITE.calendlyUrl}>
            {BTP_CTA}
          </a>
          <Link className="button button--outline" href="/cas-concrets">
            Voir un cas concret BTP <ArrowRight aria-hidden="true" />
          </Link>
        </div>
      </PageHero>

      <section className="section section--white">
        <div className="container narrow">
          <div className="highlight-panel">
            <div className="highlight-panel__icon">
              <HardHat aria-hidden="true" />
            </div>
            <h2>Une expertise verticale, pas une spécialité exclusive</h2>
            <p>
              Je ne travaille pas exclusivement avec le BTP. Mais c'est un secteur que je connais de
              l'intérieur : le vocabulaire, le rythme des chantiers, la saisonnalité, les acomptes,
              la retenue de garantie, les pièces que réclame le comptable. Vous n'avez rien à
              m'expliquer avant de commencer.
            </p>
            <ul className="trade-chips" aria-label="Corps de métier déjà accompagnés">
              {btpTrades.map((trade) => (
                <li key={trade}>{trade}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section section--cream" aria-labelledby="workflow-title">
        <div className="container">
          <div className="section-heading section-heading--center">
            <p className="eyebrow">Le circuit administratif d'un chantier</p>
            <h2 id="workflow-title">Du premier appel à l'encaissement : un seul circuit.</h2>
          </div>
          <ol className="workflow">
            {btpWorkflow.map((step, index) => (
              <li key={step}>
                <span className="workflow__number" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="workflow__label">{step}</span>
              </li>
            ))}
          </ol>
          <p className="transition-line">
            Je peux prendre en charge ce circuit, le structurer et automatiser les étapes
            répétitives qui n'ont pas besoin de rester manuelles.
          </p>
        </div>
      </section>

      <section className="section section--white">
        <div className="container">
          <div className="section-heading section-heading--center">
            <h2>Ce que ça change concrètement</h2>
          </div>
          <div className="cards-grid cards-grid--three">
            <article className="mini-card">
              <Info aria-hidden="true" />
              <p>
                <strong>Les devis partent vite.</strong> Vous envoyez vos cotes depuis le chantier,
                le devis part le jour même — et la relance est programmée sans que vous y pensiez.
              </p>
            </article>
            <article className="mini-card">
              <Info aria-hidden="true" />
              <p>
                <strong>Les acomptes et les factures sont suivis.</strong> Vous savez qui a payé, qui
                doit payer, et ce qui reste à facturer sur chaque chantier.
              </p>
            </article>
            <article className="mini-card">
              <Info aria-hidden="true" />
              <p>
                <strong>Le comptable a ses pièces.</strong> Achats, notes de frais, justificatifs de
                chantier : classés au fil de l'eau, plus dans la boîte à gants.
              </p>
            </article>
          </div>
          <p className="transition-line">
            Vous cherchez d'abord à déléguer votre gestion courante ? Voyez ce que couvre l'
            <Link href="/assistante-administrative">assistance administrative</Link>. Vous voulez
            aller plus loin et faire disparaître une partie de ce travail ? C'est le rôle du{" "}
            <Link href="/bras-droit-automatisation">
              bras droit stratégique et de l'automatisation
            </Link>
            .
          </p>
        </div>
      </section>

      <div className="container">
        <LeadMagnet />
      </div>

      <section className="final-cta">
        <div className="container">
          <h2>Vos soirées valent mieux que vos devis en retard.</h2>
          <a className="button button--gold" href={SITE.calendlyUrl}>
            {BTP_CTA}
          </a>
          <p className="final-cta__note">
            Vous préférez mesurer avant d'en parler ?{" "}
            <Link href="/diagnostic">{CTA.secondary}</Link>
          </p>
        </div>
      </section>
    </main>
  );
}
