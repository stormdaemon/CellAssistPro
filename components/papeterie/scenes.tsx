import type { CSSProperties, ReactNode } from "react";
import Image from "next/image";
import { CarteCharente } from "@/components/papeterie/carte-charente";
import { Ephemeride } from "@/components/papeterie/ephemeride";
import { Coche, FlecheMain, MetrePliant, Stylo, Tampon, Trombone } from "@/components/papeterie/objets";
import { fr } from "@/lib/typo";

/**
 * Le coin de bureau de chaque rubrique, dans le héros des pages intérieures.
 * Décoratif (le PageHero masque tout aux lecteurs d'écran), mais tout s'attrape.
 */

type ObjetProps = {
  /** Position dans la scène, en pourcentage. */
  x: number;
  /** Position horizontale sur téléphone, pour une feuille qui sortirait de l'écran. */
  xPetit?: number;
  y: number;
  r?: number;
  z?: number;
  ordre?: number;
  children: ReactNode;
};

function Objet({ x, xPetit, y, r = 0, z = 1, ordre = 0, children }: ObjetProps) {
  return (
    <div
      className="scene__objet"
      data-attrapable=""
      style={{ "--x": x, "--x-petit": xPetit, "--y": y, "--r": `${r}deg`, "--z": z, "--ordre": ordre } as CSSProperties}
    >
      <div className="scene__pose">{children}</div>
    </div>
  );
}

function Scene({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={className ? `scene ${className}` : "scene"} data-defile="traverse">
      {children}
    </div>
  );
}

