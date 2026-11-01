"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const LARGEUR_MINIMALE = "(min-width: 900px)";

/**
 * Empile les sections comme les chemises d'un dossier : chacune défile jusqu'à montrer son
 * bas, puis reste en place pendant que la suivante glisse par-dessus. Le décalage dépend de la
 * hauteur de chaque section, d'où cette mesure ; sans JavaScript, la page défile normalement.
 */
export function Feuilleter() {
  const pathname = usePathname();

  useEffect(() => {
    const ecran = window.matchMedia(LARGEUR_MINIMALE);
    const mouvementReduit = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sections = Array.from(document.querySelectorAll<HTMLElement>("main > section, main > .section"));
    const entete = document.querySelector<HTMLElement>(".site-header");

    function mesurer() {
      const actif = ecran.matches && !mouvementReduit.matches;
      const hauteurEntete = entete?.offsetHeight ?? 0;

      sections.forEach((section) => {
        section.classList.toggle("feuillet", actif);
        if (actif) {
          const decalage = Math.min(hauteurEntete, window.innerHeight - section.offsetHeight);
          section.style.setProperty("--coller", `${decalage}px`);
        } else {
          section.style.removeProperty("--coller");
        }
      });
    }

    const observateur = new ResizeObserver(mesurer);
    sections.forEach((section) => observateur.observe(section));
    window.addEventListener("resize", mesurer);
    ecran.addEventListener("change", mesurer);

    return () => {
      observateur.disconnect();
      window.removeEventListener("resize", mesurer);
      ecran.removeEventListener("change", mesurer);
    };
  }, [pathname]);

  return null;
}
