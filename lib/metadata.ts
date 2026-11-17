import type { Metadata } from 'next';
import { getContent } from './content';
import { OG_LOCALE } from './i18n';
import { lastModified, route, urlFor, type Lang, type PageKey } from './routes';
import { OG_IMAGE, SITE_NAME } from './site';

export function pageMetadata(key: PageKey, lang: Lang): Metadata {
  const c = getContent(lang, key);
  const r = route(key);
  const url = urlFor(key, lang);
  const image = { url: OG_IMAGE[lang].url, width: OG_IMAGE.width, height: OG_IMAGE.height, alt: OG_IMAGE[lang].alt };
  const other: Lang = lang === 'uz' ? 'ru' : 'uz';
  return {
    title: { absolute: c.title },
    description: c.description,
    alternates: {
      canonical: url,
      languages: { uz: urlFor(key, 'uz'), ru: urlFor(key, 'ru'), 'x-default': urlFor(key, 'uz') },
    },
    openGraph: {
      ...(r.guide
        ? { type: 'article', publishedTime: lastModified(key), modifiedTime: lastModified(key) }
        : { type: 'website' }),
      siteName: SITE_NAME,
      title: c.title,
      description: c.description,
      url,
      locale: OG_LOCALE[lang],
      alternateLocale: [OG_LOCALE[other]],
      images: [image],
    },
    twitter: {
      card: 'summary_large_image',
      title: c.title,
      description: c.description,
      images: [{ url: image.url, alt: image.alt }],
    },
    robots: r.noindex
      ? { index: false, follow: true }
      : { index: true, follow: true, 'max-image-preview': 'large' },
  };
}
