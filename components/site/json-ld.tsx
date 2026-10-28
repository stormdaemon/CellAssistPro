type JsonLdProps = {
  data: object;
};

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      // Échappe « < » pour qu'un texte ne puisse jamais fermer la balise <script>.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
