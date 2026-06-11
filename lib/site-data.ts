export const SITE = {
  name: "CelAssistPro",
  tagline: "Votre bras droit stratégique",
  founder: "Céline Bardan",
  siren: "999 130 982",
  legalAddress: "3 Les Vignes de Chez Rullier, 16250 Champagne-Vigny",
  baseUrl: "https://celassistpro.fr",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "contact@celassistpro.fr",
  calendlyUrl: "https://calendly.com/celassistpro/15min",
  quizFormUrl: process.env.NEXT_PUBLIC_QUIZ_FORM_URL ?? "/ressources#auto-diagnostic",
  contactFormUrl:
    process.env.NEXT_PUBLIC_CONTACT_FORM_URL ??
    "mailto:contact@celassistpro.fr?subject=Demande%20depuis%20le%20site%20CelAssistPro",
  googleBusinessUrl:
    process.env.NEXT_PUBLIC_GOOGLE_BUSINESS_URL ??
    "https://www.google.com/search?q=CelAssistPro",
  socials: {
    linkedin: "https://www.linkedin.com/in/c%C3%A9line-bardan-39897515b/",
    facebook: "https://www.facebook.com/people/CelassistPro/61585664695001/",
    instagram: "https://www.instagram.com/celassistpro_?igsh=dW9paGtzM3Yza2oy",
  },
};

