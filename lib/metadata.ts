import type { Metadata } from "next";
import { SEO, SITE, type SeoKey } from "@/lib/site-data";

export function pageMetadata(key: SeoKey): Metadata {
  const page = SEO[key];
  const image = "/images/og-default.jpg";

  return {
    title: page.title,
    description: page.description,
    alternates: {
      canonical: page.path,
    },
    openGraph: {
      title: page.title,
      description: page.description,
      url: page.path,
      siteName: SITE.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: "CelAssistPro — Céline Bardan, votre bras droit stratégique",
        },
      ],
      locale: "fr_FR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: [image],
    },
  };
}
