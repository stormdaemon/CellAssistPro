"use client";

import { useState } from "react";
import { Coche, Tampon } from "@/components/papeterie/objets";
import { fr } from "@/lib/typo";

type ListeACocherProps = {
  items: string[];
  /** Le mot du tampon, une fois toutes les cases cochées. */
  tampon: string;
};

/** Une vraie liste de travail : le visiteur coche, le tampon tombe à la dernière case. */
export function ListeACocher({ items, tampon }: ListeACocherProps) {
  const [cochees, setCochees] = useState<string[]>([]);
  const finie = cochees.length === items.length;

  function basculer(item: string) {
    setCochees((courantes) =>
      courantes.includes(item) ? courantes.filter((autre) => autre !== item) : [...courantes, item],
    );
  }

  return (
    <div className={finie ? "liste-a-cocher liste-a-cocher--finie" : "liste-a-cocher"}>
      <ul className="task-list task-list--a-cocher">
        {items.map((item) => (
          <li key={item}>
            <label>
              <input
                checked={cochees.includes(item)}
                onChange={() => basculer(item)}
                type="checkbox"
              />
              <span aria-hidden="true" className="case-a-cocher">
                <Coche />
              </span>
              <span>{fr(item)}</span>
            </label>
          </li>
        ))}
      </ul>
      <p className="liste-a-cocher__compte" role="status">
        {cochees.length} sur {items.length}
      </p>
      <Tampon className="liste-a-cocher__tampon">{fr(tampon)}</Tampon>
    </div>
  );
}
