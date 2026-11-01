"use client";

import { Fragment, useState } from "react";
import { FlecheMain, Tampon } from "@/components/papeterie/objets";
import { fr } from "@/lib/typo";

type CaseStudy = {
  metric: string;
  title: string;
  context: string;
  work: string;
  result: string;
};

type CaseStudyExplorerProps = {
  caseStudies: CaseStudy[];
};

const TAMPONS = ["Réglé", "À jour", "Classé"];

/** Trois dossiers à onglets : celui qu'on choisit sort de la pile et s'ouvre. */
export function CaseStudyExplorer({ caseStudies }: CaseStudyExplorerProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <div className="case-explorer">
      {caseStudies.map((item, index) => {
        const isActive = activeIndex === index;

        return (
          <Fragment key={item.title}>
            <button
              aria-controls={`case-panel-${index}`}
              aria-expanded={isActive}
              className={isActive ? "case-explorer__tab case-explorer__tab--active" : "case-explorer__tab"}
              id={`case-tab-${index}`}
              type="button"
              onClick={() => setActiveIndex(isActive ? null : index)}
            >
              <span className="case-card__metric">{fr(item.metric)}</span>
              <span>{fr(item.title)}</span>
            </button>

            <article
              aria-labelledby={`case-tab-${index}`}
              className="case-explorer__panel"
              hidden={!isActive}
              id={`case-panel-${index}`}
            >
              <div className="case-explorer__heading">
                <span className="case-card__metric">{fr(item.metric)}</span>
                <h2>{fr(item.title)}</h2>
              </div>

              <div className="case-explorer__story">
                <div>
                  <h3>La situation</h3>
                  <p>{fr(item.context)}</p>
                </div>
                <FlecheMain className="case-card__arrow" />
                <div>
                  <h3>Ce qui a été mis en place</h3>
                  <p>{fr(item.work)}</p>
                </div>
                <FlecheMain className="case-card__arrow" />
                <div className="case-explorer__resultat">
                  <h3>Le résultat</h3>
                  <p>{fr(item.result)}</p>
                  <Tampon className="case-explorer__tampon">{fr(TAMPONS[index % TAMPONS.length])}</Tampon>
                </div>
              </div>
            </article>
          </Fragment>
        );
      })}
    </div>
  );
}
