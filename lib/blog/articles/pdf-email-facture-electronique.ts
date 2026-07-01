import type { BlogArticle } from "../types";

export const article: BlogArticle = {
  "slug": "pdf-email-facture-electronique",
  "title": "Un PDF envoyé par email est-il une facture électronique ?",
  "description": "Un PDF envoyé par email n'est pas forcément une facture électronique conforme : le circuit et le format comptent.",
  "category": "Facturation électronique",
  "keyword": "PDF facture électronique",
  "datePublished": "2026-06-12",
  "dateModified": "2026-07-01",
  "intro": [
    "La réponse compte : pas vraiment. Envoyer un PDF par email ressemble à de l'électronique, mais ce n'est qu'une apparence. Une vraie facture électronique est structurée de façon à être traitée automatiquement par les systèmes des clients. Un PDF reste un fichier image de texte que seul l'humain peut lire utilement. Cette différence fera toute la différence à partir de septembre 2026."
  ],
  "sections": [
    {
      "heading": "Le malentendu entre « électronique » et « automatisable »",
      "paragraphs": [
        "Beaucoup de dirigeants se rassurent en pensant : « Je ne suis pas concerné, j'envoie déjà mes factures par email ». Mais la réforme 2026 n'exige pas juste que la facture soit électronique au sens « fichier numérique ». Elle exige qu'elle soit structurée de sorte que le système de comptabilité du client puisse en extraire automatiquement les données : le montant, la date, l'échéance, votre numéro de client, la description, etc.",
        "Un PDF n'est qu'une image. Votre logiciel de comptabilité ne peut pas en lire les chiffres sans assistance humaine. Donc, chaque facture PDF reçue doit être recopiée manuellement (ou lue par un OCR imparfait) avant d'être enregistrée. C'est là où le temps se perd. Et c'est précisément ce que la facturation électronique conforme est censée éviter."
      ]
    },
    {
      "heading": "Trois formats : le papier, le PDF, et la vrai facture numérique",
      "list": [
        "Format papier : vous recevez une facture physique. Vous la scannez, vous classez le papier original, vous recopiez les données. Temps perdu : 5 minutes par facture.",
        "PDF par email : vous recopiez toujours, mais sans papier à ranger. Temps perdu : 3 minutes par facture. Vous gagnez sur le stockage, pas sur le traitement.",
        "Facture électronique structurée (Factur-X, UBL) : votre logiciel lit directement les données et les importe. Zéro recopie. Temps perdu : 10 secondes pour vérifier. Vous gagner 4 minutes 50."
      ]
    },
    {
      "heading": "Quand la réforme va vraiment vous affecter",
      "paragraphs": [
        "À partir du 1er septembre 2026, l'État français imposera que les factures B2B (entre entreprises) soient émises en format électronique structuré. Cela signifie que vos fournisseurs devront vous envoyer du Factur-X ou de l'UBL, pas du PDF. Et que vous devrez accepter ce format.",
        "Pour une TPE qui reçoit vingt factures par mois, c'est une trentaine d'heures gagnées par an. Mais cela exige que vous ayez un logiciel capable de recevoir et traiter ces formats. Beaucoup de petites entreprises n'en ont pas encore."
      ]
    },
    {
      "heading": "Trois étapes pour vous préparer avant septembre 2026",
      "paragraphs": [
        "Étape 1 : Auditez votre réception de factures. Où les recevez-vous ? Papier, email, portail fournisseur ? Combien en recevez-vous chaque mois ? Quelle part est copiée manuellement ?"
      ]
    },
    {
      "heading": "Étape 2 : Vérifiez la capacité de votre logiciel",
      "paragraphs": [
        "Appelez votre expert-comptable ou le support de votre logiciel de gestion. Pouvez-vous importer des factures au format Factur-X ou UBL ? Si non, que devez-vous faire ? Changer d'outil ? Installer un module supplémentaire ? C'est la question la plus importante."
      ]
    },
    {
      "heading": "Étape 3 : Contactez les fournisseurs clés",
      "paragraphs": [
        "Demandez-leur : « À partir de septembre, pouvez-vous me facturer au format électronique structuré ? » Certains diront oui, d'autres qu'ils n'y sont pas prêts. Pour ceux-là, vérifiez que vous avez un plan B (PDF de qualité, portail de paiement, etc.). Vous gagnez du temps en le préparant maintenant plutôt que de paniques en septembre."
      ]
    }
  ],
  "faq": [
    {
      "question": "Un PDF que je reçois par email, puis-je le considérer comme une facture conforme ?",
      "answer": "Légalement ? Le fisc l'accepte, à condition que vous le conserviez et que vous démontriez son traçabilité (qui l'a envoyé, quand, etc.). Techniquement ? Non, ce n'est pas une facture électronique conforme à la réforme 2026, et vous continuerez à recopier les données manuellement."
    },
    {
      "question": "Que faire si mon fournisseur n'est pas prêt pour le format électronique en septembre ?",
      "answer": "Des exceptions existent pour les TPE fournisseurs (moins de 10 salariés) jusqu'en décembre 2026. Pour les autres, vous avez le droit d'exiger un format conforme ou de chercher un fournisseur alternatif. En pratique, beaucoup offriront du PDF optimisé ou un portail de gestion des factures : ce n'est pas la norme, mais c'est un pis-aller qui reste manuel."
    }
  ]
};
