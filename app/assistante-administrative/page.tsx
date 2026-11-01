import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CartePostale } from "@/components/papeterie/carte-postale";
import { Tickets } from "@/components/papeterie/tickets";
import { Griffonnage } from "@/components/papeterie/griffonnage";
import { Coche, Mots, Tampon } from "@/components/papeterie/objets";
import { ScenePile } from "@/components/papeterie/scenes";
import { TamponLibre } from "@/components/papeterie/tampon-libre";
import { FaqAccordion } from "@/components/site/faq-accordion";
import { JsonLd } from "@/components/site/json-ld";
import { LeadMagnet } from "@/components/site/lead-magnet";
import { PageHero } from "@/components/site/page-hero";
import { pageMetadata } from "@/lib/metadata";
import { CTA, delegableTasks, homeResults, SITE, testimonials } from "@/lib/site-data";
import { breadcrumbJsonLd, serviceJsonLd } from "@/lib/structured-data";
import { fr } from "@/lib/typo";

export const metadata: Metadata = pageMetadata("assistance");

const formats = [
  {
    title: "Ponctuel",
    text: "une remise en ordre, un retard à rattraper, une heure de formation sur un outil. Vous payez le besoin, rien de plus.",
  },
  {
    title: "Récurrent",
    text: "je tiens votre gestion courante au rythme convenu : facturation, relances, pièces comptables, suivi.",
  },
  {
    title: "Sur place",
    text: "je me déplace en Charente quand c'est utile. Champagne-Vigny est à environ 18 km d'Angoulême, 15 km de Barbezieux-Saint-Hilaire et 36 km de Cognac.",
  },
  {
    title: "À distance",
    text: "partout en France, avec des outils simples et sécurisés. Si vous savez envoyer un e-mail, vous savez travailler avec moi.",
  },
];

const steps = [
  {
    title: "Le diagnostic gratuit",
    text: "En 15 minutes, nous repérons ensemble les tâches qui vous prennent le plus de temps. Gratuit et sans engagement.",
  },
  {
    title: "Le devis personnalisé",
    text: "Sous 48 heures, un devis clair : le périmètre, le format choisi (ponctuel ou récurrent) et ce qui fait varier le prix.",
  },
  {
    title: "La mise en place",
    text: "Nous convenons des accès et des outils à utiliser. Une clause de confidentialité figure dans chaque contrat, et les outils sont conformes au RGPD.",
  },
  {
    title: "Le suivi",
    text: "Je tiens la gestion convenue et je fais le point régulièrement sur vos dossiers. Sans engagement au-delà du préavis prévu au contrat.",
  },
];

const faqs = [
  {
    question: "Une assistante administrative indépendante peut-elle travailler à distance ?",
    answer:
      "Oui. Partout en France, je travaille à distance avec des outils simples et sécurisés. En Charente, je me déplace quand c'est utile : pour le diagnostic, la mise en place ou un point régulier.",
  },
  {
    question: "Peut-on commencer par une petite mission ?",
    answer:
      "Oui : une heure de formation sur un outil, une demi-journée de remise en ordre ou une mission ponctuelle. Il n'y a pas de minimum d'heures.",
  },
  {
    question: "Faut-il embaucher pour déléguer ?",
    answer:
      "Non. L'intervention se fait sans contrat de travail : vous n'avez ni recrutement, ni fiche de paie, ni charges salariales à gérer.",
  },
  {
    question: "Mes données sont-elles protégées ?",
    answer:
      "Une clause de confidentialité figure dans chaque contrat, et les outils utilisés sont conformes au RGPD.",
  },
  {
    question: "Une assistante administrative remplace-t-elle mon expert-comptable ?",
    answer:
      "Non, elle le complète. Je prépare, classe et transmets les pièces dont il a besoin. Je ne fais ni paie, ni conseil juridique ou fiscal.",
  },
  {
    question: "Quelle différence avec un secrétariat externalisé ?",
    answer:
      "Les deux se recoupent. Le [secrétariat externalisé](/secretaire-independante) se concentre sur les documents, le classement et la boîte mail. L'assistance administrative couvre aussi la gestion commerciale, la pré-comptabilité et l'organisation.",
  },
];

