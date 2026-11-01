"use client";

import { useEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from "react";
import { Stylo } from "@/components/papeterie/objets";

/**
 * Un stylo posé sur le cahier : on le prend, on griffonne où on veut, on le repose.
 * Le dessin vit sur un calque au-dessus du cahier, sans toucher à son texte.
 */
export function Griffonnage() {
  const [enMain, setEnMain] = useState(false);
  const calque = useRef<HTMLCanvasElement>(null);
  const dernierPoint = useRef<{ x: number; y: number } | null>(null);

  // Le calque suit la taille du cahier ; le griffonnage repart de zéro à chaque changement.
  useEffect(() => {
    const toile = calque.current;
    const cahier = toile?.parentElement;

    if (!toile || !cahier) {
      return;
    }

    function ajuster() {
      if (!toile || !cahier) {
        return;
      }

      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      const largeur = cahier.clientWidth;
      const hauteur = cahier.clientHeight;

      if (toile.width === Math.round(largeur * ratio)) {
        return;
      }

      toile.width = Math.round(largeur * ratio);
      toile.height = Math.round(hauteur * ratio);
      toile.getContext("2d")?.scale(ratio, ratio);
    }

    const observateur = new ResizeObserver(ajuster);
    observateur.observe(cahier);
    ajuster();

    return () => observateur.disconnect();
  }, []);

  function position(event: ReactPointerEvent<HTMLCanvasElement>) {
    const boite = event.currentTarget.getBoundingClientRect();

    return { x: event.clientX - boite.left, y: event.clientY - boite.top };
  }

  function commencer(event: ReactPointerEvent<HTMLCanvasElement>) {
    event.currentTarget.setPointerCapture(event.pointerId);
    dernierPoint.current = position(event);
  }

  function tracer(event: ReactPointerEvent<HTMLCanvasElement>) {
    const depart = dernierPoint.current;
    const contexte = event.currentTarget.getContext("2d");

    if (!depart || !contexte) {
      return;
    }

    const arrivee = position(event);
    contexte.strokeStyle = "#4b27c4";
    contexte.lineWidth = 2.1;
    contexte.lineCap = "round";
    contexte.beginPath();
    contexte.moveTo(depart.x, depart.y);
    contexte.quadraticCurveTo(
      depart.x,
      depart.y,
      (depart.x + arrivee.x) / 2,
      (depart.y + arrivee.y) / 2,
    );
    contexte.lineTo(arrivee.x, arrivee.y);
    contexte.stroke();
    dernierPoint.current = arrivee;
  }

  function finir() {
    dernierPoint.current = null;
  }

  return (
    <>
      <canvas
        aria-hidden="true"
        className={enMain ? "griffonnage griffonnage--actif" : "griffonnage"}
        onPointerCancel={finir}
        onPointerDown={commencer}
        onPointerMove={tracer}
        onPointerUp={finir}
        ref={calque}
      />
      <button
        aria-hidden="true"
        className={enMain ? "griffonnage__stylo griffonnage__stylo--pris" : "griffonnage__stylo"}
        onClick={() => setEnMain((courant) => !courant)}
        tabIndex={-1}
        type="button"
      >
        <Stylo />
        <span>{enMain ? "Reposer le stylo" : "Griffonnez, c’est permis"}</span>
      </button>
    </>
  );
}
