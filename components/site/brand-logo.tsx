import Link from "next/link";
import { SITE } from "@/lib/site-data";

type BrandLogoProps = {
  inverted?: boolean;
};

export function BrandLogo({ inverted = false }: BrandLogoProps) {
  return (
    <Link className="brand-logo" href="/" aria-label="Accueil CelAssistPro">
      <svg className="brand-logo__mark" viewBox="0 0 82 96" aria-hidden="true">
        <path
          className="brand-logo__flame brand-logo__flame--outer"
          d="M41 3C22 18 11 35 11 54c0 22 14 36 30 39 16-3 30-17 30-39C71 35 60 18 41 3Z"
        />
        <path
          className="brand-logo__flame brand-logo__flame--left"
          d="M34 20C20 34 17 45 21 58c3 10 10 17 20 20-8-12-7-23 2-34 4-5 5-12-9-24Z"
        />
        <path
          className="brand-logo__flame brand-logo__flame--right"
          d="M45 15c16 17 20 32 12 47-4 8-11 13-20 16 5-8 6-15 4-22-3-9 0-18 4-41Z"
        />
        <path
          className="brand-logo__flame brand-logo__flame--core"
          d="M42 42c8 9 10 17 6 25-2 5-6 8-12 10-5-8-5-16 1-24 2-3 4-7 5-11Z"
        />
      </svg>
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
