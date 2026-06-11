import type { Metadata } from "next";
import { ClipboardCheck, Clock3, Lock, MailCheck, TimerReset } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { pageMetadata } from "@/lib/metadata";
import { quizProfiles, quizQuestions, SITE } from "@/lib/site-data";

export const metadata: Metadata = pageMetadata("resources");

export default function ResourcesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Auto-diagnostic gratuit"
        title="5 minutes pour savoir combien de temps vous perdez vraiment"
      >
        <p>
          Répondez à 10 questions simples sur votre quotidien de dirigeant. Vous recevez
          immédiatement votre score, le détail de vos points de friction, et les 3 premières actions
          pour récupérer du temps dès cette semaine. Gratuit, sans engagement.
        </p>
      </PageHero>

      <section className="section section--white" id="auto-diagnostic">
        <div className="container resource-layout">
          <div className="diagnostic-panel">
            <ClipboardCheck aria-hidden="true" />
            <h2>Combien d'heures votre administratif vous vole-t-il chaque semaine ?</h2>
            <p>
              L'auto-diagnostic vous donne votre chiffre, puis les premières actions à poser selon
              votre profil.
            </p>
            <form className="diagnostic-form" action={SITE.quizFormUrl} method="get">
              <label htmlFor="resource-email">Votre email, pour recevoir vos résultats détaillés</label>
              <input id="resource-email" name="email" type="email" placeholder="Votre email professionnel" required />
              <button className="button button--gold" type="submit">
                Faire mon auto-diagnostic gratuit
              </button>
              <small>
                <Lock aria-hidden="true" /> Vos réponses restent confidentielles. Votre email ne
                sera jamais cédé. Désinscription en un clic.
              </small>
            </form>
          </div>

          <div className="phone-mockup" aria-hidden="true">
            <div>
              <span />
              <h2>Auto-diagnostic</h2>
              <p>10 questions</p>
              <p>5 minutes</p>
              <p>Résultat personnalisé</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--cream">
        <div className="container">
          <div className="section-heading section-heading--center">
            <h2>Les 10 questions</h2>
            <p>Pour chaque question : jamais, parfois, souvent ou en permanence.</p>
          </div>
          <ol className="questions-list">
            {quizQuestions.map((question) => (
              <li key={question}>{question}</li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section--white">
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
            <h2>Vous avez déjà votre score ?</h2>
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
