"use client";

import { useEffect, useState } from "react";
import { fr } from "@/lib/typo";

type IntercalairesProps = {
  rubriques: { ancre: string; libelle: string }[];
};

/** Les intercalaires du fichier : celui de la rubrique qu'on est en train de lire reste levé. */
export function Intercalaires({ rubriques }: IntercalairesProps) {
  const [courante, setCourante] = useState<string | null>(null);

  useEffect(() => {
    const observateur = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCourante(entry.target.id);
          }
        });
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );

    rubriques.forEach(({ ancre }) => {
      const rubrique = document.getElementById(ancre);

      if (rubrique) {
        observateur.observe(rubrique);
      }
    });

    return () => observateur.disconnect();
  }, [rubriques]);

  return (
    <nav className="blog-topic-nav" aria-label="Catégories du blog">
      {rubriques.map(({ ancre, libelle }) => (
        <a aria-current={courante === ancre ? "true" : undefined} href={`#${ancre}`} key={ancre}>
          {fr(libelle)}
        </a>
      ))}
    </nav>
  );
}
