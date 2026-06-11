"use client";

import { useState } from "react";
import { CheckCircle2, ChevronDown } from "lucide-react";

type FaqAccordionProps = {
  faqs: Array<{
    question: string;
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
            <div className="faq-item__answer" id={`faq-answer-${index}`}>
              <p>{faq.answer}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}
