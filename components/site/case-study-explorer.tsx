"use client";

import { useState } from "react";
import { ArrowRight, Building2, ChartNoAxesColumnIncreasing, Clock3 } from "lucide-react";

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

const icons = [Building2, ChartNoAxesColumnIncreasing, Clock3];

export function CaseStudyExplorer({ caseStudies }: CaseStudyExplorerProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="case-explorer">
      <div className="case-explorer__tabs" role="tablist" aria-label="Cas concrets">
        {caseStudies.map((item, index) => {
          const Icon = icons[index] ?? Building2;
          const isActive = activeIndex === index;

          return (
            <button
              aria-controls={`case-panel-${index}`}
              aria-selected={isActive}
              className={isActive ? "case-explorer__tab case-explorer__tab--active" : "case-explorer__tab"}
              id={`case-tab-${index}`}
              key={item.title}
              role="tab"
              type="button"
              onClick={() => setActiveIndex(index)}
            >
              <span className="case-card__metric">{item.metric}</span>
              <Icon aria-hidden="true" />
              <span>{item.title}</span>
            </button>
          );
        })}
      </div>

      <div className="case-explorer__panels">
        {caseStudies.map((item, index) => {
          const isActive = activeIndex === index;

          return (
            <article
              aria-labelledby={`case-tab-${index}`}
              className={isActive ? "case-explorer__panel case-explorer__panel--active" : "case-explorer__panel"}
              hidden={!isActive}
              id={`case-panel-${index}`}
              key={item.title}
              role="tabpanel"
            >
              <div className="case-explorer__heading">
                <span className="case-card__metric">{item.metric}</span>
                <h2>{item.title}</h2>
              </div>

              <div className="case-explorer__story">
                <div>
                  <h3>La situation</h3>
                  <p>{item.context}</p>
                </div>
                <ArrowRight aria-hidden="true" className="case-card__arrow" />
                <div>
                  <h3>Ce qui a été mis en place</h3>
                  <p>{item.work}</p>
                </div>
                <div>
                  <h3>Le résultat</h3>
                  <p>{item.result}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
