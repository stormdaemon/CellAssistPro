import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Bot,
  CalendarCheck,
  CheckCircle2,
  FileWarning,
  FolderClock,
  Gauge,
  HandCoins,
  Home,
  MailWarning,
  Search,
  ShieldCheck,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { LeadMagnet } from "@/components/site/lead-magnet";
import { pageMetadata } from "@/lib/metadata";
import { methodSteps, offers, painPoints, SITE, stats } from "@/lib/site-data";

export const metadata: Metadata = pageMetadata("home");

const painIcons = [MailWarning, Home, FolderClock, FileWarning];
const methodIcons = [Search, Gauge, TrendingUp];
const offerIcons = [CheckCircle2, ShieldCheck, Sparkles];

export default function HomePage() {
  return (
    <main>
      <section className="home-hero">
        <div className="container home-hero__grid">
          <div className="home-hero__content">
            <p className="eyebrow">Assistante virtuelle Charente</p>
            <h1>
              Récupérez <span>10 heures</span> par semaine. Votre gestion tourne — sans vous.
            </h1>
            <p>
              J'allège les dirigeants de TPE — artisans, indépendants de la tech, du bien-être et
              des services — de toute leur charge administrative, organisationnelle et
              pré-comptable. Grâce à l'IA et à l'automatisation, votre gestion devient un système
              fluide qui fonctionne pendant que vous exercez votre métier.
            </p>
            <div className="actions">
              <a className="button button--gold" href={SITE.calendlyUrl}>
                Réserver mon diagnostic gratuit — 15 min
              </a>
              <Link className="button button--outline-light" href="/mes-offres">
                Découvrir mes offres
              </Link>
            </div>
            <ul className="hero-proof">
              <li>
                <CalendarCheck aria-hidden="true" /> 30 ans d'expertise
              </li>
              <li>
                <Bot aria-hidden="true" /> IA & automatisation
              </li>
              <li>
                <HandCoins aria-hidden="true" /> Sur place en Charente, à distance partout en France
              </li>
            </ul>
          </div>
          <div className="home-hero__photo">
            <Image
              src="/images/celine/01-celine-hero-accueil-sourire.jpg"
              alt="Céline Bardan, fondatrice de CelAssistPro"
              width={1024}
              height={1024}
              priority
              sizes="(min-width: 900px) 45vw, 100vw"
            />
          </div>
        </div>
      </section>

      <section className="stats-band" aria-label="Chiffres clés">
        <div className="container stats-band__grid">
          {stats.map(([value, label]) => (
            <div key={value} className="stat">
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section section--white">
        <div className="container">
          <div className="section-heading section-heading--center">
            <h2>Vous avez créé votre entreprise pour exercer votre métier. Pas pour faire de la paperasse.</h2>
            <p>Vous vous reconnaissez ?</p>
          </div>
          <div className="cards-grid cards-grid--four">
            {painPoints.map((point, index) => {
              const Icon = painIcons[index];
              return (
                <article className="mini-card" key={point}>
                  <Icon aria-hidden="true" />
                  <p>{point}</p>
                </article>
              );
            })}
          </div>
          <p className="transition-line">
            Si vous avez hoché la tête au moins une fois, la suite va vous intéresser.
          </p>
        </div>
      </section>

      <section className="section section--cream">
        <div className="container">
          <div className="section-heading section-heading--center">
            <h2>Je ne vends pas des heures. Je construis votre système.</h2>
          </div>
          <ol className="method-timeline">
            {methodSteps.map((step, index) => {
              const Icon = methodIcons[index];
              return (
                <li className="method-step" key={step.title}>
                  <div className="method-step__marker" aria-hidden="true">
                    <span>{index + 1}</span>
                  </div>
                  <article className="method-step__card">
                    <header>
                      <Icon aria-hidden="true" />
                      <h3>{step.title}</h3>
                    </header>
                    {step.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </article>
                </li>
              );
            })}
          </ol>
          <div className="center-action">
            <a className="button button--gold" href={SITE.calendlyUrl}>
              Commencer par le diagnostic gratuit
            </a>
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="container">
          <div className="section-heading section-heading--center">
            <h2>Trois façons de travailler ensemble</h2>
          </div>
          <div className="cards-grid cards-grid--three">
            {offers.map((offer, index) => {
              const Icon = offerIcons[index];
              return (
                <article className="offer-preview" key={offer.name}>
                  <Icon aria-hidden="true" />
                  <h3>{offer.name.replace("La ", "").replace("Le ", "")}</h3>
                  <p>{offer.short}</p>
                  <Link href="/mes-offres">En savoir plus →</Link>
                </article>
              );
            })}
          </div>
          <p className="disclaimer">
            Chaque entreprise est unique : toutes mes interventions font l'objet d'un devis
            personnalisé après diagnostic gratuit.
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
            Réserver mon diagnostic gratuit — 15 min
          </a>
        </div>
      </section>
    </main>
  );
}
