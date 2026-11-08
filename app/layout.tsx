import type { Metadata } from "next";
import { Besley, Courier_Prime, Libre_Franklin, Playwrite_FR_Moderne } from "next/font/google";
import "./globals.css";
import { JsonLd } from "@/components/site/json-ld";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { SuiviParcours } from "@/components/site/parcours";
import { Feuilleter } from "@/components/papeterie/feuilleter";
import { Mouvement } from "@/components/papeterie/mouvement";
import { TransitionChemise } from "@/components/papeterie/transition-chemise";
import { siteGraphJsonLd } from "@/lib/structured-data";
import { SITE } from "@/lib/site-data";

const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;

const franklin = Libre_Franklin({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const besley = Besley({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const courier = Courier_Prime({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-machine",
  display: "swap",
});

/** La cursive des cahiers français : réservée aux annotations, jamais au texte courant. */
const cursive = Playwrite_FR_Moderne({
  variable: "--font-main",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Assistante administrative & bras droit en Charente | CelAssistPro",
  description:
    "Assistante administrative indépendante en Charente et à distance partout en France. Gestion, pré-compta, automatisation et expertise BTP pour TPE et artisans.",
  metadataBase: new URL(SITE.baseUrl),
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-touch-icon.png", type: "image/png", sizes: "180x180" }],
  },
  // Pas de canonical ici : chaque page déclare la sienne (pageMetadata), sinon une page
  // sans métadonnées hériterait de celle de l'accueil.
  openGraph: {
    title: "Assistante administrative & bras droit en Charente | CelAssistPro",
    description:
      "Gestion administrative, pré-compta, structuration et automatisation pour TPE et artisans. Expertise particulière BTP.",
    url: SITE.baseUrl,
    siteName: "CelAssistPro",
    images: [
      {
        url: "/images/og-default.jpg",
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
    title: "Assistante administrative & bras droit en Charente | CelAssistPro",
    description:
      "Gestion administrative, pré-compta, structuration et automatisation pour TPE et artisans. Expertise particulière BTP.",
    images: ["/images/og-default.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" data-scroll-behavior="smooth">
      <body
        className={`${franklin.variable} ${besley.variable} ${courier.variable} ${cursive.variable}`}
      >
        {plausibleDomain ? (
          <script
            defer
            data-domain={plausibleDomain}
            src="https://plausible.io/js/script.js"
          />
        ) : null}
        <SuiviParcours />
        <JsonLd data={siteGraphJsonLd()} />
        {/* Filtre partagé : donne aux tampons le grain irrégulier de l'encre sur le papier. */}
        <svg className="filtres" aria-hidden="true" focusable="false" width="0" height="0">
          <filter id="encre-tampon" x="-6%" y="-10%" width="112%" height="120%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.04 0.07"
              numOctaves="2"
              seed="4"
              result="bave"
            />
            <feDisplacementMap in="SourceGraphic" in2="bave" scale="1.8" result="trace" />
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.85"
              numOctaves="2"
              seed="11"
              result="grain"
            />
            <feColorMatrix
              in="grain"
              type="matrix"
              values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 -3.1 2.15"
              result="manques"
            />
            <feComposite in="trace" in2="manques" operator="in" />
          </filter>
        </svg>
        <noscript>
          <style>{".post-it__feuille,.ticket,.trade-chips li,.workflow__etiquette{opacity:1!important;clip-path:none!important;transform:none!important}.caisse__sortie{clip-path:none!important}.mot{animation:none!important;opacity:1!important}.task-list .coche path{stroke-dashoffset:0!important}"}</style>
        </noscript>
        <a className="lien-evitement" href="#contenu">
          Aller au contenu
        </a>
        <SiteHeader />
        <Mouvement />
        <Feuilleter />
        <TransitionChemise />
        <div id="contenu">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
