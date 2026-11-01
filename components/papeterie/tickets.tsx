import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Mots } from "@/components/papeterie/objets";
import type { Chemise } from "@/lib/site-data";
import { fr } from "@/lib/typo";

type TicketsProps = {
  chemise?: Chemise;
  id: string;
  resultats: { value: string; label: string }[];
  titre: string;
};

/** Les résultats, imprimés comme des tickets de caisse qu'on peut prendre et poser ailleurs. */
export function Tickets({ chemise = "rose", id, resultats, titre }: TicketsProps) {
  return (
    <section className="section results-strip" data-chemise={chemise} aria-labelledby={id}>
      <div className="container">
        <div className="section-heading section-heading--center">
          <h2 id={id}>
            <Mots>{titre}</Mots>
          </h2>
        </div>
        <div className="results-strip__grid" data-vu="">
          {resultats.map((resultat, rang) => (
            <div className="caisse" key={resultat.value}>
              <span aria-hidden="true" className="caisse__fente" />
              <div className="caisse__sortie">
                <article className="ticket" data-attrapable="">
                  <span aria-hidden="true" className="ticket__entete">
                    CELASSISTPRO
                    <br />
                    Ticket n° {String(rang + 1).padStart(3, "0")}
                  </span>
                  <strong>{fr(resultat.value)}</strong>
                  <p>{fr(resultat.label)}</p>
                  <span aria-hidden="true" className="ticket__total">
                    <span>Temps rendu</span>
                    <span>OUI</span>
                  </span>
                  <span aria-hidden="true" className="ticket__code" />
                  <span aria-hidden="true" className="ticket__merci">
                    Merci de votre confiance
                  </span>
                </article>
              </div>
            </div>
          ))}
        </div>
        <Link className="results-strip__link" href="/cas-concrets">
          Voir les cas concrets <ArrowRight aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
