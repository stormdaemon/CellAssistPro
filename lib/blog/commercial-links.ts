import type { BlogArticle } from "./types";

/**
 * Maillage interne : chaque article renvoie vers 2 à 4 pages commerciales
 * pertinentes, avec des ancres descriptives (jamais « cliquez ici »).
 */
export type CommercialLink = {
  href: string;
  /** Ancre du lien — doit décrire la destination. */
  label: string;
};

const LINKS = {
  assistance: {
    href: "/assistante-administrative",
    label: "déléguer votre gestion administrative à une assistante indépendante",
  },
  btp: {
    href: "/assistante-administrative-btp",
    label: "l'assistance administrative des artisans et entreprises du BTP",
  },
  premium: {
    href: "/bras-droit-automatisation",
    label: "structurer et automatiser l'organisation de votre entreprise",
  },
  cases: {
    href: "/cas-concrets",
    label: "les résultats obtenus chez d'autres dirigeants",
  },
  offers: {
    href: "/mes-offres",
    label: "les formules d'accompagnement",
  },
  diagnostic: {
    href: "/diagnostic",
    label: "évaluer votre temps perdu en 5 minutes",
  },
} as const satisfies Record<string, CommercialLink>;

const BY_CATEGORY: Record<string, CommercialLink[]> = {
  Délégation: [LINKS.assistance, LINKS.offers, LINKS.diagnostic],
  Métiers: [LINKS.assistance, LINKS.cases, LINKS.diagnostic],
  "Pré-comptabilité": [LINKS.assistance, LINKS.premium, LINKS.cases],
  "Organisation TPE": [LINKS.premium, LINKS.assistance, LINKS.diagnostic],
  "Facturation électronique": [LINKS.assistance, LINKS.premium, LINKS.cases],
  "Automatisation & IA": [LINKS.premium, LINKS.cases, LINKS.diagnostic],
  "En Charente": [LINKS.assistance, LINKS.cases, LINKS.diagnostic],
};

const FALLBACK = [LINKS.assistance, LINKS.premium, LINKS.diagnostic];

/** Un article parle de bâtiment dès qu'il en emploie le vocabulaire. */
const BTP_SIGNAL = /artisan|b[âa]timent|btp|chantier|couvreur|charpent|ma[çc]on|menuis/i;

export function commercialLinksFor(article: BlogArticle): CommercialLink[] {
  const base = BY_CATEGORY[article.category] ?? FALLBACK;
  const haystack = `${article.slug} ${article.title} ${article.keyword} ${article.description}`;
  const links = BTP_SIGNAL.test(haystack) ? [LINKS.btp, ...base] : base;

  return links.filter((link, index) => links.indexOf(link) === index).slice(0, 4);
}
