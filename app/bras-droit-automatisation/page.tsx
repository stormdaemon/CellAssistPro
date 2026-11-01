import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Griffonnage } from "@/components/papeterie/griffonnage";
import { Mots, Tampon } from "@/components/papeterie/objets";
import { SceneTampons } from "@/components/papeterie/scenes";
import { TamponLibre } from "@/components/papeterie/tampon-libre";
import { FaqAccordion } from "@/components/site/faq-accordion";
import { JsonLd } from "@/components/site/json-ld";
import { LeadMagnet } from "@/components/site/lead-magnet";
import { PageHero } from "@/components/site/page-hero";
import { pageMetadata } from "@/lib/metadata";
import { CTA, premiumPillars, SITE } from "@/lib/site-data";
import { breadcrumbJsonLd, serviceJsonLd } from "@/lib/structured-data";
import { fr } from "@/lib/typo";

export const metadata: Metadata = pageMetadata("premium");

const positions = [
  {
    title: "Bras droit administratif",
    text: "une intervention qui part de l'organisation : structurer les circuits, automatiser ce qui se répète, piloter la gestion dans la durée. C'est l'offre décrite sur cette page.",
  },
  {
    title: "Office manager à temps partagé",
    text: "un rôle de coordination du fonctionnement quotidien d'une structure, souvent confié à temps partagé. Je peux en reprendre la part administrative et organisationnelle, sous forme de mission récurrente.",
  },
  {
    title: "Assistante de direction externalisée",
    text: "elle accompagne le dirigeant dans la gestion de ses dossiers et de son temps. Chez CelAssistPro, elle se fait à distance ou sur place en Charente, selon le besoin.",
  },
];

const method = [
  {
    title: "Le diagnostic",
    text: "En 15 minutes, nous repérons ensemble les circuits qui fuient : devis, relances, pièces comptables, échéances. Gratuit et sans engagement.",
  },
  {
    title: "La structuration",
    text: "Nous définissons qui fait quoi, quand et avec quel outil. Une entreprise en création pose ses bases dès le départ ; une entreprise installée garde ce qui fonctionne et répare le reste.",
  },
  {
    title: "L'automatisation",
    text: "Relances, classements, formulaires, transmissions, assistants IA : chaque automatisation est testée et documentée, et elle ne vient qu'après le circuit qu'elle sert.",
  },
  {
    title: "Le pilotage",
    text: "Je suis les échéances, je contrôle le fonctionnement et j'ajuste le système quand l'entreprise évolue. Le forfait mensuel s'allège à mesure que les automatisations sont installées.",
  },
];

const faqs = [
  {
    question: "Quelle différence entre un bras droit administratif et une assistante administrative ?",
    answer:
      "L'assistante administrative prend en charge des tâches déléguées. Le bras droit administratif part de l'organisation : il structure les circuits, automatise ce qui se répète et pilote la gestion dans la durée. On peut commencer par déléguer, puis structurer.",
  },
  {
    question: "Faut-il tout automatiser ?",
    answer:
      "Non. On commence par structurer : une automatisation installée sur un circuit mal défini ne fait qu'accélérer le désordre. Vient ensuite l'automatisation des tâches qui se répètent.",
  },
  {
    question: "Quels outils utilisez-vous ?",
    answer:
      "Des outils simples et sécurisés, conformes au RGPD, choisis avec vous selon votre activité. Les assistants d'intelligence artificielle sont documentés pour que vous restiez autonome, et une séance de formation accompagne leur prise en main.",
  },
  {
    question: "Mon expert-comptable est-il concerné ?",
    answer:
      "Oui, mais il n'est pas remplacé : je prépare, classe et transmets ce dont il a besoin. Je ne fais ni paie, ni conseil juridique ou fiscal.",
  },
  {
    question: "Peut-on commencer par un diagnostic seulement ?",
    answer:
      "Oui. Le diagnostic gratuit de 15 minutes permet d'identifier les circuits qui vous coûtent le plus de temps. S'il y a une mission à proposer, le devis arrive sous 48 heures.",
  },
];

