import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ClipboardCheck, Mail, MapPin, Repeat, Sparkles } from "lucide-react";
import { FaqAccordion } from "@/components/site/faq-accordion";
import { JsonLd } from "@/components/site/json-ld";
import { LeadMagnet } from "@/components/site/lead-magnet";
import { PageHero } from "@/components/site/page-hero";
import { pageMetadata } from "@/lib/metadata";
import { CANONICAL_DESCRIPTION, CTA, SITE } from "@/lib/site-data";
import { breadcrumbJsonLd, serviceJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = pageMetadata("charente");

const communesSurPlace = [
  "Angoulême",
  "Soyaux",
  "La Couronne",
  "Ruelle-sur-Touvre",
  "Champniers",
  "Gond-Pontouvre",
  "L'Isle-d'Espagnac",
  "Barbezieux-Saint-Hilaire",
  "Cognac",
  "Jarnac",
  "Châteauneuf-sur-Charente",
  "Coteaux du Blanzacais",
  "Montmoreau",
];

const charenteFaqs = [
  {
    question: "Intervenez-vous à Angoulême, à Cognac ou à Barbezieux-Saint-Hilaire ?",
    answer:
      "Oui. Champagne-Vigny est à environ 18 km d'Angoulême, 15 km de Barbezieux-Saint-Hilaire et 36 km de Cognac, à vol d'oiseau. Je me déplace chez vous quand c'est utile, et le suivi courant se fait à distance avec des outils simples et sécurisés.",
  },
  {
    question: "Travaillez-vous avec des entreprises hors de la Charente ?",
    answer:
      "Oui, à distance, partout en France. Pour Saintes et Royan, en Charente-Maritime, je travaille aussi à distance ; les articles [sur Saintes](/blog/assistante-administrative-saintes) et [sur Royan](/blog/secretaire-independante-royan) détaillent le fonctionnement.",
  },
  {
    question: "Faut-il embaucher pour déléguer son administratif ?",
    answer:
      "Non. Une assistante administrative indépendante intervient sans contrat de travail ni recrutement, en mission ponctuelle ou dans la durée. Les accompagnements mensuels sont sans engagement au-delà du préavis prévu au contrat.",
  },
  {
    question: "Proposez-vous une permanence téléphonique ?",
    answer:
      "Non. Je ne tiens pas de permanence et je ne prends pas d'appels à la place de vos clients. Pour comprendre la différence avec le secrétariat à distance, lisez [l'article sur le télésecrétariat en Charente](/blog/telesecretariat-charente).",
  },
  {
    question: "Combien coûte une assistante administrative en Charente ?",
    answer:
      "Il n'existe pas de grille publique : chaque mission est chiffrée sur devis personnalisé, envoyé sous 48 h après un diagnostic gratuit de 15 minutes. Les facteurs qui font varier le prix sont expliqués dans [cet article](/blog/tarif-assistante-administrative-independante-facteurs).",
  },
  {
    question: "Comment se passe le premier contact ?",
    answer:
      "Vous réservez un créneau de 15 minutes dans l'agenda en ligne, ou vous écrivez depuis le [formulaire de contact](/contact). Pendant le diagnostic, j'identifie avec vous les trois points qui vous prennent le plus de temps. Le devis suit sous 48 h.",
  },
];

export default function AssistanteAdministrativeCharentePage() {
  return (
    <main>
      <JsonLd data={breadcrumbJsonLd("En Charente", "/assistante-administrative-charente")} />
      <JsonLd
        data={serviceJsonLd({
          path: "/assistante-administrative-charente",
          name: "Assistance administrative en Charente",
          serviceType:
            "Assistance administrative externalisée pour TPE, artisans et indépendants, sur place en Charente et à distance",
          description:
            "Assistante administrative indépendante basée à Champagne-Vigny : intervention sur place à Angoulême, Cognac, Barbezieux-Saint-Hilaire et dans toute la Charente, à distance partout en France.",
          audience: "TPE, artisans et indépendants de Charente",
        })}
      />

      <PageHero eyebrow="En Charente" title="Assistante administrative à Angoulême et en Charente">
        <p>{CANONICAL_DESCRIPTION}</p>
        <p>
          Je me déplace chez mes clients dans toute la Charente, notamment à Angoulême, à Cognac, à
          Barbezieux-Saint-Hilaire et à Jarnac. Le reste du temps, et partout ailleurs en France, le
          travail se fait à distance, avec des outils simples et sécurisés.
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

      <section className="section section--white" aria-labelledby="communes-title">
        <div className="container">
          <div className="section-heading section-heading--center">
            <p className="eyebrow">Zone d'intervention sur place</p>
            <h2 id="communes-title">Les communes où j'interviens sur place</h2>
          </div>
          <div className="container narrow">
            <p>
              Depuis Champagne-Vigny, je me déplace dans toute la Charente. Voici les communes de la
              zone d'intervention sur place.
            </p>
          </div>
          <ul className="trade-chips" aria-label="Communes desservies sur place">
            {communesSurPlace.map((commune) => (
              <li key={commune}>{commune}</li>
            ))}
          </ul>
          <div className="cards-grid cards-grid--three">
            <article className="mini-card">
              <MapPin aria-hidden="true" />
              <p>
                <strong>Angoulême</strong> environ 18 km de Champagne-Vigny, à vol d'oiseau.
              </p>
            </article>
            <article className="mini-card">
              <MapPin aria-hidden="true" />
              <p>
                <strong>Barbezieux-Saint-Hilaire</strong> environ 15 km, à vol d'oiseau.
              </p>
            </article>
            <article className="mini-card">
              <MapPin aria-hidden="true" />
              <p>
                <strong>Cognac</strong> environ 36 km, à vol d'oiseau.
              </p>
            </article>
          </div>
          <p className="transition-line">
            Les distances sont mesurées à vol d'oiseau depuis Champagne-Vigny. Par la route, les trajets
            sont plus longs. Une commune absente de cette liste ? Écrivez-moi : je vous indique si je
            peux venir sur place.
          </p>
        </div>
      </section>

      <section className="section section--cream" aria-labelledby="formats-title">
        <div className="container">
          <div className="section-heading section-heading--center">
            <p className="eyebrow">Sur place ou à distance</p>
            <h2 id="formats-title">Ce qui se fait sur place, ce qui se fait à distance</h2>
          </div>
          <div className="cards-grid cards-grid--three">
            <article className="mini-card">
              <MapPin aria-hidden="true" />
              <p>
                <strong>Sur place en Charente.</strong> Je me déplace chez vous quand c'est utile : pour le
                diagnostic, pour la mise en place d'un circuit ou d'un outil, ou pour un point régulier
                autour de vos vrais dossiers.
              </p>
            </article>
            <article className="mini-card">
              <Repeat aria-hidden="true" />
              <p>
                <strong>À distance, partout en France.</strong> Le suivi courant se fait à distance, avec
                des outils simples et sécurisés que je mets en place avec vous.
              </p>
            </article>
            <article className="mini-card">
              <Sparkles aria-hidden="true" />
              <p>
                <strong>Le principe.</strong> Si vous savez envoyer un courriel, vous savez travailler avec
                moi. Les outils sont choisis avec vous et conformes au RGPD.
              </p>
            </article>
          </div>
          <p className="transition-line">
            La liste des tâches que je peux déléguer figure sur la page{" "}
            <Link href="/assistante-administrative">assistance administrative</Link>.
          </p>
        </div>
      </section>

      <section className="section section--white" aria-labelledby="start-title">
        <div className="container">
          <div className="section-heading section-heading--center">
            <p className="eyebrow">Démarrer une mission</p>
            <h2 id="start-title">Comment démarre une mission en Charente</h2>
          </div>
          <div className="cards-grid cards-grid--four">
            <article className="mini-card">
              <ClipboardCheck aria-hidden="true" />
              <p>
                <strong>1. Diagnostic de 15 minutes.</strong> Gratuit et sans engagement, il permet d'identifier
                les trois points qui vous prennent le plus de temps.
              </p>
            </article>
            <article className="mini-card">
              <CheckCircle2 aria-hidden="true" />
              <p>
                <strong>2. Devis personnalisé.</strong> Il est envoyé sous 48 h, avec le périmètre, le format
                et le prix de la mission.
              </p>
            </article>
            <article className="mini-card">
              <Sparkles aria-hidden="true" />
              <p>
                <strong>3. Mise en place.</strong> Circuits, outils et relances : sur place si c'est utile,
                à distance sinon.
              </p>
            </article>
            <article className="mini-card">
              <Repeat aria-hidden="true" />
              <p>
                <strong>4. Suivi.</strong> Une mission ponctuelle, ou un accompagnement mensuel sans
                engagement au-delà du préavis prévu au contrat.
              </p>
            </article>
          </div>
          <p className="transition-line">
            Vous pouvez réserver le diagnostic directement dans l'agenda en ligne, ou passer par le
            formulaire de la page <Link href="/contact">contact</Link>.
          </p>
        </div>
      </section>

      <section className="section section--cream" aria-labelledby="proofs-title">
        <div className="container narrow">
          <div className="section-heading">
            <p className="eyebrow">Preuves locales</p>
            <h2 id="proofs-title">Une présence locale, des repères vérifiables</h2>
          </div>
          <ul className="task-list">
            <li>
              <CheckCircle2 aria-hidden="true" />
              <span>
                Administratif d'une entreprise du bâtiment en Charente, BR16BATIMENT, tenu depuis 2017.
              </span>
            </li>
            <li>
              <CheckCircle2 aria-hidden="true" />
              <span>Adhérente de la CPME.</span>
            </li>
            <li>
              <CheckCircle2 aria-hidden="true" />
              <span>Membre du réseau BNI Charente Grand Sud.</span>
            </li>
            <li>
              <CheckCircle2 aria-hidden="true" />
              <span>Conseillère municipale de sa commune.</span>
            </li>
            <li>
              <CheckCircle2 aria-hidden="true" />
              <span>30 ans d'expérience en administratif, en organisation et en pré-comptabilité.</span>
            </li>
            <li>
              <CheckCircle2 aria-hidden="true" />
              <span>BTS Assistant de gestion PME-PMI, puis formations à l'assistanat virtuel, à l'automatisation et à l'IA.</span>
            </li>
          </ul>
          <p className="transition-line">
            Le parcours complet figure sur la page <Link href="/a-propos">à propos</Link>. Le témoignage du
            dirigeant de BR16BATIMENT est sur la page <Link href="/cas-concrets">cas concrets</Link>.
          </p>
        </div>
      </section>

      <section className="section section--white" aria-labelledby="remote-title">
        <div className="container narrow">
          <div className="section-heading">
            <p className="eyebrow">À distance</p>
            <h2 id="remote-title">À distance aussi, hors de la Charente</h2>
          </div>
          <p>
            Vous êtes en Charente-Maritime, en Deux-Sèvres, dans la Vienne, en Haute-Vienne, en Dordogne ou
            en Gironde ? Pour ces départements, le travail se fait à distance, avec les mêmes outils simples
            et sécurisés.
          </p>
          <p>
            À Saintes et à Royan, en Charente-Maritime, j'accompagne les TPE à distance. Les articles dédiés
            expliquent comment cela fonctionne :{" "}
            <Link href="/blog/assistante-administrative-saintes">assistante administrative à Saintes</Link>{" "}
            et{" "}
            <Link href="/blog/secretaire-independante-royan">secrétaire indépendante à Royan</Link>.
          </p>
          <p>
            Une courtière en prêts de Limoges, cliente à distance, témoigne sur la page{" "}
            <Link href="/cas-concrets">cas concrets</Link>.
          </p>
        </div>
      </section>

      <section className="section section--cream" aria-labelledby="articles-title">
        <div className="container narrow">
          <div className="section-heading">
            <p className="eyebrow">Lire aussi</p>
            <h2 id="articles-title">Articles sur la gestion administrative en Charente</h2>
          </div>
          <ul className="task-list">
            <li>
              <CheckCircle2 aria-hidden="true" />
              <span>
                <Link href="/blog/assistante-virtuelle-charente-tpe">
                  Assistante virtuelle en Charente : ce qu'elle peut prendre en charge dans votre TPE
                </Link>
              </span>
            </li>
            <li>
              <CheckCircle2 aria-hidden="true" />
              <span>
                <Link href="/blog/secretaire-independante-angouleme-ou-recrutement">
                  Secrétaire indépendante à Angoulême ou recrutement : le comparatif honnête
                </Link>
              </span>
            </li>
            <li>
              <CheckCircle2 aria-hidden="true" />
              <span>
                <Link href="/blog/externalisation-administrative-charente-guide-dirigeant">
                  Externalisation administrative en Charente : le guide du dirigeant de TPE
                </Link>
              </span>
            </li>
            <li>
              <CheckCircle2 aria-hidden="true" />
              <span>
                <Link href="/blog/gestion-administrative-tpe-angouleme-erreurs">
                  Gestion administrative d'une TPE à Angoulême : les erreurs les plus fréquentes
                </Link>
              </span>
            </li>
            <li>
              <CheckCircle2 aria-hidden="true" />
              <span>
                <Link href="/blog/telesecretariat-charente">
                  Télésecrétariat et secrétariat à distance en Charente
                </Link>
              </span>
            </li>
            <li>
              <CheckCircle2 aria-hidden="true" />
              <span>
                <Link href="/blog/aide-administrative-artisan-cognac">
                  Aide administrative pour les artisans autour de Cognac
                </Link>
              </span>
            </li>
            <li>
              <CheckCircle2 aria-hidden="true" />
              <span>
                <Link href="/blog/automatisation-ia-pme-charente-par-ou-commencer">
                  Automatisation et IA pour les PME de Charente : par où commencer ?
                </Link>
              </span>
            </li>
          </ul>
        </div>
      </section>

      <section className="section section--white" aria-labelledby="services-title">
        <div className="container narrow">
          <div className="section-heading">
            <p className="eyebrow">Services</p>
            <h2 id="services-title">Si votre besoin est plus précis</h2>
          </div>
          <ul className="trade-chips">
            <li>
              <Link href="/assistante-administrative">Assistance administrative</Link>
            </li>
            <li>
              <Link href="/secretaire-independante">Secrétariat externalisé</Link>
            </li>
            <li>
              <Link href="/bras-droit-automatisation">Bras droit et automatisation</Link>
            </li>
            <li>
              <Link href="/assistante-administrative-btp">Expertise BTP et artisans</Link>
            </li>
            <li>
              <Link href="/facturation-electronique">Facturation électronique</Link>
            </li>
            <li>
              <Link href="/mes-offres">Formules d'accompagnement</Link>
            </li>
            <li>
              <Link href="/cas-concrets">Cas concrets</Link>
            </li>
          </ul>
        </div>
      </section>

      <section className="section section--cream" aria-labelledby="where-title">
        <div className="container narrow">
          <div className="section-heading">
            <p className="eyebrow">Où me trouver</p>
            <h2 id="where-title">Coordonnées et fiche Google</h2>
          </div>
          <ul className="contact-list">
            <li>
              <Mail aria-hidden="true" />
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </li>
            <li>
              <MapPin aria-hidden="true" />
              <span>CelAssistPro · Céline Bardan EI · Champagne-Vigny (16250), Charente</span>
            </li>
            <li>
              <MapPin aria-hidden="true" />
              <a href={SITE.googleBusinessUrl}>Voir la fiche Google</a>
            </li>
          </ul>
        </div>
      </section>

      <section className="section section--white" aria-labelledby="charente-faq-title">
        <div className="container narrow">
          <div className="section-heading">
            <p className="eyebrow">Questions fréquentes</p>
            <h2 id="charente-faq-title">Questions fréquentes sur l'accompagnement en Charente</h2>
          </div>
          <FaqAccordion faqs={charenteFaqs} />
        </div>
      </section>

      <div className="container">
        <LeadMagnet />
      </div>

      <section className="final-cta">
        <div className="container">
          <h2>Parlons de votre administratif, en Charente ou à distance.</h2>
          <a className="button button--gold" href={SITE.calendlyUrl}>
            {CTA.primary}
          </a>
          <p className="final-cta__note">
            Vous préférez mesurer avant d'en parler ? <Link href="/diagnostic">{CTA.secondary}</Link>
          </p>
        </div>
      </section>
    </main>
  );
}
