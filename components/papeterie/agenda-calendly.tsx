"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { Tampon } from "@/components/papeterie/objets";
import { CTA, SITE } from "@/lib/site-data";

const ORIGINE_CALENDLY = "https://calendly.com";

/**
 * Surtout pas de hide_gdpr_banner : sans son bandeau, Calendly charge Facebook, Google Analytics
 * et Segment sans attendre le consentement du visiteur. Le bandeau reste (voir --bandeau dans le CSS).
 */
const AGENDA = `${SITE.calendlyUrl}?embed_domain=${new URL(SITE.baseUrl).host}&embed_type=Inline&hide_event_type_details=1`;

/** Si Calendly ne donne pas sa hauteur, le cadre s'affiche quand même et le bouton habituel prend le relais. */
const PATIENCE_MS = 6000;

/** Pendant son chargement, Calendly annonce 2 ou 26 pixels : la page du carnet n'a pas à se replier pour ça. */
const HAUTEUR_MINIMALE = 300;

/** L'agenda Calendly, imprimé sur la page du carnet : la page grandit avec lui, le tampon tombe au rendez-vous pris. */
export function AgendaCalendly() {
  const cadre = useRef<HTMLIFrameElement>(null);
  const [ouvert, setOuvert] = useState(false);
  const [hauteur, setHauteur] = useState<number>();
  const [reserve, setReserve] = useState(false);

  useEffect(() => {
    function ecouter(event: MessageEvent) {
      if (event.origin !== ORIGINE_CALENDLY || event.source !== cadre.current?.contentWindow) {
        return;
      }

      if (event.data?.event === "calendly.page_height") {
        const mesure = Number.parseInt(event.data.payload?.height, 10);

        if (mesure >= HAUTEUR_MINIMALE) {
          setHauteur(mesure);
          setOuvert(true);
        }
      }

      if (event.data?.event === "calendly.event_scheduled") {
        setReserve(true);
      }

      // L'étape suivante repart du haut du cadre : on y remonte s'il a filé sous l'en-tête pendant qu'on parcourait les heures.
      if (event.data?.event === "calendly.date_and_time_selected" || event.data?.event === "calendly.event_scheduled") {
        const entete = Number.parseInt(getComputedStyle(document.documentElement).getPropertyValue("--header-h"), 10);

        if ((cadre.current?.getBoundingClientRect().top ?? 0) < entete) {
          cadre.current?.scrollIntoView({ block: "start" });
        }
      }
    }

    window.addEventListener("message", ecouter);

    // L'adresse n'arrive qu'ici : le premier message de Calendly ne peut pas tomber avant l'écoute.
    if (cadre.current) {
      cadre.current.src = AGENDA;
    }

    return () => window.removeEventListener("message", ecouter);
  }, []);

  function charge() {
    if (cadre.current?.src) {
      setTimeout(() => setOuvert(true), PATIENCE_MS);
    }
  }

  return (
    <div
      className="agenda-calendly"
      data-ouvert={ouvert ? "" : undefined}
      style={hauteur ? ({ "--hauteur": `${hauteur}px` } as CSSProperties) : undefined}
    >
      <p aria-hidden="true" className="agenda-calendly__attente">
        J’ouvre mon agenda…
      </p>
      <p aria-hidden="true" className="agenda-calendly__signature">
        À très vite, Céline
      </p>
      <iframe loading="lazy" onLoad={charge} ref={cadre} title="Agenda Calendly CelAssistPro" />
      {ouvert && !hauteur ? (
        <p className="agenda-calendly__secours">
          <a className="button button--gold" href={SITE.calendlyUrl}>
            {CTA.primary}
          </a>
        </p>
      ) : null}
      {reserve ? <Tampon className="agenda-calendly__tampon">Noté</Tampon> : null}
    </div>
  );
}
