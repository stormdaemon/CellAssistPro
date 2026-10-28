import Link from "next/link";
import type { ReactNode } from "react";

const LINK_PATTERN = /\[([^\]]+)\]\(([^)\s]+)\)/g;

type RichTextProps = {
  text: string;
};

/**
 * Rend un texte qui contient des liens `[ancre](url)` : chemin interne → <Link>,
 * adresse externe (sources officielles…) → <a> ouvert dans un nouvel onglet.
 */
export function RichText({ text }: RichTextProps) {
  const parts: ReactNode[] = [];
  let cursor = 0;

  for (const match of text.matchAll(LINK_PATTERN)) {
    const [whole, label, href] = match;
    const start = match.index;

    if (start > cursor) {
      parts.push(text.slice(cursor, start));
    }

    parts.push(
      href.startsWith("/") ? (
        <Link href={href} key={start}>
          {label}
        </Link>
      ) : (
        <a href={href} key={start} rel="noopener" target="_blank">
          {label}
        </a>
      ),
    );
    cursor = start + whole.length;
  }

  if (cursor < text.length) {
    parts.push(text.slice(cursor));
  }

  return <>{parts}</>;
}
