import { getContent } from './content';
import { route, trail, urlFor, lastModified, type Lang, type PageKey } from './routes';
import { APP_STORE_URL, COMPANY, GOOGLE_PLAY_URL, LOGO_URL, OG_IMAGE, SITE_NAME, SITE_URL } from './site';

const ORG_ID = `${SITE_URL}/#organization`;

export function organization() {
  return {
    '@type': 'Organization',
    '@id': ORG_ID,
    name: SITE_NAME,
    legalName: COMPANY.legalName,
    url: SITE_URL,
    logo: { '@type': 'ImageObject', url: LOGO_URL, width: 512, height: 512 },
    email: COMPANY.emails[0],
    telephone: COMPANY.phoneE164,
    address: { '@type': 'PostalAddress', addressLocality: COMPANY.city.en, addressCountry: COMPANY.country.code },
    sameAs: [APP_STORE_URL, GOOGLE_PLAY_URL],
  };
}

function mobileApp(lang: Lang) {
  const c = getContent(lang, 'yuklab');
  return {
    '@type': 'MobileApplication',
    '@id': `${SITE_URL}/#app`,
    name: SITE_NAME,
    description: c.description,
    operatingSystem: 'iOS, Android',
    applicationCategory: 'ShoppingApplication',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'UZS' },
    installUrl: [APP_STORE_URL, GOOGLE_PLAY_URL],
    image: LOGO_URL,
    publisher: { '@id': ORG_ID },
  };
}

function breadcrumbs(key: PageKey, lang: Lang) {
  return {
    '@type': 'BreadcrumbList',
    '@id': `${urlFor(key, lang)}#breadcrumb`,
    itemListElement: trail(key).map((k, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: getContent(lang, k).crumb,
      item: urlFor(k, lang),
    })),
  };
}

function article(key: PageKey, lang: Lang) {
  const c = getContent(lang, key);
  const date = lastModified(key);
  return {
    '@type': 'Article',
    '@id': `${urlFor(key, lang)}#article`,
    headline: c.h1.slice(0, 110),
    description: c.description,
    datePublished: date,
    dateModified: date,
    author: { '@id': ORG_ID },
    publisher: { '@id': ORG_ID },
    image: OG_IMAGE[lang].url,
    inLanguage: lang,
    mainEntityOfPage: urlFor(key, lang),
  };
}

/** JSON-LD graph for a page. Only real data; no Review/AggregateRating/FAQPage/HowTo. */
export function pageSchema(key: PageKey, lang: Lang) {
  const graph: object[] = [organization()];
  if (key === 'home') {
    graph.push({
      '@type': 'WebSite',
      '@id': `${urlFor('home', lang)}#website`,
      name: SITE_NAME,
      url: urlFor('home', lang),
      inLanguage: lang,
      publisher: { '@id': ORG_ID },
    });
  }
  if (key === 'home' || key === 'yuklab') graph.push(mobileApp(lang));
  if (key !== 'home') graph.push(breadcrumbs(key, lang));
  if (route(key).guide) graph.push(article(key, lang));
  return { '@context': 'https://schema.org', '@graph': graph };
}
