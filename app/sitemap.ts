import type { MetadataRoute } from 'next';
import { LANGS, PAGE_KEYS, lastModified, route, urlFor } from '@/lib/routes';

// Every indexable uz + ru page with absolute URLs and hreflang alternates.
// noindex pages (e.g. /username/instagram) and the 404 page are excluded.
export default function sitemap(): MetadataRoute.Sitemap {
  return PAGE_KEYS.filter((k) => !route(k).noindex).flatMap((k) =>
    LANGS.map((lang) => ({
      url: urlFor(k, lang),
      lastModified: lastModified(k),
      alternates: {
        languages: { uz: urlFor(k, 'uz'), ru: urlFor(k, 'ru'), 'x-default': urlFor(k, 'uz') },
      },
    })),
  );
}
