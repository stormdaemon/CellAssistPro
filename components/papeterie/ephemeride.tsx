"use client";

import { useState } from "react";
import { fr } from "@/lib/typo";

const FEUILLETS = [
  { jour: "1er", mois: "septembre 2026", mot: "Recevoir" },
  { jour: "1er", mois: "septembre 2027", mot: "Émettre" },
];

/**
 * Le calendrier à feuillets de la réforme : un clic arrache la page du dessus.
 * Purement décoratif, les dates sont données en toutes lettres dans la page.
 */
export function Ephemeride() {
  const [arraches, setArraches] = useState(0);

  return (
    <div
      aria-hidden="true"
      className="ephemeride"
      onClick={() => setArraches((courant) => (courant + 1) % (FEUILLETS.length + 1))}
    >
      <span className="ephemeride__reliure" />
      <span className="ephemeride__dos">C&rsquo;est en ordre.</span>
      {FEUILLETS.map((feuillet, rang) => (
        <span
          className={rang < arraches ? "ephemeride__page ephemeride__page--arrachee" : "ephemeride__page"}
          key={feuillet.mois}
          style={{ zIndex: FEUILLETS.length - rang }}
        >
          <small>{fr(feuillet.mois)}</small>
          <strong>{fr(feuillet.jour)}</strong>
          <em>{fr(feuillet.mot)}</em>
        </span>
      ))}
      <span className="ephemeride__consigne">Arrachez la page</span>
    </div>
  );
}
