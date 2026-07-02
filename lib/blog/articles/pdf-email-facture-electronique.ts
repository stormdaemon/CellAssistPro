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
    "La réponse est claire : non, pas vraiment. Envoyer un PDF par email ressemble à de l'électronique, mais ce n'est qu'une apparence. Une vraie facture électronique est structurée de façon à être traitée automatiquement par les systèmes des clients, et doit transiter par une plateforme de dématérialisation agréée. Un PDF reste un simple fichier que seul un humain peut lire utilement. Cette différence fera toute la différence à partir du 1er septembre 2026."
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
      "heading": "Trois formats : le papier, le PDF, et la vraie facture numérique",
      "list": [
        "Format papier : vous recevez une facture physique. Vous la scannez, vous classez le papier original, vous recopiez les données. Temps perdu : 5 minutes par facture.",
        "PDF par email : vous recopiez toujours, mais sans papier à ranger. Temps perdu : 3 minutes par facture. Vous gagnez sur le stockage, pas sur le traitement.",
        "Facture électronique structurée (Factur-X, UBL, CII) : votre logiciel lit directement les données et les importe. Zéro recopie. Temps perdu : 10 secondes pour vérifier. Vous gagnez 4 minutes 50."
      ]
    },
    {
      "heading": "Quand la réforme va vraiment vous affecter",
      "paragraphs": [
        "À partir du 1er septembre 2026, toutes les entreprises, quelle que soit leur taille, devront être en mesure de recevoir des factures électroniques au format structuré (Factur-X, UBL ou CII), via une plateforme de dématérialisation partenaire (PDP) agréée. L'obligation d'émission, elle, est progressive : les grandes entreprises et entreprises de taille intermédiaire devront émettre en format électronique dès le 1er septembre 2026, tandis que les PME, TPE et micro-entreprises auront jusqu'au 1er septembre 2027 pour s'y mettre.",
        "Pour une TPE qui reçoit vingt factures par mois, c'est potentiellement une trentaine d'heures gagnées par an une fois le format structuré généralisé. Mais cela exige que vous passiez par une plateforme agréée capable de recevoir et de traiter ces formats. Beaucoup de petites entreprises n'ont pas encore fait ce choix."
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
        "Demandez-leur : « À partir de septembre 2026, pouvez-vous me facturer au format électronique structuré ? » Certains diront oui, d'autres qu'ils n'y sont pas prêts (les PME, TPE et micro-entreprises ont jusqu'en septembre 2027 pour l'émission). Pour ceux-là, vérifiez que vous avez un plan B (PDF de qualité, portail de gestion des factures, etc.). Vous gagnez du temps en le préparant maintenant plutôt qu'en paniquant en septembre."
      ]
    }
  ],
  "faq": [
    {
      "question": "Un PDF que je reçois par email, puis-je le considérer comme une facture conforme ?",
      "answer": "Légalement, le fisc l'accepte aujourd'hui, à condition que vous le conserviez et que vous démontriez sa traçabilité (qui l'a envoyé, quand, etc.). Mais ce n'est pas une facture électronique au sens de la réforme : à partir du 1er septembre 2026, la facture électronique conforme doit être structurée (Factur-X, UBL ou CII) et transiter par une plateforme de dématérialisation partenaire agréée. Un PDF par email, aussi pratique soit-il, ne remplit pas ces conditions, et vous continuerez à recopier les données manuellement tant qu'il reste votre seul support."
    },
    {
      "question": "Que faire si mon fournisseur n'est pas prêt pour le format électronique en septembre 2026 ?",
      "answer": "Les PME, TPE et micro-entreprises ont jusqu'au 1er septembre 2027 pour se mettre en conformité côté émission ; un fournisseur de petite taille peut donc légitimement ne pas être prêt dès 2026. En attendant, vous avez tout de même l'obligation de pouvoir recevoir des factures électroniques via une plateforme agréée dès septembre 2026. Pour les fournisseurs pas encore prêts, prévoyez un plan B (PDF de qualité, portail de gestion des factures) le temps que la bascule se généralise."
    }
  ]
};
