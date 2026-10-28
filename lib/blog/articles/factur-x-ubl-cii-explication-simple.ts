import type { BlogArticle } from "../types";

export const article: BlogArticle = {
  slug: "factur-x-ubl-cii-explication-simple",
  title: "Factur-X, UBL, CII : les trois formats de la facture électronique, expliqués simplement",
  seoTitle: "Factur-X c'est quoi ? UBL et CII expliqués simplement",
  description:
    "Factur-X, UBL et CII : les formats acceptés pour la facture électronique entre entreprises, ce qu'ils changent pour vous et comment vérifier votre outil.",
  category: "Facturation électronique",
  keyword: "factur-x c'est quoi",
  datePublished: "2026-06-12",
  dateModified: "2026-10-28",
  image: {
    src: "/images/blog/factur-x-ubl-cii-explication-simple.jpg",
    alt: "Mains tapant sur le clavier d'un ordinateur portable face à un écran clair",
    credit: "Photo : Pexels",
  },
  intro: [
    "Factur-X, UBL et CII sont les formats acceptés pour la facture électronique entre entreprises assujetties à la TVA en France. Ils poursuivent le même objectif : donner à la facture des données structurées qu'un logiciel lit sans recopie. Factur-X associe un PDF lisible à des données intégrées ; UBL et CII sont entièrement structurés.",
    "Vous n'avez pas à choisir la norme vous-même : votre outil et votre plateforme agréée s'en chargent. Ce qui compte, c'est de savoir ce que vos clients et vos fournisseurs attendent, et de vérifier que votre outil sait émettre et recevoir. Le cadre d'ensemble est sur la page [facturation électronique](/facturation-electronique).",
  ],
  sections: [
    {
      heading: "Pourquoi une facture a besoin d'une structure",
      paragraphs: [
        "Un humain repère un montant à l'œil, où qu'il se trouve sur la page. Un logiciel doit savoir où le chercher. Un format structuré fonctionne comme un contrat : le numéro de facture, la date, le montant hors taxe, le taux de TVA et le numéro de TVA sont toujours au même endroit. Le logiciel de comptabilité peut alors importer la facture sans recopie manuelle.",
      ],
    },
    {
      heading: "Les trois formats, en clair",
      paragraphs: [
        "Les trois formats visent le même contenu, mais ils ne se présentent pas de la même façon.",
      ],
      list: [
        "Factur-X : un format mixte. C'est un PDF lisible par une personne, auquel sont associées des données structurées que les logiciels exploitent.",
        "UBL : un format entièrement en XML. Il n'est pas conçu pour être lu tel quel par une personne : un logiciel d'affichage est nécessaire.",
        "CII : un autre format entièrement en XML, qui repose sur la même norme européenne de contenu que UBL et Factur-X.",
      ],
    },
    {
      heading: "Un PDF simple ne suffit plus entre entreprises",
      paragraphs: [
        "Un PDF simple, un scan ou une facture envoyée par courriel ne sont plus conformes pour les factures échangées entre entreprises assujetties à la TVA. Le détail de ce point est dans [l'article sur le PDF envoyé par courriel](/blog/pdf-email-facture-electronique).",
        "Pour référence officielle, la page [Je découvre la facturation électronique](https://www.impots.gouv.fr/professionnel/je-decouvre-la-facturation-electronique) sur impots.gouv.fr présente les formats acceptés.",
      ],
    },
    {
      heading: "Ce que les formats changent pour votre temps",
      paragraphs: [
        "Prenons un exemple fictif. Une facture fournisseur arrive en Factur-X : votre logiciel l'importe en quelques secondes, avec la date, le montant et la référence au bon endroit. Une facture reçue en PDF doit en revanche être recopiée à la main. Si cette recopie prend dix minutes par facture, 30 factures par mois représentent 5 heures de saisie. C'est une hypothèse de calcul, à ajuster à votre réalité.",
      ],
    },
    {
      heading: "Comment vérifier que votre outil gère les bons formats",
      steps: [
        "Demandez à votre prestataire s'il peut émettre en Factur-X, en UBL ou en CII.",
        "Demandez-lui aussi s'il peut recevoir et importer ces formats : les deux sens doivent être vérifiés séparément.",
        "Faites confirmer par votre plateforme agréée que la réception et l'émission passent bien par elle.",
        "Testez avec une facture de test avant la date qui vous concerne, puis faites-la contrôler par votre expert-comptable.",
      ],
    },
    {
      heading: "Les erreurs à éviter",
      list: [
        "Croire qu'un logiciel qui « gère les formats » émet et reçoit forcément : vérifiez les deux sens.",
        "Penser qu'un outil compatible Factur-X suffit : il doit aussi se connecter à une plateforme agréée.",
        "Attendre la fin de l'été pour s'y mettre : la réception est obligatoire depuis le 1er septembre 2026.",
        "Demander à un fournisseur de changer de format sans lui demander à quelle date il passera à l'électronique.",
      ],
    },
  ],
  faq: [
    {
      question: "Si mon outil de facturation gère Factur-X, suis-je en conformité ?",
      answer:
        "Pas forcément. Le format ne suffit pas : l'outil doit aussi se connecter à une plateforme agréée pour recevoir et émettre. Faites-le vérifier par votre plateforme et par votre expert-comptable.",
    },
    {
      question: "Quelle différence entre Factur-X et UBL ?",
      answer:
        "Factur-X est un PDF lisible qui contient des données structurées. UBL est un format entièrement en XML, prévu pour être lu par un logiciel plutôt que par une personne.",
    },
    {
      question: "Mon fournisseur n'envoie que des PDF : que faire ?",
      answer:
        "Classez ses PDF dans votre circuit de réception, et demandez-lui à quelle date il passera au format structuré. Les PME, les TPE et les micro-entreprises émettent au plus tard le 1er septembre 2027.",
    },
  ],
  sources: [
    {
      label: "impots.gouv.fr : Je découvre la facturation électronique",
      url: "https://www.impots.gouv.fr/professionnel/je-decouvre-la-facturation-electronique",
    },
    {
      label: "FAQ de la DGFiP « Je découvre la facturation électronique » (PDF)",
      url: "https://www.impots.gouv.fr/sites/default/files/media/1_metier/2_professionnel/EV/2_gestion/290_facturation_electronique/faq---fe_je-decouvre-la-facturation-electronique.pdf",
    },
  ],
  related: [
    "pdf-email-facture-electronique",
    "facture-electronique-au-quotidien",
    "choisir-plateforme-facturation-agreee",
  ],
};
