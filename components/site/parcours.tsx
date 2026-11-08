"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * D'où vient la personne qui écrit ou réserve : la source de son arrivée, la première page vue,
 * la page lue juste avant. Tout reste en mémoire le temps de la visite (ni cookie ni stockage dans
 * le navigateur) et ne part qu'avec le formulaire qu'elle envoie ou le rendez-vous qu'elle prend.
 */
type Parcours = {
  provenance: string;
  arrivee: string;
  precedente: string;
  courante: string;
};

const parcours: Parcours = { provenance: "", arrivee: "", precedente: "", courante: "" };

/** « google.com », « chatgpt.com », « malt.fr »… ou « direct » quand le navigateur ne dit rien. */
function provenanceDeLaVisite() {
  if (!document.referrer) {
    return "direct";
  }

  try {
    const origine = new URL(document.referrer);
    return origine.host === window.location.host ? "" : origine.host.replace(/^www\./, "");
  } catch {
    return "";
  }
}

function noter(chemin: string) {
  if (!parcours.arrivee) {
    parcours.provenance = provenanceDeLaVisite();
    parcours.arrivee = chemin;
  } else if (chemin !== parcours.courante) {
    parcours.precedente = parcours.courante;
  }

  parcours.courante = chemin;
}

/**
 * Les effets d'une page passent avant celui de la mise en page : le formulaire ou l'agenda peut lire
 * le parcours avant que le changement de page soit noté. On le note donc aussi à la lecture.
 */
export function lireParcours(): Readonly<Parcours> {
  noter(window.location.pathname);
  return parcours;
}

/** Posé une fois dans la mise en page : suit les changements de page, y compris sans rechargement. */
export function SuiviParcours() {
  const chemin = usePathname();

  useEffect(() => {
    noter(chemin);
  }, [chemin]);

  return null;
}
