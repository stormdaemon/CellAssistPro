/**
 * Netlify appelle cette fonction à chaque déploiement réussi (le nom du fichier suffit à l'abonner).
 * En production, elle transmet les adresses du sitemap à IndexNow : Bing, et ChatGPT qui s'appuie sur
 * son index, Yandex, Seznam et Naver relisent les pages sans attendre leur prochain passage.
 * La clé est servie à la racine du site : public/aa6420dcdbbb649be68a2ed0a59d79a6.txt.
 */

const SITE = "https://celassistpro.fr";
const CLE = "aa6420dcdbbb649be68a2ed0a59d79a6";

export default async (requete: Request) => {
  const { payload } = (await requete.json().catch(() => ({}))) as { payload?: { context?: string } };

  // Les aperçus de branche et de demande de fusion ne sont pas le site public.
  if (payload?.context !== "production") {
    return new Response("Pas un déploiement de production : rien à signaler.");
  }

  const sitemap = await fetch(`${SITE}/sitemap.xml`).then((reponse) => reponse.text());
  const adresses = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((trouvaille) => trouvaille[1]);

  if (adresses.length === 0) {
    return new Response("Sitemap vide ou illisible : rien envoyé.", { status: 500 });
  }

  const envoi = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({
      host: new URL(SITE).host,
      key: CLE,
      keyLocation: `${SITE}/${CLE}.txt`,
      urlList: adresses,
    }),
  });

  const bilan = `IndexNow : ${adresses.length} adresses, réponse ${envoi.status}.`;
  console.log(bilan);

  return new Response(bilan, { status: envoi.ok ? 200 : 502 });
};
