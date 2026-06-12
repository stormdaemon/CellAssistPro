import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { JsonLd } from "@/components/site/json-ld";
import { RevealOnScroll } from "@/components/site/reveal-on-scroll";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { professionalServiceJsonLd, siteNavigationJsonLd } from "@/lib/structured-data";
import { SITE } from "@/lib/site-data";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  axes: ["opsz"],
});

export const metadata: Metadata = {
  title: "Assistante virtuelle Charente | CelAssistPro",
  description:
    "Gestion administrative, organisation et pré-comptable pour TPE et indépendants. IA & automatisation. Sur place en Charente, à distance partout en France.",
  metadataBase: new URL(SITE.baseUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "CelAssistPro — Votre bras droit stratégique",
    description:
      "Récupérez 10 heures par semaine. Votre gestion tourne — sans vous.",
    url: SITE.baseUrl,
    siteName: "CelAssistPro",
    images: [
      {
        url: "/images/celine/01-celine-hero-accueil-sourire.jpg",
        width: 1024,
        height: 1024,
        alt: "Céline Bardan, fondatrice de CelAssistPro",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CelAssistPro — Votre bras droit stratégique",
    description:
      "Récupérez 10 heures par semaine. Votre gestion tourne — sans vous.",
    images: ["/images/celine/01-celine-hero-accueil-sourire.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${jakarta.variable} ${fraunces.variable}`}>
        <JsonLd data={professionalServiceJsonLd()} />
        <JsonLd data={siteNavigationJsonLd()} />
        <SiteHeader />
        <RevealOnScroll />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
