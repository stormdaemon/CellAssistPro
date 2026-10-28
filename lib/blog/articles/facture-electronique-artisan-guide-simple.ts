import type { BlogArticle } from "../types";

export const article: BlogArticle = {
  slug: "facture-electronique-artisan-guide-simple",
  title:
    "Facture électronique pour les artisans : le guide simple, avec les acomptes et la sous-traitance du BTP",
  seoTitle: "Facture électronique artisan : guide, acomptes et BTP",
  description:
    "Artisans du bâtiment : réception obligatoire depuis septembre 2026, émission au plus tard en 2027, acomptes, situations et sous-traitance BTP.",
  category: "Facturation électronique",
  keyword: "facture électronique artisan",
  datePublished: "2026-06-12",
  dateModified: "2026-10-28",
  image: {
    src: "/images/blog/facture-electronique-artisan-guide-simple.jpg",
    alt: "Ouvrière du bâtiment avec casque de chantier consultant une tablette numérique",
    credit: "Photo : Pexels",
  },
  intro: [
    "Depuis le 1er septembre 2026, un artisan doit pouvoir recevoir des factures électroniques par l'intermédiaire d'une plateforme agréée. Il devra émettre ses propres factures au format électronique au plus tard le 1er septembre 2027. Chaque facture entre dans ce dispositif, y compris les factures d'acompte et les situations de travaux.",
    "Ce guide présente le circuit d'un artisan, ce qu'il émet et ce qu'il reçoit, puis les particularités du bâtiment. Pour l'ensemble du sujet, voir la page [facturation électronique](/facturation-electronique).",
  ],
  sections: [
    {
      heading: "Le circuit d'une facture d'artisan",
      paragraphs: [
        "Une facture d'artisan part souvent d'un devis accepté ou d'une intervention, passe au paiement, et donne parfois lieu à une relance si le règlement tarde. Avec la réforme, deux flux sont à surveiller : les factures que vous émettez, et les factures de vos fournisseurs (matériaux, location de matériel, sous-traitants), qui arrivent par une plateforme agréée.",
        "Ce double circuit reste simple : un outil qui émet au bon format, et un point d'arrivée unique pour les factures reçues. Le [calendrier de la facturation électronique](/blog/calendrier-facturation-electronique) indique à quelle date chaque flux devient obligatoire.",
      ],
    },
    {
      heading: "Émettre : ce que vos factures doivent contenir",
      paragraphs: [
        "Les mentions classiques restent obligatoires, et la réforme en ajoute. Pour vos clients professionnels, il faut notamment faire figurer leur SIREN, la nature de l'opération (biens, services ou les deux) et, si elle diffère, l'adresse de livraison. Pour un particulier, la facture ne suit pas le circuit entre entreprises : les données de la vente relèvent de l'e-reporting, expliqué dans [l'article dédié](/blog/e-reporting-definition-calendrier).",
      ],
    },
    {
      heading: "Acomptes et situations de travaux : une facture comme une autre",
      paragraphs: [
        "Un acompte est une facture. Une situation de travaux l'est aussi : c'est une facture intermédiaire, établie selon l'avancement prévu au marché. Elle récapitule le montant du marché, le pourcentage réalisé, les situations déjà facturées, la retenue de garantie éventuelle et la TVA. Depuis la réforme, elle suit le calendrier de la facturation électronique, comme n'importe quelle autre facture.",
        "Dans les marchés privés, la retenue de garantie ne peut dépasser 5 % du montant des acomptes. Elle garantit la levée des réserves faites à la réception, et elle est libérée un an après la réception, sauf opposition motivée du maître d'ouvrage notifiée par lettre recommandée. Ces règles découlent de la [loi n° 71-584 du 16 juillet 1971](https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000687670).",
      ],
    },
    {
      heading: "Sous-traitance : l'autoliquidation de la TVA",
      paragraphs: [
        "Dans le bâtiment, lorsqu'un artisan fait appel à un sous-traitant, celui-ci facture hors taxe, sans TVA, avec la mention « Autoliquidation ». L'entreprise principale déclare et paie la TVA. Si le sous-traitant est en franchise en base, la mention à porter est « TVA non applicable, art. 293 B du CGI ». Ce mécanisme existe dans le BTP depuis le 1er janvier 2014 (article 283, 2 nonies, du code général des impôts).",
        "Les règles administratives sont publiées au [BOFiP](https://bofip.impots.gouv.fr/bofip/3218-PGP.html/identifiant=BOI-TVA-DECLA-10-10-20-20200311). Le cas de votre chantier se vérifie avec votre expert-comptable avant la première facture de sous-traitance.",
      ],
    },
    {
      heading: "Votre action concrète aujourd'hui",
      steps: [
        "Relire une facture récente avec la liste des mentions obligatoires, puis la faire valider une fois par votre expert-comptable.",
        "Définir un point d'arrivée unique pour les factures fournisseurs, par exemple un dossier numérique par mois.",
        "Choisir une plateforme agréée dans la liste officielle, puis vérifier votre inscription à l'annuaire.",
        "Tester un outil qui émet en Factur-X, en UBL ou en CII, sur une facture de test, avant de passer en production.",
      ],
    },
    {
      heading: "Votre administratif de chantier",
      paragraphs: [
        "Pour l'administratif de vos chantiers, qu'il s'agisse des devis, des acomptes, des situations ou des pièces à transmettre au comptable, l'[expertise artisans et BTP de CelAssistPro](/assistante-administrative-btp) détaille la méthode.",
      ],
    },
  ],
  faq: [
    {
      question: "Passer à la facturation électronique va-t-il me faire perdre du temps ?",
      answer:
        "Le changement demande un ou deux jours de mise en place. Ensuite, les factures fournisseurs importées directement font gagner du temps, à condition que le circuit soit bien paramétré dès le départ.",
    },
    {
      question: "Mes clients professionnels vont-ils refuser une facture électronique ?",
      answer:
        "Une facture au format Factur-X s'affiche comme un PDF classique pour votre client. Le traitement technique se fait entre votre outil et la plateforme agréée.",
    },
    {
      question: "Un particulier doit-il recevoir une facture électronique ?",
      answer:
        "La facturation électronique concerne les échanges entre entreprises assujetties à la TVA. Les ventes à des particuliers relèvent de l'e-reporting : voir [l'article dédié à l'e-reporting](/blog/e-reporting-definition-calendrier).",
    },
    {
      question: "Dois-je numériser les factures papier que je reçois ?",
      answer:
        "Pas forcément. Un classement physique par mois suffit si le volume est faible. La numérisation facilite en revanche la transmission au comptable et la recherche d'une facture.",
    },
  ],
  sources: [
    {
      label: "impots.gouv.fr : Je découvre la facturation électronique",
      url: "https://www.impots.gouv.fr/professionnel/je-decouvre-la-facturation-electronique",
    },
    {
      label: "Service-Public Entreprendre : mentions obligatoires d'une facture",
      url: "https://entreprendre.service-public.gouv.fr/vosdroits/F31808",
    },
    {
      label: "BOFiP : autoliquidation de la TVA dans le BTP (BOI-TVA-DECLA-10-10-20-20200311)",
      url: "https://bofip.impots.gouv.fr/bofip/3218-PGP.html/identifiant=BOI-TVA-DECLA-10-10-20-20200311",
    },
    {
      label: "impots.gouv.fr : FAQ sur l'autoliquidation dans les travaux de construction (PDF)",
      url: "https://www.impots.gouv.fr/sites/default/files/media/1_metier/2_professionnel/EV/2_gestion/210_declarer_payer/autoliquidation_travaux_construction.pdf",
    },
    {
      label: "Légifrance : loi n° 71-584 du 16 juillet 1971 (retenue de garantie)",
      url: "https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000687670",
    },
  ],
  related: [
    "calendrier-facturation-electronique",
    "pdf-email-facture-electronique",
    "facturation-electronique-micro-entrepreneur",
  ],
};
