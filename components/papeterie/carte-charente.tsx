import type { CSSProperties } from "react";
import {
  BASE_SUR_CARTE,
  COMMUNES_SUR_CARTE,
  CONTOUR_CHARENTE,
} from "@/lib/carte-charente";
import { fr } from "@/lib/typo";

/**
 * Une vraie carte du département, dépliée sur le bureau : le contour se trace, les punaises
 * tombent, et survoler une commune tire le fil depuis Champagne-Vigny.
 */
export function CarteCharente() {
  return (
    <div className="carte" data-incline="">
      <svg className="carte__dessin" viewBox="170 165 490 465" fill="none">
        <path className="carte__contour" d={CONTOUR_CHARENTE} pathLength="1" />
        {COMMUNES_SUR_CARTE.map((commune, rang) => (
          <g
            className={commune.principale ? "carte__commune carte__commune--principale" : "carte__commune"}
            key={commune.nom}
            style={{ "--i": rang } as CSSProperties}
          >
            <line
              className="carte__fil"
              pathLength="1"
              x1={BASE_SUR_CARTE.x}
              x2={commune.x}
              y1={BASE_SUR_CARTE.y}
              y2={commune.y}
            />
            {/* Zone de survol plus large que la punaise. */}
            <circle className="carte__zone" cx={commune.x} cy={commune.y} r="15" />
            <circle className="carte__punaise" cx={commune.x} cy={commune.y} r="6" />
            <text
              className="carte__nom"
              textAnchor={commune.etiquette?.ancre}
              x={commune.x + (commune.etiquette?.dx ?? 11)}
              y={commune.y + (commune.etiquette?.dy ?? 5)}
            >
              {fr(commune.court ?? commune.nom)}
              {commune.distance ? <tspan className="carte__distance"> · {fr(commune.distance)}</tspan> : null}
            </text>
          </g>
        ))}
        <g className="carte__base">
          <circle className="carte__onde" cx={BASE_SUR_CARTE.x} cy={BASE_SUR_CARTE.y} r="9" />
          <circle cx={BASE_SUR_CARTE.x} cy={BASE_SUR_CARTE.y} r="8.5" />
          <text x={BASE_SUR_CARTE.x + 14} y={BASE_SUR_CARTE.y + 6}>
            {fr(BASE_SUR_CARTE.nom)}
          </text>
        </g>
      </svg>
      <span className="carte__titre">Charente · 16</span>
      <span className="carte__consigne">Survolez une punaise</span>
    </div>
  );
}
