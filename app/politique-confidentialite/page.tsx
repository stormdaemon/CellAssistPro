import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/site/page-hero";
import { pageMetadata } from "@/lib/metadata";
import { SITE } from "@/lib/site-data";

export const metadata: Metadata = pageMetadata("privacy");

export default function PrivacyPage() {
  return (
    <main>
      <PageHero eyebrow="RGPD" title="Politique de confidentialité">
        <p>
          Vos données servent uniquement à répondre à vos demandes et à organiser vos rendez-vous.
          L'auto-diagnostic ne collecte rien : ses calculs se font dans votre navigateur.
        </p>
      </PageHero>

      <section className="section section--white">
        <div className="container legal-content">
          <h2>Responsable du traitement</h2>
          <p>
            Le responsable du traitement est Céline Bardan, entrepreneur individuel, qui exerce sous le nom
            commercial CelAssistPro. Son adresse et son SIREN figurent dans les{" "}
            <Link href="/mentions-legales">mentions légales</Link>.
          </p>

          <h2>Données collectées</h2>
          <p>
            <strong>Formulaire de contact</strong> (page contact) : nom, courriel, téléphone (facultatif, si vous
            souhaitez être rappelé), secteur d'activité, ancienneté de l'entreprise, besoin exprimé, origine du
            contact et message libre. Merci de ne pas indiquer de données bancaires ni de numéros d'identité dans
            le message.
          </p>
          <p>
            <strong>Prise de rendez-vous</strong> : les informations saisies dans l'agenda Calendly, notamment vos
            nom et courriel, ainsi que le créneau choisi.
          </p>
          <p>
            <strong>Auto-diagnostic</strong> (page diagnostic) : aucune donnée n'est collectée. Vos réponses sont
            calculées dans votre navigateur ; elles ne sont ni transmises ni enregistrées par le site.
          </p>
          <p>
            <strong>Données de connexion</strong> : pour diffuser le site, l'hébergeur traite des données techniques
            de connexion, dont votre adresse IP.
          </p>

          <h2>Finalités et bases légales</h2>
          <p>
            Les données du formulaire et de la prise de rendez-vous servent à répondre à votre demande, organiser le
            diagnostic de 15 minutes, établir un devis personnalisé et assurer le suivi commercial que vous avez
            demandé. Elles sont traitées sur la base de mesures précontractuelles prises à votre demande et de
            l'intérêt légitime à répondre aux demandes reçues.
          </p>

          <h2>Destinataires et sous-traitants</h2>
          <p>
            <strong>Netlify, Inc.</strong> : hébergement du site et réception des messages du formulaire de contact,
            par le service Netlify Forms.
          </p>
          <p>
            <strong>Calendly</strong> : prise de rendez-vous, agenda intégré à la page contact et liens de réservation.
          </p>
          <p>Les accès aux données sont limités aux personnes habilitées.</p>

          <h2>Transferts hors de l'Union européenne</h2>
          <p>
            Certains prestataires, dont Netlify, Inc., établie aux États-Unis, peuvent traiter des données hors de
            l'Union européenne. Ces transferts sont encadrés par les garanties prévues par le RGPD ; le détail figure
            dans les politiques de confidentialité des éditeurs.
          </p>

          <h2>Durée de conservation</h2>
          <p>
            Les données de prospects sont conservées le temps nécessaire au suivi de la demande, puis supprimées ou
            archivées selon les obligations applicables. À défaut d'échange actif, une durée maximale de trois ans
            est retenue.
          </p>

          <h2>Vos droits</h2>
          <p>
            Vous pouvez demander l'accès, la rectification, l'effacement, la limitation, la portabilité ou
            l'opposition au traitement de vos données en écrivant à{" "}
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>. Vous pouvez aussi introduire une réclamation auprès de
            la CNIL, sur <a href="https://www.cnil.fr">cnil.fr</a>.
          </p>

          <h2>Cookies et mesure d'audience</h2>
          <p>
            À ce jour, le site n'utilise pas d'outil de mesure d'audience ni de cookies publicitaires. La page contact
            intègre l'agenda Calendly : lorsque vous l'utilisez, Calendly peut déposer ses propres cookies, soumis à sa
            politique de confidentialité.
          </p>

          <h2>Mise à jour</h2>
          <p>Dernière mise à jour : 28 octobre 2026.</p>
        </div>
      </section>
    </main>
  );
}
