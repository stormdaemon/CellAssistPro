import type { Metadata } from "next";
import Link from "next/link";
import { ListeACocher } from "@/components/papeterie/liste-a-cocher";
import { Griffonnage } from "@/components/papeterie/griffonnage";
import { Coche, Mots, Tampon } from "@/components/papeterie/objets";
import { SceneEcheance } from "@/components/papeterie/scenes";
import { TamponLibre } from "@/components/papeterie/tampon-libre";
import { FaqAccordion } from "@/components/site/faq-accordion";
import { JsonLd } from "@/components/site/json-ld";
import { LeadMagnet } from "@/components/site/lead-magnet";
import { PageHero } from "@/components/site/page-hero";
import { pageMetadata } from "@/lib/metadata";
import { CTA, SITE } from "@/lib/site-data";
import { breadcrumbJsonLd, serviceJsonLd } from "@/lib/structured-data";
import { fr } from "@/lib/typo";

export const metadata: Metadata = pageMetadata("invoicing");

/** Réponses en texte brut : FaqAccordion n'affiche pas les liens. */
const faqs = [
  {
    question: "Mon entreprise doit-elle déjà recevoir des factures électroniques ?",
    answer:
      "Oui. Depuis le 1er septembre 2026, toute entreprise assujettie à la TVA et établie en France doit pouvoir recevoir des factures électroniques par l'intermédiaire d'une plateforme agréée, quelle que soit sa taille.",
  },
  {
    question: "Je suis micro-entrepreneur en franchise de TVA : suis-je concerné ?",
    answer:
      "Oui. Vous devez pouvoir recevoir des factures électroniques depuis le 1er septembre 2026. Pour l'émission, l'échéance est au plus tard le 1er septembre 2027, et vos factures doivent porter la mention « TVA non applicable, art. 293 B du code général des impôts ».",
  },
  {
    question: "Mon expert-comptable va-t-il s'occuper de la facturation électronique à ma place ?",
    answer:
      "En général, non : il traite votre comptabilité à partir des factures qu'il reçoit. Vous choisissez votre plateforme agréée. Un mandat peut être convenu pour certaines opérations ; demandez-lui le périmètre exact.",
  },
  {
    question: "Qu'est-ce qu'une plateforme agréée, et est-elle payante ?",
    answer:
      "C'est un opérateur privé immatriculé par l'administration pour trois ans, renouvelable, qui assure les fonctions de la réforme. Des offres gratuites existent pour les besoins simples ; les fonctions avancées sont souvent payantes. Comparez sur la liste officielle publiée par impots.gouv.fr.",
  },
  {
    question: "Un PDF envoyé par courriel est-il une facture électronique ?",
    answer:
      "Non, pas entre entreprises assujetties à la TVA. La facture électronique attendue est structurée (Factur-X, UBL ou CII) et transite par une plateforme agréée. Un PDF simple, un scan ou un PDF envoyé par courriel ne suffisent pas.",
  },
  {
    question: "Que se passe-t-il si je ne suis pas prêt ?",
    answer:
      "Pour la réception, l'administration commence par une mise en demeure de se conformer dans un délai de trois mois ; l'amende ne vient qu'ensuite. Pas d'amende pour une première infraction régularisée spontanément ou dans les 30 jours suivant la première demande. Les montants sont fixés par la loi de finances pour 2026.",
  },
];