const related = [
  {
    href: "/blog/automatisation-ia-pme-charente-par-ou-commencer",
    label: "Automatisation et IA pour les PME de Charente : par où commencer ?",
  },
  {
    href: "/blog/taches-a-automatiser-tpe",
    label: "Les tâches répétitives à automatiser en premier dans une TPE",
  },
  {
    href: "/blog/automatiser-relances-factures",
    label: "Automatiser les relances de factures impayées : ce que ça change",
  },
  {
    href: "/blog/reponse-automatique-email-entreprise",
    label: "L'accusé de réception automatique, une petite automatisation qui rassure",
  },
  {
    href: "/blog/reorganiser-gestion-administrative-entreprise",
    label: "Votre gestion s'est empilée ? Comment la remettre à plat",
  },
  {
    href: "/blog/organiser-gestion-creation-entreprise",
    label: "Entreprise en création : structurer sa gestion dès le premier jour",
  },
  {
    href: "/blog/directrice-operations-externalisee-role",
    label: "Directrice des opérations externalisée : le rôle expliqué simplement",
  },
  {
    href: "/blog/office-manager-externalise-tpe",
    label: "Office manager externalisé : un rôle utile pour les TPE",
  },
];

export default function BrasDroitAutomatisationPage() {
  return (
    <main data-chemise="lilas">
      <JsonLd
        data={breadcrumbJsonLd("Bras droit & automatisation", "/bras-droit-automatisation")}
      />
      <JsonLd
        data={serviceJsonLd({
          path: "/bras-droit-automatisation",
          name: "Bras droit administratif et automatisation",
          serviceType:
            "Structuration des processus, automatisation et pilotage de la gestion pour TPE",
          description:
            "Bras droit administratif : structurer les circuits, automatiser les tâches répétitives et piloter la gestion d'une TPE, pour qu'elle dépende moins de son dirigeant. Diagnostic gratuit de 15 minutes, devis personnalisé sous 48 heures.",
          audience: "Dirigeants de TPE et de PME",
        })}
      />

      <PageHero
        objet={<SceneTampons />}
        eyebrow="Bras droit administratif & automatisation"
        title="Votre bras droit administratif : structurer, automatiser et piloter votre gestion"
      >
        <p>
          Quand tout passe encore par le dirigeant, le problème n’est plus seulement le volume de
          travail&nbsp;: c’est l’organisation.
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

      <section className="section section--white" aria-labelledby="what-title">
        <div className="container narrow">
          <div className="section-heading">
            <h2 id="what-title">
              <Mots>Qu'est-ce qu'un bras droit administratif ?</Mots>
            </h2>
          </div>
          <div className="story">
            <p>
              Un bras droit administratif structure, automatise et pilote la gestion d’une petite
              entreprise pour qu’elle dépende moins de son dirigeant.
            </p>
            <p>
              Chez CelAssistPro, Céline Bardan, directrice des opérations externalisée basée en
              Charente, intervient toujours dans le même ordre. D’abord structurer&nbsp;: définir qui fait
              quoi, quand et avec quel outil. Ensuite automatiser&nbsp;: relances, classements,
              formulaires, documents, transmissions et assistants d’intelligence artificielle. Enfin
              piloter&nbsp;: suivre les échéances et ajuster le système quand l’entreprise évolue.
            </p>
            <p>Cet ordre est volontaire&nbsp;: automatiser le désordre ne fait qu’accélérer le désordre.</p>
          </div>
        </div>
      </section>

      <section className="section section--cream">
        <div className="container">
          <div className="section-heading section-heading--center">
            <h2>
              <Mots>Bras droit, office manager, assistante de direction : ce qui les distingue</Mots>
            </h2>
            <p>Trois appellations voisines, trois façons de travailler.</p>
          </div>
          <div className="cards-grid cards-grid--three">
            {positions.map((item) => (
              <article className="mini-card" key={item.title}>
                <p>
                  <strong>{fr(item.title)}</strong>&nbsp;: {fr(item.text)}
                </p>
              </article>
            ))}
          </div>
          <p className="transition-line">
            Mon rôle ne se limite pas à exécuter&nbsp;: je structure, j’automatise et je pilote pour que
            l’entreprise dépende moins de vous. Pour commencer par déléguer, voyez{" "}
            <Link href="/assistante-administrative">l’assistance administrative</Link>.
          </p>
        </div>
      </section>

      <section className="section section--white">
        <div className="container">
          <div className="section-heading section-heading--center">
            <h2>
              <Mots>Structurer, automatiser, piloter</Mots>
            </h2>
            <p>Trois piliers, un ordre à respecter.</p>
          </div>
          <div className="cards-grid cards-grid--three">
            {premiumPillars.map((pillar) => (
              <article className="offer-preview" key={pillar.title}>
                <h3>{fr(pillar.title)}</h3>
                <p>{fr(pillar.text)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--cream">
        <div className="container">
          <div className="section-heading section-heading--center">
            <h2>
              <Mots>Ma méthode, étape par étape</Mots>
            </h2>
            <p>Une intervention commence par le diagnostic, jamais par un outil.</p>
          </div>
          <div className="cahier" data-defile="traverse">
            <ol className="method-timeline">
              {method.map((step, index) => (
                <li className="method-step" key={step.title}>
                  <div className="method-step__marker" aria-hidden="true">
                    <span>{index + 1}</span>
                  </div>
                  <article className="method-step__card">
                    <header>
                      <h3>{fr(step.title)}</h3>
                    </header>
                    <p>{fr(step.text)}</p>
                  </article>
                </li>
              ))}
            </ol>
            <Griffonnage />
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="container">
          <div className="section-heading section-heading--center">
            <h2>
              <Mots>Des systèmes qui tournent déjà</Mots>
            </h2>
            <p>Deux exemples de clients, avec les résultats obtenus.</p>
          </div>
          <div className="article-body">
            <section className="article-tile">
              <h2>Une entreprise du bâtiment</h2>
              <p>
                Le circuit devis, envoi, relance et facture a d’abord été structuré. Ensuite, les
                relances et le classement des pièces ont été automatisés.
              </p>
              <p>
                <strong>Résultat&nbsp;:</strong> devis envoyés sous 24&nbsp;heures et plus aucune relance
                oubliée.
              </p>
            </section>
            <section className="article-tile">
              <h2>Des présentations clients préparées en 30&nbsp;minutes</h2>
              <p>
                Chaque rendez-vous exigeait une présentation personnalisée. Un assistant IA sur mesure
                la génère à partir des notes de rendez-vous, dans la charte graphique du client, avec
                une documentation simple pour qu’il reste autonome.
              </p>
              <p>
                <strong>Résultat&nbsp;:</strong> 30&nbsp;minutes par présentation, au lieu de 2&nbsp;h 30.
              </p>
            </section>
          </div>
          <div className="center-action">
            <Link className="button button--purple" href="/cas-concrets">
              Voir les cas concrets <ArrowRight aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--cream">
        <div className="container narrow">
          <div className="highlight-panel">
            <h2>Ma promesse à contre-courant</h2>
            <p>
              Chaque automatisation installée réduit le coût de votre pilotage mensuel. Plus votre
              système travaille, moins vous payez. Mon objectif&nbsp;: que les heures de tâches répétitives
              disparaissent de votre semaine.
            </p>
            <p>
              Chaque intervention fait l’objet d’un devis personnalisé après le diagnostic gratuit de
              15&nbsp;minutes. Les formules et leur fonctionnement sont détaillés dans{" "}
              <Link href="/mes-offres">mes offres</Link>.
            </p>
            <Link className="button button--purple" href="/mes-offres">
              Voir comment nous travaillons ensemble <ArrowRight aria-hidden="true" />
            </Link>
          </div>
          <p className="transition-line">
            Avant de structurer, il faut souvent commencer par déléguer&nbsp;:{" "}
            <Link href="/assistante-administrative">découvrir l’assistance administrative</Link>. Et
            si vous êtes dans le bâtiment, le circuit à structurer est déjà connu&nbsp;:{" "}
            <Link href="/assistante-administrative-btp">voir l’expertise artisans et BTP</Link>.
          </p>
        </div>
      </section>

      <section className="section section--white" id="faq">
        <div className="container narrow">
          <div className="section-heading section-heading--center">
            <p className="eyebrow">Questions fréquentes</p>
            <h2>
              <Mots>Ce que l'on me demande sur le bras droit</Mots>
            </h2>
          </div>
          <FaqAccordion faqs={faqs} />
        </div>
      </section>

      <section className="section section--cream">
        <div className="container">
          <div className="article-body">
            <section className="article-tile article-tile--wide">
              <h2>Pour aller plus loin</h2>
              <ul className="article-related">
                {related.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href}>
                      {fr(item.label)} <ArrowRight aria-hidden="true" />
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </section>

      <LeadMagnet />

      <TamponLibre chemise="or" className="section final-cta">
        <div className="container">
          <h2>
            <Mots>Une entreprise qui tourne moins grâce à vous, et mieux sans vous.</Mots>
          </h2>
          <a className="button button--gold" href={SITE.calendlyUrl}>
            {CTA.primary}
          </a>
          <p aria-hidden="true" className="final-cta__invite">
            Le tampon est à vous&nbsp;: cliquez n’importe où.
          </p>
        </div>
        <span aria-hidden="true" className="final-cta__tampon">
          <Tampon>Classé</Tampon>
        </span>
      </TamponLibre>
    </main>
  );
}
