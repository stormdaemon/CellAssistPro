import type { Metadata } from "next";
import { Clock3, ListChecks, MailCheck, ShieldCheck, TimerReset } from "lucide-react";
import { DiagnosticQuiz } from "@/components/site/diagnostic-quiz";
import { JsonLd } from "@/components/site/json-ld";
import { PageHero } from "@/components/site/page-hero";
import { pageMetadata } from "@/lib/metadata";
import { quizProfiles, SITE } from "@/lib/site-data";
import { breadcrumbJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = pageMetadata("resources");

export default function DiagnosticPage() {
  return (
    <main>
      <JsonLd data={breadcrumbJsonLd("Diagnostic", "/diagnostic")} />

      <PageHero
        eyebrow="Auto-diagnostic gratuit"
        title="5 minutes pour savoir combien de temps vous perdez vraiment"
      >
        <p>
          Répondez à 10 questions simples sur votre quotidien de dirigeant. Votre score s'affiche
          immédiatement, avec votre profil et les 3 premières actions pour récupérer du temps dès
          cette semaine. Gratuit, sans email, sans engagement.
        </p>
      </PageHero>

      <section className="section section--white">
        <div className="container diagnostic-layout">
          <div className="diagnostic-side">
            <h2>Combien d'heures votre administratif vous vole-t-il chaque semaine ?</h2>
            <p>
              Pour chaque question, répondez selon votre réalité des dernières semaines — pas celle
              que vous aimeriez avoir. Le résultat n'en sera que plus utile.
            </p>
            <ul className="diagnostic-side__points">
              <li>
                <ListChecks aria-hidden="true" /> 10 questions, 4 réponses possibles
              </li>
              <li>
                <Clock3 aria-hidden="true" /> 5 minutes, résultat immédiat
              </li>
              <li>
                <ShieldCheck aria-hidden="true" /> Aucune donnée collectée : tout se passe dans
                votre navigateur
              </li>
            </ul>
          </div>

          <DiagnosticQuiz />
        </div>
      </section>

      <section className="section section--cream">
        <div className="container">
          <div className="section-heading section-heading--center">
            <h2>Votre résultat vous classe dans l'un de ces profils</h2>
          </div>
          <div className="cards-grid cards-grid--three">
            {quizProfiles.map((profile) => (
              <article className="profile-card" key={profile.score}>
                <Clock3 aria-hidden="true" />
                <p className="eyebrow">{profile.score}</p>
                <h3>{profile.title}</h3>
                <p>{profile.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="resource-cta">
        <div className="container resource-cta__grid">
          <div>
            <TimerReset aria-hidden="true" />
            <h2>Vous avez votre score ?</h2>
            <p>
              En 15 minutes, on regarde où votre temps se perd et par quel levier commencer pour le
              récupérer.
            </p>
          </div>
          <a className="button button--gold" href={SITE.calendlyUrl}>
            <MailCheck aria-hidden="true" />
            Réserver mon diagnostic gratuit — 15 min
          </a>
        </div>
      </section>
    </main>
  );
}
