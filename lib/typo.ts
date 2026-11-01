/**
 * Typographie française pour les textes affichés : apostrophes courbes et espaces insécables
 * devant la ponctuation haute et après un nombre, pour qu'un « ? », une unité ou la fin
 * d'un numéro ne parte jamais seul à la ligne.
 */
export function fr(texte: string) {
  return texte
    .replace(/'/g, "’")
    .replace(/ ([?!:;»])/g, " $1")
    .replace(/« /g, "« ")
    .replace(/(\d) (?=[\da-zà-ÿ%€])/g, "$1 ");
}
