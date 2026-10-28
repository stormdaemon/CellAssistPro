import type { BlogArticle } from "../types";

export const article: BlogArticle = {
  slug: "pdf-email-facture-electronique",
  title: "Un PDF envoyé par courriel est-il une facture électronique ?",
  seoTitle: "Facture électronique PDF : un PDF par courriel suffit-il ?",
  description:
    "Un PDF envoyé par courriel n'est pas une facture électronique au sens de la réforme entre entreprises. Format, plateforme agréée et dates expliqués.",
  category: "Facturation électronique",
  keyword: "facture électronique pdf",
  datePublished: "2026-06-12",
  dateModified: "2026-10-28",
  image: {
    src: "/images/blog/pdf-email-facture-electronique.jpg",
    alt: "Gros plan sur des doigts tapant sur le clavier d'un ordinateur portable, avec l'écran lumineux en arrière-plan",
    credit: "Photo : Pexels",
  },
  intro: [
    "Non : entre entreprises assujetties à la TVA, un PDF envoyé par courriel n'est pas une facture électronique au sens de la réforme. Une facture électronique doit être structurée pour être lue par un logiciel, et transiter par une plateforme agréée. Depuis le 1er septembre 2026, les entreprises doivent pouvoir recevoir ces factures.",
    "Cela ne fait pas du PDF un document à jeter : il reste un justificatif à classer. Les dates et le cadre complet sont sur la page [facturation électronique](/facturation-electronique).",
  ],
  sections: [
    {
      heading: "La différence entre un PDF et une facture structurée",
      paragraphs: [
        "Un PDF est conçu pour être lu par une personne. Un logiciel de comptabilité ne sait pas toujours en extraire les chiffres, et la donnée doit souvent être recopiée à la main. Une facture électronique au sens de la réforme contient les mêmes informations, dans un format que l'ordinateur comprend : Factur-X, UBL ou CII.",
        "Le format compte donc davantage que le mode d'envoi. Un document peut partir par voie électronique sans être une facture structurée.",
      ],
    },
    {
      heading: "Le temps gagné : un calcul à partir d'hypothèses",
      paragraphs: [
        "Prenons un exemple fictif, avec des durées supposées : recopier une facture reçue en PDF prend environ 3 minutes, et vérifier une facture structurée importée prend environ 10 secondes.",
      ],
      list: [
        "Vingt factures reçues par mois, soit 240 par an.",
        "Un gain de 170 secondes par facture (180 secondes moins 10), soit 40 800 secondes par an.",
        "Environ 11 heures économisées par an (40 800 secondes, soit 11 heures et 20 minutes).",
      ],
    },
    {
      heading: "Ce qui change depuis le 1er septembre 2026",
      paragraphs: [
        "Depuis cette date, toutes les entreprises assujetties à la TVA doivent pouvoir recevoir des factures électroniques structurées, par l'intermédiaire d'une plateforme agréée. L'émission est échelonnée : les grandes entreprises et les ETI émettent en électronique depuis le 1er septembre 2026, et les PME, les TPE et les micro-entreprises au plus tard le 1er septembre 2027. Le cadre officiel figure sur [impots.gouv.fr](https://www.impots.gouv.fr/professionnel/je-decouvre-la-facturation-electronique).",
      ],
    },
    {
      heading: "Préparer votre réception en trois étapes",
      steps: [
        "Recenser vos réceptions de factures : où arrivent-elles (courriel, papier, portail fournisseur), et combien par mois ?",
        "Vérifier auprès de votre expert-comptable ou de votre logiciel s'il peut importer des factures Factur-X ou UBL.",
        "Demander à vos fournisseurs clés à partir de quelle date ils émettront en électronique structuré.",
      ],
    },
    {
      heading: "Ce que vous gardez et ce que vous classez",
      paragraphs: [
        "Un PDF reçu reste un justificatif utile pendant la transition. Classez-le au même endroit que vos autres factures reçues, et signalez à votre expert-comptable celles qui arrivent encore en PDF. Demandez-lui comment il souhaite les recevoir et les conserver. Le format attendu est détaillé dans [l'article sur Factur-X, UBL et CII](/blog/factur-x-ubl-cii-explication-simple).",
      ],
    },
  ],
  faq: [
    {
      question: "Un PDF reçu par courriel peut-il être considéré comme une facture conforme ?",
      answer:
        "Entre entreprises assujetties à la TVA, la facture électronique attendue doit être structurée et transiter par une plateforme agréée. Un PDF simple n'entre pas dans ce format. Demandez à votre expert-comptable comment le classer et le conserver.",
    },
    {
      question: "Mon fournisseur n'est pas prêt pour septembre 2026 : que faire ?",
      answer:
        "Les PME, les TPE et les micro-entreprises ont jusqu'au 1er septembre 2027 pour émettre en électronique. En attendant, vous devez pouvoir recevoir des factures électroniques, et vous pouvez prévoir un plan B pour les PDF que vous recevez encore.",
    },
    {
      question: "Combien de temps une facture structurée fait-elle gagner ?",
      answer:
        "Cela dépend de votre volume et de vos durées réelles. Dans l'exemple de l'article, vingt factures par mois, avec des durées supposées, représentent environ onze heures par an.",
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
    "factur-x-ubl-cii-explication-simple",
    "gerer-factures-fournisseurs",
    "facture-electronique-au-quotidien",
  ],
};
