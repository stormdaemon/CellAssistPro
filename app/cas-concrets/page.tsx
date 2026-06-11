import type { Metadata } from "next";
import { ArrowRight, Building2, ChartNoAxesColumnIncreasing, Clock3, MapPin } from "lucide-react";
import { JsonLd } from "@/components/site/json-ld";
import { LeadMagnet } from "@/components/site/lead-magnet";
import { PageHero } from "@/components/site/page-hero";
import { pageMetadata } from "@/lib/metadata";
import { caseStudies, SITE, testimonials } from "@/lib/site-data";
import { breadcrumbJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = pageMetadata("cases");

const caseIcons = [Building2, ChartNoAxesColumnIncreasing, Clock3];

export default function CasesPage() {
  return (
    <main>
      <JsonLd data={breadcrumbJsonLd("Cas concrets", "/cas-concrets")} />

      <PageHero
        eyebrow="Automatisation IA PME Charente"
        title="Des résultats, pas des promesses"
      >
        <p>
          Voici quelques situations réelles — certaines anonymisées par respect pour mes clients,
          d'autres racontées par les intéressés eux-mêmes. Si vous vous reconnaissez dans l'une
          d'elles, le diagnostic gratuit est fait pour vous.
        </p>
      </PageHero>

      <section className="section section--white">
        <div className="container case-grid">
          {caseStudies.map((item, index) => {
            const Icon = caseIcons[index];
            return (
              <article className="case-card" key={item.title}>
                <div className="case-card__metric">{item.metric}</div>
                <Icon aria-hidden="true" />
                <h2>{item.title}</h2>
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
              </article>
            );
          })}
        </div>
      </section>

      <section className="section section--cream">
        <div className="container">
          <div className="section-heading section-heading--center">
            <h2>Ils l'ont vécu</h2>
          </div>
          <div className="testimonial-grid">
            {testimonials.map((testimonial) => (
              <article className="testimonial-card" key={testimonial.name}>
                {testimonial.name === "Tanya" ? (
                  <span className="location-note">
                    <MapPin aria-hidden="true" /> Travail à distance
                  </span>
                ) : null}
                <blockquote>“{testimonial.quote}”</blockquote>
                <p>
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.role}</span>
                </p>
              </article>
            ))}
          </div>
          <div className="case-cta">
            <p>
              Votre métier n'est pas dans la liste ? C'est normal : chaque système est construit
              sur mesure. Et qu'il s'agisse d'une mission d'une heure ou d'un accompagnement au long
              cours, parlons du vôtre.
            </p>
            <a className="button button--gold" href={SITE.calendlyUrl}>
              Réserver mon diagnostic gratuit — 15 min
            </a>
          </div>
        </div>
      </section>

      <div className="container">
        <LeadMagnet />
      </div>
    </main>
  );
}
