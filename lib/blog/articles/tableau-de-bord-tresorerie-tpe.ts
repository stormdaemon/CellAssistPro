import type { BlogArticle } from "../types";

export const article: BlogArticle = {
  "slug": "tableau-de-bord-tresorerie-tpe",
  "title": "Tableau de bord de trésorerie : trois colonnes, une discipline hebdomadaire",
  "seoTitle": "Tableau de bord trésorerie : méthode simple pour TPE",
  "description": "Un tableau de bord de trésorerie à trois colonnes, mis à jour chaque lundi : entrées, sorties et solde. Méthode, exemple chiffré et erreurs à éviter.",
  "category": "Pré-comptabilité",
  "keyword": "tableau de bord trésorerie",
  "datePublished": "2026-06-12",
  "dateModified": "2026-10-28",
  "image": {
    "src": "/images/blog/tableau-de-bord-tresorerie-tpe.jpg",
    "alt": "Main tenant un stylo pointant sur un graphique en barres et courbes imprimé sur papier",
    "credit": "Photo : Pexels"
  },
  "intro": [
    "Un tableau de bord de trésorerie suit trois colonnes : les entrées attendues, les sorties prévues et le solde qui en découle, semaine après semaine. Mis à jour chaque lundi pendant quinze minutes, il indique à une TPE si elle pourra payer ses échéances dans les semaines qui viennent, et ce qu'il faut faire si ce n'est pas le cas.",
    "Le solde de votre compte bancaire indique le passé ; ce tableau indique les semaines à venir. Si vous préférez déléguer cette mise à jour, l'organisation et les tableaux de suivi font partie de l'accompagnement [bras droit et automatisation](/bras-droit-automatisation)."
  ],
  "sections": [
    {
      "heading": "Le solde bancaire montre le passé",
      "paragraphs": [
        "Imaginons un compte qui affiche 6 500 euros. Demain, une assurance prélève 800 euros, un fournisseur 1 200 euros jeudi, et deux clients doivent virer 3 000 euros vendredi. Si l'un des deux paie en retard, la semaine bascule. Le compte ne montre rien de cela : il retrace ce qui est déjà passé, et non ce qui arrive."
      ]
    },
    {
      "heading": "Trois colonnes et une ligne par élément prévisible",
      "paragraphs": [
        "Un tableau simple suffit : trois colonnes, une ligne par élément prévisible, sur trois à quatre semaines."
      ],
      "list": [
        "Entrées : les factures émises et non encore encaissées, avec la date de paiement attendue.",
        "Sorties : les dépenses fixes et prévues (salaires, prélèvements, fournisseurs réguliers, impôts), avec leur date.",
        "Solde : le solde de la semaine précédente, plus les entrées, moins les sorties."
      ]
    },
    {
      "heading": "Un exemple fictif sur deux semaines",
      "paragraphs": [
        "Prenons un exemple fictif. Le lundi, le solde est de 1 000 €. Les deux semaines suivantes se présentent ainsi :"
      ],
      "list": [
        "Semaine 1 : 8 500 € d'entrées prévues et 6 200 € de sorties. Solde de fin de semaine : 3 300 €.",
        "Semaine 2 : 3 000 € d'entrées prévues, dont 2 500 € dépendent d'un client qui annonce un retard, et 5 600 € de sorties. Solde prévu : 700 €. Si le retard se confirme, le solde tombe à −1 800 €."
      ]
    },
    {
      "heading": "La routine du lundi : quinze minutes",
      "steps": [
        "Consultez le solde de votre compte et vos courriels clients pour repérer ce qui doit arriver cette semaine.",
        "Ajoutez les dépenses fixes connues pour les quatre semaines à venir : salaires, prélèvements, fournisseurs réguliers.",
        "Calculez le solde de fin de semaine, puis celui de la semaine suivante.",
        "Décidez : relancer un client, décaler une dépense, ou ne rien changer."
      ]
    },
    {
      "heading": "Les erreurs qui font abandonner le tableau",
      "list": [
        "Un tableur de vingt-cinq onglets, abandonné au bout d'un mois faute de temps.",
        "Des calculs si minutieux que la mise à jour prend une heure entière.",
        "Une mise à jour une fois par mois au lieu de chaque semaine : le tableau devient obsolète.",
        "Des dépenses très variables, comme l'essence ou les petits achats, qui l'alourdissent sans aider aux décisions.",
        "Une projection à six mois qui change chaque semaine : au-delà de trois mois, les prévisions sont trop incertaines pour orienter une décision."
      ]
    },
    {
      "heading": "Ce qui change quand la visibilité revient",
      "paragraphs": [
        "Au bout de quelques semaines, les creux de trésorerie cessent d'être des crises. Vous les voyez venir, vous relancez à temps, vous décalez une dépense. Votre expert-comptable reçoit alors des chiffres qu'il peut analyser avec vous, comme les indicateurs présentés dans [l'article sur les indicateurs de gestion](/blog/indicateurs-gestion-tpe)."
      ]
    }
  ],
  "faq": [
    {
      "question": "Dois-je prévoir ma trésorerie sur deux semaines ou sur trois mois ?",
      "answer": "Commencez par deux à quatre semaines, un horizon assez court pour réagir. Pour les dépenses vraiment fixes (salaires, loyers, charges), l'horizon peut atteindre trois mois. Au-delà, les prévisions sont trop incertaines pour orienter les décisions de la semaine."
    },
    {
      "question": "Un tableur suffit-il pour suivre sa trésorerie ?",
      "answer": "Oui, à condition de le garder court : trois colonnes, quatre semaines, une mise à jour chaque lundi. Un modèle trop complexe est souvent abandonné. Un logiciel devient utile quand les volumes augmentent ; ce choix se fait avec votre expert-comptable."
    },
    {
      "question": "Comment suivre la trésorerie de son entreprise ?",
      "answer": "Chaque semaine, notez les entrées attendues et les sorties prévues, calculez le solde de fin de semaine, puis décidez des actions à mener. Le solde bancaire actuel ne suffit pas, car il ne montre pas ce qui arrive."
    }
  ],
  "related": ["indicateurs-gestion-tpe", "delais-paiement-professionnels", "relance-facture-impayee"]
};
