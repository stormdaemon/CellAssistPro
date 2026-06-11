import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/site-data";

type BrandLogoProps = {
  inverted?: boolean;
};

export function BrandLogo({ inverted = false }: BrandLogoProps) {
  return (
    <Link className="brand-logo" href="/" aria-label="Accueil CelAssistPro">
      <Image
        src="/images/logos/celassistpro-logo.webp"
        alt=""
        width={64}
        height={64}
        className="brand-logo__mark"
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
