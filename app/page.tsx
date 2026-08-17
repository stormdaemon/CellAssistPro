import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, HardHat, Lock } from "lucide-react";
import { LeadMagnet } from "@/components/site/lead-magnet";
import { pageMetadata } from "@/lib/metadata";
import {
  beforeAfter,
  btpTrades,
  CTA,
  entryPoints,
  heroProofs,
  homeResults,
  methodSteps,
  painPoints,
  SITE,
} from "@/lib/site-data";

export const metadata: Metadata = pageMetadata("home");

export default function HomePage() {
  return (
    <main>
      <section className="home-hero">
        <div className="container home-hero__grid">
          <div className="home-hero__content">
            <p className="eyebrow">
              Assistante administrative indépendante · Bras droit stratégique · Automatisation
            </p>
            <h1>
              Récupérez jusqu'à <span>10 heures par semaine.</span>
            </h1>
            <p className="home-hero__baseline">
              Votre gestion avance, même quand vous êtes sur votre métier.
            </p>
            <p>
              J'accompagne les dirigeants de TPE, artisans et indépendants dans leur gestion
              administrative, commerciale et pré-comptable — de la simple délégation à la
              structuration complète.
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
                  <proof.icon aria-hidden="true" /> {proof.text}
                </li>
              ))}
            </ul>
          </div>
          <div className="home-hero__photo">
            <Image
              src="/images/celine/01-celine-hero-accueil-sourire.jpg"
              alt="Céline Bardan, fondatrice de CelAssistPro, assistante administrative et bras droit stratégique"
              width={1024}
              height={1024}
              priority
              sizes="(min-width: 900px) 45vw, 100vw"
            />
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="container">
          <div className="section-heading section-heading--center">
            <h2>Vous avez créé votre entreprise pour exercer votre métier. Pas pour faire de la paperasse.</h2>
            <p>Vous vous reconnaissez ?</p>
          </div>
          <div className="cards-grid cards-grid--four">
            {painPoints.map((point) => (
              <article className="mini-card" key={point.text}>
                <point.icon aria-hidden="true" />
                <p>{point.text}</p>
              </article>
            ))}
          </div>
          <p className="transition-line">
            Si vous avez hoché la tête au moins une fois, la suite va vous intéresser.
          </p>
        </div>
      </section>

      <section className="section section--cream" aria-labelledby="entry-points-title">
        <div className="container">
          <div className="section-heading section-heading--center">
            <p className="eyebrow">Un accompagnement qui s'adapte à votre besoin</p>
            <h2 id="entry-points-title">De quoi avez-vous besoin aujourd'hui ?</h2>
            <p>
              Besoin de déléguer votre administratif ? Je le prends en charge. Besoin d'aller plus
              loin ? Je structure vos processus, mets en place les bons outils et automatise ce qui
              peut l'être.
            </p>
          </div>
          <div className="cards-grid cards-grid--three entry-points">
            {entryPoints.map((entry) => (
              <article className="entry-card" key={entry.href}>
                <entry.icon aria-hidden="true" />
                <h3>{entry.title}</h3>
                <p>{entry.text}</p>
                <Link href={entry.href}>
                  {entry.linkLabel} <ArrowRight aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
          <p className="disclaimer">
            Chaque entreprise est unique : toutes mes interventions font l'objet d'un devis
            personnalisé après diagnostic.
          </p>
        </div>
      </section>

      <section className="section section--white">
        <div className="container">
          <div className="section-heading section-heading--center">
            <h2>Je ne vends pas des heures. Je construis votre système.</h2>
          </div>
          <ol className="method-timeline">
            {methodSteps.map((step, index) => (
              <li className="method-step" key={step.title}>
                <div className="method-step__marker" aria-hidden="true">
                  <span>{index + 1}</span>
                </div>
                <article className="method-step__card">
                  <header>
                    <step.icon aria-hidden="true" />
                    <h3>{step.title}</h3>
                  </header>
                  {step.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </article>
              </li>
            ))}
          </ol>
          <div className="center-action">
            <a className="button button--gold" href={SITE.calendlyUrl}>
              {CTA.primary}
            </a>
          </div>
        </div>
      </section>

      <section className="results-strip" aria-labelledby="results-title">
        <div className="container">
          <h2 id="results-title">Des résultats, pas seulement des tâches réalisées.</h2>
          <div className="results-strip__grid">
            {homeResults.map((result) => (
              <article key={result.value}>
                <strong>{result.value}</strong>
                <p>{result.label}</p>
              </article>
            ))}
          </div>
          <Link className="results-strip__link" href="/cas-concrets">
            Voir les cas concrets <ArrowRight aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="section section--cream" aria-labelledby="btp-title">
        <div className="container btp-expertise">
          <div className="btp-expertise__content">
            <p className="eyebrow">Expertise métier</p>
            <h2 id="btp-title">Une expertise particulière : artisans &amp; BTP</h2>
            <p>
              Je travaille avec des TPE de différents secteurs, mais le bâtiment est un univers que
              je connais de l'intérieur depuis 2017.
            </p>
            <p>
              Devis, acomptes, relances, facturation, achats, justificatifs, pré-comptabilité et
              organisation entre le terrain et le bureau : je connais les contraintes d'une
              entreprise où le dirigeant passe davantage de temps sur ses chantiers que devant son
              ordinateur.
            </p>
            <Link className="button button--purple" href="/assistante-administrative-btp">
              Découvrir mon expertise BTP <ArrowRight aria-hidden="true" />
            </Link>
          </div>
          <aside className="btp-expertise__aside">
            <HardHat aria-hidden="true" />
            <p>Des corps de métier que je connais déjà</p>
            <ul className="trade-chips">
              {btpTrades.map((trade) => (
                <li key={trade}>{trade}</li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="section section--white" aria-labelledby="before-after-title">
        <div className="container narrow">
          <div className="section-heading section-heading--center">
            <h2 id="before-after-title">Avant CelAssistPro / Avec CelAssistPro</h2>
          </div>
          <ul className="before-after">
            {beforeAfter.map((row) => (
              <li key={row.before}>
                <span className="before-after__before">{row.before}</span>
                <ArrowRight aria-hidden="true" />
                <span className="before-after__after">{row.after}</span>
              </li>
            ))}
          </ul>
          <p className="transition-line">
            C'est cela, une gestion qui avance sans vous monopoliser.
          </p>
        </div>
      </section>

      <section className="about-teaser">
        <div className="container about-teaser__grid">
          <div>
            <h2>30 ans de rigueur. Les outils d'aujourd'hui.</h2>
            <p>
              Je suis Céline, fondatrice de CelAssistPro. Depuis 30 ans, j'accompagne les
              entreprises dans leur gestion administrative, organisationnelle et pré-comptable. Je
              me suis formée à l'IA et à l'automatisation pour offrir aux dirigeants de TPE ce qui
              était réservé aux grandes structures : une gestion qui tourne toute seule.
            </p>
            <Link href="/a-propos">Faire connaissance →</Link>
          </div>
          <Image
            src="/images/celine/03-celine-a-propos-tasse.jpg"
            alt="Céline Bardan en situation de travail"
            width={1024}
            height={1024}
            sizes="(min-width: 900px) 45vw, 100vw"
          />
        </div>
      </section>

      <section className="testimonial-band">
        <div className="container">
          <blockquote>
            “Si elle fait pour vous le dixième de ce qu'elle fait ici, vous ne reviendrez pas en
            arrière.”
          </blockquote>
          <p>— Raphaël, dirigeant de BR16BATIMENT</p>
          <Link href="/cas-concrets">Voir tous les retours clients →</Link>
        </div>
      </section>

      <div className="container">
        <LeadMagnet />
      </div>

      <section className="final-cta">
        <div className="container">
          <h2>Et si dans 30 jours, votre gestion tournait sans vous ?</h2>
          <a className="button button--gold" href={SITE.calendlyUrl}>
            {CTA.primary}
          </a>
        </div>
      </section>
    </main>
  );
}
