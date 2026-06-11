import { NAVIGATION, offerFaqs, SITE } from "@/lib/site-data";

export function professionalServiceJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: SITE.name,
    url: SITE.baseUrl,
    email: SITE.email,
    founder: {
      "@type": "Person",
      name: SITE.founder,
      jobTitle: "Directrice des opérations externalisée",
    },
    areaServed: ["Charente", "Angoulême", "France"],
    description:
      "Gestion administrative, organisationnelle et pré-comptable pour dirigeants de TPE, sur place en Charente et à distance partout en France.",
    sameAs: [
      SITE.socials.linkedin,
      SITE.socials.facebook,
      SITE.socials.instagram,
      SITE.googleBusinessUrl,
    ],
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

export function siteNavigationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: NAVIGATION.map((item, index) => ({
      "@type": "SiteNavigationElement",
      position: index + 1,
      name: item.label,
      url: `${SITE.baseUrl}${item.href === "/" ? "" : item.href}`,
    })),
  };
}