export const NAVIGATION = [
  { href: "/", label: "Accueil" },
  { href: "/mes-offres", label: "Mes offres" },
  { href: "/a-propos", label: "À propos" },
  { href: "/cas-concrets", label: "Cas concrets" },
  { href: "/ressources", label: "Ressources" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export const SEO = {
  home: {
    path: "/",
    title: "Assistante virtuelle Charente | CelAssistPro — Récupérez 10 h/semaine",
    description:
      "Gestion administrative, organisation et pré-comptable pour TPE et indépendants. IA & automatisation. Sur place en Charente, à distance partout en France.",
  },
  offers: {
    path: "/mes-offres",
    title: "Gestion administrative TPE Angoulême & Charente — Offres CelAssistPro",
    description:
      "Structuration, restructuration et automatisation du workflow métier : des offres souples pour libérer les dirigeants de TPE. Devis gratuit sous 48 h.",
  },
  about: {
    path: "/a-propos",
    title: "Céline Bardan — Directrice des opérations externalisée en Charente",
    description:
      "30 ans d'expertise administrative et pré-comptable, formée à l'IA et à l'automatisation. Votre bras droit stratégique, en Charente et partout en France.",
  },
  cases: {
    path: "/cas-concrets",
    title: "Automatisation IA pour PME en Charente : résultats clients CelAssistPro",
    description:
      "Devis envoyés sous 24 h, présentations divisées par 5, facturation électronique en 1 h : des cas réels d'automatisation et d'organisation en TPE.",
  },
  resources: {
    path: "/ressources",
    title: "Auto-diagnostic gratuit : combien d'heures perd votre TPE chaque semaine ?",
    description:
      "10 questions, 5 minutes : mesurez le temps que votre administratif vous vole et recevez vos 3 premières actions pour le récupérer. Gratuit.",
  },
  blog: {
    path: "/blog",
    title: "Blog gestion administrative TPE | CelAssistPro",
    description:
      "Conseils concrets pour alléger l'administratif, organiser une TPE, préparer la facturation électronique et déléguer sans recruter.",
  },
  contact: {
    path: "/contact",
    title: "Contact — Assistante administrative indépendante Charente | CelAssistPro",
    description:
      "Réservez 15 minutes gratuites ou écrivez-moi : mission ponctuelle, récurrente ou très courte, parlons de votre temps. Réponse sous 24 h ouvrées.",
  },
  legal: {
    path: "/mentions-legales",
    title: "Mentions légales | CelAssistPro",
    description: "Mentions légales du site CelAssistPro.",
  },
  privacy: {
    path: "/politique-confidentialite",
    title: "Politique de confidentialité | CelAssistPro",
    description:
      "Traitement des données personnelles, formulaires, Calendly, droits RGPD et contact CelAssistPro.",
  },
} as const;

export type SeoKey = keyof typeof SEO;

export const stats = [
  ["30 ans", "d'expertise administrative et pré-comptable"],
  ["10 h", "récupérées chaque semaine en moyenne"],
  ["25", "assistants IA personnalisés à votre activité"],
  ["16", "sur place dans toute la Charente, à distance partout en France"],
];

export const painPoints = [
  "Vos devis et factures partent en retard — et vos relances aussi.",
  "Votre dimanche soir est consacré à l'administratif au lieu de votre famille.",
  "Votre expert-comptable vous relance pour des pièces manquantes.",
  "Vous savez que vous perdez du temps et de l'argent, mais vous n'avez personne à qui déléguer.",
];

export const methodSteps = [
  {
    title: "Le diagnostic",
    text: "En 15 minutes, nous identifions ensemble les 3 points de friction qui vous coûtent le plus de temps. C'est gratuit et sans engagement.",
  },
  {
    title: "Le système",
    text: "D'abord les fondations, ensuite la vitesse. Votre entreprise se crée ? Je structure votre gestion dès le départ — circuits de devis, facturation, classement, suivi — pour qu'elle naisse organisée. Votre entreprise a plus de 2 ans ? Je restructure l'existant : on garde ce qui fonctionne, on répare ce qui fuit, on simplifie ce qui s'est empilé. Et seulement ensuite, j'automatise : assistants IA personnalisés, relances et circuits qui tournent seuls. Automatiser le désordre ne fait qu'accélérer le désordre — c'est pour ça que l'ordre vient d'abord.",
  },
  {
    title: "Le pilotage",
    text: "Je veille, j'ajuste, je vous rends compte. Vous gardez la vision, je tiens la barre administrative. Votre structure est pilotée avec rigueur — vous le savez, vous dormez tranquille.",
  },
];

export const offers = [
  {
    name: "La Structuration",
    short: "Votre entreprise se crée ? Elle naît organisée.",
    audience: "Vous créez votre entreprise, ou elle a moins de 2 ans. Tout est à poser : la facturation, le classement, le suivi des règlements, les échéances. C'est maintenant que tout se joue.",
    what: "Je pose les fondations de votre gestion dès le départ : circuits de devis et de facturation, organisation documentaire, suivi de trésorerie, calendrier des échéances. Votre entreprise naît organisée — vous ne connaîtrez jamais le bureau qui déborde.",
    result: "Une gestion saine dès le premier jour, et les bons réflexes pour qu'elle le reste.",
  },
  {
    name: "La Restructuration",
    short: "Votre gestion s'est empilée ? On remet tout au cordeau.",
    badge: "Le point de départ le plus fréquent",
    audience: "Votre entreprise tourne depuis plusieurs années, mais la gestion s'est empilée : documents éparpillés, relances oubliées, échéances subies, dimanche soir sacrifié. Rien de grave — mais rien d'organisé non plus.",
    what: "Je remets de l'ordre dans l'existant : on garde ce qui fonctionne, on répare ce qui fuit, on simplifie ce qui s'est accumulé. Selon l'état des lieux, l'intervention est légère ou approfondie — le diagnostic gratuit le dit honnêtement.",
    result: "Une gestion remise au cordeau, des heures retrouvées chaque semaine, et la visibilité sur votre trésorerie.",
  },
  {
    name: "Le Workflow métier automatisé",
    short: "Votre système est posé ? On le fait tourner tout seul.",
    audience: "Votre gestion est structurée — par moi ou par vous — et vous voulez maintenant qu'elle tourne toute seule : que les tâches répétitives disparaissent de votre semaine.",
    what: "J'automatise l'ensemble de votre workflow métier, brique par brique : tri et réponses de boîte mail, relances de factures, devis récurrents, pré-comptabilité, prise de rendez-vous, reporting, assistants IA personnalisés à votre activité. Chaque automatisation est testée, documentée, et maintenue.",
    result: "Jusqu'à 10 heures récupérées par semaine, et une gestion qui tourne pendant que vous êtes sur votre cœur de métier.",
    promise:
      "Et voici ma promesse à contre-courant : chaque automatisation installée réduit le coût de votre pilotage mensuel. Plus votre système travaille, moins vous payez. Mon objectif n'est pas de vous facturer des heures — c'est de les faire disparaître.",
  },
];

export const offerFaqs = [
  {
    question: "Pourquoi pas de tarifs affichés ?",
    answer:
      "Parce que deux entreprises n'ont jamais le même volume ni les mêmes outils. Le diagnostic gratuit me permet de chiffrer juste — ni trop, ni trop peu. Vous recevez un devis clair sous 48 h, sans surprise ensuite.",
  },
  {
    question: "Comment travaillez-vous : sur place ou à distance ?",
    answer:
      "Les deux. En Charente, je me déplace chez vous quand c'est utile — pour le diagnostic, la mise en place, ou un point régulier autour de vos vrais dossiers. Le reste du temps, et partout ailleurs en France, tout passe par des outils simples et sécurisés que je mets en place pour vous : si vous savez envoyer un email, vous savez travailler avec moi.",
  },
  {
    question: "Et la confidentialité de mes données ?",
    answer:
      "Clause de confidentialité systématique dans chaque contrat, outils conformes RGPD, et 30 ans d'habitude de manipuler des données sensibles avec discrétion.",
  },
  {
    question: "Suis-je engagé sur la durée ?",
    answer:
      "Non. Les accompagnements mensuels sont sans engagement au-delà du préavis prévu au contrat. Mon pari : c'est le résultat qui vous fera rester.",
  },
  {
    question: "Puis-je faire appel à vous pour une toute petite mission ?",
    answer:
      "Oui, et c'est même tout l'intérêt du freelance : une heure de formation, une demi-journée de remise en ordre, une mission ponctuelle ou récurrente — vous payez exactement le besoin, rien de plus. Pas de recrutement, pas de charges, pas d'engagement minimum.",
  },
  {
    question: "Remplacez-vous mon expert-comptable ?",
    answer:
      "Non, je le complète. Je prépare, classe et transmets tout ce dont il a besoin — il gagne du temps, vous gagnez en sérénité, et souvent en honoraires.",
  },
];

export const caseStudies = [
  {
    metric: "24 h",
    title: "Du carnet de commandes plein… au pilotage serein",
    context:
      "Une entreprise du bâtiment en pleine activité : des chantiers qui s'enchaînent, mais des devis rédigés le soir, des relances oubliées, des échéances découvertes au dernier moment. Le dirigeant excellait sur ses chantiers — et s'épuisait au bureau.",
    work:
      "Structuration complète du quotidien administratif : circuit devis → envoi → relance → facture, suivi des règlements, anticipation des échéances, coordination avec le cabinet comptable. Puis automatisation des relances et du classement des pièces.",
    result:
      "Devis envoyés sous 24 h, plus aucune relance oubliée, échéances anticipées au lieu d'être subies. Le dirigeant a retrouvé ses soirées — et la visibilité sur sa trésorerie.",
  },
  {
    metric: "÷5",
    title: "De 2 h 30 à 30 minutes par présentation client",
    context:
      "Chaque rendez-vous client exigeait une présentation personnalisée : 2 à 3 heures de préparation et de mise en forme, à chaque fois. Un temps invisible qui rognait les soirées et limitait le nombre de rendez-vous possibles.",
    work:
      "Un assistant IA sur mesure qui génère ses présentations à partir de ses notes de rendez-vous, directement dans sa charte graphique — avec une documentation simple pour qu'il soit 100 % autonome.",
    result:
      "30 minutes par présentation au lieu de 2 h 30, une qualité constante, et la capacité d'accepter plus de rendez-vous sans travailler plus tard.",
  },
  {
    metric: "1 h",
    title: "Conforme à la facturation électronique — et autonome — en une heure",
    context:
      "La réforme de la facturation électronique approchait, et avec elle l'angoisse : quel outil choisir, quelles mentions obligatoires, comment faire concrètement ? Le risque : la non-conformité, ou des heures perdues à chercher seule.",
    work:
      "Choix et paramétrage de l'outil de facturation adapté à son activité, guide pas-à-pas personnalisé, puis une séance de formation d'une heure : première vraie facture émise en direct, réception fournisseur configurée, checklist de contrôle remise.",
    result:
      "Conforme, équipée, autonome — en une heure de formation. Et l'esprit tranquille pour l'échéance réglementaire.",
  },
];

export const testimonials = [
  {
    name: "Raphaël",
    role: "dirigeant de BR16BATIMENT (Charente)",
    quote:
      "Céline gère ma structure depuis 2017 — d'abord dans l'ombre, en plus de son travail, puis officiellement depuis janvier 2026. Oui, c'est mon épouse, et c'est justement pour ça que je peux en parler mieux que personne : je l'ai vue tenir l'administratif, les échéances et le suivi d'une entreprise du bâtiment au quotidien, pendant des années. Devis suivis, relances faites, échéances anticipées au lieu d'être subies. Sans elle, je passerais mes soirées au bureau au lieu d'être sur mes chantiers. Si elle fait pour vous le dixième de ce qu'elle fait ici, vous ne reviendrez pas en arrière.",
  },
  {
    name: "Tanya",
    role: "courtière en prêts (Limoges)",
    quote:
      "J'ai rencontré Céline en janvier 2026, et elle a commencé par une chose toute simple : automatiser ma boîte mail. Chaque demande reçoit maintenant un accusé de réception qui annonce une réponse sous 48 h. Ça paraît anodin — c'est environ une heure de gagnée par semaine, mais surtout : plus de clients qui relancent au bout de deux jours, plus cette pression de devoir répondre dans la minute. Mes clients se sentent pris en charge immédiatement, et moi je réponds quand c'est le bon moment. C'est exactement ça, son talent : des solutions simples qui changent le quotidien.",
  },
  {
    name: "Olivier Lachèvre",
    role: "architecte infrastructure informatique",
    quote:
      "Céline est la personne qu'il vous faut : consciencieuse dans ce qu'elle fait, et quelqu'un qui n'a pas peur de s'investir dans l'inconnu.",
  },
];

export const quizQuestions = [
  "Vos devis partent-ils plus de 48 h après la demande du client ?",
  "Des factures impayées attendent-elles une relance que vous n'avez pas encore faite ?",
  "Travaillez-vous sur votre administratif le soir ou le week-end ?",
  "Votre expert-comptable vous relance-t-il pour des pièces manquantes ?",
  "Découvrez-vous des échéances (URSSAF, TVA, assurances…) au dernier moment ?",
  "Ressaisissez-vous les mêmes informations dans plusieurs outils (devis, factures, tableaux…) ?",
  "Perdez-vous du temps à retrouver un document, un email ou un dossier ?",
  "Reportez-vous des tâches administratives plusieurs jours de suite ?",
  "Avez-vous du mal à savoir où en est votre trésorerie sans faire de calculs ?",
  "Pensez-vous à votre paperasse pendant vos moments en famille ?",
];

export const quizProfiles = [
  {
    score: "0 à 8 points",
    title: "Vous tenez la barre",
    text: "Votre gestion est globalement maîtrisée. Estimation : 2 à 4 h perdues par semaine. Les 3 actions : automatiser vos relances, centraliser vos documents, bloquer un créneau administratif fixe hebdomadaire.",
  },
  {
    score: "9 à 18 points",
    title: "Ça déborde par moments",
    text: "Votre administratif vous coûte environ 5 à 9 h par semaine — plus d'une journée par mois. Les 3 actions : mettre en place un circuit devis-facture-relance, préparer vos pièces comptables au fil de l'eau, automatiser ce qui se répète.",
  },
  {
    score: "19 à 30 points",
    title: "Surcharge structurelle",
    text: "Vous perdez probablement 10 h ou plus par semaine — l'équivalent d'une journée et demie. Ce n'est pas un manque de volonté : c'est un problème de système. Bonne nouvelle : c'est exactement ce qui se répare le mieux. Parlons-en 15 minutes.",
  },
];

export const values = [
  ["Rigueur", "Votre gestion est tenue au cordeau, sans approximation."],
  ["Discrétion", "Vos données et vos chiffres restent entre nous, contractuellement."],
  ["Clarté", "Vous savez toujours où vous en êtes, sans jargon."],
];
