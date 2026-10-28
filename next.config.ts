import type { NextConfig } from "next";

/**
 * En-têtes de sécurité des réponses produites par Next.js (pages, sitemap, robots, llms.txt).
 * netlify.toml applique les mêmes valeurs aux fichiers statiques : garder les deux alignés.
 * Si un service tiers est ajouté (script, iframe), mettre à jour la CSP aux deux endroits.
 */
const SECURITY_HEADERS = [
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  {
    key: "Content-Security-Policy",
    value:
      "default-src 'self'; script-src 'self' 'unsafe-inline' https://assets.calendly.com https://plausible.io; style-src 'self' 'unsafe-inline' https://assets.calendly.com; frame-src https://calendly.com; img-src 'self' data: https://*.calendly.com; connect-src 'self' https://calendly.com https://plausible.io; font-src 'self'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'; upgrade-insecure-requests;",
  },
];

/** Articles fusionnés (octobre 2026) : ancienne URL → article qui reprend son contenu. */
const MERGED_ARTICLES: Record<string, string> = {
  "facturation-electronique-2026-tpe": "calendrier-facturation-electronique",
  "se-preparer-facturation-electronique-5-etapes": "calendrier-facturation-electronique",
  "facturation-electronique-2027-auto-entrepreneur": "facturation-electronique-micro-entrepreneur",
  "tarif-secretaire-independante-2026": "tarif-assistante-administrative-independante-facteurs",
  "assistante-freelance-tpe-ou-salariee": "cout-assistante-freelance-vs-salariee",
  "assistante-independante-sur-place-ou-distance": "assistante-administrative-distance-comment-ca-marche",
  "suivre-tresorerie-petite-entreprise": "tableau-de-bord-tresorerie-tpe",
  "creneau-administratif-hebdomadaire": "arreter-paperasse-dimanche-soir",
  "envoyer-devis-rapidement": "relancer-devis-artisan",
  "automatiser-desordre-gestion-entreprise": "taches-a-automatiser-tpe",
};

const nextConfig: NextConfig = {
  reactCompiler: true,
  poweredByHeader: false,
  turbopack: {
    root: __dirname,
  },
  async headers() {
    return [{ source: "/:path*", headers: SECURITY_HEADERS }];
  },
  async redirects() {
    return [
      {
        source: "/ressources",
        destination: "/diagnostic",
        permanent: true,
      },
      ...Object.entries(MERGED_ARTICLES).map(([from, to]) => ({
        source: `/blog/${from}`,
        destination: `/blog/${to}`,
        statusCode: 301 as const,
      })),
    ];
  },
};

export default nextConfig;
