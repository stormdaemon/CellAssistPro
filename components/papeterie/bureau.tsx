"use client";

import Image from "next/image";
import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type PointerEvent,
  type ReactNode,
} from "react";
import { reposer, saisir } from "@/components/papeterie/attraper";
import { FlecheMain, Stylo, Tampon, Tasse, Trombone } from "@/components/papeterie/objets";

type Etat = "bazar" | "range";

/** Position d'un objet, en pourcentage de la scène : [x, y, rotation]. */
type Pose = readonly [number, number, number];

type Placement = {
  /** Écran large : le bazar, puis le rangement. */
  bazar: Pose;
  range: Pose;
  /** Écran étroit : même logique, sur une scène placée sous le texte. */
  bazarEtroit: Pose;
  rangeEtroit: Pose;
  z: number;
  ordre: number;
};

function poser({ bazar, range, bazarEtroit, rangeEtroit, z, ordre }: Placement): CSSProperties {
  return {
    "--bx": bazar[0],
    "--by": bazar[1],
    "--br": `${bazar[2]}deg`,
    "--rx": range[0],
    "--ry": range[1],
    "--rr": `${range[2]}deg`,
    "--ebx": bazarEtroit[0],
    "--eby": bazarEtroit[1],
    "--ebr": `${bazarEtroit[2]}deg`,
    "--erx": rangeEtroit[0],
    "--ery": rangeEtroit[1],
    "--err": `${rangeEtroit[2]}deg`,
    "--z": z,
    "--ordre": ordre,
  } as CSSProperties;
}

const PLACEMENTS = {
  devis: {
    bazar: [46.5, -6, -7],
    range: [58.4, 15, -3.4],
    bazarEtroit: [-6, 2, -6],
    rangeEtroit: [20, 30, -2.6],
    z: 12,
    ordre: 1,
  },
  courriel: {
    bazar: [83, -8, 9],
    range: [58.8, 14.4, -2],
    bazarEtroit: [58, -3, 8],
    rangeEtroit: [21, 29.6, -1.4],
    z: 13,
    ordre: 5,
  },
  facture: {
    bazar: [59, 41, 6],
    range: [58.6, 15.4, -4.2],
    bazarEtroit: [30, 37, 5],
    rangeEtroit: [20.4, 30.4, -3.6],
    z: 14,
    ordre: 2,
  },
  enveloppe: {
    bazar: [50, 77, -12],
    range: [59.4, 22, -3],
    bazarEtroit: [-8, 70, -10],
    rangeEtroit: [24, 40, -2.6],
    z: 15,
    ordre: 7,
  },
  ticketUn: {
    bazar: [53, 31, -17],
    range: [62, 25, -6],
    bazarEtroit: [4, 34, -15],
    rangeEtroit: [28, 40, -5],
    z: 16,
    ordre: 3,
  },
  ticketDeux: {
    bazar: [78, 62, 19],
    range: [68, 24, 3],
    bazarEtroit: [72, 60, 15],
    rangeEtroit: [46, 40, 3],
    z: 17,
    ordre: 8,
  },
  noteJaune: {
    bazar: [71, 62, -7],
    range: [60, 22, -5],
    bazarEtroit: [52, 80, -7],
    rangeEtroit: [28, 44, -5],
    z: 27,
    ordre: 4,
  },
  noteRose: {
    bazar: [91, 22, 8],
    range: [67, 26, 2],
    bazarEtroit: [76, 30, 8],
    rangeEtroit: [44, 46, 2],
    z: 28,
    ordre: 6,
  },
  noteBleue: {
    bazar: [51, 60, 5],
    range: [64, 27, -3],
    bazarEtroit: [20, 56, 5],
    rangeEtroit: [34, 46, -3],
    z: 29,
    ordre: 9,
  },
  agenda: {
    bazar: [84, 37, -5],
    range: [82.4, 46, -2],
    bazarEtroit: [56, 33, -5],
    rangeEtroit: [62, 54, -2],
    z: 46,
    ordre: 10,
  },
  photo: {
    bazar: [66.5, 3, 4],
    range: [82, 4, 3],
    bazarEtroit: [28, 3, 3],
    rangeEtroit: [58, 2, 3],
    z: 48,
    ordre: 0,
  },
  tasse: {
    bazar: [90, 78, -8],
    range: [49, 71, -8],
    bazarEtroit: [78, 84, -8],
    rangeEtroit: [4, 78, -8],
    z: 45,
    ordre: 11,
  },
  stylo: {
    bazar: [57, 88, -26],
    range: [59, 90, -2],
    bazarEtroit: [20, 92, -22],
    rangeEtroit: [32, 92, -2],
    z: 44,
    ordre: 12,
  },
  tromboneUn: {
    bazar: [57, 33, 24],
    range: [60.5, 8, 4],
    bazarEtroit: [24, 30, 24],
    rangeEtroit: [26, 22, 4],
    z: 43,
    ordre: 13,
  },
  tromboneDeux: {
    bazar: [80, 32, -38],
    range: [83, 92, 90],
    bazarEtroit: [84, 24, -38],
    rangeEtroit: [80, 92, 90],
    z: 43,
    ordre: 14,
  },
  tromboneTrois: {
    bazar: [47, 62, 62],
    range: [86, 92, 90],
    bazarEtroit: [50, 62, 62],
    rangeEtroit: [86, 92, 90],
    z: 43,
    ordre: 15,
  },
} satisfies Record<string, Placement>;

