import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Lock } from "lucide-react";
import { Bureau } from "@/components/papeterie/bureau";
import { CartePostale } from "@/components/papeterie/carte-postale";
import { Griffonnage } from "@/components/papeterie/griffonnage";
import {
  Coche,
  MetrePliant,
  Mots,
  Surligne,
  Tampon,
  Tasse,
  TraitRouge,
  Trombone,
} from "@/components/papeterie/objets";
import { PostIts } from "@/components/papeterie/post-its";
import { TamponLibre } from "@/components/papeterie/tampon-libre";
import { Tickets } from "@/components/papeterie/tickets";
import { LeadMagnet } from "@/components/site/lead-magnet";
import { pageMetadata } from "@/lib/metadata";
import {
  beforeAfter,
  btpTrades,
  type Chemise,
  CTA,
  entryPoints,
  heroProofs,
  homeResults,
  methodSteps,
  painPoints,
  SITE,
} from "@/lib/site-data";
import { fr } from "@/lib/typo";

export const metadata: Metadata = pageMetadata("home");

/** Les services détaillés, reliés depuis l'accueil (maillage interne). */
const services: { href: string; label: string; text: string; chemise: Chemise }[] = [
  {
    href: "/assistante-administrative",
    label: "Assistance administrative",
    text: "devis, facturation, relances, pièces comptables et suivi courant, à la mission ou au mois.",
    chemise: "or",
  },
  {
    href: "/secretaire-independante",
    label: "Secrétariat externalisé",
    text: "classement, suivi administratif et gestion de la boîte mail pour TPE, artisans et indépendants.",
    chemise: "ciel",
  },
  {
    href: "/facturation-electronique",
    label: "Facturation électronique",
    text: "calendrier 2026-2027, plateforme agréée et mise en conformité, expliqués simplement.",
    chemise: "saumon",
  },
  {
    href: "/assistante-administrative-btp",
    label: "Expertise BTP",
    text: "devis, acomptes, relances et pièces pour le comptable d'une entreprise du bâtiment.",
    chemise: "kraft",
  },
  {
    href: "/bras-droit-automatisation",
    label: "Bras droit et automatisation",
    text: "structurer, automatiser et piloter la gestion pour que l'entreprise dépende moins du dirigeant.",
    chemise: "lilas",
  },
  {
    href: "/assistante-administrative-charente",
    label: "Assistante administrative en Charente",
    text: "déplacements à Angoulême, Cognac, Barbezieux, Jarnac et dans toute la Charente.",
    chemise: "sauge",
  },
];

const chemisesDesPortes: Chemise[] = ["or", "kraft", "lilas"];