const articles = [
  {
    href: "/blog/calendrier-facturation-electronique",
    title: "Calendrier de la facturation électronique : les dates à retenir",
    summary: "réception, émission et échéances du 1er septembre 2026 et du 1er septembre 2027.",
  },
  {
    href: "/blog/facturation-electronique-qui-est-concerne",
    title: "Facturation électronique obligatoire pour qui ?",
    summary: "entreprises assujetties à la TVA, franchise en base, professions libérales, exclusions.",
  },
  {
    href: "/blog/facturation-electronique-micro-entrepreneur",
    title: "Micro-entrepreneur et auto-entrepreneur : ce que change la facturation électronique",
    summary: "franchise de TVA, mentions obligatoires et dates.",
  },
  {
    href: "/blog/e-reporting-definition-calendrier",
    title: "E-reporting : définition, opérations concernées et calendrier",
    summary: "ventes à des particuliers, opérations internationales, données de paiement.",
  },
  {
    href: "/blog/risques-si-pas-pret-facturation-electronique",
    title: "Sanctions de la facturation électronique",
    summary: "montants, mise en demeure et tolérance pour une première infraction.",
  },
  {
    href: "/blog/choisir-plateforme-facturation-agreee",
    title: "Quelle plateforme agréée choisir pour la facturation électronique ?",
    summary: "liste officielle, annuaire, questions à poser et changement de plateforme.",
  },
  {
    href: "/blog/plateforme-agreee-gratuite",
    title: "Plateforme agréée gratuite : ce que valent les offres gratuites",
    summary: "ce que couvrent ces offres, leurs limites et comment les comparer.",
  },
  {
    href: "/blog/facture-electronique-au-quotidien",
    title: "Facture électronique au quotidien : recevoir, refuser, changer de plateforme",
    summary: "statuts, refus, changement de plateforme et coût.",
  },
  {
    href: "/blog/factur-x-ubl-cii-explication-simple",
    title: "Factur-X, UBL, CII : les trois formats expliqués simplement",
    summary: "ce que chaque format change pour votre entreprise.",
  },
  {
    href: "/blog/pdf-email-facture-electronique",
    title: "Un PDF envoyé par courriel est-il une facture électronique ?",
    summary: "ce qui n'entre pas dans le format attendu, et comment s'y préparer.",
  },
  {
    href: "/blog/facture-electronique-artisan-guide-simple",
    title: "Facture électronique pour les artisans : le guide simple",
    summary: "mentions, acomptes, situations de travaux et sous-traitance du BTP.",
  },
  {
    href: "/blog/facturation-electronique-expert-comptable-qui-fait-quoi",
    title: "Facturation électronique et expert-comptable : qui fait quoi ?",
    summary: "rôle du cabinet, mandat et premier échange.",
  },
  {
    href: "/blog/gerer-factures-fournisseurs",
    title: "Factures fournisseurs : organiser la réception pour ne plus rien perdre",
    summary: "point de réception unique, contrôle avant paiement et classement.",
  },
];

const sources = [
  {
    label: "impots.gouv.fr : Je découvre la facturation électronique",
    url: "https://www.impots.gouv.fr/professionnel/je-decouvre-la-facturation-electronique",
  },
  {
    label: "impots.gouv.fr : facturation électronique et plateformes agréées (liste officielle)",
    url: "https://www.impots.gouv.fr/facturation-electronique-et-plateformes-agreees",
  },
  {
    label: "Service-Public Entreprendre : sanctions de la facturation électronique (20/02/2026)",
    url: "https://entreprendre.service-public.gouv.fr/actualites/A18802",
  },
  {
    label: "Service-Public Entreprendre : mentions obligatoires d'une facture",
    url: "https://entreprendre.service-public.gouv.fr/vosdroits/F31808",
  },
  {
    label: "FAQ de la DGFiP « Je découvre la facturation électronique » (PDF)",
    url: "https://www.impots.gouv.fr/sites/default/files/media/1_metier/2_professionnel/EV/2_gestion/290_facturation_electronique/faq---fe_je-decouvre-la-facturation-electronique.pdf",
  },
];

