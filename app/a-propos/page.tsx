import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { Mots, Stylo, Trombone } from "@/components/papeterie/objets";
import { JsonLd } from "@/components/site/json-ld";
import { LeadMagnet } from "@/components/site/lead-magnet";
import { pageMetadata } from "@/lib/metadata";
import { CTA, SITE, values } from "@/lib/site-data";
import { breadcrumbJsonLd, profilePageJsonLd } from "@/lib/structured-data";
import { fr } from "@/lib/typo";

export const metadata: Metadata = pageMetadata("about");

export default function AboutPage() {
  return (
    <main data-chemise="sauge">
      <JsonLd data={breadcrumbJsonLd("À propos", "/a-propos")} />
      <JsonLd data={profilePageJsonLd()} />

      <section className="page-hero about-hero">
        <div className="container page-hero__inner">
          <div className="page-hero__contenu">
            <p className="eyebrow">Céline Bardan</p>
            <h1>
              <Mots>
                Céline Bardan : 30 ans d'administratif, et depuis 2017 au cœur d'une entreprise du bâtiment en Charente
              </Mots>
            </h1>
            <ul className="about-hero__chips" aria-label="En bref">
              <li>30&nbsp;ans d’expertise</li>
              <li>BTS Assistant de gestion PME-PMI</li>
              <li>Formée à l’IA et à l’automatisation</li>
              <li>CPME · BNI Charente Grand Sud</li>
            </ul>
          </div>
          {/* La pile de photos : on les déplace pour voir celles du dessous. */}
          <div className="page-hero__objet pile-photos">
            <figure
              aria-hidden="true"
              className="polaroid"
              data-attrapable=""
              style={{ "--ordre": 0 } as CSSProperties}
            >
              <Image
                src="/images/celine/06-celine-formel-presse.jpg"
                alt=""
                width={1024}
                height={1024}
                draggable={false}
                sizes="(min-width: 900px) 340px, 70vw"
              />
              <figcaption>Trente ans de métier</figcaption>
            </figure>
            <figure
              aria-hidden="true"
              className="polaroid"
              data-attrapable=""
              style={{ "--ordre": 1 } as CSSProperties}
            >
              <Image
                src="/images/celine/01-celine-hero-accueil-sourire.jpg"
                alt=""
                width={1024}
                height={1024}
                draggable={false}
                sizes="(min-width: 900px) 340px, 70vw"
              />
              <figcaption>En Charente</figcaption>
            </figure>
            <figure
              className="polaroid"
              data-attrapable=""
              style={{ "--ordre": 2 } as CSSProperties}
            >
              <Trombone className="polaroid__trombone" />
              <span className="polaroid__cadre polaroid__cadre--recadre">
                <Image
                  src="/images/celine/03-celine-a-propos-tasse.jpg"
                  alt="Céline Bardan, fondatrice de CelAssistPro"
                  width={1024}
                  height={1024}
                  priority
                  draggable={false}
                  sizes="(min-width: 900px) 340px, 70vw"
                />
              </span>
              <figcaption aria-hidden="true">Céline, au bureau</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="section section--white" aria-labelledby="qui-title">
        <div className="container narrow">
          <div className="highlight-panel">
            <h2 id="qui-title">Qui est Céline Bardan&nbsp;?</h2>
            <p>
              Céline Bardan est la fondatrice de CelAssistPro, activité d’assistance administrative et de
              direction des opérations externalisée basée en Charente. Titulaire d’un BTS Assistant de
              gestion PME-PMI, elle travaille depuis trente ans dans l’administratif, l’organisation et la
              pré-comptabilité des entreprises. Elle s’est formée à l’assistanat virtuel, puis à
              l’automatisation et à l’intelligence artificielle avec l’organisme L’Forme, et à la gestion du
              temps avec le GRETA CFA Aquitaine. Depuis 2017, elle tient l’administratif d’une entreprise du
              bâtiment en Charente, BR16BATIMENT. Elle se déplace chez ses clients dans tout le département et
              intervient à distance partout en France. Elle est adhérente de la CPME, membre du réseau BNI
              Charente Grand Sud et conseillère municipale de sa commune.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--cream" data-chemise="or">
        <div className="container story-layout">
          <article className="story story--feuille" data-defile="traverse">
            <Stylo className="article-stylo" />
            <h2>Trente ans d’administratif et de pré-comptabilité</h2>
            <p>
              Je m’appelle Céline Bardan. Formée à la gestion des PME-PMI (BTS Assistant de gestion), j’ai
              passé 30&nbsp;ans là où les entreprises gagnent ou perdent leur sérénité&nbsp;: l’administratif,
              l’organisation, le pré-comptable. J’ai vu des dirigeants brillants s’épuiser sur des tâches qui
              ne créaient aucune valeur — des soirées sur les factures, des week-ends sur les relances, une
              charge mentale permanente.
            </p>

            <h2>Se former à l’IA sans suivre la mode</h2>
            <p>
              Quand l’intelligence artificielle et l’automatisation sont devenues accessibles, j’ai compris que
              tout changeait. Je me suis formée sérieusement — assistanat virtuel, puis automatisations et IA
              avec l’organisme L’Forme, gestion du temps avec le GRETA CFA Aquitaine. Pas pour suivre une mode&nbsp;:
              pour offrir aux TPE et indépendants ce qui était réservé aux grandes structures avec leur service
              administratif dédié.
            </p>

            <h2>Une TPE vécue de l’intérieur</h2>
            <p>
              Je ne parle pas de la vie d’une TPE en théorie&nbsp;: je la vis. Associée d’une entreprise du
              bâtiment en Charente, j’en assure l’organisation et la structuration du quotidien — suivi
              administratif, coordination, anticipation des échéances. Quand je vous propose une méthode,
              c’est parce qu’elle tourne déjà, tous les jours, dans une vraie entreprise.
            </p>

            <h2>Structurer, automatiser, piloter</h2>
            <p>
              CelAssistPro, c’est la rencontre de ces deux mondes&nbsp;: la rigueur de 30&nbsp;ans de métier, et la
              puissance des outils d’aujourd’hui. Mon rôle n’est pas d’exécuter des tâches — c’est d’être votre
              directrice des opérations externalisée&nbsp;: je structure, j’automatise, je pilote. Vous dirigez, je
              gère.
            </p>

            <h2>Sur place en Charente, à distance ailleurs</h2>
            <p>
              Je suis basée en Charente, et c’est une force&nbsp;: je me déplace chez mes clients dans tout le
              département — rien ne remplace une rencontre autour de vos vrais dossiers. Au-delà, j’interviens à
              distance partout en France, avec la même rigueur. Engagée localement — adhérente CPME, membre du
              réseau BNI Charente Grand Sud, conseillère municipale de ma commune — je crois aux relations de
              confiance qui durent.
            </p>
          </article>

          <aside className="quote-panel" data-attrapable="">
            <blockquote>
              “Céline est la personne qu’il vous faut&nbsp;: consciencieuse dans ce qu’elle fait, et
              quelqu’un qui n’a pas peur de s’investir dans l’inconnu.”
            </blockquote>
            <p>— Olivier Lachèvre, architecte infrastructure informatique</p>
          </aside>
        </div>
      </section>

      <section className="section section--white">
        <div className="container">
          <div className="values-grid">
            {values.map((value) => (
              <article className="value-card" key={value.title}>
                <h2>{fr(value.title)}</h2>
                <p>{fr(value.text)}</p>
              </article>
            ))}
          </div>
          <div className="logo-strip" aria-label="Réseaux et formations">
            <span>CPME</span>
            <span>BNI Charente Grand Sud</span>
            <span>GRETA CFA Aquitaine</span>
            <span>L’Forme</span>
          </div>
          <div className="center-action">
            <a className="button button--gold" href={SITE.calendlyUrl}>
              {CTA.primary}
            </a>
          </div>
        </div>
      </section>

      <LeadMagnet />
    </main>
  );
}
