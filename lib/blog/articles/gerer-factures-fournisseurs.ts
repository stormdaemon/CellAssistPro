import type { BlogArticle } from "../types";

export const article: BlogArticle = {
  slug: "gerer-factures-fournisseurs",
  title: "Factures fournisseurs : organiser la réception pour ne plus rien perdre",
  seoTitle: "Facturation électronique réception : factures fournisseurs",
  description:
    "Depuis le 1er septembre 2026, les factures fournisseurs se reçoivent par une plateforme agréée : un point unique, des contrôles et un classement.",
  category: "Pré-comptabilité",
  keyword: "facturation électronique réception",
  datePublished: "2026-06-12",
  dateModified: "2026-10-28",
  image: {
    src: "/images/blog/gerer-factures-fournisseurs.jpg",
    alt: "Factures et reçus papier empilés sur un bureau avec pince, stylo et blocs-notes",
    credit: "Photo : Pexels",
  },
  intro: [
    "Depuis le 1er septembre 2026, toute entreprise assujettie à la TVA en France doit pouvoir recevoir les factures électroniques de ses fournisseurs par l'intermédiaire d'une plateforme agréée. La réception devient donc un circuit à part entière, qui doit fonctionner même lorsque des factures papier ou des PDF circulent encore.",
    "Une facture fournisseur, c'est aussi une sortie d'argent : oubliée, elle revient avec des frais ; mal rangée, elle manque au comptable. Pour le cadre de la réforme, voir le [guide de la facturation électronique](/facturation-electronique).",
  ],
  sections: [
    {
      heading: "La réception : un point unique, désormais structuré",
      paragraphs: [
        "Vos fournisseurs émettent selon leur propre calendrier. Certains sont déjà en électronique ; les petites structures émettront au plus tard le 1er septembre 2027. Votre circuit doit donc accepter les deux formes pendant la transition : les factures structurées, qui s'importent, et les PDF, qui se contrôlent à la main. La liste des plateformes est publiée sur [impots.gouv.fr](https://www.impots.gouv.fr/facturation-electronique-et-plateformes-agreees).",
        "Le choix de la plateforme est détaillé dans [notre guide pour choisir une plateforme agréée](/blog/choisir-plateforme-facturation-agreee).",
      ],
    },
    {
      heading: "Le problème du multi-canal",
      paragraphs: [
        "Les factures fournisseurs arrivent par plusieurs canaux : courriel pour le plus gros fournisseur, portail web pour un autre, papier pour un troisième, parfois remises en main propre à la livraison. Chaque canal a son lieu de dépôt, et c'est là qu'elles se perdent. Prenons un exemple fictif : une facture reste dans une boîte de courriel peu consultée, une autre sur un coin de bureau. Trois mois plus tard, le comptable la demande, et personne ne la retrouve.",
        "Ce n'est pas le nombre de factures qui pose problème, mais leur dispersion. Même une dizaine par mois créent des frictions dès qu'elles arrivent par deux canaux différents. Les formats et les statuts des factures reçues sont expliqués dans [l'article sur la facture électronique au quotidien](/blog/facture-electronique-au-quotidien).",
      ],
    },
    {
      heading: "Vérifier avant de payer",
      paragraphs: [
        "Une facture fournisseur fait sortir de l'argent. Avant le paiement, trois contrôles s'imposent : la quantité facturée correspond-elle à la quantité commandée ? Le prix facturé correspond-il au prix convenu ? Les mentions administratives sont-elles présentes, avec le numéro, la date, le SIREN et le numéro de TVA ?",
        "Ces contrôles prennent quelques minutes par facture. Avec une facture structurée, une partie des données est importée automatiquement, ce qui laisse davantage de temps pour vérifier les montants.",
      ],
    },
    {
      heading: "Trois manières de classer, selon votre comptable",
      list: [
        "Par mois : simple à transmettre, et le plus adapté à un comptable qui travaille mois par mois.",
        "Par fournisseur : utile pour retrouver rapidement tous les achats auprès d'un même fournisseur.",
        "Par catégorie, puis par mois : pratique si vous avez beaucoup de fournisseurs et voulez voir vos dépenses par type.",
      ],
    },
    {
      heading: "Le circuit de réception en quatre étapes",
      steps: [
        "Choisir votre plateforme agréée dans la liste officielle, puis vérifier votre inscription à l'annuaire.",
        "Indiquer à vos fournisseurs réguliers que vous recevez désormais leurs factures électroniques par votre plateforme.",
        "Contrôler chaque facture avant paiement, puis la classer au même endroit que les autres.",
        "Transmettre à votre comptable un dossier complet, à date fixe, chaque semaine ou chaque mois.",
      ],
    },
  ],
  faq: [
    {
      question: "Dois-je vérifier chaque facture, ou puis-je faire confiance à mes fournisseurs ?",
      answer:
        "Vous pouvez leur faire confiance, mais pas sans contrôle : même les bons fournisseurs se trompent, avec une facture en double, un prix mal mis à jour ou une quantité erronée. Quelques minutes de vérification évitent des paiements en trop.",
    },
    {
      question: "Dois-je scanner les factures papier que je reçois ?",
      answer:
        "Avec peu de factures papier, un classeur physique bien ordonné suffit. Au-delà, la numérisation et le classement numérique rendent les factures plus faciles à retrouver et à transmettre.",
    },
    {
      question: "La réception électronique est-elle obligatoire pour moi ?",
      answer:
        "Oui, si vous êtes assujetti à la TVA, y compris en franchise en base : depuis le 1er septembre 2026, vous devez pouvoir recevoir des factures électroniques par une plateforme agréée.",
    },
  ],
  sources: [
    {
      label: "impots.gouv.fr : facturation électronique et plateformes agréées (liste officielle)",
      url: "https://www.impots.gouv.fr/facturation-electronique-et-plateformes-agreees",
    },
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
