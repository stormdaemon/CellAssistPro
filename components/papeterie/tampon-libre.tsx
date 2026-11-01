"use client";

import { useRef, useState, type CSSProperties, type MouseEvent, type ReactNode } from "react";
import { fr } from "@/lib/typo";

const MOTS = ["Classé", "À jour", "Payé", "Relancé", "Envoyé", "Fait"];
const EMPREINTES_MAXIMALES = 14;

type Empreinte = {
  id: number;
  mot: string;
  x: number;
  y: number;
  rotation: number;
};

type TamponLibreProps = {
  children: ReactNode;
  className?: string;
  chemise?: string;
};

/** Une section où chaque clic donne un coup de tampon : le plaisir de voir les choses faites. */
export function TamponLibre({ children, className, chemise }: TamponLibreProps) {
  const [empreintes, setEmpreintes] = useState<Empreinte[]>([]);
  const compteur = useRef(0);

  function tamponner(event: MouseEvent<HTMLElement>) {
    if ((event.target as Element).closest("a, button")) {
      return;
    }

    const boite = event.currentTarget.getBoundingClientRect();
    const rang = compteur.current;

    compteur.current += 1;
    setEmpreintes((courantes) =>
      [
        ...courantes,
        {
          id: rang,
          mot: MOTS[rang % MOTS.length],
          x: event.clientX - boite.left,
          y: event.clientY - boite.top,
          rotation: (rang * 37) % 22 - 11,
        },
      ].slice(-EMPREINTES_MAXIMALES),
    );
  }

  return (
    <section className={className} data-chemise={chemise} data-vu="" onClick={tamponner}>
      {children}
      {empreintes.map((empreinte) => (
        <span
          aria-hidden="true"
          className="tampon tampon--libre"
          key={empreinte.id}
          style={
            {
              left: empreinte.x,
              top: empreinte.y,
              "--r": `${empreinte.rotation}deg`,
            } as CSSProperties
          }
        >
          {fr(empreinte.mot)}
        </span>
      ))}
    </section>
  );
}
