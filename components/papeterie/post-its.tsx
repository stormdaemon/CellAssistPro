"use client";

import { useState, type CSSProperties } from "react";
import { fr } from "@/lib/typo";

type PostItsProps = {
  textes: string[];
};

/**
 * Les problèmes du visiteur, collés sur son bureau : un clic et le post-it s'arrache,
 * ce qu'il y a dessous dit la suite. Un second clic le recolle.
 */
export function PostIts({ textes }: PostItsProps) {
  const [arraches, setArraches] = useState<number[]>([]);
  const toutEstArrache = arraches.length === textes.length;

  function basculer(rang: number) {
    setArraches((courants) =>
      courants.includes(rang) ? courants.filter((r) => r !== rang) : [...courants, rang],
    );
  }

  return (
    <>
      <ul className="post-its" data-vu="">
        {textes.map((texte, rang) => {
          const arrache = arraches.includes(rang);

          return (
            <li
              className={arrache ? "post-it post-it--arrache" : "post-it"}
              key={texte}
              onClick={() => basculer(rang)}
              style={{ "--i": rang } as CSSProperties}
            >
              <span aria-hidden="true" className="post-it__dessous">
                Ça, je m&rsquo;en occupe.
              </span>
              <button
                aria-pressed={arrache}
                className="post-it__feuille"
                type="button"
              >
                {fr(texte)}
              </button>
            </li>
          );
        })}
      </ul>
      <p aria-hidden="true" className="post-its__consigne" data-fini={toutEstArrache || undefined}>
        {toutEstArrache
          ? "Bureau dégagé. C’est exactement ça, déléguer."
          : "Arrachez ceux qui vous parlent."}
      </p>
    </>
  );
}
