/**
 * Content validator. Usage:
 *   npx tsx scripts/check-content.ts                 # all pages, both languages
 *   npx tsx scripts/check-content.ts uz              # one language
 *   npx tsx scripts/check-content.ts ru g-nasiya ... # specific pages
 * Exits with code 1 when any error is found.
 */
import uz from '../content/uz/index';
import ru from '../content/ru/index';
import type { Block, PageContent } from '../content/types';
import { GUIDE_KEYS, PAGE_KEYS, knownUzPath, route, type Lang, type PageKey } from '../lib/routes';

const all: Record<Lang, Record<PageKey, PageContent>> = { uz, ru };
const args = process.argv.slice(2);
const langs: Lang[] = args[0] === 'uz' || args[0] === 'ru' ? [args[0] as Lang] : ['uz', 'ru'];
const onlyKeys = (args[0] === 'uz' || args[0] === 'ru' ? args.slice(1) : args) as PageKey[];
const keys = onlyKeys.length ? onlyKeys : PAGE_KEYS;

let errors = 0;
let warnings = 0;
const err = (lang: Lang, key: string, msg: string) => {
  errors++;
  console.log(`ERROR [${lang}] ${key}: ${msg}`);
};
const warn = (lang: Lang, key: string, msg: string) => {
  warnings++;
  console.log(`warn  [${lang}] ${key}: ${msg}`);
};

function blockTexts(b: Block): string[] {
  switch (b.t) {
    case 'h2':
    case 'h3':
    case 'p':
      return [b.text];
    case 'ul':
    case 'ol':
      return b.items;
    case 'table':
      return [b.caption ?? '', ...b.head, ...b.rows.flat()];
    case 'note':
      return [b.title ?? '', b.text];
    case 'steps':
    case 'cards':
      return b.items.flatMap((i) => [i.title, i.text]);
    case 'faq':
      return b.items.flatMap((i) => [i.q, i.a]);
    case 'image':
      return [b.alt];
    default:
      return [];
  }
}

function pageText(p: PageContent): string {
  return [p.h1, ...p.lead, ...p.blocks.flatMap(blockTexts)].join('\n');
}

const plain = (s: string) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*/g, '');
const words = (s: string) => plain(s).split(/\s+/).filter((w) => /[\p{L}\p{N}]/u.test(w)).length;
const linkRe = /\[([^\]]+)\]\(([^)]+)\)/g;

