import { CONTENT_DATE, SITE_URL } from './site';

export type Lang = 'uz' | 'ru';
export const LANGS: Lang[] = ['uz', 'ru'];

export interface RouteDef {
  /** Uzbek path. The Russian page lives at `/ru` + path (or `/ru` for home). */
  path: string;
  /** Key of the parent page (validated by the PageKey type of `route()`). */
  parent?: string;
  /** noindex pages are excluded from the sitemap and get robots noindex. */
  noindex?: boolean;
  /** Pages about buying numbers show the platform disclaimer under the content. */
  numberPage?: boolean;
  guide?: boolean;
  lastModified?: string;
}

export const ROUTES = {
  home: { path: '/', numberPage: true },

  raqamlar: { path: '/raqamlar', parent: 'home', numberPage: true },
  beeline: { path: '/raqamlar/beeline', parent: 'raqamlar', numberPage: true },
  ucell: { path: '/raqamlar/ucell', parent: 'raqamlar', numberPage: true },
  mobiuz: { path: '/raqamlar/mobiuz', parent: 'raqamlar', numberPage: true },
  uzmobile: { path: '/raqamlar/uzmobile', parent: 'raqamlar', numberPage: true },
  perfectum: { path: '/raqamlar/perfectum', parent: 'raqamlar', numberPage: true },
  humans: { path: '/raqamlar/humans', parent: 'raqamlar', numberPage: true },
  oltin: { path: '/raqamlar/oltin-raqamlar', parent: 'raqamlar', numberPage: true },
  nasiya: { path: '/raqamlar/nasiya', parent: 'raqamlar', numberPage: true },
  bepul: { path: '/raqamlar/bepul-raqamlar', parent: 'raqamlar', numberPage: true },

  username: { path: '/username', parent: 'home' },
  telegram: { path: '/username/telegram', parent: 'username' },
  // TODO(owner): owner must confirm legal/policy review before indexing /username/instagram.
  instagram: { path: '/username/instagram', parent: 'username', noindex: true },
  // TODO(owner): auction rules text is missing; keep noindex until the full rules are filled in.
  auksion: { path: '/username/auksion-qoidalari', parent: 'username', noindex: true },

  maxcoin: { path: '/maxcoin', parent: 'home' },
  maxchat: { path: '/maxchat', parent: 'home' },
  dilerlar: { path: '/dilerlar', parent: 'home', numberPage: true },
  verifikatsiya: { path: '/dilerlar/verifikatsiya', parent: 'dilerlar', numberPage: true },
  xavfsizlik: { path: '/xavfsizlik', parent: 'home', numberPage: true },

  qollanma: { path: '/qollanma', parent: 'home' },
  'g-sotib-olish': { path: '/qollanma/chiroyli-raqam-sotib-olish', parent: 'qollanma', guide: true, numberPage: true },
  'g-pereoformlenie': { path: '/qollanma/raqamni-oz-nomiga-otkazish', parent: 'qollanma', guide: true, numberPage: true },
  'g-oltin-narxi': { path: '/qollanma/oltin-raqam-narxi', parent: 'qollanma', guide: true, numberPage: true },
  'g-nasiya': { path: '/qollanma/nasiyaga-raqam-olish', parent: 'qollanma', guide: true, numberPage: true },
  'g-telegram': { path: '/qollanma/telegram-username-sotib-olish', parent: 'qollanma', guide: true },
  'g-firibgarlik': { path: '/qollanma/firibgarlikdan-saqlanish', parent: 'qollanma', guide: true, numberPage: true },
  'g-diler': { path: '/qollanma/diler-sifatida-raqam-sotish', parent: 'qollanma', guide: true, numberPage: true },
  'g-operator': { path: '/qollanma/raqam-qaysi-operatorga-tegishli', parent: 'qollanma', guide: true, numberPage: true },
  'g-turlari': { path: '/qollanma/chiroyli-raqam-turlari', parent: 'qollanma', guide: true, numberPage: true },

  savollar: { path: '/savollar', parent: 'home' },
  yuklab: { path: '/yuklab-olish', parent: 'home' },
  yangiliklar: { path: '/yangiliklar', parent: 'home', lastModified: '2026-11-17' },
  biz: { path: '/biz-haqimizda', parent: 'home' },
  aloqa: { path: '/aloqa', parent: 'home' },
  maxfiylik: { path: '/maxfiylik', parent: 'home' },
  shartlar: { path: '/shartlar', parent: 'home', numberPage: true },
} satisfies Record<string, RouteDef>;

export type PageKey = keyof typeof ROUTES;
export const PAGE_KEYS = Object.keys(ROUTES) as PageKey[];
export const GUIDE_KEYS = PAGE_KEYS.filter((k) => (ROUTES[k] as RouteDef).guide);

export function route(key: PageKey): RouteDef & { parent?: PageKey } {
  return ROUTES[key] as RouteDef & { parent?: PageKey };
}

/** Localized path for a page key, no trailing slash. */
export function pathFor(key: PageKey, lang: Lang): string {
  return localizePath(route(key).path, lang);
}

/** Turn an Uzbek path into its localized equivalent. */
export function localizePath(uzPath: string, lang: Lang): string {
  if (lang === 'uz') return uzPath;
  const [p, hash] = uzPath.split('#');
  const base = p === '/' ? '/ru' : `/ru${p}`;
  return hash !== undefined ? `${base}#${hash}` : base;
}

/** Absolute canonical URL with no trailing slash. */
export function urlFor(key: PageKey, lang: Lang): string {
  const p = pathFor(key, lang);
  return p === '/' ? SITE_URL : `${SITE_URL}${p}`;
}

export function keyForSlug(slug: string[] | undefined): PageKey | undefined {
  const path = slug && slug.length ? `/${slug.join('/')}` : '/';
  return PAGE_KEYS.find((k) => route(k).path === path);
}

export function slugFor(key: PageKey): string[] {
  const p = route(key).path;
  return p === '/' ? [] : p.slice(1).split('/');
}

export function lastModified(key: PageKey): string {
  return route(key).lastModified ?? CONTENT_DATE;
}

/** Breadcrumb trail from home to the page (inclusive). */
export function trail(key: PageKey): PageKey[] {
  const out: PageKey[] = [];
  let k: PageKey | undefined = key;
  while (k) {
    out.unshift(k);
    k = route(k).parent;
  }
  return out;
}

export function isInternalPath(href: string): boolean {
  return href.startsWith('/') && !href.startsWith('//');
}

export function knownUzPath(href: string): boolean {
  const p = href.split('#')[0];
  return PAGE_KEYS.some((k) => route(k).path === p);
}
