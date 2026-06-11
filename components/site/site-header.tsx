"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { BrandLogo } from "@/components/site/brand-logo";
import { NAVIGATION, SITE } from "@/lib/site-data";

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    function closeOnOutsidePointer(event: PointerEvent) {
      const target = event.target;

      if (target instanceof Node && !headerRef.current?.contains(target)) {
        setIsOpen(false);
      }
    }

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener("pointerdown", closeOnOutsidePointer);
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.removeEventListener("pointerdown", closeOnOutsidePointer);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [isOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === href : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="site-header" ref={headerRef}>
      <div className="site-header__inner">
        <BrandLogo inverted />

        <nav className="site-nav site-nav--desktop" aria-label="Navigation principale">
          {NAVIGATION.map((item) => (
            <Link
              aria-current={isActive(item.href) ? "page" : undefined}
              className={isActive(item.href) ? "site-nav__link site-nav__link--active" : "site-nav__link"}
              key={item.href}
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <a className="button button--gold site-header__cta" href={SITE.calendlyUrl}>
          Mon diagnostic gratuit
        </a>

        <div className={isOpen ? "mobile-nav mobile-nav--open" : "mobile-nav"}>
          <button
            className="mobile-nav__toggle"
            type="button"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
            onClick={() => setIsOpen((current) => !current)}
          >
            {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
          <nav aria-hidden={!isOpen} aria-label="Navigation mobile" id="mobile-menu">
            {NAVIGATION.map((item) => (
              <Link
                aria-current={isActive(item.href) ? "page" : undefined}
                className={isActive(item.href) ? "mobile-nav__link mobile-nav__link--active" : "mobile-nav__link"}
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                tabIndex={isOpen ? 0 : -1}
              >
                {item.label}
              </Link>
            ))}
            <a
              className="button button--gold"
              href={SITE.calendlyUrl}
              onClick={() => setIsOpen(false)}
              tabIndex={isOpen ? 0 : -1}
            >
              Mon diagnostic gratuit
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