export default function HomePage() {
  return (
    <main data-chemise="lilas">
      <Bureau>
        <p className="eyebrow">Bras droit stratégique · Automatisation · Charente et à distance</p>
        <h1>
          <Mots>Assistante administrative indépendante</Mots>{" "}
          <span className="home-hero__lieu">
            <Mots>en Charente</Mots>
            <TraitRouge />
          </span>
        </h1>
        <p className="home-hero__baseline">
          Récupérez jusqu’à <Surligne>10&nbsp;heures par semaine.</Surligne>
        </p>
        <p>
          Votre gestion avance, même quand vous êtes sur votre métier. J’accompagne les dirigeants
          de TPE, artisans et indépendants dans leur gestion administrative, commerciale et
          pré-comptable, de la simple délégation à la structuration complète.
        </p>
        <div className="actions">
          <a className="button button--gold" href={SITE.calendlyUrl}>
            {CTA.primary}
          </a>
          <Link className="button button--outline-light" href="/diagnostic">
            {CTA.secondary}
          </Link>
        </div>
        <p className="home-hero__note">
          <Lock aria-hidden="true" /> Les deux sont gratuits et sans engagement.
        </p>
        <ul className="hero-proof">
          {heroProofs.map((proof) => (
            <li key={proof.text}>
              <Coche /> {fr(proof.text)}
            </li>
          ))}
        </ul>
      </Bureau>

      <section
        className="section section--enveloppe"
        data-chemise="sauge"
        data-defile="entree"
        aria-labelledby="what-title"
      >
        <div className="container">
          <div className="enveloppe-scene">
            <div aria-hidden="true" className="enveloppe-scene__dos">
              <span className="enveloppe-scene__rabat enveloppe-scene__rabat--arriere" />
            </div>
            <article className="lettre">
              <div className="lettre__tete">
                <div aria-hidden="true" className="lettre__expediteur">
                  <strong>CelAssistPro</strong>
                  <span>Céline Bardan</span>
                  <span>16250 Champagne-Vigny</span>
                </div>
                <figure aria-hidden="true" className="lettre__photo">
                  <Trombone />
                  <Image
                    src="/images/celine/02-celine-avatar-google-linkedin.jpg"
                    alt=""
                    width={320}
                    height={320}
                    sizes="130px"
                  />
                </figure>
              </div>
              <h2 id="what-title">Qu’est-ce que CelAssistPro&nbsp;?</h2>
              <div className="story">
                <p>
                  CelAssistPro est l’activité d’assistance administrative indépendante de Céline
                  Bardan, entrepreneuse individuelle installée à Champagne-Vigny, en Charente. Elle
                  prend en charge la gestion administrative, commerciale et pré-comptable des
                  dirigeants de TPE, d’artisans et d’indépendants.
                </p>
                <p>
                  Devis et facturation, relances clients, suivi des règlements, préparation des
                  pièces comptables, classement, gestion de la boîte mail&nbsp;: Céline Bardan se déplace
                  dans toute la Charente et travaille à distance partout en France. Au-delà de la
                  délégation, elle structure les circuits de gestion, met en place les outils et
                  automatise les tâches répétitives, jusqu’à des assistants d’intelligence
                  artificielle personnalisés.
                </p>
                <p>
                  Céline Bardan cumule trente ans d’expérience administrative et pré-comptable.
                  Depuis 2017, elle tient l’administratif d’une entreprise du bâtiment en Charente,
                  BR16BATIMENT. Ses tarifs ne sont pas publiés&nbsp;: chaque mission fait l’objet d’un
                  devis personnalisé, remis sous 48&nbsp;heures après un diagnostic gratuit de 15&nbsp;minutes.
                </p>
              </div>
              <p aria-hidden="true" className="lettre__signature">
                Céline
              </p>
            </article>
            <div aria-hidden="true" className="enveloppe-scene__poche">
              <span className="enveloppe-scene__rabat enveloppe-scene__rabat--avant" />
              <span className="enveloppe-scene__mention">À ouvrir en priorité</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--cream section--post-its" data-chemise="saumon">
        <div className="container">
          <div className="section-heading section-heading--center">
            <h2>
              <Mots>Vous avez créé votre entreprise pour exercer votre métier.</Mots>{" "}
              <Mots>Pas pour faire de la paperasse.</Mots>
            </h2>
            <p className="main-ecrite">Vous vous reconnaissez&nbsp;?</p>
          </div>
          <PostIts textes={painPoints.map((point) => point.text)} />
          <p className="transition-line">
            Si vous avez hoché la tête au moins une fois, la suite va vous intéresser.
          </p>
        </div>
      </section>

      <section className="section section--white" aria-labelledby="entry-points-title">
        <div className="container">
          <div className="section-heading section-heading--center">
            <p className="eyebrow">Un accompagnement qui s’adapte à votre besoin</p>
            <h2 id="entry-points-title">
              <Mots>De quoi avez-vous besoin aujourd'hui ?</Mots>
            </h2>
            <p>
              Besoin de déléguer votre administratif&nbsp;? Je le prends en charge. Besoin d’aller plus
              loin&nbsp;? Je structure vos processus, mets en place les bons outils et automatise ce qui
              peut l’être.
            </p>
          </div>
          <div className="chemises">
            {entryPoints.map((entry, index) => (
              <article
                className="chemise"
                data-chemise={chemisesDesPortes[index]}
                data-incline=""
                key={entry.href}
              >
                <div aria-hidden="true" className="chemise__dos">
                  <span className="chemise__onglet">Dossier 0{index + 1}</span>
                </div>
                <div aria-hidden="true" className="chemise__feuilles">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="chemise__face">
                  <h3>{fr(entry.title)}</h3>
                  <p>{fr(entry.text)}</p>
                  <Link href={entry.href}>
                    {fr(entry.linkLabel)} <ArrowRight aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <p className="disclaimer">
            Chaque entreprise est unique&nbsp;: toutes mes interventions font l’objet d’un devis
            personnalisé après diagnostic.
          </p>
        </div>
      </section>

      <section className="section section--cream" data-chemise="ciel" aria-labelledby="services-title">
        <div className="container">
          <div className="sommaire">
            <div className="section-heading">
              <h2 id="services-title">
                <Mots>Mes services</Mots>
              </h2>
              <p>Une mission ponctuelle ou un accompagnement dans la durée.</p>
            </div>
            <ul className="sommaire__liste">
              {services.map((service) => (
                <li data-chemise={service.chemise} key={service.href}>
                  <Link href={service.href}>{fr(service.label)}</Link>
                  <span className="sr-only">&nbsp;: </span>
                  <span className="sommaire__texte">{fr(service.text)}</span>
                  <ArrowRight aria-hidden="true" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section section--cream section--cahier" data-chemise="or">
        <div className="container">
          <div className="section-heading section-heading--center">
            <h2>
              <Mots>Je construis votre système de gestion, étape par étape.</Mots>
            </h2>
          </div>
          <div className="cahier" data-defile="traverse">
            <ol className="method-timeline">
              {methodSteps.map((step, index) => (
                <li className="method-step" key={step.title}>
                  <div className="method-step__marker" aria-hidden="true">
                    <span>{index + 1}</span>
                  </div>
                  <article className="method-step__card">
                    <header>
                      <h3>{fr(step.title)}</h3>
                    </header>
                    {step.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{fr(paragraph)}</p>
                    ))}
                  </article>
                </li>
              ))}
            </ol>
            <Griffonnage />
          </div>
          <div className="center-action">
            <a className="button button--gold" href={SITE.calendlyUrl}>
              {CTA.primary}
            </a>
          </div>
        </div>
      </section>

      <Tickets
        id="results-title"
        titre="Des résultats, pas seulement des tâches réalisées."
        resultats={homeResults}
      />

      <section className="section section--cream section--btp" data-chemise="kraft" aria-labelledby="btp-title">
        <MetrePliant />
        <div className="container btp-expertise">
          <div className="btp-expertise__content">
            <p className="eyebrow">Expertise métier</p>
            <h2 id="btp-title">
              <Mots>Une expertise particulière : artisans &amp; BTP</Mots>
            </h2>
            <p>
              Je travaille avec des TPE de différents secteurs, mais le bâtiment est un univers que
              je connais de l’intérieur depuis 2017.
            </p>
            <p>
              Devis, acomptes, relances, facturation, achats, justificatifs, pré-comptabilité et
              organisation entre le terrain et le bureau&nbsp;: je connais les contraintes d’une
              entreprise où le dirigeant passe davantage de temps sur ses chantiers que devant son
              ordinateur.
            </p>
            <Link className="button button--purple" href="/assistante-administrative-btp">
              Découvrir mon expertise BTP <ArrowRight aria-hidden="true" />
            </Link>
          </div>
          <aside className="btp-expertise__aside">
            <p>Des corps de métier que je connais déjà</p>
            <ul className="trade-chips" data-vu="">
              {btpTrades.map((trade) => (
                <li key={trade}>{fr(trade)}</li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section
        className="section section--cream"
        data-chemise="gris"
        aria-labelledby="before-after-title"
      >
        <div className="container">
          <div className="copie">
            <div className="section-heading">
              <h2 id="before-after-title">
                <Mots>Avant CelAssistPro / Avec CelAssistPro</Mots>
              </h2>
            </div>
            <ul className="before-after">
              {beforeAfter.map((row, index) => (
                <li data-vu="" key={row.before} style={{ "--i": index } as React.CSSProperties}>
                  <span className="before-after__before">
                    <span className="sr-only">Avant&nbsp;: </span>
                    <span className="before-after__rature">{fr(row.before)}</span>
                  </span>
                  <span className="before-after__after">
                    <span className="sr-only">Avec&nbsp;: </span>
                    {fr(row.after)}
                  </span>
                </li>
              ))}
            </ul>
            <p aria-hidden="true" className="copie__note" data-vu="">
              <span>Très bien.</span>
              <Tampon>Vu</Tampon>
            </p>
            <p className="transition-line">
              C’est cela, une gestion qui avance sans vous monopoliser.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--cream about-teaser" data-chemise="sauge">
        <div className="container about-teaser__grid">
          <div>
            <h2>
              <Mots>30 ans de rigueur. Les outils d'aujourd'hui.</Mots>
            </h2>
            <p>
              Je suis Céline, fondatrice de CelAssistPro. Depuis 30&nbsp;ans, j’accompagne les
              entreprises dans leur gestion administrative, organisationnelle et pré-comptable. Je
              me suis formée à l’IA et à l’automatisation pour offrir aux dirigeants de TPE ce qui
              était réservé aux grandes structures&nbsp;: une gestion qui tourne toute seule.
            </p>
            <Link className="lien-fleche" href="/a-propos">
              Faire connaissance <ArrowRight aria-hidden="true" />
            </Link>
          </div>
          <div className="about-teaser__table">
            <span aria-hidden="true" className="rond-de-cafe" />
            <figure className="polaroid polaroid--revele" data-attrapable="" data-vu="">
              <Trombone className="polaroid__trombone" />
              <span className="polaroid__cadre polaroid__cadre--recadre">
                <Image
                  src="/images/celine/03-celine-a-propos-tasse.jpg"
                  alt="Céline Bardan en situation de travail"
                  width={1024}
                  height={1024}
                  draggable={false}
                  sizes="(min-width: 900px) 420px, 80vw"
                />
              </span>
              <figcaption>Céline, au bureau</figcaption>
            </figure>
            <span aria-hidden="true" className="about-teaser__tasse" data-attrapable="">
              <Tasse />
            </span>
          </div>
        </div>
      </section>

      <CartePostale
        citation="Si elle fait pour vous le dixième de ce qu'elle fait ici, vous ne reviendrez pas en arrière."
        signature="Raphaël, dirigeant de BR16BATIMENT, entreprise dont je tiens l'administratif depuis 2017"
      />

      <LeadMagnet />

      <TamponLibre chemise="or" className="section final-cta">
        <div className="container">
          <h2>
            <Mots>Et si votre gestion tournait sans vous ?</Mots>
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