const CHEMISE: CSSProperties = {
  "--bx": 57,
  "--by": 118,
  "--br": "-3deg",
  "--rx": 57,
  "--ry": 11,
  "--rr": "-3deg",
  "--ebx": 18,
  "--eby": 118,
  "--ebr": "-2.4deg",
  "--erx": 18,
  "--ery": 27,
  "--err": "-2.4deg",
} as CSSProperties;

const LARGEUR_ETROITE = "(max-width: 980px)";
const DELAI_RANGEMENT_AUTOMATIQUE = 7000;
const DELAI_RANGEMENT_ETROIT = 2400;
const SEUIL_DEFILEMENT = 90;

type BureauProps = {
  children: ReactNode;
};

export function Bureau({ children }: BureauProps) {
  const [etat, setEtat] = useState<Etat>("bazar");
  const [aJoue, setAJoue] = useState(false);
  const heros = useRef<HTMLElement>(null);
  const scene = useRef<HTMLDivElement>(null);
  const aTouche = useRef(false);

  function basculer() {
    aTouche.current = true;
    scene.current?.querySelectorAll<HTMLElement>("[data-objet]").forEach(reposer);
    setEtat((courant) => (courant === "bazar" ? "range" : "bazar"));
  }

  function attraper(event: PointerEvent<HTMLDivElement>) {
    const objet = (event.target as Element).closest<HTMLElement>("[data-objet]");

    if (objet && scene.current && saisir(event.nativeEvent, objet, scene.current)) {
      aTouche.current = true;
      setAJoue(true);
    }
  }

  // Le bureau se range tout seul si le visiteur le laisse faire : l'administratif avance sans lui.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    function rangerSeul() {
      if (!aTouche.current) {
        aTouche.current = true;
        setEtat("range");
      }
    }

    // Sur un petit écran, le bureau est sous le texte : on attend qu'il ait été vu.
    if (window.matchMedia(LARGEUR_ETROITE).matches && scene.current) {
      let minuteur: number | undefined;
      const observateur = new IntersectionObserver(
        ([entree]) => {
          if (entree.isIntersecting && minuteur === undefined) {
            minuteur = window.setTimeout(rangerSeul, DELAI_RANGEMENT_ETROIT);
          }
        },
        { threshold: 0.6 },
      );

      observateur.observe(scene.current);

      return () => {
        observateur.disconnect();
        window.clearTimeout(minuteur);
      };
    }

    function surDefilement() {
      if (window.scrollY > SEUIL_DEFILEMENT) {
        rangerSeul();
      }
    }

    const minuteur = window.setTimeout(rangerSeul, DELAI_RANGEMENT_AUTOMATIQUE);
    window.addEventListener("scroll", surDefilement, { passive: true });

    return () => {
      window.clearTimeout(minuteur);
      window.removeEventListener("scroll", surDefilement);
    };
  }, []);

  // Parallaxe : les objets du dessus suivent davantage le pointeur que ceux du dessous.
  useEffect(() => {
    const zone = heros.current;
    const plateau = scene.current;

    if (
      !zone ||
      !plateau ||
      !window.matchMedia("(hover: hover) and (pointer: fine)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    let cibleX = 0;
    let cibleY = 0;
    let x = 0;
    let y = 0;
    let image: number | null = null;

    function animer() {
      x += (cibleX - x) * 0.07;
      y += (cibleY - y) * 0.07;
      plateau?.style.setProperty("--px", x.toFixed(3));
      plateau?.style.setProperty("--py", y.toFixed(3));
      image =
        Math.abs(cibleX - x) + Math.abs(cibleY - y) > 0.002 ? requestAnimationFrame(animer) : null;
    }

    function surPointeur(event: globalThis.PointerEvent) {
      const boite = zone?.getBoundingClientRect();

      if (!boite) {
        return;
      }

      cibleX = ((event.clientX - boite.left) / boite.width - 0.5) * 2;
      cibleY = ((event.clientY - boite.top) / boite.height - 0.5) * 2;
      if (image === null) {
        image = requestAnimationFrame(animer);
      }
    }

    zone.addEventListener("pointermove", surPointeur, { passive: true });

    return () => {
      zone.removeEventListener("pointermove", surPointeur);
      if (image !== null) {
        cancelAnimationFrame(image);
      }
    };
  }, []);

  return (
    <section
      className="home-hero"
      data-chemise="lilas"
      data-etat={etat}
      data-joue={aJoue ? "oui" : undefined}
      ref={heros}
    >
      <div className="home-hero__content">{children}</div>

      <div className="bureau" ref={scene} onPointerDown={attraper}>
        <div className="bureau__chemise bureau__chemise--dos" style={CHEMISE} aria-hidden="true">
          <span className="bureau__onglet">Administratif</span>
        </div>

        <div
          aria-hidden="true"
          className="bureau__objet"
          data-objet=""
          style={poser(PLACEMENTS.devis)}
        >
          <div className="doc doc--devis">
            <div className="doc__entete">
              <strong>DEVIS</strong>
              <span>n° 2026-041</span>
            </div>
            <p className="doc__client">
              Chantier Moreau
              <br />
              Réfection de la toiture
            </p>
            <div className="doc__lignes">
              <div>
                <span>Dépose des tuiles</span>
                <span>1 480,00</span>
              </div>
              <div>
                <span>Écran et liteaux</span>
                <span>2 160,00</span>
              </div>
              <div>
                <span>Tuiles canal, pose</span>
                <span>4 050,00</span>
              </div>
              <div>
                <span>Zinguerie</span>
                <span>950,00</span>
              </div>
            </div>
            <div className="doc__total">
              <span>Total TTC</span>
              <strong>8 640,00&nbsp;€</strong>
            </div>
            <span className="doc__griffe">à envoyer vendredi&nbsp;!!</span>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="bureau__objet"
          data-objet=""
          style={poser(PLACEMENTS.courriel)}
        >
          <div className="doc doc--courriel">
            <p>
              <b>De&nbsp;:</b> M. Moreau
              <br />
              <b>Objet&nbsp;:</b> Re: Re: Re: mon devis&nbsp;?
            </p>
            <p>
              Bonjour,
              <br />
              je me permets de vous relancer une troisième fois.
              <br />
              <br />
              Toujours rien reçu.
              <br />
              Cordialement.
            </p>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="bureau__objet"
          data-objet=""
          style={poser(PLACEMENTS.facture)}
        >
          <div className="doc doc--facture">
            <span className="doc__cafe" />
            <div className="doc__entete">
              <strong>FACTURE</strong>
              <span>n° 1187</span>
            </div>
            <p className="doc__client">
              Acompte de chantier
              <br />
              Échéance dépassée&nbsp;: 45&nbsp;jours
            </p>
            <div className="doc__lignes">
              <div>
                <span>Acompte 30&nbsp;%</span>
                <span>3 240,00</span>
              </div>
              <div>
                <span>Déjà réglé</span>
                <span>0,00</span>
              </div>
            </div>
            <div className="doc__total">
              <span>Reste à payer</span>
              <strong>3 240,00&nbsp;€</strong>
            </div>
            <Tampon className="doc__tampon">Impayée</Tampon>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="bureau__objet"
          data-objet=""
          style={poser(PLACEMENTS.enveloppe)}
        >
          <div className="doc-enveloppe">
            <span className="doc-enveloppe__fenetre">
              Pièces à fournir
              <br />
              à votre expert-comptable
            </span>
            <span className="doc-enveloppe__urgent">Urgent</span>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="bureau__objet"
          data-objet=""
          style={poser(PLACEMENTS.ticketUn)}
        >
          <div className="doc-ticket">
            <strong>QUINCAILLERIE</strong>
            <span>Vis 6 × 80 ....... 18,40</span>
            <span>Liteaux x12 ...... 24,50</span>
            <span>---------------------</span>
            <b>TOTAL 42,90 EUR</b>
            <span className="doc-ticket__code" />
          </div>
        </div>

        <div
          aria-hidden="true"
          className="bureau__objet"
          data-objet=""
          style={poser(PLACEMENTS.ticketDeux)}
        >
          <div className="doc-ticket doc-ticket--court">
            <strong>STATION-SERVICE</strong>
            <span>Gazole ......... 86,15</span>
            <b>TOTAL 86,15 EUR</b>
            <span className="doc-ticket__griffe">à classer où&nbsp;?</span>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="bureau__objet"
          data-objet=""
          style={poser(PLACEMENTS.noteJaune)}
        >
          <div className="note-collee note-collee--jaune">Rappeler le comptable&nbsp;!</div>
        </div>
        <div
          aria-hidden="true"
          className="bureau__objet"
          data-objet=""
          style={poser(PLACEMENTS.noteRose)}
        >
          <div className="note-collee note-collee--rose">TVA&nbsp;???</div>
        </div>
        <div
          aria-hidden="true"
          className="bureau__objet"
          data-objet=""
          style={poser(PLACEMENTS.noteBleue)}
        >
          <div className="note-collee note-collee--bleue">URSSAF le 5</div>
        </div>

        <div className="bureau__chemise bureau__chemise--face" style={CHEMISE} aria-hidden="true">
          <span className="bureau__etiquette">
            <small>Dossier</small>
            Votre administratif
            <small>à jour, classé, suivi</small>
          </span>
          <Tampon className="bureau__tampon">Classé</Tampon>
        </div>

        <div
          aria-hidden="true"
          className="bureau__objet"
          data-objet=""
          style={poser(PLACEMENTS.agenda)}
        >
          <div className="agenda">
            <div className="agenda__jour">
              <strong>Dimanche</strong>
              <span>soir</span>
            </div>
            <div className="agenda__ligne">20&nbsp;h&nbsp;: factures</div>
            <div className="agenda__ligne">21&nbsp;h&nbsp;: relances</div>
            <div className="agenda__ligne">22&nbsp;h&nbsp;: devis Moreau</div>
            <div className="agenda__libre">En famille.</div>
          </div>
        </div>

        <div className="bureau__objet" data-objet="" style={poser(PLACEMENTS.photo)}>
          <figure className="polaroid">
            <Trombone className="polaroid__trombone" />
            <Image
              src="/images/celine/01-celine-hero-accueil-sourire.jpg"
              alt="Céline Bardan, fondatrice de CelAssistPro, assistante administrative et bras droit stratégique"
              width={1024}
              height={1024}
              priority
              draggable={false}
              sizes="(min-width: 980px) 260px, 40vw"
            />
            <figcaption>Céline Bardan</figcaption>
          </figure>
        </div>

        <div
          aria-hidden="true"
          className="bureau__objet bureau__objet--contour"
          data-objet=""
          style={poser(PLACEMENTS.tasse)}
        >
          <Tasse />
        </div>
        <div
          aria-hidden="true"
          className="bureau__objet bureau__objet--contour"
          data-objet=""
          style={poser(PLACEMENTS.stylo)}
        >
          <Stylo />
        </div>
        <div
          aria-hidden="true"
          className="bureau__objet bureau__objet--contour bureau__objet--trombone"
          data-objet=""
          style={poser(PLACEMENTS.tromboneUn)}
        >
          <Trombone />
        </div>
        <div
          aria-hidden="true"
          className="bureau__objet bureau__objet--contour bureau__objet--trombone"
          data-objet=""
          style={poser(PLACEMENTS.tromboneDeux)}
        >
          <Trombone />
        </div>
        <div
          aria-hidden="true"
          className="bureau__objet bureau__objet--contour bureau__objet--trombone"
          data-objet=""
          style={poser(PLACEMENTS.tromboneTrois)}
        >
          <Trombone />
        </div>
      </div>

      <p className="bureau__indice" aria-hidden="true">
        Attrapez une feuille, ça ne mord pas
        <FlecheMain />
      </p>
      <div className="bureau__commande">
        <p className="bureau__fini" aria-hidden="true">
          Voilà. Vous pouvez retourner à votre métier.
        </p>
        <button aria-pressed={etat === "range"} className="bureau__bouton" onClick={basculer} type="button">
          {etat === "bazar" ? "Laisser Céline ranger" : "Remettre le bazar"}
        </button>
      </div>
    </section>
  );
}
