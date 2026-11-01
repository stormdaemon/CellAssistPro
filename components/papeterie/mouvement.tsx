"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { saisir } from "@/components/papeterie/attraper";

/** Ce qui se pose sur la page quand on arrive dessus. */
const SELECTEUR_APPARITION = [
  ".mini-card",
  ".offer-preview",
  ".offer-detail-panel",
  ".profile-card",
  ".value-card",
  ".case-explorer",
  ".testimonial-card",
  ".contact-card",
  ".article-body section",
  ".monthly-band",
  ".highlight-panel",
  ".article-tile",
  ".fiche",
  ".fiche-blog",
  ".quote-panel",
].join(", ");

/** Ce qui ne se pose pas mais reçoit quand même .is-visible : listes, titres mot à mot. */
const SELECTEUR_REPERES = "[data-vu], .task-list, .trade-chips, .workflow, h2:has(.mot)";

/** Les listes dont les éléments arrivent l'un après l'autre : chacun reçoit son rang (--i). */
const SELECTEUR_RANGS = ".task-list, .trade-chips, .workflow, .article-related, .faq-list";

type Zone = "entree" | "traverse" | "epingle";

type Suivi = {
  element: HTMLElement;
  zone: Zone;
  cible: number;
  courant: number;
};

const LISSAGE = 0.14;

/**
 * Le moteur de mouvement du site : un seul écouteur de défilement, et du CSS pour tout le reste.
 *
 * - `data-defile` : l'élément reçoit --p, de 0 à 1, selon sa course dans l'écran
 *   (« entree » : il arrive ; « traverse » : il traverse ; « epingle » : scène épinglée).
 * - `data-vu` et le sélecteur ci-dessus : l'élément reçoit .is-visible à son arrivée.
 * - `data-attrapable` : l'objet se saisit à la souris.
 * - `.workflow__etiquette` : l'étiquette balance sur son cordeau au survol.
 * - `data-incline` : l'objet penche vers le pointeur (--ix, --iy, de -1 à 1).
 */
export function Mouvement() {
  const pathname = usePathname();

  useEffect(() => {
    const mouvementReduit = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const apparitions = Array.from(document.querySelectorAll<HTMLElement>(SELECTEUR_APPARITION));
    const reperes = Array.from(document.querySelectorAll<HTMLElement>(SELECTEUR_REPERES));
    const suivis: Suivi[] = Array.from(document.querySelectorAll<HTMLElement>("[data-defile]")).map(
      (element) => ({
        element,
        zone: (element.dataset.defile || "entree") as Zone,
        cible: 0,
        courant: -1,
      }),
    );

    document.querySelectorAll(SELECTEUR_RANGS).forEach((liste) => {
      Array.from(liste.children).forEach((enfant, rang) => {
        (enfant as HTMLElement).style.setProperty("--i", String(rang));
      });
    });

    if (mouvementReduit) {
      [...apparitions, ...reperes].forEach((element) => element.classList.add("is-visible"));
      suivis.forEach(({ element }) => element.style.setProperty("--p", "1"));
      return;
    }

    apparitions.forEach((element, index) => {
      element.dataset.reveal = "";
      element.style.setProperty("--reveal-delay", `${Math.min(index % 5, 4) * 70}ms`);
    });

    const observateur = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observateur.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.1 },
    );

    [...apparitions, ...reperes].forEach((element) => observateur.observe(element));

    let image: number | null = null;

    function mesurer() {
      const hauteur = window.innerHeight;

      suivis.forEach((suivi) => {
        const { top, height } = suivi.element.getBoundingClientRect();
        let progression: number;

        if (suivi.zone === "traverse") {
          progression = (hauteur - top) / (hauteur + height);
        } else if (suivi.zone === "epingle") {
          progression = -top / Math.max(1, height - hauteur);
        } else {
          progression = (hauteur - top) / (hauteur * 0.72);
        }

        suivi.cible = Math.min(1, Math.max(0, progression));
      });
    }

    function animer() {
      let enCours = false;

      suivis.forEach((suivi) => {
        const ecart = suivi.cible - suivi.courant;

        if (Math.abs(ecart) > 0.0006) {
          suivi.courant += ecart * LISSAGE;
          enCours = true;
        } else if (suivi.courant !== suivi.cible) {
          suivi.courant = suivi.cible;
        } else {
          return;
        }

        suivi.element.style.setProperty("--p", suivi.courant.toFixed(4));
      });

      image = enCours ? requestAnimationFrame(animer) : null;
    }

    function surDefilement() {
      mesurer();
      if (image === null) {
        image = requestAnimationFrame(animer);
      }
    }

    function surSaisie(event: PointerEvent) {
      const objet = (event.target as Element).closest<HTMLElement>("[data-attrapable]");
      const cadre = objet?.closest<HTMLElement>("section, footer");

      if (objet && cadre) {
        saisir(event, objet, cadre);
      }
    }

    function surPointeur(event: PointerEvent) {
      if (event.pointerType === "touch") {
        return;
      }

      const objet = (event.target as Element).closest<HTMLElement>("[data-incline]");

      if (objet) {
        const { left, top, width, height } = objet.getBoundingClientRect();
        objet.style.setProperty("--ix", (((event.clientX - left) / width) * 2 - 1).toFixed(3));
        objet.style.setProperty("--iy", (((event.clientY - top) / height) * 2 - 1).toFixed(3));
      }
    }

    function surSortie(event: PointerEvent) {
      const objet = (event.target as Element).closest?.<HTMLElement>("[data-incline]");

      if (objet && !objet.contains(event.relatedTarget as Node | null)) {
        objet.style.setProperty("--ix", "0");
        objet.style.setProperty("--iy", "0");
      }
    }

    function surSurvol(event: PointerEvent) {
      const etiquette = (event.target as Element).closest?.<HTMLElement>(".workflow__etiquette");

      if (etiquette && !etiquette.classList.contains("balance")) {
        etiquette.classList.add("balance");
        etiquette.addEventListener("animationend", () => etiquette.classList.remove("balance"), {
          once: true,
        });
      }
    }

    // Avant la première image : une page rechargée au milieu doit déjà être dans le bon état.
    mesurer();
    suivis.forEach((suivi) => {
      suivi.courant = suivi.cible;
      suivi.element.style.setProperty("--p", suivi.cible.toFixed(4));
    });

    window.addEventListener("scroll", surDefilement, { passive: true });
    window.addEventListener("resize", surDefilement);
    document.addEventListener("pointerdown", surSaisie);
    document.addEventListener("pointermove", surPointeur, { passive: true });
    document.addEventListener("pointerout", surSortie, { passive: true });
    document.addEventListener("pointerover", surSurvol, { passive: true });

    return () => {
      observateur.disconnect();
      if (image !== null) {
        cancelAnimationFrame(image);
      }
      window.removeEventListener("scroll", surDefilement);
      window.removeEventListener("resize", surDefilement);
      document.removeEventListener("pointerdown", surSaisie);
      document.removeEventListener("pointermove", surPointeur);
      document.removeEventListener("pointerout", surSortie);
      document.removeEventListener("pointerover", surSurvol);
    };
  }, [pathname]);

  return null;
}
