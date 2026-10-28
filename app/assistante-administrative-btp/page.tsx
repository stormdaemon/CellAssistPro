import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, HardHat, Info } from "lucide-react";
import { FaqAccordion } from "@/components/site/faq-accordion";
import { JsonLd } from "@/components/site/json-ld";
import { LeadMagnet } from "@/components/site/lead-magnet";
import { PageHero } from "@/components/site/page-hero";
import { pageMetadata } from "@/lib/metadata";
import { btpTrades, btpWorkflow, CTA, SITE, testimonials } from "@/lib/site-data";
import { breadcrumbJsonLd, serviceJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = pageMetadata("btp");

const btpFaqs = [
  {
    question: "Qu'est-ce qu'une secrétaire du bâtiment, concrètement ?",
    answer:
      "C'est une personne extérieure à l'entreprise qui tient l'administratif d'une entreprise du bâtiment : devis et facturation, acomptes, relances, pièces pour le comptable, classement des justificatifs de chantier. Chez CelAssistPro, cela se fait sans recrutement, à la mission ou au mois. Le détail des tâches figure sur la page [assistance administrative](/assistante-administrative).",
  },
  {
    question: "Faut-il une retenue de garantie sur un chantier privé ?",
    answer:
      "Cela dépend du contrat. Dans un marché privé de travaux, la retenue de garantie ne peut dépasser 5 % du montant des acomptes ; elle sert à garantir la levée des réserves et peut être remplacée par une caution. Le détail, avec les sources, est dans [l'article sur la retenue de garantie](/blog/retenue-de-garantie-caution-bancaire).",
  },
  {
    question: "Quand une facture de sous-traitance porte-t-elle la mention « autoliquidation » ?",
    answer:
      "Dans la sous-traitance du bâtiment, le sous-traitant facture hors taxe, sans TVA, avec la mention « Autoliquidation » : c'est l'entreprise principale qui déclare et paie la TVA. Les cas particuliers sont expliqués dans [l'article dédié](/blog/autoliquidation-tva-sous-traitance-btp).",
  },
  {
    question: "La facturation électronique concerne-t-elle les artisans du bâtiment ?",
    answer:
      "Oui. Depuis le 1er septembre 2026, les entreprises assujetties à la TVA établies en France, micro-entrepreneurs en franchise en base compris, doivent pouvoir recevoir des factures électroniques par l'intermédiaire d'une plateforme agréée. Pour l'émission, les TPE et les PME ont jusqu'au 1er septembre 2027 au plus tard. Le calendrier complet est sur la page [facturation électronique](/facturation-electronique).",
  },
  {
    question: "Votre service comprend-il une permanence téléphonique ?",
    answer:
      "Non. Je ne tiens pas de permanence téléphonique et je ne prends pas d'appels à la place de vos clients. Votre administratif passe par le courriel, les tableaux de suivi et les relances programmées.",
  },
];

export default function AssistanteAdministrativeBtpPage() {
  const raphael = testimonials.find((testimonial) => testimonial.name === "Raphaël");

  return (
    <main>
      <JsonLd data={breadcrumbJsonLd("Expertise BTP", "/assistante-administrative-btp")} />
      <JsonLd
        data={serviceJsonLd({
          path: "/assistante-administrative-btp",
          name: "Assistance administrative BTP externalisée",
          serviceType: "Gestion administrative externalisée pour artisans et entreprises du BTP",
          description:
            "Devis, acomptes, relances, facturation et pièces pour le comptable, pour les artisans et entreprises du bâtiment. Sur place en Charente et à distance partout en France.",
          audience: "Artisans et entreprises du bâtiment",
        })}
      />

      <PageHero
        eyebrow="Expertise BTP et artisans"
        title="Assistante administrative indépendante pour les artisans et entreprises du BTP"
      >
        <p>
          CelAssistPro est l'activité d'assistance administrative indépendante de Céline Bardan,
          basée à Champagne-Vigny (Charente). Depuis 2017, elle tient l'administratif de BR16BATIMENT,
          une entreprise du bâtiment en Charente : devis, acomptes, relances, facturation et pièces
          pour le comptable.
        </p>
        <p>
          Elle intervient sur place en Charente et à distance partout en France, à la mission ou au
          mois, sans recrutement.
        </p>
        <div className="actions">
          <a className="button button--gold" href={SITE.calendlyUrl}>
            {CTA.primary}
          </a>
          <Link className="button button--outline" href="/diagnostic">
            {CTA.secondary} <ArrowRight aria-hidden="true" />
          </Link>
        </div>
      </PageHero>

      <section className="section section--white">
        <div className="container narrow">
          <div className="highlight-panel">
            <div className="highlight-panel__icon">
              <HardHat aria-hidden="true" />
            </div>
            <h2>Secrétaire du bâtiment, secrétariat pour artisans : de quoi parle-t-on ?</h2>
            <p>
              On cherche parfois une « secrétaire du bâtiment », un « secrétariat pour artisans » ou
              une « gestion administrative artisan ». Ces formules désignent le même besoin : une
              personne extérieure à l'entreprise tient l'administratif du bureau et des chantiers,
              sans contrat de travail ni poste à temps plein, et sans se substituer au comptable.
            </p>
            <p>
              Je ne travaille pas exclusivement avec le BTP. Mais c'est un secteur que je connais de
              l'intérieur : le vocabulaire, le rythme des chantiers, la saisonnalité, les acomptes, la
              retenue de garantie, les pièces que réclame le comptable. Vous n'avez rien à m'expliquer
              avant de commencer.
            </p>
            <ul className="trade-chips" aria-label="Corps de métier que je connais">
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
            <h2 id="workflow-title">De la demande client à l'encaissement, un seul circuit</h2>
          </div>
          <div className="container narrow">
            <p>
              Derrière les mots « gestion administrative », il y a des réalités très concrètes : les
              mesures envoyées depuis un chantier, le devis qui doit partir vite, l'acompte à suivre,
              les photos dans WhatsApp, les justificatifs à récupérer, la facture à envoyer et le
              comptable qui attend ses pièces. Chaque étape ci-dessous laisse une trace administrative.
            </p>
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
            Je peux prendre en charge ce circuit, le structurer et automatiser les étapes répétitives
            qui n'ont pas besoin de rester manuelles.
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
                <strong>Les devis partent vite.</strong> Une fois les cotes prises, le devis est
                préparé et envoyé, et la relance est programmée. Dans une entreprise du bâtiment
                accompagnée, les devis partent sous 24 h.
              </p>
            </article>
            <article className="mini-card">
              <Info aria-hidden="true" />
              <p>
                <strong>Les acomptes et les factures sont suivis.</strong> Vous savez qui a payé, qui
                doit encore payer et ce qui reste à facturer sur chaque chantier.
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
            Vous cherchez d'abord à déléguer votre gestion courante ? Voyez ce que couvre
            l'<Link href="/assistante-administrative">assistance administrative</Link>. Vous voulez
            aller plus loin et faire disparaître une partie de ce travail ? C'est le rôle du{" "}
            <Link href="/bras-droit-automatisation">bras droit stratégique et de l'automatisation</Link>.
          </p>
        </div>
      </section>

      <section className="section section--cream" aria-labelledby="btp-dossiers-title">
        <div className="container">
          <div className="section-heading section-heading--center">
            <p className="eyebrow">Dossiers propres au BTP</p>
            <h2 id="btp-dossiers-title">Les règles du bâtiment qui reviennent dans vos dossiers</h2>
          </div>
          <div className="container narrow">
            <p>
              Certains dossiers sont propres au bâtiment. Les articles ci-dessous en expliquent
              les règles de base, avec leurs sources officielles. Ils ne remplacent pas le conseil de
              votre expert-comptable.
            </p>
          </div>
          <div className="cards-grid cards-grid--four">
            <article className="mini-card">
              <Info aria-hidden="true" />
              <p>
                <strong>
                  <Link href="/blog/situation-de-travaux-exemple">Situation de travaux</Link>
                </strong>{" "}
                La facture d'avancement, avec un exemple chiffré fictif : montant, pourcentage réalisé,
                retenue et TVA.
              </p>
            </article>
            <article className="mini-card">
              <Info aria-hidden="true" />
              <p>
                <strong>
                  <Link href="/blog/retenue-de-garantie-caution-bancaire">
                    Retenue de garantie
                  </Link>
                </strong>{" "}
                Le plafond, la libération un an après la réception et le remplacement par une caution.
              </p>
            </article>
            <article className="mini-card">
              <Info aria-hidden="true" />
              <p>
                <strong>
                  <Link href="/blog/autoliquidation-tva-sous-traitance-btp">
                    Autoliquidation de la TVA
                  </Link>
                </strong>{" "}
                En sous-traitance BTP : qui facture, qui déclare la TVA et quelles mentions porter.
              </p>
            </article>
            <article className="mini-card">
              <Info aria-hidden="true" />
              <p>
                <strong>
                  <Link href="/blog/devis-artisan-mentions-obligatoires">Devis d'artisan</Link>
                </strong>{" "}
                Les mentions obligatoires chez un particulier, et ce qui s'ajoute avec l'assurance
                décennale.
              </p>
            </article>
          </div>
          <p className="transition-line">
            Pour les factures, la réforme s'applique aussi aux entreprises du bâtiment. Le point complet
            est sur la page <Link href="/facturation-electronique">facturation électronique</Link>. Pour
            aller plus loin, lisez{" "}
            <Link href="/blog/gestion-administrative-artisan-batiment">
              la gestion administrative d'un artisan du bâtiment
            </Link>{" "}
            et{" "}
            <Link href="/blog/relancer-devis-artisan">la relance d'un devis envoyé</Link>.
          </p>
        </div>
      </section>

      <section className="section section--white" aria-labelledby="btp-cas-title">
        <div className="container narrow">
          <div className="section-heading">
            <p className="eyebrow">Cas réel</p>
            <h2 id="btp-cas-title">Chez un client de CelAssistPro, une entreprise du bâtiment</h2>
          </div>
          <p>
            Une entreprise du bâtiment en pleine activité avait des chantiers qui s'enchaînaient, mais
            des devis rédigés le soir et des relances oubliées. Le circuit devis, envoi, relance, facture
            a d'abord été structuré. Ensuite, les relances et le classement des pièces ont été
            automatisés. Résultat : des devis envoyés sous 24 h et plus aucune relance oubliée.
          </p>
          {raphael ? (
            <article className="testimonial-card">
              <blockquote>“{raphael.quote}”</blockquote>
              <p>
                <strong>{raphael.name}</strong>
                <span>{raphael.role}</span>
              </p>
            </article>
          ) : null}
          <p>
            Raphaël dirige BR16BATIMENT, l'entreprise du bâtiment dont je tiens l'administratif depuis
            2017 : son témoignage porte sur près de dix ans de collaboration quotidienne. Les trois cas
            sont détaillés sur la page <Link href="/cas-concrets">cas concrets</Link>.
          </p>
        </div>
      </section>

      <section className="section section--cream" aria-labelledby="btp-local-title">
        <div className="container narrow">
          <div className="section-heading">
            <p className="eyebrow">Sur place et à distance</p>
            <h2 id="btp-local-title">Sur place en Charente, à distance ailleurs</h2>
          </div>
          <p>
            Je suis basée à Champagne-Vigny, à environ 18 km d'Angoulême à vol d'oiseau. En Charente, je
            me déplace chez mes clients quand c'est utile. Ailleurs en France, je travaille à distance
            avec des outils simples et sécurisés.
          </p>
          <p>
            La page{" "}
            <Link href="/assistante-administrative-charente">assistante administrative à Angoulême et en Charente</Link>{" "}
            indique les communes où j'interviens sur place et les distances depuis mon lieu d'activité.
          </p>
        </div>
      </section>

      <section className="section section--white" aria-labelledby="btp-limits-title">
        <div className="container">
          <div className="section-heading section-heading--center">
            <h2 id="btp-limits-title">Ce que je ne fais pas</h2>
          </div>
          <div className="cards-grid cards-grid--three">
            <article className="mini-card">
              <Info aria-hidden="true" />
              <p>
                <strong>Pas de permanence téléphonique.</strong> Je ne prends pas d'appels à votre place.
              </p>
            </article>
            <article className="mini-card">
              <Info aria-hidden="true" />
              <p>
                <strong>Pas de remplacement de l'expert-comptable.</strong> Je prépare les pièces et les
                suivis ; il établit vos comptes.
              </p>
            </article>
            <article className="mini-card">
              <Info aria-hidden="true" />
              <p>
                <strong>Pas de paie, pas de conseil juridique ou fiscal.</strong> Pour ces sujets, adressez-vous
                à votre expert-comptable ou à un professionnel du droit.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section--cream" aria-labelledby="btp-faq-title">
        <div className="container narrow">
          <div className="section-heading">
            <p className="eyebrow">Questions fréquentes</p>
            <h2 id="btp-faq-title">L'administratif du bâtiment, en questions</h2>
          </div>
          <FaqAccordion faqs={btpFaqs} />
        </div>
      </section>

      <div className="container">
        <LeadMagnet />
      </div>

      <section className="final-cta">
        <div className="container">
          <h2>Vos soirées valent mieux que vos devis en retard.</h2>
          <a className="button button--gold" href={SITE.calendlyUrl}>
            {CTA.primary}
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
