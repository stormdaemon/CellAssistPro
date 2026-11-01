import Link from "next/link";
import { ArrowRight, Lock, Scissors } from "lucide-react";
import { CTA } from "@/lib/site-data";

/** Le bon à découper : les ciseaux suivent le pointillé quand il arrive à l'écran. */
export function LeadMagnet() {
  return (
    <section className="section section--coupon" aria-labelledby="lead-magnet-title">
      <div className="container">
        <div className="lead-magnet" data-vu="">
          <Scissors aria-hidden="true" className="lead-magnet__ciseaux" />
          <div aria-hidden="true" className="lead-magnet__valeur">
            <span>Bon pour</span>
            <strong>5&nbsp;min</strong>
            <span>de lucidité</span>
          </div>
          <div className="lead-magnet__content">
            <h2 id="lead-magnet-title">Pas encore prêt à en parler&nbsp;? Commencez par mesurer.</h2>
            <p>
              Répondez à 10&nbsp;questions en 5&nbsp;minutes et découvrez combien d’heures votre administratif
              vous vole chaque semaine, avec vos 3&nbsp;premières actions pour les récupérer.
            </p>
          </div>
          <div className="lead-magnet__cta">
            <Link className="button button--gold" href="/diagnostic">
              {CTA.secondary} <ArrowRight aria-hidden="true" />
            </Link>
            <small>
              <Lock aria-hidden="true" /> Résultat immédiat, sans email, sans engagement.
            </small>
          </div>
        </div>
      </div>
    </section>
  );
}
