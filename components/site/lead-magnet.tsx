import Link from "next/link";
import { ArrowRight, ClipboardCheck, Lock } from "lucide-react";

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
      <div className="lead-magnet__cta">
        <Link className="button button--gold" href="/diagnostic">
          Faire mon auto-diagnostic gratuit <ArrowRight aria-hidden="true" />
        </Link>
        <small>
          <Lock aria-hidden="true" /> Résultat immédiat, sans email, sans engagement.
        </small>
      </div>
    </section>
  );
}
