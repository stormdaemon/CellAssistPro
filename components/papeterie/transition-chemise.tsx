"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { chemiseDe, intituleDe, type Chemise } from "@/lib/site-data";
import { fr } from "@/lib/typo";

type Passage = {
  chemise: Chemise;
  intitule: string;
  phase: "monte" | "sort";
};

const DUREE_MONTEE = 430;
const DUREE_SORTIE = 620;
/** Si la page n'arrive jamais (réseau coupé), la chemise ne reste pas sur l'écran. */
const DELAI_MAXIMAL = 7000;

/**
 * Changer de page, c'est tirer une autre chemise du classeur : celle de la rubrique visée
 * monte sur l'écran, onglet en tête, puis s'efface en laissant la page de la même couleur.
 */
export function TransitionChemise() {
  const pathname = usePathname();
  const router = useRouter();
  const [passage, setPassage] = useState<Passage | null>(null);
  const cheminAttendu = useRef<string | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    function surClic(event: MouseEvent) {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const lien = (event.target as Element).closest<HTMLAnchorElement>("a[href]");

      if (!lien || lien.target || lien.hasAttribute("download")) {
        return;
      }

      const url = new URL(lien.href, window.location.href);

      if (url.origin !== window.location.origin || url.pathname === window.location.pathname) {
        return;
      }

      event.preventDefault();
      cheminAttendu.current = url.pathname;
      setPassage({
        chemise: chemiseDe(url.pathname),
        intitule: intituleDe(url.pathname),
        phase: "monte",
      });
      window.setTimeout(() => router.push(url.pathname + url.search + url.hash), DUREE_MONTEE);
    }

    document.addEventListener("click", surClic, true);

    return () => document.removeEventListener("click", surClic, true);
  }, [router]);

  useEffect(() => {
    if (!passage || passage.phase !== "monte") {
      return;
    }

    if (cheminAttendu.current === pathname) {
      cheminAttendu.current = null;
      const image = requestAnimationFrame(() =>
        setPassage((courant) => (courant ? { ...courant, phase: "sort" } : null)),
      );

      return () => cancelAnimationFrame(image);
    }

    const secours = window.setTimeout(() => {
      cheminAttendu.current = null;
      setPassage(null);
    }, DELAI_MAXIMAL);

    return () => window.clearTimeout(secours);
  }, [pathname, passage]);

  useEffect(() => {
    if (passage?.phase !== "sort") {
      return;
    }

    const fin = window.setTimeout(() => setPassage(null), DUREE_SORTIE);

    return () => window.clearTimeout(fin);
  }, [passage]);

  if (!passage) {
    return null;
  }

  return (
    <div
      aria-hidden="true"
      className={`passage passage--${passage.phase}`}
      data-chemise={passage.chemise}
    >
      <span className="passage__onglet">{fr(passage.intitule)}</span>
    </div>
  );
}
