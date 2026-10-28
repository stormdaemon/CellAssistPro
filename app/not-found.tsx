import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/site/page-hero";

export const metadata: Metadata = {
  title: "Page introuvable | CelAssistPro",
  description: "Cette page n'existe pas ou a été déplacée.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main>
      <PageHero eyebrow="Erreur 404" title="Cette page n'existe pas (ou plus)">
        <p>
          Le lien que vous avez suivi est peut-être ancien, ou l'article a été regroupé avec un
          autre. Voici les pages les plus utiles pour reprendre votre lecture :
        </p>
        <ul>
          <li>
            <Link href="/assistante-administrative">L'assistance administrative pour TPE</Link>
          </li>
          <li>
            <Link href="/assistante-administrative-btp">L'expertise artisans et BTP</Link>
          </li>
          <li>
            <Link href="/facturation-electronique">Le guide de la facturation électronique</Link>
          </li>
          <li>
            <Link href="/blog">Tous les articles du blog</Link>
          </li>
          <li>
            <Link href="/contact">Contacter Céline Bardan</Link>
          </li>
        </ul>
      </PageHero>
    </main>
  );
}
