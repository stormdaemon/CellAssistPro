"use client";

import { useEffect } from "react";

const revealSelector = [
  ".section-heading",
  ".mini-card",
  ".method-card",
  ".offer-preview",
  ".offer-card",
  ".offer-detail-panel",
  ".profile-card",
  ".value-card",
  ".case-explorer",
  ".testimonial-card",
  ".contact-card",
  ".blog-card",
  ".article-body section",
  ".lead-magnet",
  ".monthly-band",
  ".highlight-panel",
].join(", ");

export function RevealOnScroll() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>(revealSelector));

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    elements.forEach((element, index) => {
      element.dataset.reveal = "";
      element.style.setProperty("--reveal-delay", `${Math.min(index % 5, 4) * 55}ms`);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.12 },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return null;
}
