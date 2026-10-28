import type { BlogArticle } from "@/lib/blog/types";
import { stripLinks } from "@/lib/blog/types";
import { CANONICAL_DESCRIPTION, offerFaqs, SITE } from "@/lib/site-data";

/**
 * Graphe d'entités : un seul identifiant stable par entité, réutilisé partout
 * (WebSite → LocalBusiness ← Person, Service, BlogPosting…).
 */
export const ORGANIZATION_ID = `${SITE.baseUrl}/#organization`;
export const WEBSITE_ID = `${SITE.baseUrl}/#website`;
export const PERSON_ID = `${SITE.baseUrl}/a-propos#celine-bardan`;
export const BLOG_ID = `${SITE.baseUrl}/blog#blog`;

/** Référence courte à Céline Bardan, utilisable comme `author`. */
const personRef = {
  "@type": "Person",
  "@id": PERSON_ID,
  name: SITE.founder,
  url: `${SITE.baseUrl}/a-propos`,
};

const wikidata = (id: string) => `https://www.wikidata.org/wiki/${id}`;

/** Zone desservie : sur place en Charente, à distance dans toute la France. */
const AREA_SERVED = [
  { "@type": "AdministrativeArea", name: "Charente", sameAs: wikidata("Q3266") },
  { "@type": "City", name: "Angoulême", sameAs: wikidata("Q134346") },
  { "@type": "AdministrativeArea", name: "Grand Angoulême", sameAs: wikidata("Q42848665") },
  { "@type": "City", name: "Cognac", sameAs: wikidata("Q285") },
  { "@type": "City", name: "Barbezieux-Saint-Hilaire", sameAs: wikidata("Q376476") },
  { "@type": "City", name: "Jarnac", sameAs: wikidata("Q217173") },
  { "@type": "City", name: "Champagne-Vigny", sameAs: wikidata("Q1344459") },
  { "@type": "Country", name: "France", sameAs: wikidata("Q142") },
];

const SERVICE_PAGES = [
  {
    path: "/assistante-administrative",
    name: "Assistance administrative externalisée",
  },
  {
    path: "/secretaire-independante",
    name: "Secrétariat externalisé",
  },
  {
    path: "/assistante-administrative-btp",
    name: "Assistance administrative pour artisans et entreprises du BTP",
  },
  {
    path: "/bras-droit-automatisation",
    name: "Bras droit administratif et automatisation",
  },
  {
    path: "/facturation-electronique",
    name: "Accompagnement à la facturation électronique",
  },
];

/** Graphe global, présent sur toutes les pages (layout racine). */
export function siteGraphJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        url: `${SITE.baseUrl}/`,
        name: SITE.name,
        alternateName: "Cel Assist Pro",
        description:
          "Assistante administrative indépendante et bras droit des TPE, en Charente et à distance partout en France.",
        inLanguage: "fr-FR",
        publisher: { "@id": ORGANIZATION_ID },
      },
      {
        "@type": "LocalBusiness",
        "@id": ORGANIZATION_ID,
        name: SITE.name,
        legalName: SITE.legalName,
        description: CANONICAL_DESCRIPTION,
        url: `${SITE.baseUrl}/`,
        email: SITE.email,
        logo: {
          "@type": "ImageObject",
          "@id": `${SITE.baseUrl}/#logo`,
          url: `${SITE.baseUrl}/images/logos/celassistpro-flame-240.png`,
          contentUrl: `${SITE.baseUrl}/images/logos/celassistpro-flame-240.png`,
          width: 240,
          height: 455,
          caption: SITE.name,
        },
        image: `${SITE.baseUrl}/images/celine/01-celine-hero-accueil-sourire.jpg`,
        founder: { "@id": PERSON_ID },
        foundingDate: SITE.foundingDate,
        iso6523Code: `0002:${SITE.siren.replaceAll(" ", "")}`,
        identifier: {
          "@type": "PropertyValue",
          propertyID: "SIREN",
          value: SITE.siren.replaceAll(" ", ""),
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: SITE.address.street,
          postalCode: SITE.address.postalCode,
          addressLocality: SITE.address.town,
          addressRegion: SITE.address.region,
          addressCountry: "FR",
        },
        geo: { "@type": "GeoCoordinates", latitude: 45.50324, longitude: 0.03974 },
        hasMap: SITE.googleMapsCidUrl,
        areaServed: AREA_SERVED,
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer service",
          email: SITE.email,
          url: `${SITE.baseUrl}/contact`,
          availableLanguage: "fr",
          areaServed: "FR",
        },
        knowsAbout: [
          "Gestion administrative des TPE",
          "Secrétariat externalisé",
          "Devis, facturation et relances clients",
          "Pré-comptabilité",
          "Facturation électronique",
          "Gestion administrative des entreprises du BTP",
          "Structuration des processus",
          "Automatisation de la gestion",
          "Assistants d'intelligence artificielle pour TPE",
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Prestations CelAssistPro",
          itemListElement: SERVICE_PAGES.map((service) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              "@id": `${SITE.baseUrl}${service.path}#service`,
              name: service.name,
              url: `${SITE.baseUrl}${service.path}`,
            },
          })),
        },
        sameAs: [
          SITE.socials.linkedinCompany,
          SITE.socials.facebook,
          SITE.socials.instagram,
          SITE.googleMapsCidUrl,
        ],
      },
      {
        "@type": "Person",
        "@id": PERSON_ID,
        name: SITE.founder,
        url: `${SITE.baseUrl}/a-propos`,
        image: `${SITE.baseUrl}/images/celine/02-celine-avatar-google-linkedin.jpg`,
        jobTitle: "Assistante administrative indépendante et directrice des opérations externalisée",
        description:
          "Fondatrice de CelAssistPro, Céline Bardan cumule 30 ans d'expérience administrative et pré-comptable, tient depuis 2017 l'administratif d'une entreprise du bâtiment en Charente et s'est formée à l'automatisation et à l'intelligence artificielle.",
        worksFor: { "@id": ORGANIZATION_ID },
        knowsAbout: [
          "Gestion administrative des TPE",
          "Pré-comptabilité",
          "Gestion administrative des entreprises du BTP",
          "Facturation électronique",
          "Organisation",
          "Automatisation",
          "Intelligence artificielle appliquée aux TPE",
        ],
        hasCredential: {
          "@type": "EducationalOccupationalCredential",
          name: "BTS Assistant de gestion PME-PMI",
          credentialCategory: "Brevet de technicien supérieur",
        },
        memberOf: [
          { "@type": "Organization", name: "CPME" },
          { "@type": "Organization", name: "BNI Charente Grand Sud" },
        ],
        sameAs: [SITE.socials.linkedin],
      },
    ],
  };
}

