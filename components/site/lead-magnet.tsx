import { ClipboardCheck, Lock } from "lucide-react";
import { SITE } from "@/lib/site-data";

export function LeadMagnet() {
  return (
    <section className="lead-magnet" aria-labelledby="lead-magnet-title">
      <div className="lead-magnet__icon" aria-hidden="true">
        <ClipboardCheck />
      </div>
      <div className="lead-magnet__content">
        <h2 id="lead-magnet-title">Pas encore prêt à en parler ? Commencez par mesurer.</h2>
        <p>
          Faites gratuitement l'Auto-diagnostic du temps perdu : 10 questions, 5 minutes — et
          découvrez combien d'heures votre administratif vous vole chaque semaine, avec vos 3
          premières actions pour les récupérer.
        </p>
      </div>
      <form className="lead-magnet__form" action={SITE.quizFormUrl} method="get">
        <label className="sr-only" htmlFor="lead-email">
          Votre email professionnel
        </label>
        <input id="lead-email" name="email" type="email" placeholder="Votre email" required />
        <button className="button button--gold" type="submit">
          Faire mon auto-diagnostic gratuit
        </button>
        <small>
          <Lock aria-hidden="true" /> Votre email ne sera jamais cédé. Désinscription en un clic.
        </small>
      </form>
    </section>
  );
}