const FORBIDDEN: [RegExp, string][] = [
  [/maxraqam\.u[z]/i, 'old domain (use maxraqam.mxtr.uz)'],
  [/mc[w]eb/i, 'old mcw-eb domain'],
  [/__NEXT_PUBLIC/i, 'placeholder'],
  [/max[g]ram/i, 'old chat name; use MaxChat'],
  [/\bTODO\b|STUB|lorem ipsum/i, 'TODO/STUB text must not be visible (use code comments)'],
  [/xonddit/i, 'sample placeholder text'],
  [/scroll down/i, 'placeholder text'],
  [/FAQPage|AggregateRating/i, 'forbidden schema mention'],
];
const PRICE_RE = /\d[\d\s.,]*\s?(so['ʻ‘’]?m|сум|\$|usd|долл|dollar)/i;

for (const lang of langs) {
  const seenTitle = new Map<string, string>();
  const seenDesc = new Map<string, string>();
  const seenH1 = new Map<string, string>();
  for (const key of PAGE_KEYS) {
    const p = all[lang][key];
    for (const [m, field] of [
      [seenTitle, p.title],
      [seenDesc, p.description],
      [seenH1, p.h1],
    ] as const) {
      if (m.has(field) && keys.includes(key)) err(lang, key, `duplicate value shared with ${m.get(field)}: "${field}"`);
      m.set(field, key);
    }
  }

  for (const key of keys) {
    const p = all[lang][key];
    if (!p) {
      err(lang, key, 'missing page');
      continue;
    }
    const r = route(key);
    if (p.title.length >= 60) err(lang, key, `title is ${p.title.length} chars (must be < 60): "${p.title}"`);
    if (p.description.length < 140 || p.description.length > 160)
      err(lang, key, `description is ${p.description.length} chars (must be 140–160)`);
    if (!p.h1.trim()) err(lang, key, 'empty h1');
    if (!p.lead.length || !p.lead[0].trim()) err(lang, key, 'empty lead');
    if (p.related.length < 3) err(lang, key, 'needs at least 3 related pages');
    for (const rk of p.related) {
      if (!(rk in all[lang])) err(lang, key, `unknown related key ${rk}`);
      if (rk === key) err(lang, key, 'related contains itself');
    }
    if (new Set(p.related).size !== p.related.length) err(lang, key, 'duplicate related keys');

    const text = [p.title, p.description, p.crumb, pageText(p)].join('\n');
    for (const [re, why] of FORBIDDEN) if (re.test(text)) err(lang, key, `forbidden text (${why})`);
    if (PRICE_RE.test(plain(text))) warn(lang, key, `looks like a price figure: "${plain(text).match(PRICE_RE)![0]}"`);
    if (lang === 'ru' && /[ʻ‘]|\bo'z\b|\bva\b|\buchun\b/.test(plain(pageText(p)))) warn(lang, key, 'Uzbek words on a Russian page?');

    let internal = 0;
    for (const m of pageText(p).matchAll(linkRe)) {
      const href = m[2];
      if (href.startsWith('/')) {
        internal++;
        if (href.startsWith('/ru')) err(lang, key, `write internal links with the Uzbek path (no /ru prefix): ${href}`);
        else if (!knownUzPath(href)) err(lang, key, `unknown internal link ${href}`);
      } else if (!/^https:\/\//.test(href)) err(lang, key, `bad link ${href}`);
    }

    const h2s = p.blocks.filter((b) => b.t === 'h2').length;
    if (r.guide) {
      const wc = words(pageText(p));
      if (wc < 800) err(lang, key, `guide has ${wc} words (needs 800+)`);
      if (h2s < 4) err(lang, key, `guide has only ${h2s} h2 headings`);
      if (internal < 3) err(lang, key, `guide has only ${internal} internal links in the body (needs 3+)`);
      const howTo = lang === 'uz' ? /Ilovada qanday qilinadi/i : /Как это сделать в приложении/i;
      if (!p.blocks.some((b) => b.t === 'h2' && howTo.test(b.text)))
        err(lang, key, `guide needs an h2 "${lang === 'uz' ? 'Ilovada qanday qilinadi' : 'Как это сделать в приложении'}"`);
      if (!p.related.includes('qollanma')) err(lang, key, 'guide must list "qollanma" in related');
    } else if (key !== 'home') {
      if (internal + p.related.length < 3) err(lang, key, 'needs at least 3 links to related pages');
    }
    const firstLead = plain(p.lead[0]);
    if (firstLead.length > 420) warn(lang, key, `first lead paragraph is long (${firstLead.length} chars); answer in 2 sentences`);
    if (lang === 'uz' || lang === 'ru') {
      console.log(`ok    [${lang}] ${key}: title ${p.title.length}, desc ${p.description.length}, words ${words(pageText(p))}, h2 ${h2s}, links ${internal}`);
    }
  }
}

// Operator pages must not be copy-paste of each other.
const OPS: PageKey[] = ['beeline', 'ucell', 'mobiuz', 'uzmobile', 'perfectum', 'humans'];
const shingles = (s: string) => {
  const w = plain(s).toLowerCase().replace(/beeline|ucell|mobiuz|uzmobile|perfectum|humans|\d+/g, 'X').split(/\s+/);
  const set = new Set<string>();
  for (let i = 0; i + 4 <= w.length; i++) set.add(w.slice(i, i + 4).join(' '));
  return set;
};
for (const lang of langs) {
  if (!OPS.some((k) => keys.includes(k))) continue;
  for (let i = 0; i < OPS.length; i++)
    for (let j = i + 1; j < OPS.length; j++) {
      const a = shingles(pageText(all[lang][OPS[i]]));
      const b = shingles(pageText(all[lang][OPS[j]]));
      const inter = [...a].filter((x) => b.has(x)).length;
      const sim = inter / Math.max(1, Math.min(a.size, b.size));
      if (sim > 0.25) err(lang, `${OPS[i]}~${OPS[j]}`, `operator pages are ${(sim * 100).toFixed(0)}% similar; rewrite to be unique`);
    }
}

for (const k of GUIDE_KEYS) void k;
console.log(`\n${errors} error(s), ${warnings} warning(s)`);
process.exit(errors ? 1 : 0);
