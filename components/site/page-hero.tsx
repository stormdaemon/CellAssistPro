import type { ReactNode } from "react";
import { Mots } from "@/components/papeterie/objets";
import { fr } from "@/lib/typo";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  /** Le coin de bureau de la rubrique (voir components/papeterie/scenes). */
  objet?: ReactNode;
  children: ReactNode;
};

export function PageHero({ eyebrow, title, objet, children }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="container page-hero__inner">
        <div className="page-hero__contenu">
          {eyebrow ? <p className="eyebrow">{fr(eyebrow)}</p> : null}
          <h1>
            <Mots>{title}</Mots>
          </h1>
          <div className="page-hero__text">{children}</div>
        </div>
        {objet ? (
          <div aria-hidden="true" className="page-hero__objet">
            {objet}
          </div>
        ) : null}
      </div>
    </section>
  );
}
