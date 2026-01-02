# CelAssistPro - Landing Page

Site vitrine moderne développé avec Next.js 16.1, TypeScript, Tailwind CSS v4 et Bun.

## 🚀 Stack Technique

- **Next.js 16.1** - Framework React avec App Router
- **TypeScript** - Typage strict pour la sécurité du code
- **Tailwind CSS v4** - Framework CSS utility-first
- **Bun 1.3.5** - Runtime JavaScript ultra-rapide
- **Méthodologie BEM** - Architecture CSS maintenables

## 📁 Structure du Projet

```
celassistpro/
├── app/                    # App Router Next.js
│   ├── globals.css        # Styles globaux + BEM
│   ├── layout.tsx         # Layout racine
│   └── page.tsx           # Page d'accueil
├── components/
│   ├── sections/          # Sections de la page (BEM)
│   │   ├── hero-section.tsx
│   │   ├── sector-selector.tsx
│   │   ├── oneshots-section.tsx
│   │   ├── subscriptions-section.tsx
│   │   ├── faq-section.tsx
│   │   └── footer-section.tsx
│   └── ui/                # Composants UI réutilisables
│       └── modal.tsx
├── lib/
│   ├── data/              # Données constantes
│   │   └── offers.ts
│   └── types/             # Types TypeScript
│       └── offers.ts
└── public/                # Assets statiques
```

## 🛠️ Installation & Développement

### Prérequis

- Node.js 20+
- Bun 1.3.5+

### Installation des dépendances

```bash
bun install
```

### Démarrer le serveur de développement

```bash
bun run dev
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

### Build de production

```bash
bun run build
```

### Vérification des types TypeScript

```bash
bun run type-check
```

### Linter

```bash
bun run lint
```

## 🎨 Méthodologie BEM

Le projet suit strictement la méthodologie BEM (Block Element Modifier) pour une architecture CSS maintenable :

```css
.block { }                   /* Block */
.block__element { }          /* Element */
.block--modifier { }         /* Modifier */
.block__element--modifier { } /* Element + Modifier */
```

Exemples dans le projet :
- `.hero__title` — Titre de la section hero
- `.faq__question` — Question dans la FAQ
- `.sector-selector__button--active` — Bouton actif du sélecteur

## 🚢 Déploiement

### Netlify

Le projet est configuré pour le déploiement sur Netlify via `netlify.toml` :

1. Connectez le repository Git à Netlify
2. Les builds sont automatiques
3. La configuration utilise Bun 1.3.5

### Variables d'environnement

Aucune variable d'environnement requise pour ce projet statique.

## ✅ Bonnes Pratiques Appliquées

- **Server Components par défaut** — Meilleures performances
- **Typage TypeScript strict** — Zéro erreur de type
- **Architecture BEM** — CSS maintenable et scalables
- **Accessibilité** — ARIA labels, navigation clavier
- **Performance** — Images optimisées, code-splitting
- **SEO** — Metadata API, balises sémantiques

## 📝 Scripts Disponibles

- `bun run dev` — Démarre le serveur de développement
- `bun run build` — Crée un build de production
- `bun run start` — Lance le serveur de production
- `bun run lint` — Exécute ESLint
- `bun run type-check` — Vérifie les types TypeScript

## 📄 Licence

© 2025 CelAssistPro. Tous droits réservés.
