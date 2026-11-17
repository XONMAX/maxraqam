import type { Metadata } from 'next';
import './globals.css';
import { NotFoundView } from '@/components/PageView';
import { jakarta } from '@/lib/fonts';
import { T } from '@/lib/i18n';
import { SkipLink } from '@/components/Chrome';

// Global 404 (HTTP 404) for every unknown URL. Bilingual: Uzbek first, with a Russian section.
export const metadata: Metadata = {
  title: { absolute: `${T.uz.notFoundMeta} / ${T.ru.notFoundTitle}` },
  description: T.uz.notFoundText,
};

export default function GlobalNotFound() {
  return (
    <html lang="uz" className={jakarta.variable}>
      <body>
        <SkipLink lang="uz" />
        <NotFoundView lang="uz" bilingual />
      </body>
    </html>
  );
}
