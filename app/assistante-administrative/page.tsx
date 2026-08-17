import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock3, Repeat, Sparkles } from "lucide-react";
import { JsonLd } from "@/components/site/json-ld";
import { LeadMagnet } from "@/components/site/lead-magnet";
import { PageHero } from "@/components/site/page-hero";
import { pageMetadata } from "@/lib/metadata";
import { CTA, delegableTasks, SITE } from "@/lib/site-data";
import { breadcrumbJsonLd, serviceJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = pageMetadata("assistance");

export default function AssistanceAdministrativePage() {
  return (
    <main>
      <JsonLd data={breadcrumbJsonLd("Assistance administrative", "/assistante-administrative")} />
      <JsonLd
        data={serviceJsonLd({
          path: "/assistante-administrative",
          name: "Assistance administrative externalisée",
          serviceType:
            "Gestion administrative, commerciale et pré-comptable externalisée pour TPE et indépendants",
        })}
      />

      <PageHero
        eyebrow="Assistante administrative indépendante"
        title="Une assistante administrative quand vous en avez besoin — sans embaucher."
      >
        <p>
          Vous n'avez pas nécessairement besoin de recruter. Vous avez besoin que les choses soient
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
          <div className="section-heading section-heading--center">
            <h2>Ce que vous pouvez me déléguer</h2>
            <p>Tout, une partie, ou juste ce qui vous pèse le plus.</p>
          </div>
          <ul className="task-list">
            {delegableTasks.map((task) => (
              <li key={task}>
                <CheckCircle2 aria-hidden="true" />
                <span>{task}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--cream">
        <div className="container">
          <div className="section-heading section-heading--center">
            <h2>Ponctuel, récurrent, ou les deux</h2>
          </div>
          <div className="cards-grid cards-grid--three">
            <article className="mini-card">
              <Clock3 aria-hidden="true" />
              <p>
                <strong>Une mission ponctuelle</strong> — une remise en ordre, un retard à rattraper,
                une heure de formation sur un outil. Vous payez exactement le besoin.
              </p>
            </article>
            <article className="mini-card">
              <Repeat aria-hidden="true" />
              <p>
                <strong>Un accompagnement récurrent</strong> — je tiens votre gestion courante au
                rythme convenu : facturation, relances, pièces comptables, suivi.
              </p>
            </article>
            <article className="mini-card">
              <Sparkles aria-hidden="true" />
              <p>
                <strong>Sur place ou à distance</strong> — je me déplace en Charente quand c'est
                utile, et j'interviens partout en France avec des outils simples et sécurisés.
              </p>
            </article>
          </div>
          <p className="transition-line">
            Vous êtes artisan ou dirigeant du bâtiment ? Le circuit administratif d'un chantier a ses
            propres contraintes :{" "}
            <Link href="/assistante-administrative-btp">
              voir mon expertise artisans et BTP
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="section section--white">
        <div className="container narrow">
          <div className="highlight-panel">
            <div className="highlight-panel__icon">
              <Sparkles aria-hidden="true" />
            </div>
            <h2>Et si le problème ne venait pas seulement du manque de temps ?</h2>
            <p>
              Certaines tâches doivent être déléguées. D'autres peuvent être supprimées, simplifiées
              ou automatisées. C'est là que mon rôle de bras droit commence.
            </p>
            <Link className="button button--purple" href="/bras-droit-automatisation">
              Découvrir le bras droit stratégique et l'automatisation{" "}
              <ArrowRight aria-hidden="true" />
            </Link>
          </div>
          <p className="transition-line">
            Vous préférez voir des résultats avant d'en parler ? Regardez les{" "}
            <Link href="/cas-concrets">cas concrets de mes clients</Link>, ou comparez les{" "}
            <Link href="/mes-offres">formules d'accompagnement</Link>.
          </p>
        </div>
      </section>

      <div className="container">
        <LeadMagnet />
      </div>

      <section className="final-cta">
        <div className="container">
          <h2>Dites-moi ce qui vous pèse. Je vous dis ce que je peux prendre.</h2>
          <a className="button button--gold" href={SITE.calendlyUrl}>
            {CTA.primary}
          </a>
        </div>
      </section>
    </main>
  );
}
