import type { Metadata } from "next";
import { Coche, Mots } from "@/components/papeterie/objets";
import { SceneFormulaire } from "@/components/papeterie/scenes";
import { DiagnosticQuiz } from "@/components/site/diagnostic-quiz";
import { JsonLd } from "@/components/site/json-ld";
import { PageHero } from "@/components/site/page-hero";
import { pageMetadata } from "@/lib/metadata";
import { CTA, quizProfiles, SITE } from "@/lib/site-data";
import { breadcrumbJsonLd } from "@/lib/structured-data";
import { fr } from "@/lib/typo";

export const metadata: Metadata = pageMetadata("resources");

export default function DiagnosticPage() {
  return (
    <main data-chemise="or">
      <JsonLd data={breadcrumbJsonLd("Diagnostic", "/diagnostic")} />

      <PageHero
        objet={<SceneFormulaire />}
        eyebrow="Évaluer mon temps perdu — 5 min"
        title="Combien d'heures l'administratif vous coûte-t-il chaque semaine ?"
      >
        <p>
          Répondez à 10&nbsp;questions sur votre quotidien de dirigeant. Votre score s’affiche
          immédiatement, avec votre profil et les 3&nbsp;premières actions pour récupérer du temps dès
          cette semaine. Gratuit et sans engagement&nbsp;: aucune donnée n’est collectée, le calcul se fait
          dans votre navigateur, sans compte ni e-mail.
        </p>
      </PageHero>

      <section className="section section--white">
        <div className="container diagnostic-layout">
          <div className="diagnostic-side">
            <h2>Répondez selon votre réalité</h2>
            <p>
              Pour chaque question, répondez selon votre réalité des dernières semaines — pas celle
              que vous aimeriez avoir. Le résultat n’en sera que plus utile.
            </p>
            <ul className="diagnostic-side__points">
              <li>
                <Coche /> 10&nbsp;questions, 4&nbsp;réponses possibles
              </li>
              <li>
                <Coche /> 5&nbsp;minutes, résultat immédiat
              </li>
              <li>
                <Coche /> Aucune donnée collectée&nbsp;: tout se passe dans votre navigateur
              </li>
            </ul>
          </div>

          <DiagnosticQuiz />
        </div>
      </section>

      <section className="section section--cream">
        <div className="container">
          <div className="section-heading section-heading--center">
            <h2>
              <Mots>Votre résultat vous classe dans l'un de ces profils</Mots>
            </h2>
          </div>
          <div className="cards-grid cards-grid--three">
            {quizProfiles.map((profile) => (
              <article className="profile-card" key={profile.score}>
                <p className="profile-card__score">{fr(profile.score)}</p>
                <h3>{fr(profile.title)}</h3>
                <p>{fr(profile.text)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--cream resource-cta" data-chemise="lilas">
        <div className="container resource-cta__grid">
          <div>
            <h2>Vous avez votre score&nbsp;?</h2>
            <p>
              En 15&nbsp;minutes, on regarde où votre temps se perd et par quel levier commencer pour le
              récupérer.
            </p>
          </div>
          <a className="button button--gold" href={SITE.calendlyUrl}>
            {CTA.primary}
          </a>
        </div>
      </section>
    </main>
  );
}
