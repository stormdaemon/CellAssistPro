import type { Metadata } from "next";
import Image from "next/image";
import { CalendarCheck, Eye, LockKeyhole, Ruler } from "lucide-react";
import { JsonLd } from "@/components/site/json-ld";
import { LeadMagnet } from "@/components/site/lead-magnet";
import { pageMetadata } from "@/lib/metadata";
import { SITE, values } from "@/lib/site-data";
import { breadcrumbJsonLd, personJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = pageMetadata("about");

const valueIcons = [Ruler, LockKeyhole, Eye];

export default function AboutPage() {
  return (
    <main>
      <JsonLd data={breadcrumbJsonLd("À propos", "/a-propos")} />
      <JsonLd data={personJsonLd()} />

      <section className="about-hero">
        <div className="container about-hero__grid">
          <div>
            <p className="eyebrow">Céline Bardan</p>
            <h1>30 ans dans les coulisses des entreprises. Et une conviction : votre temps vaut mieux que ça.</h1>
            <ul className="about-hero__chips" aria-label="En bref">
              <li>30 ans d'expertise</li>
              <li>BTS Assistant de gestion PME-PMI</li>
              <li>Formée à l'IA et à l'automatisation</li>
              <li>CPME · BNI Charente Grand Sud</li>
            </ul>
          </div>
          <Image
            src="/images/celine/03-celine-a-propos-tasse.jpg"
            alt="Céline Bardan, fondatrice de CelAssistPro"
            width={1024}
            height={1024}
            priority
            sizes="(min-width: 900px) 42vw, 100vw"
          />
        </div>
      </section>

      <section className="section section--white">
        <div className="container story-layout">
          <article className="story">
            <p>
              Je m'appelle Céline Bardan. Formée à la gestion des PME-PMI (BTS Assistant de
              gestion), j'ai passé 30 ans là où les entreprises gagnent ou perdent leur sérénité :
              l'administratif, l'organisation, le pré-comptable. J'ai vu des dirigeants brillants
              s'épuiser sur des tâches qui ne créaient aucune valeur — des soirées sur les factures,
              des week-ends sur les relances, une charge mentale permanente.
            </p>
            <p>
              Quand l'intelligence artificielle et l'automatisation sont devenues accessibles, j'ai
              compris que tout changeait. Je me suis formée sérieusement — assistanat virtuel, puis
              automatisations et IA avec l'organisme L'Form, gestion du temps avec le GRETA CFA
              Aquitaine. Pas pour suivre une mode : pour offrir aux TPE et indépendants ce qui était
              réservé aux grandes structures avec leur service administratif dédié.
            </p>
            <p>
              Je ne parle pas de la vie d'une TPE en théorie : je la vis. Associée d'une entreprise
              du bâtiment en Charente, j'en assure l'organisation et la structuration du quotidien —
              suivi administratif, coordination, anticipation des échéances. Quand je vous propose
              une méthode, c'est parce qu'elle tourne déjà, tous les jours, dans une vraie
              entreprise.
            </p>
            <p>
              CelAssistPro, c'est la rencontre de ces deux mondes : la rigueur de 30 ans de métier,
              et la puissance des outils d'aujourd'hui. Mon rôle n'est pas d'exécuter des tâches —
              c'est d'être votre directrice des opérations externalisée : je structure, j'automatise,
              je pilote. Vous dirigez, je gère.
            </p>
            <p>
              Je suis basée en Charente, et c'est une force : je me déplace chez mes clients dans
              tout le département — rien ne remplace une rencontre autour de vos vrais dossiers.
              Au-delà, j'interviens à distance partout en France, avec la même rigueur. Engagée
              localement — adhérente CPME, membre du réseau BNI Charente Grand Sud, conseillère
              municipale de ma commune — je crois aux relations de confiance qui durent.
            </p>
          </article>

          <aside className="quote-panel">
            <blockquote>
              “Céline est la personne qu'il vous faut : consciencieuse dans ce qu'elle fait, et
              quelqu'un qui n'a pas peur de s'investir dans l'inconnu.”
            </blockquote>
            <p>— Olivier Lachèvre, architecte infrastructure informatique</p>
          </aside>
        </div>
      </section>

      <section className="section section--cream">
        <div className="container">
          <div className="values-grid">
            {values.map(([title, text], index) => {
              const Icon = valueIcons[index];
              return (
                <article className="value-card" key={title}>
                  <Icon aria-hidden="true" />
                  <h2>{title}</h2>
                  <p>{text}</p>
                </article>
              );
            })}
          </div>
          <div className="logo-strip" aria-label="Réseaux et formations">
            <span>CPME</span>
            <span>BNI Charente Grand Sud</span>
            <span>GRETA CFA Aquitaine</span>
            <span>L'Form</span>
          </div>
          <div className="center-action">
            <a className="button button--gold" href={SITE.calendlyUrl}>
              <CalendarCheck aria-hidden="true" />
              Faisons connaissance — 15 min offertes
            </a>
          </div>
        </div>
      </section>

      <div className="container">
        <LeadMagnet />
      </div>
    </main>
  );
}