function FeuilleTapee({ titre, numero, lignes }: { titre: string; numero: string; lignes: string[] }) {
  return (
    <div className="doc">
      <div className="doc__entete">
        <strong>{fr(titre)}</strong>
        <span>{fr(numero)}</span>
      </div>
      <div className="doc__client doc__lignes">
        {lignes.map((ligne) => (
          <div key={ligne}>
            <span>{fr(ligne)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/** Assistance : la pile « à traiter », dont on tire les feuilles. */
export function ScenePile() {
  return (
    <Scene>
      <Objet x={3} y={1} r={-8} z={1} ordre={0}>
        <FeuilleTapee
          titre="DEVIS"
          numero="n° 041"
          lignes={["À envoyer", "Relance à prévoir", "Acompte à suivre"]}
        />
      </Objet>
      <Objet x={23} y={8} r={6} z={2} ordre={1}>
        <FeuilleTapee
          titre="FACTURE"
          numero="n° 117"
          lignes={["À établir", "À transmettre", "Règlement à suivre"]}
        />
      </Objet>
      <Objet x={9} y={17} r={-2} z={3} ordre={2}>
        <FeuilleTapee
          titre="PIÈCES"
          numero="du mois"
          lignes={["Achats", "Notes de frais", "Pour le comptable"]}
        />
      </Objet>
      <Objet x={5} y={56} r={-1.5} z={6} ordre={3}>
        <div className="bannette">
          <span className="bannette__etiquette">À traiter</span>
        </div>
      </Objet>
      <Objet x={63} y={0} r={7} z={7} ordre={5}>
        <div className="note-collee note-collee--rose">à déléguer</div>
      </Objet>
      <Objet x={82} y={60} r={18} z={7} ordre={6}>
        <Trombone className="scene__trombone" />
      </Objet>
    </Scene>
  );
}

/**
 * Contact : la photo trombonée et l'enveloppe qui attend sa réponse. Seule scène hors du
 * PageHero masqué, car la photo porte une information : le décor se masque ici objet par objet.
 */
export function SceneContact() {
  return (
    <Scene>
      <Objet x={38} xPetit={20} y={52} r={7} z={1} ordre={0}>
        <div aria-hidden="true" className="doc-enveloppe">
          <span className="doc-enveloppe__fenetre">
            Céline Bardan
            <br />
            Champagne-Vigny (16250)
          </span>
        </div>
      </Objet>
      <Objet x={8} y={0} r={-4} z={2} ordre={1}>
        <figure className="polaroid">
          <Trombone className="polaroid__trombone" />
          <Image
            src="/images/celine/04-celine-contact-sourire.jpg"
            alt="Céline Bardan, fondatrice de CelAssistPro"
            width={1024}
            height={1024}
            priority
            draggable={false}
            sizes="(min-width: 900px) 340px, 70vw"
          />
          <figcaption aria-hidden="true">À très vite</figcaption>
        </figure>
      </Objet>
      <Objet x={70} y={8} r={8} z={3} ordre={3}>
        <div aria-hidden="true" className="note-collee note-collee--rose">
          réponse sous 24&nbsp;h
        </div>
      </Objet>
    </Scene>
  );
}

/** Secrétariat : le carnet qui s'écrit tout seul. */
export function SceneCarnet() {
  return (
    <Scene>
      <Objet x={38} xPetit={20} y={42} r={7} z={1} ordre={0}>
        <div className="doc-enveloppe">
          <span className="doc-enveloppe__fenetre">
            CelAssistPro
            <br />
            Champagne-Vigny (16250)
          </span>
        </div>
      </Objet>
      <Objet x={5} y={2} r={-4} z={2} ordre={1}>
        <div className="carnet">
          <span className="carnet__ligne" style={{ "--n": 0 } as CSSProperties}>
            Devis à envoyer
          </span>
          <span className="carnet__ligne" style={{ "--n": 1 } as CSSProperties}>
            Relances de la semaine
          </span>
          <span className="carnet__ligne" style={{ "--n": 2 } as CSSProperties}>
            Classer les pièces
          </span>
          <span className="carnet__ligne" style={{ "--n": 3 } as CSSProperties}>
            Trier la boîte mail
          </span>
        </div>
      </Objet>
      <Objet x={2} y={80} r={-12} z={4} ordre={3}>
        <Stylo />
      </Objet>
      <Objet x={78} y={8} r={-14} z={3} ordre={4}>
        <Trombone className="scene__trombone" />
      </Objet>
    </Scene>
  );
}

/** Bras droit : trois coups de tampon, dans l'ordre. */
export function SceneTampons() {
  return (
    <Scene>
      <Objet x={6} y={3} r={-2.5} z={1} ordre={0}>
        <div className="feuille-tampons">
          <span className="feuille-tampons__titre">Ordre de marche</span>
          <span className="feuille-tampons__ligne">
            <i>1</i>
            <Tampon className="feuille-tampons__mot" style={{ "--t": "1.2s" } as CSSProperties}>
              Structurer
            </Tampon>
          </span>
          <span className="feuille-tampons__ligne">
            <i>2</i>
            <Tampon className="feuille-tampons__mot" style={{ "--t": "2.15s" } as CSSProperties}>
              Automatiser
            </Tampon>
          </span>
          <span className="feuille-tampons__ligne">
            <i>3</i>
            <Tampon className="feuille-tampons__mot" style={{ "--t": "3.1s" } as CSSProperties}>
              Piloter
            </Tampon>
          </span>
        </div>
      </Objet>
      <svg className="tampon-encreur" viewBox="0 0 120 150" fill="none">
        <path d="M46 92V66C35 57 30 47 30 35a30 30 0 0 1 60 0c0 12-5 22-16 31v26z" fill="#6c3f1d" />
        <path d="M46 92V66C35 57 30 47 30 35a30 30 0 0 1 28-30C44 16 44 58 58 92z" fill="#8b5a2b" />
        <rect x="14" y="92" width="92" height="20" rx="4" fill="#c7cad6" />
        <rect x="14" y="92" width="92" height="6" rx="3" fill="#eceef4" />
        <rect x="18" y="112" width="84" height="12" rx="2" fill="#24135c" />
      </svg>
    </Scene>
  );
}

/** Facturation : le calendrier à feuillets et la facture à mettre au format. */
export function SceneEcheance() {
  return (
    <Scene>
      <Objet x={34} y={32} r={6} z={1} ordre={0}>
        <div className="doc doc--facture">
          <div className="doc__entete">
            <strong>FACTURE</strong>
            <span>n° 2027-001</span>
          </div>
          <p className="doc__client">Format structuré&nbsp;: Factur-X, UBL ou CII</p>
          <div className="doc__lignes">
            <div>
              <span>SIREN du client</span>
              <span>✓</span>
            </div>
            <div>
              <span>Nature des opérations</span>
              <span>✓</span>
            </div>
            <div>
              <span>Plateforme agréée</span>
              <span>✓</span>
            </div>
          </div>
          <Tampon className="doc__tampon">Conforme</Tampon>
        </div>
      </Objet>
      <div className="scene__libre" style={{ "--x": 4, "--y": 1, "--r": "-4deg", "--z": 3 } as CSSProperties}>
        <Ephemeride />
      </div>
    </Scene>
  );
}

/** Charente : la carte dépliée. */
export function SceneCarte() {
  return (
    <Scene className="scene--carte">
      <div className="scene__libre" style={{ "--x": 0, "--y": 2, "--r": "1.6deg", "--z": 1 } as CSSProperties}>
        <CarteCharente />
      </div>
    </Scene>
  );
}

const CLASSEURS = [
  { mot: "Devis", chemise: "kraft", hauteur: 100 },
  { mot: "Factures", chemise: "saumon", hauteur: 94 },
  { mot: "Relances", chemise: "lilas", hauteur: 100 },
  { mot: "Pièces", chemise: "ciel", hauteur: 90 },
  { mot: "Suivi", chemise: "sauge", hauteur: 100 },
];

/** Offres : l'étagère de classeurs, qu'on tire un à un. */
export function SceneClasseurs() {
  return (
    <Scene className="scene--etagere">
      <div className="etagere">
        <div className="etagere__rangee">
          {CLASSEURS.map((classeur, rang) => (
            <span
              className="classeur"
              data-chemise={classeur.chemise}
              key={classeur.mot}
              style={{ "--h": `${classeur.hauteur}%`, "--ordre": rang } as CSSProperties}
            >
              <span className="classeur__etiquette">{fr(classeur.mot)}</span>
              <span className="classeur__trou" />
            </span>
          ))}
          <span className="classeur classeur--penche" data-chemise="rose" style={{ "--h": "88%", "--ordre": 5 } as CSSProperties}>
            <span className="classeur__etiquette">Pilotage</span>
            <span className="classeur__trou" />
          </span>
        </div>
        <span className="etagere__planche" />
      </div>
    </Scene>
  );
}

/** Bâtiment : le plan, le crayon de charpentier et le mètre pliant, déplié d'un geste. */
export function SceneChantier() {
  return (
    <>
      <Scene>
        <Objet x={4} y={1} r={-3} z={1} ordre={0}>
          <div className="plan">
            <svg viewBox="0 0 360 240" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M50 190V98l130-68 130 68v92z" />
              <path d="M34 106 180 30l146 76" strokeWidth="2.4" />
              <rect x="82" y="124" width="56" height="44" />
              <path d="M110 124v44M82 146h56" strokeWidth="1" />
              <path d="M170 190v-68h44v68" />
              <rect x="240" y="124" width="46" height="44" />
              <path d="M263 124v44M240 146h46" strokeWidth="1" />
              <path d="M50 212h260M50 206v12M310 206v12" strokeWidth="1" />
              <path d="M330 98v92M324 98h12M324 190h12" strokeWidth="1" />
              <path d="M20 190h320" strokeDasharray="6 5" strokeWidth="1" />
            </svg>
            <span>Prise de cotes</span>
          </div>
        </Objet>
        <Objet x={46} xPetit={32} y={44} r={5} z={2} ordre={1}>
          <FeuilleTapee
            titre="DEVIS"
            numero="sous 24 h"
            lignes={["Cotes reçues du chantier", "Acompte à suivre", "Relance programmée"]}
          />
        </Objet>
        <Objet x={0} xPetit={-10} y={70} r={-14} z={3} ordre={3}>
          <svg className="crayon" viewBox="0 0 320 34" fill="none">
            <path d="M268 3 316 17 268 31Z" fill="#e6c79c" />
            <path d="M302 13 316 17 302 21Z" fill="#2c2a38" />
            <rect x="4" y="3" width="264" height="28" rx="2" fill="#d9382a" />
            <rect x="4" y="3" width="264" height="8" rx="2" fill="#ef6a5c" />
            <rect x="4" y="24" width="264" height="7" rx="2" fill="#a82218" />
          </svg>
        </Objet>
        <Objet x={72} y={0} r={8} z={4} ordre={4}>
          <div className="note-collee note-collee--bleue">Plus rien dans la boîte à gants</div>
        </Objet>
      </Scene>
      <MetrePliant className="metre--heros" />
    </>
  );
}

const DOSSIERS = [
  { numero: "Dossier 1", tampon: "Réglé", chemise: "kraft" },
  { numero: "Dossier 2", tampon: "À jour", chemise: "or" },
  { numero: "Dossier 3", tampon: "Classé", chemise: "ciel" },
];

/** Cas concrets : trois dossiers refermés, chacun avec son coup de tampon. */
export function SceneDossiers() {
  return (
    <Scene>
      {DOSSIERS.map((dossier, rang) => (
        <Objet key={dossier.numero} x={2 + rang * 13} y={4 + rang * 21} r={-6 + rang * 5} z={rang + 1} ordre={rang}>
          <div className="dossier" data-chemise={dossier.chemise}>
            <span className="dossier__onglet">{fr(dossier.numero)}</span>
            <Tampon className="dossier__tampon" style={{ "--t": `${1 + rang * 0.45}s` } as CSSProperties}>
              {fr(dossier.tampon)}
            </Tampon>
          </div>
        </Objet>
      ))}
    </Scene>
  );
}

/** Blog : le tiroir du fichier, une fiche par rubrique. */
export function SceneTiroir({ rubriques }: { rubriques: string[] }) {
  return (
    <Scene className="scene--tiroir">
      <div className="tiroir">
        <div className="tiroir__fiches">
          {rubriques.map((rubrique, rang) => (
            <span className="tiroir__fiche" key={rubrique} style={{ "--i": rang } as CSSProperties}>
              <span className="tiroir__onglet">{fr(rubrique)}</span>
            </span>
          ))}
        </div>
        <div className="tiroir__facade">
          <span className="porte-etiquette">Articles</span>
          <span className="tiroir__poignee" />
        </div>
      </div>
    </Scene>
  );
}

const CASES = [
  "Devis partis à temps",
  "Relances faites",
  "Pièces transmises",
  "Échéances anticipées",
];

/** Diagnostic : le formulaire qui se coche et le minuteur de cuisine. */
export function SceneFormulaire() {
  return (
    <Scene>
      <Objet x={6} y={2} r={-3} z={1} ordre={0}>
        <div className="formulaire">
          <span className="formulaire__titre">Mon temps perdu</span>
          <span className="formulaire__sous-titre">10&nbsp;questions, 5&nbsp;minutes</span>
          {CASES.map((libelle, rang) => (
            <span className="formulaire__ligne" key={libelle} style={{ "--n": rang } as CSSProperties}>
              <span className="case-a-cocher">
                <Coche />
              </span>
              {fr(libelle)}
            </span>
          ))}
        </div>
      </Objet>
      <Objet x={64} y={54} r={6} z={2} ordre={2}>
        <div className="minuteur">
          <span className="minuteur__aiguille" />
          <span className="minuteur__duree">5&nbsp;min</span>
        </div>
      </Objet>
      <Objet x={8} y={84} r={-8} z={3} ordre={3}>
        <Stylo />
      </Objet>
    </Scene>
  );
}

/** Pages légales : tout est en ordre, et tamponné. */
export function SceneClasse() {
  return (
    <Scene className="scene--courte">
      <Objet x={22} y={8} r={3} z={1} ordre={0}>
        <FeuilleTapee titre="DOSSIER" numero="n° 16" lignes={["Éditrice", "Hébergeur", "Données personnelles"]} />
      </Objet>
      <div className="scene__libre" style={{ "--x": 30, "--y": 46, "--r": "0deg", "--z": 3 } as CSSProperties}>
        <Tampon className="scene__grand-tampon" style={{ "--t": "0.7s", "--r": "-10deg" } as CSSProperties}>
          Classé
        </Tampon>
      </div>
    </Scene>
  );
}

/** Page introuvable : le document mal classé, et sa flèche rouge. */
export function ScenePerdu() {
  return (
    <Scene>
      <Objet x={8} y={18} r={-13} z={1} ordre={0}>
        <div className="dossier" data-chemise="gris">
          <span className="dossier__onglet">Erreur 404</span>
        </div>
      </Objet>
      <Objet x={32} y={0} r={11} z={2} ordre={1}>
        <FeuilleTapee titre="PAGE" numero="introuvable" lignes={["Déplacée ?", "Regroupée ?", "On la retrouve"]} />
      </Objet>
      <div className="scene__libre" style={{ "--x": 18, "--y": 62, "--r": "0deg", "--z": 3 } as CSSProperties}>
        <Tampon className="scene__grand-tampon scene__grand-tampon--long" style={{ "--t": "1s", "--r": "-8deg" } as CSSProperties}>
          Mal classé
        </Tampon>
        <FlecheMain className="scene__fleche" />
      </div>
    </Scene>
  );
}
