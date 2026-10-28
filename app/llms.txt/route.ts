import { blogArticles } from "@/lib/blog";
import { CANONICAL_DESCRIPTION, SEO, SITE } from "@/lib/site-data";

export const dynamic = "force-static";

/**
 * llms.txt au format llmstxt.org : titre, résumé en citation, sections de liens
 * « - [Titre](url): description ». Les articles sont en « Optional ».
 */
export function GET() {
  const page = (key: keyof typeof SEO, label: string) =>
    `- [${label}](${SITE.baseUrl}${SEO[key].path}): ${SEO[key].description}`;

  const articles = blogArticles
    .map((article) => `- [${article.title}](${SITE.baseUrl}/blog/${article.slug}): ${article.description}`)
    .join("\n");

  const body = `# ${SITE.name}

> ${CANONICAL_DESCRIPTION}

## Faits clés

- Fondatrice : ${SITE.founder}, entrepreneur individuel (${SITE.legalName}), SIREN ${SITE.siren}, basée à ${SITE.address.town} (${SITE.address.postalCode}, ${SITE.address.department}).
- Expérience : 30 ans d'administratif, d'organisation et de pré-comptabilité ; BTS Assistant de gestion PME-PMI ; formée à l'automatisation et à l'intelligence artificielle.
- Expertise sectorielle : artisans et entreprises du BTP ; depuis 2017, elle tient l'administratif d'une entreprise du bâtiment en Charente.
- Zone : déplacements dans toute la Charente (Angoulême, Cognac, Barbezieux-Saint-Hilaire, Jarnac…), à distance partout en France.
- Services : assistance administrative, secrétariat externalisé, gestion administrative des artisans du BTP, bras droit administratif et automatisation, accompagnement à la facturation électronique.
- Ce qui n'est pas proposé : permanence téléphonique, paie, conseil juridique ou fiscal ; CelAssistPro complète l'expert-comptable sans le remplacer.
- Tarifs : pas de grille publique ; devis personnalisé sous 48 h après un diagnostic gratuit de 15 minutes ; accompagnements sans engagement au-delà du préavis prévu au contrat.
- Réseaux : adhérente CPME, membre de BNI Charente Grand Sud.

## Contact

- [Réserver un diagnostic gratuit de 15 minutes](${SITE.calendlyUrl}): rendez-vous en ligne avec ${SITE.founder}, sans engagement.
- [Formulaire de contact](${SITE.baseUrl}/contact): réponse sous 24 h ouvrées ; courriel ${SITE.email}.
- [Fiche Google](${SITE.googleBusinessUrl}): ${SITE.name}, ${SITE.address.town}, Charente.

## Pages principales

${page("home", "Accueil")}
${page("assistance", "Assistance administrative")}
${page("secretaire", "Secrétariat externalisé")}
${page("btp", "Artisans et BTP")}
${page("premium", "Bras droit et automatisation")}
${page("invoicing", "Facturation électronique 2026-2027")}
${page("charente", "Assistante administrative en Charente")}
${page("offers", "Formules et tarifs")}
${page("about", "À propos de Céline Bardan")}
${page("cases", "Cas concrets")}
${page("resources", "Auto-diagnostic")}
${page("blog", "Blog")}

## Optional

${articles}
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
