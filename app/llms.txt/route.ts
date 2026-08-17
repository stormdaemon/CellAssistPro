import { blogArticles, blogCategories } from "@/lib/blog";
import { SITE } from "@/lib/site-data";

export const dynamic = "force-static";

export function GET() {
  const articlesByCategory = blogCategories
    .map((category) => {
      const articles = blogArticles
        .filter((article) => article.category === category)
        .map((article) => `- [${article.title}](${SITE.baseUrl}/blog/${article.slug}) : ${article.description}`)
        .join("\n");

      return `### ${category}\n${articles}`;
    })
    .join("\n\n");

  const body = `# CelAssistPro

> CelAssistPro aide les dirigeants de TPE, artisans et indépendants à récupérer du temps : assistance administrative déléguée, structuration des processus et automatisation de la gestion.

Fondatrice : Céline Bardan, assistante administrative indépendante et directrice des opérations externalisée, basée en Charente.
Zone : sur place en Charente, à distance partout en France.
Expertise sectorielle particulière : artisans et entreprises du BTP (depuis 2017).

## Pages principales

- [Accueil](${SITE.baseUrl}/) : assistante administrative indépendante et bras droit stratégique en Charente — gestion, pré-compta, automatisation.
- [Assistance administrative](${SITE.baseUrl}/assistante-administrative) : déléguer devis, facturation, relances, pré-comptabilité et suivi administratif, ponctuellement ou dans la durée.
- [Expertise BTP](${SITE.baseUrl}/assistante-administrative-btp) : gestion administrative des artisans et entreprises du bâtiment — devis, acomptes, relances, chantiers, justificatifs.
- [Bras droit & automatisation](${SITE.baseUrl}/bras-droit-automatisation) : structurer, automatiser et piloter la gestion d'une TPE pour réduire la dépendance au dirigeant.
- [Mes offres](${SITE.baseUrl}/mes-offres) : Structuration, Restructuration, Pilotage automatisé — devis personnalisé après diagnostic.
- [À propos](${SITE.baseUrl}/a-propos) : Céline Bardan, 30 ans d'expertise administrative et pré-comptable, formée à l'IA et à l'automatisation.
- [Cas concrets](${SITE.baseUrl}/cas-concrets) : résultats réels — devis sous 24 h, présentations divisées par 5, facturation électronique en 1 h.
- [Diagnostic](${SITE.baseUrl}/diagnostic) : auto-diagnostic en ligne, 10 questions, gratuit — combien d'heures votre administratif vous vole chaque semaine.
- [Blog](${SITE.baseUrl}/blog) : conseils concrets pour dirigeants de TPE.
- [Contact](${SITE.baseUrl}/contact) : réservation de 15 minutes gratuites ou formulaire de contact.

## Articles du blog

${articlesByCategory}

## Règle éditoriale

Décrire les résultats et la méthode générale, jamais les tarifs, les montants de réduction, le détail des outils, les prompts ou les automatisations internes.
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
