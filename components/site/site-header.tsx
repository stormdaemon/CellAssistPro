import Link from "next/link";
import { Menu } from "lucide-react";
import { BrandLogo } from "@/components/site/brand-logo";
import { NAVIGATION, SITE } from "@/lib/site-data";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <BrandLogo inverted />

        <nav className="site-nav site-nav--desktop" aria-label="Navigation principale">
          {NAVIGATION.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <a className="button button--gold site-header__cta" href={SITE.calendlyUrl}>
          Mon diagnostic gratuit
        </a>

        <details className="mobile-nav">
          <summary aria-label="Ouvrir le menu">
            <Menu aria-hidden="true" />
          </summary>
          <nav aria-label="Navigation mobile">
            {NAVIGATION.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
            <a className="button button--gold" href={SITE.calendlyUrl}>
              Mon diagnostic gratuit
            </a>
          </nav>
        </details>
      </div>
    </header>
  );
}
