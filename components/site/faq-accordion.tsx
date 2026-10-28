"use client";

import { useState } from "react";
import { CheckCircle2, ChevronDown } from "lucide-react";
import { RichText } from "@/components/site/rich-text";

type FaqAccordionProps = {
  faqs: Array<{
    question: string;
    /** Peut contenir des liens `[ancre](/chemin)`. */
    answer: string;
  }>;
};

export function FaqAccordion({ faqs }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="faq-list">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;

        return (
          <article className={isOpen ? "faq-item faq-item--open" : "faq-item"} key={faq.question}>
            {/* La question est un titre : les moteurs et les assistants IA découpent la page
                par titres, chaque question devient ainsi un bloc autonome. */}
            <h3 className="faq-item__heading">
              <button
                className="faq-item__trigger"
                type="button"
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${index}`}
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
              >
                <CheckCircle2 aria-hidden="true" />
                <span>{faq.question}</span>
                <ChevronDown aria-hidden="true" />
              </button>
            </h3>
            <div className="faq-item__answer" id={`faq-answer-${index}`} inert={!isOpen}>
              <p>
                <RichText text={faq.answer} />
              </p>
            </div>
          </article>
        );
      })}
    </div>
  );
}
