import type { Metadata } from "next";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { CaseStudyExplorer } from "@/components/site/case-study-explorer";
import { JsonLd } from "@/components/site/json-ld";
import { LeadMagnet } from "@/components/site/lead-magnet";
import { PageHero } from "@/components/site/page-hero";
import { pageMetadata } from "@/lib/metadata";
import { caseStudies, CTA, SITE, testimonials } from "@/lib/site-data";
import { breadcrumbJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = pageMetadata("cases");

export default function CasesPage() {
  return (
    <main>
      <JsonLd data={breadcrumbJsonLd("Cas concrets", "/cas-concrets")} />

      <PageHero eyebrow="Cas clients et témoignages" title="Cas concrets : ce qui a changé chez mes clients">
        <p>
          Trois situations réelles, décrites avec leur point de départ, ce qui a été mis en place et le
          résultat. Les clients ne sont pas nommés dans les cas ; les témoignages, eux, sont signés.
        </p>
      </PageHero>

      <section className="section section--white">
        <div className="container">
          <CaseStudyExplorer caseStudies={caseStudies} />
        </div>
      </section>

      <section className="section section--cream">
        <div className="container">
          <div className="section-heading section-heading--center">
            <h2>Ils l'ont vécu</h2>
            <p>
              Des dirigeants qui m'ont confié leur administratif, parfois depuis longtemps : Raphaël
              dirige BR16BATIMENT, l'entreprise du bâtiment dont je tiens l'administratif depuis 2017.
            </p>
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
              Votre métier n'est pas dans la liste ? C'est normal : chaque système est construit sur mesure. Et
              qu'il s'agisse d'une mission d'une heure ou d'un accompagnement au long cours, parlons du vôtre.
            </p>
            <p>
              Vous êtes artisan ou dirigeant du bâtiment ? Le premier cas concerne une entreprise du bâtiment :{" "}
              <Link href="/assistante-administrative-btp">voir l'expertise artisans et BTP en détail</Link>.
              Vous cherchez d'abord à déléguer votre gestion courante ?{" "}
              <Link href="/assistante-administrative">Découvrir l'assistance administrative</Link>.
            </p>
            <a className="button button--gold" href={SITE.calendlyUrl}>
              {CTA.primary}
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
