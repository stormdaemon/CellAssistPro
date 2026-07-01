import Link from "next/link";
import Image from "next/image";
import { SITE } from "@/lib/site-data";

type BrandLogoProps = {
  inverted?: boolean;
};

export function BrandLogo({ inverted = false }: BrandLogoProps) {
  return (
    <Link className="brand-logo" href="/" aria-label="Accueil CelAssistPro">
      <Image
        className="brand-logo__mark"
        src="/images/logos/celassistpro-flame-240.png"
        alt=""
        width={240}
        height={455}
        priority
      />
      <span className="brand-logo__text">
        <span className={inverted ? "brand-logo__name brand-logo__name--light" : "brand-logo__name"}>
          {SITE.name}
        </span>
        <span className={inverted ? "brand-logo__tagline brand-logo__tagline--light" : "brand-logo__tagline"}>
          {SITE.tagline}
        </span>
      </span>
    </Link>
  );
}
