import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  ClipboardList,
  Info,
  Layers3,
  Network,
  Search,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import { FaqAccordion } from "@/components/site/faq-accordion";
import { JsonLd } from "@/components/site/json-ld";
import { LeadMagnet } from "@/components/site/lead-magnet";
import { PageHero } from "@/components/site/page-hero";
import { pageMetadata } from "@/lib/metadata";
import { CTA, SITE } from "@/lib/site-data";
import { breadcrumbJsonLd, serviceJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = pageMetadata("secretaire");

const tasks = [
  "Devis et facturation",
  "Suivi des règlements",
  "Relances clients",
  "Préparation et transmission des pièces comptables",
  "Classement et organisation documentaire",
  "Suivi administratif",
  "Gestion de la boîte mail",
  "Tableaux de suivi",
  "Aide à la mise en place d'outils",
];

const differences = [
  {
    icon: ClipboardList,
    title: "Secrétaire indépendante",
    text: "elle prend en charge le secrétariat d'une entreprise en prestation : documents, classement, suivi et boîte mail. Pas de contrat de travail.",
  },
  {
    icon: Layers3,
    title: "Assistante administrative",
    text: "son périmètre est plus large : gestion administrative, commerciale et pré-comptable, avec un volet d'organisation.",
  },
  {
    icon: Network,
    title: "Assistante virtuelle",
    text: "terme général pour une assistance à distance. Son contenu varie beaucoup d'un prestataire à l'autre : vérifiez le détail des tâches avant de vous engager.",
  },
  {
    icon: Info,
    title: "Télésecrétariat",
    text: "dans l'usage courant, il désigne surtout l'accueil et la prise d'appels à distance. CelAssistPro ne le fait pas : ici, le secrétariat à distance est le travail administratif réalisé à distance.",
  },
];

const steps = [
  {
    icon: Search,
    title: "Un diagnostic de 15 minutes",
    text: "Nous regardons ensemble les tâches de secrétariat qui vous pèsent : devis, relances, classement, boîte mail. Gratuit et sans engagement.",
  },
  {
    icon: ClipboardCheck,
    title: "Un devis personnalisé",
    text: "Sous 48 heures : le périmètre, le rythme (mission ponctuelle ou suivi mensuel) et les conditions.",
  },
  {
    icon: ShieldCheck,
    title: "Une mise en place simple",
    text: "Accès et outils convenus ensemble, clause de confidentialité dans le contrat, outils conformes au RGPD.",
  },
  {
    icon: TrendingUp,
    title: "Un suivi régulier",
    text: "Je tiens le secrétariat convenu et je fais le point sur vos dossiers. Sans engagement au-delà du préavis prévu au contrat.",
  },
];

const faqs = [
  {
    question: "Une secrétaire indépendante peut-elle répondre au téléphone ?",
    answer:
      "Non. Je ne propose ni permanence téléphonique ni prise d'appels en continu. Le secrétariat se fait avec les outils que nous installons ensemble, à distance ou sur place en Charente.",
  },
  {
    question: "Quelle différence avec une assistante administrative ?",
    answer:
      "Le périmètre se recoupe. Le secrétariat se concentre sur les documents, le classement et la boîte mail. L'[assistance administrative](/assistante-administrative) couvre aussi la gestion commerciale, la pré-comptabilité et l'organisation.",
  },
  {
    question: "Peut-on confier une petite mission ?",
    answer:
      "Oui : une demi-journée de remise en ordre, une heure de formation sur un outil ou un suivi régulier. Vous payez le besoin, sans minimum d'heures.",
  },
  {
    question: "Mes données sont-elles protégées ?",
    answer:
      "Une clause de confidentialité figure dans chaque contrat, et les outils utilisés sont conformes au RGPD.",
  },
  {
    question: "Faut-il être en Charente pour travailler avec vous ?",
    answer:
      "Non. Je me déplace en Charente quand c'est utile ; ailleurs en France, le travail se fait à distance.",
  },
  {
    question: "Y a-t-il un engagement de durée ?",
    answer:
      "Non. Les accompagnements sont sans engagement au-delà du préavis prévu au contrat.",
  },
];

const related = [
  {
    href: "/blog/telesecretariat-charente",
    label: "Secrétariat à distance ou télésecrétariat : quelle différence ?",
  },
  {
    href: "/blog/secretaire-independante-angouleme-ou-recrutement",
    label: "Secrétaire indépendante à Angoulême ou recrutement : le comparatif",
  },
  {
    href: "/blog/tarif-assistante-administrative-independante-facteurs",
    label: "Combien coûte une assistante administrative indépendante ?",
  },
  {
    href: "/blog/assistante-administrative-distance-comment-ca-marche",
    label: "Assistante administrative à distance : comment ça marche concrètement ?",
  },
  {
    href: "/assistante-administrative",
    label: "Assistance administrative : ce que je peux déléguer",
  },
  {
    href: "/assistante-administrative-charente",
    label: "Assistance administrative en Charente : communes et déplacements",
  },
];

export default function SecretaireIndependantePage() {
  return (
    <main>
      <JsonLd data={breadcrumbJsonLd("Secrétariat externalisé", "/secretaire-independante")} />
      <JsonLd
        data={serviceJsonLd({
          path: "/secretaire-independante",
          name: "Secrétariat externalisé",
          serviceType:
            "Secrétariat externalisé et secrétariat à distance pour TPE, artisans et indépendants",
          description:
            "Secrétariat externalisé : devis, facturation, relances, pièces comptables, classement, suivi administratif et gestion de la boîte mail, à la mission ou au mois. Sur place en Charente, à distance partout en France. Pas de permanence téléphonique.",
          audience: "Dirigeants de TPE, artisans et indépendants",
        })}
      />

      <PageHero
        eyebrow="Secrétaire indépendante"
        title="Secrétaire indépendante : secrétariat externalisé pour TPE, artisans et indépendants"
      >
        <p>
          Un secrétariat externalisé confie les tâches de secrétariat d'une petite entreprise à une
          professionnelle indépendante, sans contrat de travail ni recrutement, en mission ponctuelle
          ou dans la durée.
        </p>
        <p>
          Je suis Céline Bardan, basée à Champagne-Vigny, en Charente. J'interviens sur place en
          Charente et à distance partout en France.
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
            <h2 id="what-title">Qu'est-ce qu'une secrétaire indépendante ?</h2>
          </div>
          <div className="story">
            <p>
              Une secrétaire indépendante est une prestataire qui assure une partie du secrétariat
              d'une entreprise, en mission ponctuelle ou dans la durée, sans contrat de travail. Elle
              décharge le dirigeant des tâches de bureau qui lui prennent du temps.
            </p>
            <p>
              Chez CelAssistPro, ce secrétariat externalisé couvre les devis et la facturation, les
              relances clients, la préparation des pièces comptables, le classement, la gestion de la
              boîte mail et le suivi administratif. Il s'adresse aux TPE, aux artisans et aux
              indépendants.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--cream">
        <div className="container">
          <div className="section-heading section-heading--center">
            <h2>Ce que fait une secrétaire indépendante pour une TPE</h2>
            <p>Les tâches listées ici sont celles que je prends réellement en charge.</p>
          </div>
          <ul className="task-list">
            {tasks.map((task) => (
              <li key={task}>
                <CheckCircle2 aria-hidden="true" />
                <span>{task}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--white">
        <div className="container narrow">
          <div className="highlight-panel">
            <div className="highlight-panel__icon">
              <Info aria-hidden="true" />
            </div>
            <h2>Ce qui n'est pas inclus</h2>
            <p>
              Pas de permanence téléphonique : je ne réponds pas au téléphone à votre place et ne
              prends pas d'appels en continu. Si vous cherchez un accueil téléphonique, cette offre
              ne répond pas à votre besoin.
            </p>
            <p>
              Pas de paie, pas de conseil juridique ou fiscal. Je ne remplace pas votre
              expert-comptable : je le complète, en préparant les pièces et les tableaux dont il a
              besoin.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--cream">
        <div className="container">
          <div className="section-heading section-heading--center">
            <h2>Quelles différences entre ces appellations ?</h2>
            <p>Secrétaire, assistante, assistante virtuelle, télésecrétariat : des termes proches.</p>
          </div>
          <div className="cards-grid cards-grid--four">
            {differences.map((item) => (
              <article className="mini-card" key={item.title}>
                <item.icon aria-hidden="true" />
                <p>
                  <strong>{item.title}</strong> : {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="container">
          <div className="article-body">
            <section className="article-tile">
              <h2>Pour qui ?</h2>
              <p>
                Pour les dirigeants de TPE, les artisans et les indépendants qui veulent faire tenir
                leur secrétariat sans recruter. Pour cette fonction, vous n'avez ni contrat de travail,
                ni paie, ni charges à gérer.
              </p>
              <p>
                Chez une entreprise du bâtiment, la structuration du circuit devis, envoi, relance et
                facture a permis d'envoyer les devis sous 24 heures et de ne plus oublier de relance.
              </p>
            </section>
            <section className="article-tile">
              <h2>Sur place ou à distance</h2>
              <p>
                Champagne-Vigny est à environ 18 km d'Angoulême, 15 km de Barbezieux-Saint-Hilaire et
                36 km de Cognac. Je me déplace dans toute la Charente.
              </p>
              <p>
                Ailleurs en France, à Saintes, Royan, Limoges ou plus loin, le secrétariat se fait à
                distance, avec des outils simples et sécurisés. Le détail des déplacements se trouve
                sur la page{" "}
                <Link href="/assistante-administrative-charente">assistance administrative en Charente</Link>.
              </p>
            </section>
          </div>
        </div>
      </section>

      <section className="section section--cream">
        <div className="container">
          <div className="section-heading section-heading--center">
            <h2>Comment on travaille ensemble</h2>
            <p>Quatre étapes, de la prise de contact au suivi.</p>
          </div>
          <ol className="method-timeline">
            {steps.map((step, index) => (
              <li className="method-step" key={step.title}>
                <div className="method-step__marker" aria-hidden="true">
                  <span>{index + 1}</span>
                </div>
                <article className="method-step__card">
                  <header>
                    <step.icon aria-hidden="true" />
                    <h3>{step.title}</h3>
                  </header>
                  <p>{step.text}</p>
                </article>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section--white">
        <div className="container narrow">
          <div className="section-heading">
            <h2>Tarif : un devis personnalisé</h2>
          </div>
          <div className="story">
            <p>
              Il n'existe pas de grille publique. Après le diagnostic gratuit de 15 minutes, je vous
              envoie un devis personnalisé sous 48 heures.
            </p>
            <p>
              Une mission ponctuelle se chiffre à sa taille ; un secrétariat mensuel se chiffre en
              forfait. Pour situer les montants par rapport au marché, lisez notre{" "}
              <Link href="/blog/tarif-assistante-administrative-independante-facteurs">
                article sur les tarifs de l'assistante administrative indépendante
              </Link>{" "}
              : il présente des repères sourcés et datés, qui ne valent pas tarif de CelAssistPro.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--cream" id="faq">
        <div className="container narrow">
          <div className="section-heading section-heading--center">
            <p className="eyebrow">Questions fréquentes</p>
            <h2>Ce que l'on me demande sur le secrétariat</h2>
          </div>
          <FaqAccordion faqs={faqs} />
        </div>
      </section>

      <section className="section section--white">
        <div className="container">
          <div className="article-body">
            <section className="article-tile article-tile--wide">
              <h2>Pour aller plus loin</h2>
              <ul className="article-related">
                {related.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href}>
                      {item.label} <ArrowRight aria-hidden="true" />
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </section>

      <div className="container">
        <LeadMagnet />
      </div>

      <section className="final-cta">
        <div className="container">
          <h2>Un secrétariat qui avance, sans recrutement : parlons-en en 15 minutes.</h2>
          <a className="button button--gold" href={SITE.calendlyUrl}>
            {CTA.primary}
          </a>
        </div>
      </section>
    </main>
  );
}
