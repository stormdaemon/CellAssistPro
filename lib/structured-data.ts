import { offerFaqs, SITE } from "@/lib/site-data";

/** Identifiant stable de l'entreprise, référencé par les autres entités (Service…). */
export const ORGANIZATION_ID = `${SITE.baseUrl}/#organization`;

const AREA_SERVED = [
  { "@type": "AdministrativeArea", name: "Charente" },
  { "@type": "Country", name: "France" },
];

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORGANIZATION_ID,
    name: SITE.name,
    url: `${SITE.baseUrl}/`,
    email: SITE.email,
    image: `${SITE.baseUrl}/images/celine/01-celine-hero-accueil-sourire.jpg`,
    logo: `${SITE.baseUrl}/images/logos/celassistpro-flame-240.png`,
    founder: {
      "@type": "Person",
      name: SITE.founder,
      jobTitle: "Directrice des opérations externalisée",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "3 Les Vignes de Chez Rullier",
      postalCode: "16250",
      addressLocality: "Champagne-Vigny",
      addressCountry: "FR",
    },
    areaServed: AREA_SERVED,
    description:
      "Assistance administrative, bras droit stratégique, structuration et automatisation pour TPE, artisans et indépendants.",
    sameAs: [
      SITE.socials.linkedin,
      SITE.socials.facebook,
      SITE.socials.instagram,
      SITE.googleBusinessUrl,
    ],
  };
}

type ServiceJsonLdInput = {
  /** Chemin de la page, ex. /assistante-administrative-btp */
  path: string;
  name: string;
  serviceType: string;
};

export function serviceJsonLd({ path, name, serviceType }: ServiceJsonLdInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE.baseUrl}${path}#service`,
    name,
    serviceType,
    provider: { "@id": ORGANIZATION_ID },
    areaServed: AREA_SERVED,
    url: `${SITE.baseUrl}${path}`,
  };
}

export function breadcrumbJsonLd(currentLabel: string, currentPath: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Accueil",
        item: SITE.baseUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: currentLabel,
        item: `${SITE.baseUrl}${currentPath}`,
      },
    ],
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
        text: faq.answer,
      },
    })),
  };
}

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE.founder,
    jobTitle: "Directrice des opérations externalisée",
    worksFor: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.baseUrl,
    },
    knowsAbout: [
      "Gestion administrative TPE",
      "Pré-comptabilité",
      "Organisation",
      "Automatisation",
      "Intelligence artificielle appliquée aux TPE",
    ],
    sameAs: [SITE.socials.linkedin],
  };
}
