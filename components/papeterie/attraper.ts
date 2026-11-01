/**
 * La physique du papier : saisir un objet, le promener, le lâcher avec son élan.
 * Tout passe par trois variables CSS (--dx, --dy, --dr) sur l'objet, pour ne jamais
 * passer par React pendant le geste.
 */

const FROTTEMENT = 0.93;
const VITESSE_MINIMALE = 0.25;

let plusHaut = 60;
const glissements = new Map<HTMLElement, number>();

export function arreterGlissement(objet: HTMLElement) {
  const glissement = glissements.get(objet);

  if (glissement !== undefined) {
    cancelAnimationFrame(glissement);
    glissements.delete(objet);
  }
}

function borner(valeur: number, min: number, max: number) {
  return Math.min(max, Math.max(min, valeur));
}

/** Au doigt, le geste fait défiler la page : on ne le détourne pas. */
export function saisir(event: PointerEvent, objet: HTMLElement, cadre: HTMLElement) {
  if (event.pointerType === "touch" || event.button !== 0) {
    return false;
  }

  event.preventDefault();
  arreterGlissement(objet);

  const lire = (nom: string) => Number.parseFloat(objet.style.getPropertyValue(nom)) || 0;
  const baseX = lire("--dx");
  const baseY = lire("--dy");
  const baseR = lire("--dr");
  const departX = event.clientX;
  const departY = event.clientY;

  const limites = cadre.getBoundingClientRect();
  const boite = objet.getBoundingClientRect();
  const centreX = boite.left + boite.width / 2;
  const centreY = boite.top + boite.height / 2;
  const minX = baseX - (centreX - limites.left);
  const maxX = baseX + (limites.right - centreX);
  const minY = baseY - (centreY - limites.top);
  const maxY = baseY + (limites.bottom - centreY);

  let x = baseX;
  let y = baseY;
  let r = baseR;
  let vitesseX = 0;
  let vitesseY = 0;
  let precedentX = event.clientX;
  let precedentY = event.clientY;

  const appliquer = () => {
    objet.style.setProperty("--dx", `${x}px`);
    objet.style.setProperty("--dy", `${y}px`);
    objet.style.setProperty("--dr", `${r}deg`);
  };

  plusHaut += 1;
  objet.style.zIndex = String(plusHaut);
  objet.classList.remove("is-libre");
  objet.classList.add("is-saisi");
  objet.setPointerCapture(event.pointerId);

  const bouger = (mouvement: PointerEvent) => {
    x = borner(baseX + mouvement.clientX - departX, minX, maxX);
    y = borner(baseY + mouvement.clientY - departY, minY, maxY);
    vitesseX = vitesseX * 0.6 + (mouvement.clientX - precedentX) * 0.4;
    vitesseY = vitesseY * 0.6 + (mouvement.clientY - precedentY) * 0.4;
    // La feuille penche du côté où on la tire, comme une vraie.
    r = r * 0.9 + (baseR + borner(vitesseX * 0.8, -12, 12)) * 0.1;
    precedentX = mouvement.clientX;
    precedentY = mouvement.clientY;
    appliquer();
  };

  const lacher = () => {
    objet.removeEventListener("pointermove", bouger);
    objet.removeEventListener("pointerup", lacher);
    objet.removeEventListener("pointercancel", lacher);
    objet.classList.remove("is-saisi");
    objet.classList.add("is-libre");

    const glisser = () => {
      vitesseX *= FROTTEMENT;
      vitesseY *= FROTTEMENT;
      x = borner(x + vitesseX, minX, maxX);
      y = borner(y + vitesseY, minY, maxY);
      r += vitesseX * 0.05;
      appliquer();

      if (Math.abs(vitesseX) + Math.abs(vitesseY) > VITESSE_MINIMALE) {
        glissements.set(objet, requestAnimationFrame(glisser));
      } else {
        glissements.delete(objet);
        objet.classList.remove("is-libre");
      }
    };

    glissements.set(objet, requestAnimationFrame(glisser));
  };

  objet.addEventListener("pointermove", bouger);
  objet.addEventListener("pointerup", lacher);
  objet.addEventListener("pointercancel", lacher);

  return true;
}

/** Remet un objet à sa place : son décalage disparaît, la transition CSS fait le reste. */
export function reposer(objet: HTMLElement) {
  arreterGlissement(objet);
  objet.classList.remove("is-saisi", "is-libre");
  objet.style.removeProperty("--dx");
  objet.style.removeProperty("--dy");
  objet.style.removeProperty("--dr");
  objet.style.removeProperty("z-index");
}
