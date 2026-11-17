# MaxRaqam — official website

Informational website for the **MaxRaqam** app: a marketplace where independent dealers offer memorable
("chiroyli", "oltin", "VIP") mobile numbers in Uzbekistan, plus live Telegram/Instagram username auctions,
MaxCoin and MaxChat. Live at **https://maxraqam.mxtr.uz**. Numbers and usernames are bought in the app;
the site has no catalog, login or payments.

Built with **Next.js (App Router)**. Every page is statically prerendered (server-rendered HTML).

## Languages and URLs

- Uzbek (Latin) is the default at `/` — `<html lang="uz">`.
- Russian mirrors every page under `/ru/...` — `<html lang="ru">`.
- Two root layouts: `app/(uz)/layout.tsx` and `app/(ru)/layout.tsx`.
- Unknown URLs get `app/global-not-found.tsx` (HTTP 404, bilingual).

## Where things live

| Path | What |
|---|---|
| `lib/site.ts` | Domain (hardcoded), store links, company facts, operators/prefixes, version history |
| `lib/routes.ts` | Page registry: key → Uzbek path, parent (breadcrumbs), noindex, guide flags |
| `content/uz/*.ts`, `content/ru/*.ts` | Page content (title, description, H1, lead, blocks, related pages) |
| `content/types.ts` | Content block types (`p`, `h2`, `ul`, `table`, `steps`, `cards`, `faq`, `operators`, …) |
| `components/` | Rendering: header/footer/CTA (`Chrome.tsx`), blocks, widgets, page view |
| `lib/metadata.ts`, `lib/schema.ts` | `<head>` metadata (canonical, hreflang, OG, Twitter) and JSON-LD |
| `app/sitemap.ts`, `app/robots.ts`, `app/llms.txt/route.ts`, `app/manifest.ts` | Crawling files |
| `app/(uz)/**/page.tsx`, `app/(ru)/ru/**/page.tsx` | Generated route files — run `npm run generate:routes` after adding a page to `lib/routes.ts` |

## Adding or editing a page

1. Add the key and Uzbek path to `lib/routes.ts` (skip if editing).
2. Create/edit `content/uz/<key>.ts` and `content/ru/<key>.ts`, and register new files in `content/<lang>/index.ts`.
3. `npm run generate:routes` (new pages only).
4. `npm run check:content` — checks title < 60 chars, description 140–160 chars, links, guide length (800+ words),
   duplicates, operator-page similarity and forbidden text.
5. `npm run build`.

Internal links in content use the Uzbek path (`[text](/raqamlar/ucell)`); the renderer adds `/ru` on Russian pages.
Unknown facts are left as `// TODO(owner): …` comments, never as visible text.

## Develop

```bash
npm install
npm run dev
```

## Deploy

Vercel with the Next.js preset (`vercel.json`). Optional env var: `GOOGLE_SITE_VERIFICATION`.
