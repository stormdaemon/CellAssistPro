"use client";

import { Fragment, useState } from "react";
import { ArrowDown, Building2, ChartNoAxesColumnIncreasing, ChevronDown, Clock3 } from "lucide-react";

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
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <div className="case-explorer">
      {caseStudies.map((item, index) => {
        const Icon = icons[index] ?? Building2;
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
              <span className="case-card__metric">{item.metric}</span>
              <Icon aria-hidden="true" />
              <span>{item.title}</span>
              <ChevronDown aria-hidden="true" className="case-explorer__chevron" />
            </button>

            <article
              aria-labelledby={`case-tab-${index}`}
              className="case-explorer__panel"
              hidden={!isActive}
              id={`case-panel-${index}`}
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
                <ArrowDown aria-hidden="true" className="case-card__arrow" />
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
          </Fragment>
        );
      })}
    </div>
  );
}
