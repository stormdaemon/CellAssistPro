# CelAssistPro — Site vitrine

Site de CelAssistPro (Céline Bardan, assistante administrative indépendante en Charente), développé avec Next.js 16, TypeScript et Bun. Déployé sur Netlify.

## Stack

- **Next.js 16** (App Router, React Compiler, Turbopack)
- **TypeScript** strict
- **CSS artisanal en BEM** dans `app/globals.css` (Tailwind v4 est importé pour le reset uniquement)
- **Bun** comme runtime et gestionnaire de paquets
- **Netlify** : hébergement, en-têtes de sécurité (`netlify.toml`) et formulaire de contact (Netlify Forms)

## Structure

```
app/                       # Pages (App Router)
│   ├── blog/[slug]/       # Rendu des articles
│   ├── sitemap.ts         # Sitemap (dates réelles par article)
│   ├── robots.ts
│   └── llms.txt/          # Route llms.txt
components/site/           # Header, footer, formulaire, quiz, etc.
lib/
│   ├── blog/
│   │   ├── types.ts       # Type BlogArticle + temps de lecture + dates
│   │   ├── articles/      # Un fichier .ts par article (70)
│   │   └── index.ts       # Agrégation + catégories (imports générés)
│   ├── site-data.ts       # Contenu du site (offres, FAQ, témoignages…)
│   ├── metadata.ts        # Metadata par page
│   └── structured-data.ts # JSON-LD
public/
│   ├── __forms.html       # Déclaration statique Netlify Forms
│   └── images/            # Photos, logos, image OG (1200×630)
```

## Développement

```bash
bun install        # dépendances
bun run dev        # serveur de dev (http://localhost:3000)
bun run build      # build de production
bun run type-check # tsc --noEmit
bun run lint       # eslint
```

## Blog

Chaque article vit dans `lib/blog/articles/<slug>.ts` et exporte un objet `BlogArticle` :
sections à structure libre (`paragraphs`, `list`, `steps`), FAQ optionnelle, dates réelles
(`datePublished`, `dateModified` — à mettre à jour à chaque modification de fond).
Le temps de lecture est calculé automatiquement. Pour ajouter un article : créer le fichier,
puis l'importer dans `lib/blog/index.ts`.

Règles éditoriales : français irréprochable, pas d'anglicismes, pas de statistiques inventées,
jamais de référence au handicap en métaphore, structures de sections variées d'un article à l'autre.

## Formulaire de contact

Le formulaire (`components/site/contact-form.tsx`) poste en fetch vers `/__forms.html`,
intercepté par Netlify Forms (déclaration statique dans `public/__forms.html`).
Les soumissions arrivent dans l'onglet **Forms** du dashboard Netlify — y configurer
la notification email vers la boîte de Céline. Si un champ est ajouté au formulaire React,
il faut aussi l'ajouter dans `public/__forms.html`.

## Variables d'environnement (optionnelles)

- `NEXT_PUBLIC_CONTACT_EMAIL` — email de contact (défaut : contact@celassistpro.fr)
- `NEXT_PUBLIC_GOOGLE_BUSINESS_URL` — URL de la fiche Google Business
- `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` — active Plausible Analytics (ex. `celassistpro.fr`) ;
  nécessite un compte Plausible, la CSP autorise déjà `plausible.io`

## Sécurité

Les en-têtes (CSP, HSTS, etc.) sont définis une seule fois dans `netlify.toml` et
s'appliquent au niveau du CDN. Si un service tiers est ajouté (script, iframe),
mettre à jour la CSP en conséquence.

© 2026 CelAssistPro. Tous droits réservés.
