import type { CSSProperties, ReactNode } from "react";
import { fr } from "@/lib/typo";

/**
 * Petits objets de bureau : décoratifs, ils ne portent jamais d'information
 * que le texte de la page ne donne pas déjà (aria-hidden partout).
 */

type ObjetProps = {
  className?: string;
  style?: CSSProperties;
};

const classes = (base: string, extra?: string) => (extra ? `${base} ${extra}` : base);

export function Trombone({ className, style }: ObjetProps) {
  return (
    <svg
      aria-hidden="true"
      className={classes("trombone", className)}
      style={style}
      viewBox="0 0 26 70"
      fill="none"
    >
      <path
        d="M20 18V50a7 7 0 0 1-14 0V12a9 9 0 0 1 18 0V56a11 11 0 0 1-22 0V24"
        stroke="#8d92a3"
        strokeWidth="2.1"
        strokeLinecap="round"
      />
      <path
        d="M20 18V50a7 7 0 0 1-14 0V12a9 9 0 0 1 18 0V56a11 11 0 0 1-22 0V24"
        stroke="#e4e7ee"
        strokeWidth="0.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Stylo({ className, style }: ObjetProps) {
  return (
    <svg
      aria-hidden="true"
      className={classes("stylo", className)}
      style={style}
      viewBox="0 0 320 22"
      fill="none"
    >
      <path d="M296 7.5 318 11 296 14.5Z" fill="#d7d3e4" />
      <path d="M313 10.2 318 11 313 11.8Z" fill="#24135c" />
      <rect x="4" y="4" width="292" height="14" rx="4" fill="#4b27c4" />
      <rect x="4" y="5.5" width="292" height="3.4" rx="1.7" fill="#7f62e6" />
      <rect x="4" y="4" width="62" height="14" rx="4" fill="#24135c" />
      <rect x="20" y="1" width="58" height="4" rx="2" fill="#b9bdca" />
      <rect x="20" y="1.6" width="58" height="1.2" rx="0.6" fill="#f1f2f6" />
    </svg>
  );
}

export function Tasse({ className, style }: ObjetProps) {
  return (
    <svg
      aria-hidden="true"
      className={classes("tasse", className)}
      style={style}
      viewBox="0 0 160 124"
      fill="none"
    >
      <rect x="104" y="48" width="52" height="28" rx="14" fill="#fff" stroke="#d9d5e5" />
      <rect x="116" y="56" width="26" height="12" rx="6" fill="#c6b8f8" />
      <circle cx="62" cy="62" r="58" fill="#fff" stroke="#e3dff0" />
      <circle cx="62" cy="62" r="49" fill="#3b2213" />
      <circle cx="62" cy="62" r="49" fill="url(#cafe)" />
      <path
        d="M30 44c8-14 26-22 42-18"
        stroke="#fff"
        strokeOpacity="0.28"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <defs>
        <radialGradient id="cafe" cx="0.42" cy="0.38" r="0.7">
          <stop offset="0" stopColor="#6b4226" />
          <stop offset="1" stopColor="#2a160b" />
        </radialGradient>
      </defs>
    </svg>
  );
}

const SEGMENTS_DU_METRE = 8;

function SegmentDuMetre({ rang }: { rang: number }) {
  return (
    <span className="metre__segment" style={{ "--sens": rang % 2 === 0 ? 1 : -1 } as CSSProperties}>
      <span className="metre__graduations" />
      <span className="metre__nombre">{(rang + 1) * 20}</span>
      {rang + 1 < SEGMENTS_DU_METRE ? <SegmentDuMetre rang={rang + 1} /> : null}
    </span>
  );
}

/**
 * Mètre pliant de chantier, le clin d'œil de l'expertise bâtiment : chaque branche est
 * accrochée à la précédente, et --p (le défilement) le déplie d'un seul geste.
 */
export function MetrePliant({ className, style }: ObjetProps) {
  return (
    <div
      aria-hidden="true"
      className={classes("metre", className)}
      data-defile="traverse"
      style={style}
    >
      <SegmentDuMetre rang={0} />
    </div>
  );
}

/** Crochet tracé à la main, repris pour les cases cochées. */
export function Coche({ className, style }: ObjetProps) {
  return (
    <svg
      aria-hidden="true"
      className={classes("coche", className)}
      style={style}
      viewBox="0 0 32 28"
      fill="none"
    >
      <path
        d="M3 15.5c2.6 2.2 5 5 6.8 8.5C13 15.8 19.2 7.8 29 2.6"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        pathLength="1"
      />
    </svg>
  );
}

/** Flèche griffonnée, pour relier une annotation à ce qu'elle désigne. */
export function FlecheMain({ className, style }: ObjetProps) {
  return (
    <svg
      aria-hidden="true"
      className={classes("fleche-main", className)}
      style={style}
      viewBox="0 0 90 46"
      fill="none"
    >
      <path
        d="M3 30c18-22 44-26 80-12M70 5c5 5 9 9 14 13-6 3-11 8-16 13"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type TamponProps = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
};

/** Empreinte de tampon encreur (voir le filtre #encre-tampon dans le layout). */
export function Tampon({ children, className, style }: TamponProps) {
  return (
    <span aria-hidden="true" className={classes("tampon", className)} style={style}>
      {children}
    </span>
  );
}

type MotsProps = {
  children: string;
};

/** Découpe un titre en mots pour les faire arriver l'un après l'autre (voir .mot dans le CSS). */
export function Mots({ children }: MotsProps) {
  return (
    <>
      {fr(children)
        .split(" ")
        .map((mot, index) => (
        <span key={`${mot}-${index}`}>
          {index > 0 ? " " : null}
          <span className="mot" style={{ "--i": index } as CSSProperties}>
            {fr(mot)}
          </span>
        </span>
      ))}
    </>
  );
}

type SurligneProps = {
  children: ReactNode;
};

/** Coup de surligneur, tiré quand le passage arrive à l'écran. */
export function Surligne({ children }: SurligneProps) {
  return (
    <mark className="surligne" data-vu="">
      {children}
    </mark>
  );
}

/** Coup de stylo rouge sous un mot, tracé à l'arrivée. */
export function TraitRouge({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={classes("trait-rouge", className)}
      data-vu=""
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 300 16"
    >
      <path
        d="M3 10C60 4 118 3 176 5c44 1 84 3 121 2-40 3-92 3-136 7"
        pathLength="1"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="3.4"
      />
    </svg>
  );
}
