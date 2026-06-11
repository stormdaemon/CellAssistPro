import type { Metadata } from "next";
import { PageHero } from "@/components/site/page-hero";
import { pageMetadata } from "@/lib/metadata";
import { SITE } from "@/lib/site-data";

export const metadata: Metadata = pageMetadata("privacy");

export default function PrivacyPage() {
  return (
    <main>
      <PageHero eyebrow="RGPD" title="Politique de confidentialité">
        <p>
          Vos données servent uniquement à répondre à vos demandes, organiser les rendez-vous et
          vous envoyer les résultats de l'auto-diagnostic lorsque vous le demandez.
        </p>
      </PageHero>

      <section className="section section--white">
        <div className="container legal-content">
          <h2>Données collectées</h2>
          <p>
            Les formulaires peuvent collecter votre nom, email, téléphone, secteur d'activité,
            besoin exprimé, ancienneté de l'entreprise, origine du contact et message libre.
            L'auto-diagnostic collecte aussi vos réponses au questionnaire.
          </p>

          <h2>Finalités</h2>
          <p>
            Ces informations permettent de répondre à votre demande, préparer un diagnostic de 15
            minutes, envoyer vos résultats personnalisés et assurer le suivi commercial demandé.
          </p>

          <h2>Destinataires et sous-traitants</h2>
          <p>
            Les données peuvent transiter par les services nécessaires au fonctionnement du site et
            des prises de rendez-vous : hébergement Netlify, Google Forms ou Google Sheets, Zapier
            et Calendly. Les accès sont limités aux personnes habilitées.
          </p>

          <h2>Durée de conservation</h2>
          <p>
            Les données de prospects sont conservées le temps nécessaire au suivi de la demande,
            puis supprimées ou archivées selon les obligations applicables. À défaut d'échange
            actif, une durée maximale de trois ans est retenue.
          </p>

          <h2>Vos droits</h2>
          <p>
            Vous pouvez demander l'accès, la rectification, l'effacement, la limitation ou
            l'opposition au traitement de vos données en écrivant à{" "}
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
          </p>

          <h2>Cookies et mesure d'audience</h2>
          <p>
            Le site peut intégrer Calendly pour la prise de rendez-vous. Un outil de mesure
            d'audience respectueux de la réglementation pourra être ajouté avant mise en ligne afin
            de suivre les conversions et améliorer les contenus.
          </p>
        </div>
      </section>
    </main>
  );
}