export default function FacturationElectroniquePage() {
  return (
    <main data-chemise="saumon">
      <JsonLd data={breadcrumbJsonLd("Facturation électronique", "/facturation-electronique")} />
      <JsonLd
        data={serviceJsonLd({
          path: "/facturation-electronique",
          name: "Accompagnement à la facturation électronique",
          serviceType:
            "Mise en conformité et formation à la facturation électronique pour TPE, artisans et micro-entrepreneurs",
          description:
            "Choix et paramétrage d'un outil de facturation, guide pas à pas et formation d'une heure, pour recevoir et émettre des factures électroniques en règle. Diagnostic gratuit de 15 minutes, devis personnalisé sous 48 h.",
          audience: "TPE, artisans et micro-entrepreneurs",
        })}
      />

      <PageHero
        objet={<SceneEcheance />}
        eyebrow="Facturation électronique · TPE, artisans et micro-entrepreneurs"
        title="Facturation électronique 2026-2027 : ce que les TPE et artisans doivent faire"
      >
        <p>
          Depuis le 1er septembre 2026, toute entreprise assujettie à la TVA établie en France doit
          pouvoir recevoir des factures électroniques par l’intermédiaire d’une plateforme agréée,
          micro-entrepreneurs en franchise de TVA compris. Les grandes entreprises et les ETI émettent
          aussi en électronique depuis cette date. Les PME, les TPE et les micro-entreprises ont
          jusqu’au 1er septembre 2027&nbsp;pour émettre. Situation vérifiée le 28&nbsp;octobre 2026.
        </p>
        <p>
          Ce qu’il faut faire, dans l’ordre&nbsp;: choisir une plateforme agréée, vérifier votre inscription
          à l’annuaire de l’administration, puis préparer vos factures au format électronique avant
          septembre 2027. Chaque étape est détaillée ci-dessous.
        </p>
      </PageHero>

      <section className="section section--white">
        <div className="container">
          <div className="section-heading section-heading--center">
            <h2>
              <Mots>Qui doit faire quoi, et quand</Mots>
            </h2>
            <p>Une seule obligation vaut pour toutes les entreprises&nbsp;: recevoir. L’émission dépend de la taille.</p>
          </div>
          <div className="cahier" data-defile="traverse">
            <ol className="method-timeline">
              <li className="method-step">
                <div className="method-step__marker" aria-hidden="true">
                  <span>1</span>
                </div>
                <article className="method-step__card">
                  <header>
                    <h3>1er septembre 2026&nbsp;: recevoir (en vigueur)</h3>
                  </header>
                  <p>
                    Toutes les entreprises assujetties à la TVA doivent pouvoir recevoir des factures
                    électroniques par une plateforme agréée, quelle que soit leur taille. Les
                    micro-entrepreneurs en franchise de TVA sont concernés.
                  </p>
                  <p>Les grandes entreprises et les ETI émettent aussi en électronique depuis cette date.</p>
                </article>
              </li>
              <li className="method-step">
                <div className="method-step__marker" aria-hidden="true">
                  <span>2</span>
                </div>
                <article className="method-step__card">
                  <header>
                    <h3>1er septembre 2027&nbsp;au plus tard&nbsp;: émettre</h3>
                  </header>
                  <p>
                    Les PME, les TPE et les micro-entreprises émettent leurs factures au format électronique,
                    et transmettent leur e-reporting, au plus tard à cette date. Une PME peut anticiper.
                  </p>
                </article>
              </li>
            </ol>
            <Griffonnage />
          </div>
          <p className="transition-line">
            Dates détaillées&nbsp;: lire le{" "}
            <Link href="/blog/calendrier-facturation-electronique">calendrier de la facturation électronique</Link>,
            puis{" "}
            <Link href="/blog/facturation-electronique-qui-est-concerne">
              qui est concerné, statut par statut
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="section section--cream">
        <div className="container">
          <div className="section-heading section-heading--center">
            <h2>
              <Mots>Plateforme agréée, annuaire et formats</Mots>
            </h2>
            <p>Trois notions à distinguer, pour ne pas confondre les démarches.</p>
          </div>
          <div className="cards-grid cards-grid--three">
            <article className="mini-card">
              <p>
                Une plateforme agréée, choisie librement&nbsp;: un opérateur immatriculé par l’administration pour
                trois ans, renouvelable. Vous pouvez en retenir plusieurs et en changer à tout moment.
              </p>
            </article>
            <article className="mini-card">
              <p>
                L’annuaire de l’administration&nbsp;: votre entreprise y figure par l’intermédiaire de sa
                plateforme.
              </p>
            </article>
            <article className="mini-card">
              <p>
                Des formats structurés&nbsp;: UBL, CII, ou un format mixte comme Factur-X. Un PDF simple ne suffit
                plus entre entreprises assujetties.
              </p>
            </article>
          </div>
          <p className="transition-line">
            Un logiciel «&nbsp;compatible&nbsp;» n’est pas une plateforme agréée&nbsp;: il doit s’y connecter. Le portail public
            Chorus Pro ne sert qu’aux factures adressées au secteur public. Pour choisir, lire{" "}
            <Link href="/blog/choisir-plateforme-facturation-agreee">comment choisir sa plateforme agréée</Link>.
          </p>
        </div>
      </section>

      <section className="section section--white">
        <div className="container narrow">
          <div className="section-heading section-heading--center">
            <h2>
              <Mots>E-reporting : ce qui ne passe pas par la facture</Mots>
            </h2>
            <p>
              L’e-reporting transmet à l’administration les données des opérations que la facture électronique
              entre entreprises ne couvre pas&nbsp;:
            </p>
          </div>
          <ul className="task-list">
            <li>
              <Coche />
              <span>Les ventes à des particuliers</span>
            </li>
            <li>
              <Coche />
              <span>Les opérations internationales&nbsp;: exportations et échanges intracommunautaires de biens</span>
            </li>
            <li>
              <Coche />
              <span>Les données de paiement des prestations de services dont la TVA est exigible à l’encaissement</span>
            </li>
          </ul>
          <p className="transition-line">
            Le calendrier de l’e-reporting suit celui de l’émission. Le détail figure dans{" "}
            <Link href="/blog/e-reporting-definition-calendrier">l’article sur l’e-reporting</Link>.
          </p>
        </div>
      </section>

      <section className="section section--cream">
        <div className="container">
          <div className="section-heading section-heading--center">
            <h2>
              <Mots>Les mentions nouvelles sur vos factures</Mots>
            </h2>
            <p>
              Elles suivent le calendrier d’émission&nbsp;: grandes entreprises et ETI depuis septembre 2026, PME, TPE
              et micro-entreprises à partir de septembre 2027.
            </p>
          </div>
          <ul className="task-list">
            <li>
              <Coche />
              <span>Le SIREN de votre client</span>
            </li>
            <li>
              <Coche />
              <span>La nature des opérations&nbsp;: livraison de biens, prestation de services, ou les deux</span>
            </li>
            <li>
              <Coche />
              <span>L’adresse de livraison, si elle diffère de celle de votre client</span>
            </li>
            <li>
              <Coche />
              <span>La mention «&nbsp;Option pour le paiement de la taxe d’après les débits&nbsp;», le cas échéant</span>
            </li>
            <li>
              <Coche />
              <span>En franchise en base de TVA&nbsp;: «&nbsp;TVA non applicable, art. 293 B du code général des impôts&nbsp;»</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="section section--white">
        <div className="container">
          <div className="section-heading section-heading--center">
            <h2>
              <Mots>Sanctions : les montants à connaître</Mots>
            </h2>
            <p>Fixés par la loi de finances pour 2026.</p>
          </div>
          <div className="cards-grid cards-grid--three">
            <article className="mini-card">
              <p>
                50&nbsp;€ par facture non émise électroniquement (au lieu de 15&nbsp;€), plafonnés à 15 000&nbsp;€ par année
                civile.
              </p>
            </article>
            <article className="mini-card">
              <p>
                500&nbsp;€ par transmission d’e-reporting manquante (au lieu de 250&nbsp;€), dans la limite de 15 000&nbsp;€ par an.
              </p>
            </article>
            <article className="mini-card">
              <p>
                Sans plateforme agréée pour recevoir&nbsp;: une mise en demeure de trois mois, puis 500&nbsp;€, puis 1 000&nbsp;€,
                et 1 000&nbsp;€ tous les trois mois si le manquement persiste.
              </p>
            </article>
          </div>
          <p className="transition-line">
            Pas d’amende pour une première infraction régularisée spontanément ou dans les 30&nbsp;jours suivant la première
            demande de l’administration. Le détail est dans{" "}
            <Link href="/blog/risques-si-pas-pret-facturation-electronique">l’article sur les sanctions</Link>.
          </p>
        </div>
      </section>

      <section className="section section--cream">
        <div className="container">
          <div className="section-heading section-heading--center">
            <h2>
              <Mots>Votre liste pour septembre 2027</Mots>
            </h2>
            <p>Ces points se traitent au fil de l’année, sans bouleverser tout votre fonctionnement d’un coup.</p>
          </div>
          <ListeACocher
            items={[
              "Choisir votre plateforme agréée dans la liste officielle, et vérifier votre inscription à l'annuaire",
              "Vérifier que votre outil émet en Factur-X, UBL ou CII et qu'il se connecte à une plateforme agréée",
              "Mettre à jour votre modèle de facture avec les nouvelles mentions",
              "Tester une facture électronique avec votre expert-comptable avant la bascule",
              "Vérifier le circuit de réception des factures de vos fournisseurs",
              "Repérer les opérations concernées par l'e-reporting : ventes à des particuliers, opérations internationales, prestations encaissées",
              "Demander à vos clients et fournisseurs professionnels leur calendrier de passage à l'électronique",
            ]}
            tampon="Prêt pour 2027"
          />
        </div>
      </section>

      <section className="section section--white">
        <div className="container narrow">
          <div className="section-heading section-heading--center">
            <h2>
              <Mots>Trois situations types, en exemples fictifs</Mots>
            </h2>
            <p>Pour situer votre cas. Ces exemples sont fictifs&nbsp;: ils ne remplacent pas l’avis de votre expert-comptable.</p>
          </div>
          <h3>Une micro-entrepreneure en franchise de TVA, sans salarié</h3>
          <p>
            Elle reçoit quelques factures de fournisseurs professionnels et émet une dizaine de factures par mois à des
            entreprises. Elle doit pouvoir recevoir des factures électroniques par une plateforme agréée depuis le 1er
            septembre 2026, et émettre au format électronique au plus tard le 1er septembre 2027, avec la mention «&nbsp;TVA
            non applicable, art. 293 B du code général des impôts&nbsp;».
          </p>
          <h3>Un artisan du bâtiment qui fait appel à des sous-traitants</h3>
          <p>
            Il reçoit des factures de matériaux et de sous-traitants, et facture des acomptes à ses propres clients.
            Lorsqu’un sous-traitant facture hors taxe avec la mention «&nbsp;Autoliquidation&nbsp;», c’est l’entreprise principale
            qui déclare et paie la TVA. Chaque chantier se vérifie avec l’expert-comptable.
          </p>
          <h3>Une TPE de services qui vend aussi à des particuliers</h3>
          <p>
            Une partie de ses ventes va à des entreprises, l’autre à des particuliers. Les factures adressées aux
            entreprises suivent le calendrier de l’émission&nbsp;; les ventes aux particuliers relèvent de l’e-reporting. Elle
            demande à son expert-comptable quel régime de TVA s’applique à ses paiements.
          </p>
        </div>
      </section>

      <section className="section section--cream">
        <div className="container narrow">
          <div className="section-heading section-heading--center">
            <h2>
              <Mots>Comment je vous accompagne</Mots>
            </h2>
            <p>Je vous aide à choisir votre outil, à le paramétrer, puis à l’utiliser en autonomie.</p>
          </div>
          <p>
            Un cas concret&nbsp;: un client a fait appel à moi pour sa facturation électronique. J’ai réalisé le choix et le
            paramétrage de son outil de facturation, rédigé un guide pas à pas personnalisé, puis animé une séance de
            formation d’une heure. Résultat&nbsp;: autonome et conforme en une heure.
          </p>
          <ul className="task-list">
            <li>
              <Coche />
              <span>Un diagnostic gratuit de 15&nbsp;minutes pour faire le point sur votre situation</span>
            </li>
            <li>
              <Coche />
              <span>Un devis personnalisé sous 48&nbsp;h après ce diagnostic</span>
            </li>
            <li>
              <Coche />
              <span>Le choix et le paramétrage de votre outil de facturation</span>
            </li>
            <li>
              <Coche />
              <span>Un guide pas à pas adapté à votre activité</span>
            </li>
            <li>
              <Coche />
              <span>Une séance de formation d’une heure</span>
            </li>
          </ul>
          <p className="transition-line">
            En Charente, je me déplace chez vous. Ailleurs en France, nous travaillons à distance, avec des outils simples
            et sécurisés. Lire d’autres <Link href="/cas-concrets">cas concrets de mes clients</Link>.
          </p>
          <p>
            Ce que je ne fais pas&nbsp;: je ne remplace pas votre expert-comptable, je le complète. Je ne fais pas de paie, je ne
            donne pas de conseil juridique ou fiscal, et je ne prends pas d’appels téléphoniques à votre place.
          </p>
          <div className="center-action">
            <a className="button button--gold" href={SITE.calendlyUrl}>
              {CTA.primary}
            </a>
            <Link className="button button--outline" href="/diagnostic">
              {CTA.secondary}
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--white" id="faq">
        <div className="container narrow">
          <div className="section-heading section-heading--center">
            <p className="eyebrow">FAQ</p>
            <h2>
              <Mots>Questions fréquentes sur la facturation électronique</Mots>
            </h2>
          </div>
          <FaqAccordion faqs={faqs} />
        </div>
      </section>

      <section className="section section--cream">
        <div className="container">
          <div className="section-heading section-heading--center">
            <h2>
              <Mots>Tous les articles sur la facturation électronique</Mots>
            </h2>
            <p>Treize articles répondent à chaque question&nbsp;: dates, statuts, formats, sanctions et cas particuliers.</p>
          </div>
          <ul className="task-list">
            {articles.map((item) => (
              <li key={item.href}>
                <Coche />
                <span>
                  <Link href={item.href}>{fr(item.title)}</Link>&nbsp;: {fr(item.summary)}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--white">
        <div className="container narrow">
          <div className="section-heading section-heading--center">
            <h2>
              <Mots>Sources officielles</Mots>
            </h2>
            <p>Informations vérifiées le 28&nbsp;octobre 2026.</p>
          </div>
          <ul className="task-list">
            {sources.map((source) => (
              <li key={source.url}>
                <Coche />
                <span>
                  <a href={source.url} rel="noopener noreferrer" target="_blank">
                    {fr(source.label)}
                  </a>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <LeadMagnet />

      <TamponLibre chemise="or" className="section final-cta">
        <div className="container">
          <h2>
            <Mots>Dites-moi où vous en êtes. Je vous dis ce qui reste à faire.</Mots>
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
