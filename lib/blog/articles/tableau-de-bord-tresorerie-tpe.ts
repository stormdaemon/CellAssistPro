import type { BlogArticle } from "../types";

export const article: BlogArticle = {
  "slug": "tableau-de-bord-tresorerie-tpe",
  "title": "Un tableau de bord de trésorerie simple, lisible en 30 secondes",
  "description": "Un tableau de bord utile montre ce qui entre, ce qui sort, ce qui arrive et ce qui doit être relancé.",
  "category": "Pré-comptabilité",
  "keyword": "tableau de bord trésorerie TPE",
  "datePublished": "2026-06-12",
  "dateModified": "2026-07-01",
  "image": {
    "src": "/images/blog/tableau-de-bord-tresorerie-tpe.jpg",
    "alt": "Main tenant un stylo pointant sur un graphique en barres et courbes imprimé sur papier",
    "credit": "Photo : Pexels"
  },
  "intro": [
    "Un tableau de bord de trésorerie ne doit pas vous impressionner. Il doit vous dire en 30 secondes si vous pouvez respirer tranquille la semaine prochaine, et quoi faire si la réponse est non."
  ],
  "sections": [
    {
      "heading": "L'architecture minimale",
      "paragraphs": [
        "Quatre colonnes suffisent : la date, la description de l'élément, le montant en entrée, le montant en sortie. Une ligne par élément prévisible. Trois semaines d'horizon au maximum. Une cinquième colonne « statut » (payé, en attente, confirmé, à relancer) pour savoir sur quoi vous pouvez compter vraiment. Rien de plus. Ce n'est pas un bilan comptable, c'est un radar opérationnel."
      ]
    },
    {
      "heading": "Ce que vous voyez et ce que vous actionnez",
      "list": [
        "Semaine 1 : 8 500 euros d'entrées prévues, 6 200 sortantes. Solde estimé : 2 300. Vous respirez et vous allez chercher de l'activité.",
        "Semaine 2 : 3 000 entrées (un client retarde), 5 600 sorties. Solde : -2 600. Vous relancez le client lundi, vous décalez une dépense.",
        "Semaine 3 : inconnu, vous ne la projetez que si vous avez des contrats pluriannuels."
      ]
    },
    {
      "heading": "Les métadonnées qui sauvent votre tableau",
      "paragraphs": [
        "Vous ne notez pas « 3 000 euros » sans contexte. Vous écrivez « Devis approuvé, client Dupont, facture présentée le 10/01 ». Cela vous permet trois choses : de rappeler à ce client le 8 janvier si vous manquez de visibilité, de vérifier que vous n'avez pas compté deux fois la même facture, et d'expliquer à votre comptable pourquoi vous avez prévu quelque chose qu'il ne voit pas encore dans les registres."
      ]
    },
    {
      "heading": "Quand le tableau cesse d'être utile",
      "list": [
        "Vous avez trop de lignes (plus de 30) et vous ne lisez jamais jusqu'au bout.",
        "Vous l'actualisez une fois par mois au lieu de chaque lundi, ce qui le rend obsolète.",
        "Vous incluez des dépenses vraiment variables (essence, petits achats) qui n'aident personne et qui l'alourdissent."
      ]
    },
    {
      "heading": "Une discipline légère pour une visibilité nouvelle",
      "paragraphs": [
        "Si vous mettez à jour votre tableau une fois par lundi matin pendant dix minutes, vous aurez d'ici deux mois une compréhension de votre trésorerie que 80% des dirigeants de TPE n'ont pas. Vous prendrez des décisions sereinement (relancer un client, retarder une commande) au lieu de les vivre comme des crises. Et votre comptable adorera l'ordre."
      ]
    }
  ],
  "faq": [
    {
      "question": "Dois-je prévoir ma trésorerie sur trois mois ou deux semaines ?",
      "answer": "Commencez par deux à quatre semaines pour avoir assez de réaction. Pour les dépenses vraiment fixes et prévisibles (salaires, charges, loyers), vous pouvez voir trois mois. Au-delà, tout est trop incertain pour influencer vos décisions de la semaine."
    }
  ]
};
