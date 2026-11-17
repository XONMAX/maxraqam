import Image from 'next/image';
import Link from 'next/link';
import { getContent } from '@/lib/content';
import { T, formatDate } from '@/lib/i18n';
import { lastModified, pathFor, route, type Lang, type PageKey } from '@/lib/routes';
import { pageSchema } from '@/lib/schema';
import { Blocks } from './Blocks';
import { Breadcrumbs, DownloadCta, Footer, Header } from './Chrome';
import { RichText } from './RichText';
import { SmartStoreLink } from './SmartStoreLink';
import { Disclaimer, RelatedPages, StoreButtons } from './Widgets';

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  );
}

function Lead({ lead, lang }: { lead: string[]; lang: Lang }) {
  return (
    <>
      {lead.map((p, i) => (
        <p key={i} className="lead">
          <RichText text={p} lang={lang} />
        </p>
      ))}
    </>
  );
}

function HomeHero({ k, lang }: { k: PageKey; lang: Lang }) {
  const c = getContent(lang, k);
  const t = T[lang];
  return (
    <div className="hero hero-home">
      <div className="container hero-grid">
        <div className="hero-copy">
          <h1 className="page-title">{c.h1}</h1>
          <Lead lead={c.lead} lang={lang} />
          <div className="hero-actions">
            <SmartStoreLink fallback={pathFor('yuklab', lang)} label={t.ctaButton} className="btn btn-primary" />
            <StoreButtons lang={lang} compact />
          </div>
        </div>
        <div className="hero-visual" aria-hidden="true">
          <div className="hero-orbit" />
          <div className="hero-orbit hero-orbit-2" />
          <Image
            src="/images/maxraqam-logo.webp"
            alt=""
            width={220}
            height={220}
            className="hero-logo"
            loading="eager"
            fetchPriority="high"
          />
        </div>
      </div>
    </div>
  );
}

function PageHero({ k, lang }: { k: PageKey; lang: Lang }) {
  const c = getContent(lang, k);
  const t = T[lang];
  const r = route(k);
  return (
    <div className="hero">
      <div className="container narrow">
        <Breadcrumbs lang={lang} current={k} />
        <h1 className="page-title">{c.h1}</h1>
        {r.guide && (
          <p className="article-meta">
            {t.author} · {t.published}: <time dateTime={lastModified(k)}>{formatDate(lastModified(k), lang)}</time> ·{' '}
            {t.updated}: <time dateTime={lastModified(k)}>{formatDate(lastModified(k), lang)}</time>
          </p>
        )}
        <Lead lead={c.lead} lang={lang} />
      </div>
    </div>
  );
}

export function PageView({ k, lang }: { k: PageKey; lang: Lang }) {
  const c = getContent(lang, k);
  const r = route(k);
  const Body = r.guide ? 'article' : 'div';
  return (
    <>
      <JsonLd data={pageSchema(k, lang)} />
      <Header lang={lang} current={k} />
      <main id="main" tabIndex={-1}>
        <Body className={r.guide ? 'article' : undefined}>
          {k === 'home' ? <HomeHero k={k} lang={lang} /> : <PageHero k={k} lang={lang} />}
          <div className={`container content ${k === 'home' ? '' : 'narrow'}`}>
            <Blocks blocks={c.blocks} lang={lang} />
            {r.numberPage && <Disclaimer lang={lang} />}
          </div>
        </Body>
        <div className="container">
          <RelatedPages lang={lang} keys={c.related} />
        </div>
        <DownloadCta lang={lang} />
      </main>
      <Footer lang={lang} />
    </>
  );
}

const HUBS: PageKey[] = ['raqamlar', 'username', 'maxcoin', 'maxchat', 'dilerlar', 'qollanma', 'savollar', 'yuklab'];

export function NotFoundView({ lang, bilingual = false }: { lang: Lang; bilingual?: boolean }) {
  const t = T[lang];
  const ru = T.ru;
  return (
    <>
      <Header lang={lang} />
      <main id="main" tabIndex={-1}>
        <div className="hero">
          <div className="container narrow">
            <p className="eyebrow">404</p>
            <h1 className="page-title">{t.notFoundTitle}</h1>
            <p className="lead">{t.notFoundText}</p>
            <p>
              <Link href={pathFor('home', lang)} prefetch={false} className="btn btn-primary">
                {t.notFoundHome}
              </Link>
            </p>
            {bilingual && (
              <div lang="ru" className="note">
                <p className="note-title">{ru.notFoundTitle}</p>
                <p>
                  {ru.notFoundText}{' '}
                  <a href={pathFor('home', 'ru')}>{ru.notFoundHome}</a>
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="container">
          <ul className="card-grid">
            {HUBS.map((k) => {
              const c = getContent(lang, k);
              return (
                <li key={k} className="card glass">
                  <h2 className="card-h">
                    <Link href={pathFor(k, lang)} prefetch={false} className="card-link">
                      {c.crumb}
                    </Link>
                  </h2>
                  <p>{c.description}</p>
                </li>
              );
            })}
          </ul>
        </div>
        <DownloadCta lang={lang} />
      </main>
      <Footer lang={lang} />
    </>
  );
}
