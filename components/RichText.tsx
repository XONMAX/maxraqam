import Link from 'next/link';
import type { ReactNode } from 'react';
import { isInternalPath, localizePath, type Lang } from '@/lib/routes';

const TOKEN = /\*\*([^*]+)\*\*|\[([^\]]+)\]\(([^)\s]+)\)/g;

/** Renders the tiny inline markup used in content files: **bold** and [text](href). */
export function RichText({ text, lang }: { text: string; lang: Lang }) {
  const out: ReactNode[] = [];
  let last = 0;
  let i = 0;
  for (const m of text.matchAll(TOKEN)) {
    if (m.index! > last) out.push(text.slice(last, m.index));
    if (m[1] !== undefined) {
      out.push(<strong key={i++}>{m[1]}</strong>);
    } else {
      const label = m[2];
      const href = m[3];
      if (isInternalPath(href)) {
        out.push(
          <Link key={i++} href={localizePath(href, lang)} prefetch={false}>
            {label}
          </Link>,
        );
      } else {
        out.push(
          <a key={i++} href={href} target="_blank" rel="noopener">
            {label}
          </a>,
        );
      }
    }
    last = m.index! + m[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return <>{out}</>;
}

/** Plain-text version (for alt text, JSON-LD, etc.). */
export function plainText(text: string): string {
  return text.replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');
}
