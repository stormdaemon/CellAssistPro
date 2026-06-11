import type { Metadata } from "next";
import { PageHero } from "@/components/site/page-hero";
import { pageMetadata } from "@/lib/metadata";
import { SITE } from "@/lib/site-data";

export const metadata: Metadata = pageMetadata("legal");

export default function LegalPage() {
  return (
    <main>
      <PageHero eyebrow="Informations légales" title="Mentions légales">
        <p>
          Cette page rassemble les informations relatives à l'édition, l'hébergement et l'usage du
          site CelAssistPro.
        </p>
      </PageHero>

      <section className="section section--white">
        <div className="container legal-content">
          <h2>Éditrice du site</h2>
          <p>
            CelAssistPro, nom commercial de Céline Bardan, entrepreneur individuel immatriculé sous
            le SIREN {SITE.siren}. Adresse : {SITE.legalAddress}. Contact :{" "}
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
          </p>

          <h2>Hébergement</h2>
          <p>
            Le site est hébergé par Netlify, Inc., 44 Montgomery Street, Suite 300, San Francisco,
            CA 94104, États-Unis.
          </p>

          <h2>Propriété intellectuelle</h2>
          <p>
            Les textes, visuels, photographies, éléments graphiques et structure du site sont
            protégés. Toute reproduction ou réutilisation sans autorisation écrite préalable est
            interdite.
          </p>

          <h2>Responsabilité</h2>
          <p>
            CelAssistPro veille à l'exactitude des informations publiées, mais celles-ci ne
            remplacent pas un conseil comptable, juridique ou fiscal adapté à votre situation.
          </p>
        </div>
      </section>
    </main>
  );
}