type ServiceJsonLdInput = {
  /** Chemin de la page, ex. /assistante-administrative-btp */
  path: string;
  name: string;
  serviceType: string;
  /** Description factuelle du service (une ou deux phrases). */
  description?: string;
  /** Public visé, ex. « Artisans et entreprises du bâtiment ». */
  audience?: string;
};

export function serviceJsonLd({ path, name, serviceType, description, audience }: ServiceJsonLdInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE.baseUrl}${path}#service`,
    name,
    serviceType,
    ...(description ? { description } : {}),
    ...(audience ? { audience: { "@type": "BusinessAudience", name: audience } } : {}),
    provider: { "@id": ORGANIZATION_ID },
    areaServed: AREA_SERVED,
    url: `${SITE.baseUrl}${path}`,
  };
}

type Crumb = {
  label: string;
  path: string;
};

/**
 * Fil d'Ariane : Accueil > [parent] > page courante.
 * `parent` sert aux pages de deuxième niveau (ex. un article sous le blog).
 */
export function breadcrumbJsonLd(currentLabel: string, currentPath: string, parent?: Crumb) {
  const trail: Crumb[] = [
    { label: "Accueil", path: "/" },
    ...(parent ? [parent] : []),
    { label: currentLabel, path: currentPath },
  ];

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.label,
      item: `${SITE.baseUrl}${crumb.path}`,
    })),
  };
}

export function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: offerFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: stripLinks(faq.answer),
      },
    })),
  };
}

/** Page À propos : la page décrit Céline Bardan, déclarée dans le graphe global. */
export function profilePageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${SITE.baseUrl}/a-propos#webpage`,
    url: `${SITE.baseUrl}/a-propos`,
    name: "Céline Bardan, assistante administrative en Charente",
    inLanguage: "fr-FR",
    isPartOf: { "@id": WEBSITE_ID },
    mainEntity: { "@id": PERSON_ID },
  };
}

export function contactPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${SITE.baseUrl}/contact#webpage`,
    url: `${SITE.baseUrl}/contact`,
    name: "Contacter CelAssistPro",
    inLanguage: "fr-FR",
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORGANIZATION_ID },
  };
}

export function blogJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": BLOG_ID,
    url: `${SITE.baseUrl}/blog`,
    name: "Blog CelAssistPro",
    description:
      "Conseils concrets pour alléger l'administratif, organiser une TPE, préparer la facturation électronique et déléguer sans recruter.",
    inLanguage: "fr-FR",
    isPartOf: { "@id": WEBSITE_ID },
    publisher: { "@id": ORGANIZATION_ID },
  };
}

export function articleJsonLd(article: BlogArticle) {
  const url = `${SITE.baseUrl}/blog/${article.slug}`;
  const image = article.image
    ? `${SITE.baseUrl}${article.image.src}`
    : `${SITE.baseUrl}/images/og-default.jpg`;

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    url,
    mainEntityOfPage: url,
    headline: article.title,
    description: article.description,
    image,
    articleSection: article.category,
    keywords: article.keyword,
    inLanguage: "fr-FR",
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    author: personRef,
    publisher: { "@id": ORGANIZATION_ID },
    isPartOf: { "@id": BLOG_ID },
    ...(article.sources && article.sources.length > 0
      ? {
          citation: article.sources.map((source) => ({
            "@type": "CreativeWork",
            name: source.label,
            url: source.url,
          })),
        }
      : {}),
  };
}