const related = [
  {
    href: "/blog/assistante-administrative-distance-comment-ca-marche",
    label: "Assistante administrative à distance : comment ça marche concrètement ?",
  },
  {
    href: "/blog/quand-deleguer-administratif",
    label: "Les signes qu'il est temps de déléguer votre administratif",
  },
  {
    href: "/blog/quelles-taches-deleguer-dirigeant",
    label: "Déléguer : par quelles tâches commencer ?",
  },
  {
    href: "/blog/tarif-assistante-administrative-independante-facteurs",
    label: "Combien coûte une assistante administrative indépendante ?",
  },
  {
    href: "/blog/petite-mission-assistante-independante",
    label: "Peut-on confier une mission d'une heure à une assistante indépendante ?",
  },
  {
    href: "/blog/externalisation-administrative-charente-guide-dirigeant",
    label: "Externalisation administrative en Charente : le guide du dirigeant de TPE",
  },
  {
    href: "/blog/confidentialite-externalisation-administrative",
    label: "Confidentialité : que deviennent vos données quand vous déléguez ?",
  },
];

export default function AssistanceAdministrativePage() {
  const testimonial = testimonials.find((item) => item.name === "Magali");

  return (
    <main data-chemise="or">
      <JsonLd data={breadcrumbJsonLd("Assistance administrative", "/assistante-administrative")} />
      <JsonLd
        data={serviceJsonLd({
          path: "/assistante-administrative",
          name: "Assistance administrative externalisée",
          serviceType:
            "Gestion administrative, commerciale et pré-comptable externalisée pour TPE et indépendants",
          description:
            "Délégation de tout ou partie de la gestion administrative : devis, facturation, relances, pièces comptables, classement, boîte mail. Mission ponctuelle ou récurrente, sur place en Charente, à distance partout en France.",
          audience: "Dirigeants de TPE, artisans et indépendants",
        })}
      />

      <PageHero
        objet={<ScenePile />}
        eyebrow="Assistante administrative indépendante"
        title="Une assistante administrative à distance ou sur place, sans embaucher"
      >
        <p>
          Vous n’avez pas nécessairement besoin de recruter. Vous avez besoin que les choses soient
          faites, suivies et relancées.
        </p>
        <p>
          Je prends en charge tout ou partie de votre gestion administrative, commerciale et
          pré-comptable, ponctuellement ou dans la durée, en Charente ou à distance partout en
          France.
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
          <div className="article-body">
            <section className="article-tile article-tile--wide article-lead">
              <h2>En bref&nbsp;: qu’est-ce qu’une assistante administrative indépendante&nbsp;?</h2>
              <p>
                Une assistante administrative indépendante prend en charge, ponctuellement ou dans la
                durée, tout ou partie de la gestion administrative d’une petite entreprise, sans
                contrat de travail ni recrutement. Chez CelAssistPro, Céline Bardan assure cette aide
                administrative aux entreprises&nbsp;: devis et facturation, relances clients, suivi des
                règlements, pièces comptables, classement, boîte mail et tableaux de suivi.
              </p>
              <p>
                Le rythme se choisit&nbsp;: une mission ponctuelle, un accompagnement récurrent, ou les
                deux. Je me déplace en Charente lorsque c’est utile et j’interviens ailleurs en France
                à distance. Il n’y a pas de minimum d’heures, et les accompagnements sont sans
                engagement au-delà du préavis prévu au contrat.
              </p>
            </section>

            <section className="article-tile">
              <h2>Aide administrative, assistante de gestion, assistante en ligne&nbsp;: les mots pour s’y retrouver</h2>
              <p>
                Ces expressions désignent des missions proches, et un même besoin peut être décrit de
                plusieurs façons. Une aide administrative intervient souvent sur des tâches précises.
                Une assistante de gestion tient la gestion courante d’une entreprise. Une assistante
                administrative en ligne ou freelance travaille à distance, à la mission ou au mois.
              </p>
              <p>
                Chez CelAssistPro, ces formules se combinent selon votre besoin. Si vous cherchez
                plutôt un secrétariat, voyez la page{" "}
                <Link href="/secretaire-independante">secrétariat externalisé</Link>.
              </p>
            </section>

            <section className="article-tile">
              <h2>Pour quelles entreprises&nbsp;?</h2>
              <p>
                Ce service s’adresse aux TPE, aux artisans, aux indépendants et aux PME qui n’ont pas
                besoin d’un poste administratif à temps plein. Le besoin est souvent le même&nbsp;: que les
                devis partent, que les factures soient payées et que les pièces arrivent chez le
                comptable.
              </p>
              <p>
                Pour les entreprises du bâtiment, le circuit administratif a ses étapes propres&nbsp;:{" "}
                <Link href="/assistante-administrative-btp">voyez l’expertise artisans et BTP</Link>.
              </p>
            </section>
          </div>
        </div>
      </section>

      <section className="section section--cream">
        <div className="container">
          <div className="section-heading section-heading--center">
            <h2>
              <Mots>Ce que vous pouvez me déléguer</Mots>
            </h2>
            <p>Tout, une partie, ou juste ce qui vous pèse le plus.</p>
          </div>
          <ul className="task-list">
            {delegableTasks.map((task) => (
              <li key={task}>
                <Coche />
                <span>{fr(task)}</span>
              </li>
            ))}
          </ul>
          <p className="transition-line">
            Ce que je ne fais pas&nbsp;: ni permanence téléphonique, ni paie, ni conseil juridique ou
            fiscal. Je complète votre expert-comptable, je ne le remplace pas.
          </p>
        </div>
      </section>

      <section className="section section--white">
        <div className="container">
          <div className="section-heading section-heading--center">
            <h2>
              <Mots>Ponctuel, récurrent, sur place ou à distance</Mots>
            </h2>
            <p>Les formats se combinent selon le besoin.</p>
          </div>
          <div className="cards-grid cards-grid--four">
            {formats.map((format) => (
              <article className="mini-card" key={format.title}>
                <p>
                  <strong>{fr(format.title)}</strong>&nbsp;: {fr(format.text)}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--cream">
        <div className="container">
          <div className="section-heading section-heading--center">
            <h2>
              <Mots>Comment se déroule une mission</Mots>
            </h2>
            <p>Quatre étapes, du premier échange au suivi.</p>
          </div>
          <div className="cahier" data-defile="traverse">
            <ol className="method-timeline">
              {steps.map((step, index) => (
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

      {testimonial ? (
        <CartePostale
          citation={testimonial.quote}
          signature={`${testimonial.name}, ${testimonial.role}`}
        />
      ) : null}

      <Tickets id="proof-title" titre="Trois résultats obtenus chez mes clients" resultats={homeResults} />

      <section className="section section--white">
        <div className="container narrow">
          <div className="highlight-panel">
            <h2>Comment est fixé le prix&nbsp;?</h2>
            <p>
              Il n’existe pas de grille publique. Chaque mission est chiffrée sur devis personnalisé,
              envoyé sous 48&nbsp;heures après le diagnostic gratuit de 15&nbsp;minutes&nbsp;: deux entreprises
              n’ont jamais le même volume de travail ni les mêmes outils.
            </p>
            <p>
              Le prix dépend notamment du volume, de la complexité des tâches (une tâche bornée, une
              remise en ordre ou un suivi continu), de l’urgence, de l’état de départ de votre
              organisation, des déplacements et de la durée de la mission. Un suivi mensuel se chiffre
              en forfait&nbsp;; une mission ponctuelle se chiffre à sa taille.
            </p>
            <p>
              Pour situer ces montants par rapport au marché, lisez notre{" "}
              <Link href="/blog/tarif-assistante-administrative-independante-facteurs">
                article sur les tarifs
              </Link>&nbsp;: il présente des repères sourcés et datés, qui ne valent pas tarif de CelAssistPro.
              Les formules sont détaillées dans <Link href="/mes-offres">mes offres</Link>.
            </p>
          </div>
          <p className="transition-line">
            Et si le problème ne venait pas seulement du manque de temps&nbsp;? Certaines tâches se
            délèguent, d’autres se suppriment ou s’automatisent&nbsp;:{" "}
            <Link href="/bras-droit-automatisation">découvrir le bras droit et l’automatisation</Link>.
          </p>
        </div>
      </section>

      <section className="section section--cream" id="faq">
        <div className="container narrow">
          <div className="section-heading section-heading--center">
            <p className="eyebrow">Questions fréquentes</p>
            <h2>
              <Mots>Ce que l'on me demande le plus souvent</Mots>
            </h2>
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
            <Mots>Dites-moi ce qui vous pèse. Je vous dis ce que je peux prendre.</Mots>
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
