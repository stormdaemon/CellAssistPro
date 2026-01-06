/**
 * Testimonials Section - BEM Component
 * Block: testimonials
 * Elements: testimonials__container, testimonials__title, testimonials__grid, testimonials__card, testimonials__quote, testimonials__author
 */
"use client";

export function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Avant de travailler avec Céline, je passais +15h/semaine sur des tâches administratives. En 2 mois, j'ai gagné +25h et j'ai enfin pu me concentrer sur la stratégie.",
      author: "Raphaël Brodut",
      company: "Brodut Elec"
    },
    {
      quote: "J'ai gagné 25h par mois et enfin pu structurer mon business.",
      author: "Claire G.",
      company: "Fondatrice"
    }
  ];

  return (
    <section className="testimonials">
      <div className="testimonials__container">
        <h2 className="testimonials__title">Ce que disent mes clients</h2>

        <div className="testimonials__grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonials__card">
              <div className="testimonials__quote-icon">"</div>
              <p className="testimonials__quote">
                {testimonial.quote}
              </p>
              <div className="testimonials__author">
                <p className="testimonials__name">{testimonial.author}</p>
                <p className="testimonials__company">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
