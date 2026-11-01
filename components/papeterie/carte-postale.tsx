import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { fr } from "@/lib/typo";

type CartePostaleProps = {
  citation: string;
  signature: string;
};

/** Le témoignage : une carte postale qui se retourne au défilement et penche vers le pointeur. */
export function CartePostale({ citation, signature }: CartePostaleProps) {
  return (
    <section
      className="section section--cream testimonial-band"
      data-chemise="ciel"
      data-defile="entree"
    >
      <div className="container">
        <div className={citation.length > 120 ? "carte-postale carte-postale--longue" : "carte-postale"} data-incline="">
          <div className="carte-postale__tourne">
            <div aria-hidden="true" className="carte-postale__recto">
              <span>Bons baisers</span>
              <strong>de Charente</strong>
            </div>
            <div className="carte-postale__verso">
              <div className="carte-postale__message">
                <blockquote>«&nbsp;{fr(citation)}&nbsp;»</blockquote>
                <p>{fr(signature)}</p>
              </div>
              <div className="carte-postale__adresse">
                <span aria-hidden="true" className="carte-postale__timbre">
                  <Image
                    src="/images/logos/celassistpro-flame-240.png"
                    alt=""
                    width={240}
                    height={455}
                  />
                </span>
                <span aria-hidden="true" className="carte-postale__cachet">
                  Champagne-Vigny · Charente
                </span>
                <span aria-hidden="true" className="carte-postale__lignes">
                  <span>À vous,</span>
                  <span>dirigeant débordé</span>
                </span>
                <Link className="lien-fleche" href="/cas-concrets">
                  Voir tous les retours clients <ArrowRight aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
