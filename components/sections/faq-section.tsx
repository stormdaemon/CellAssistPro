"use client";

/**
 * FAQ Section - BEM Component
 * Block: faq
 * Elements: faq__title, faq__item, faq__question, faq__answer, faq__icon
 * Modifiers: faq__item--open
 */
import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQItem[];
}

export function FAQSection({ faqs }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq">
      <div className="faq__container">
        <h2 className="faq__title">Questions Fréquentes</h2>

        <div className="faq__list">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq__item ${openIndex === index ? 'faq__item--open' : ''}`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="faq__question"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="faq__question-text">{faq.question}</span>
                <svg
                  className={`faq__icon ${openIndex === index ? 'faq__icon--rotated' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                </svg>
              </button>

              <div
                id={`faq-answer-${index}`}
                className={`faq__answer ${openIndex === index ? 'faq__answer--open' : ''}`}
                role="region"
              >
                <div className="faq__answer-content">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
