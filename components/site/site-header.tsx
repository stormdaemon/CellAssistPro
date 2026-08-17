"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { BrandLogo } from "@/components/site/brand-logo";
import { CTA, NAVIGATION, SITE } from "@/lib/site-data";

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!isOpen && !openGroup) {
      return;
    }

    function closeOnOutsidePointer(event: PointerEvent) {
      const target = event.target;

      if (target instanceof Node && !headerRef.current?.contains(target)) {
        setIsOpen(false);
        setOpenGroup(null);
      }
    }

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
        setOpenGroup(null);
      }
    }

    document.addEventListener("pointerdown", closeOnOutsidePointer);
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.removeEventListener("pointerdown", closeOnOutsidePointer);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [isOpen, openGroup]);

  const isActive = (href: string) =>
    href === "/" ? pathname === href : pathname === href || pathname.startsWith(`${href}/`);

  const closeAll = () => {
    setIsOpen(false);
    setOpenGroup(null);
  };

  return (
    <header className="site-header" ref={headerRef}>
      <div className="site-header__inner">
        <BrandLogo inverted />

        <nav className="site-nav site-nav--desktop" aria-label="Navigation principale">
          {NAVIGATION.map((item) => {
            if (!item.children) {
              return (
                <Link
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={
                    isActive(item.href) ? "site-nav__link site-nav__link--active" : "site-nav__link"
                  }
                  key={item.href}
                  href={item.href}
                >
                  {item.label}
                </Link>
              );
            }

            const groupIsActive = item.children.some((child) => isActive(child.href));

            return (
              <div
                className="site-nav__group"
                key={item.label}
                onMouseEnter={() => setOpenGroup(item.label)}
                onMouseLeave={() => setOpenGroup(null)}
              >
                <button
                  aria-expanded={openGroup === item.label}
                  aria-haspopup="true"
                  className={
                    groupIsActive ? "site-nav__link site-nav__link--active" : "site-nav__link"
                  }
                  onClick={() =>
                    setOpenGroup((current) => (current === item.label ? null : item.label))
                  }
                  type="button"
                >
                  {item.label}
                  <ChevronDown aria-hidden="true" />
                </button>
                <div
                  className={
                    openGroup === item.label
                      ? "site-nav__submenu site-nav__submenu--open"
                      : "site-nav__submenu"
                  }
                >
                  {item.children.map((child) => (
                    <Link
                      aria-current={isActive(child.href) ? "page" : undefined}
                      key={child.href}
                      href={child.href}
                      onClick={closeAll}
                      tabIndex={openGroup === item.label ? 0 : -1}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </nav>

        <a className="button button--gold site-header__cta" href={SITE.calendlyUrl}>
          {CTA.primaryShort}
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
            {NAVIGATION.flatMap((item) => (item.children ? item.children : [item])).map((item) => (
              <Link
                aria-current={isActive(item.href) ? "page" : undefined}
                className={
                  isActive(item.href) ? "mobile-nav__link mobile-nav__link--active" : "mobile-nav__link"
                }
                key={item.href}
                href={item.href}
                onClick={closeAll}
                tabIndex={isOpen ? 0 : -1}
              >
                {item.label}
              </Link>
            ))}
            <Link
              className="mobile-nav__link"
              href="/diagnostic"
              onClick={closeAll}
              tabIndex={isOpen ? 0 : -1}
            >
              {CTA.secondary}
            </Link>
            <a
              className="button button--gold"
              href={SITE.calendlyUrl}
              onClick={closeAll}
              tabIndex={isOpen ? 0 : -1}
            >
              {CTA.primaryShort}
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
