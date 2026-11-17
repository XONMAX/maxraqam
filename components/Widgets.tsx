import Image from 'next/image';
import Link from 'next/link';
import { getContent } from '@/lib/content';
import { CHANGELOG, COMPANY, APP_STORE_URL, GOOGLE_PLAY_URL, OPERATORS, type OperatorId } from '@/lib/site';
import { GUIDE_KEYS, pathFor, type Lang, type PageKey } from '@/lib/routes';
import { T, formatDate } from '@/lib/i18n';

export function AppleIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" width="20" height="20" focusable="false">
      <path
        fill="currentColor"
        d="M16.37 12.6c-.02-2.2 1.8-3.26 1.88-3.31-1.03-1.5-2.62-1.7-3.18-1.73-1.35-.14-2.65.8-3.33.8-.7 0-1.75-.78-2.88-.76-1.48.02-2.85.86-3.61 2.19-1.54 2.67-.39 6.62 1.1 8.79.74 1.06 1.61 2.25 2.75 2.2 1.11-.04 1.52-.71 2.86-.71 1.33 0 1.71.71 2.87.69 1.19-.02 1.94-1.07 2.66-2.14.85-1.23 1.19-2.43 1.21-2.49-.03-.01-2.31-.89-2.33-3.53zM14.18 6.13c.6-.74 1.01-1.75.9-2.77-.87.04-1.94.59-2.56 1.32-.56.64-1.05 1.68-.92 2.67.97.08 1.97-.49 2.58-1.22z"
      />
    </svg>
  );
}

export function PlayIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" width="20" height="20" focusable="false">
      <path fill="currentColor" d="M4.6 2.3 13.9 12l-9.3 9.7c-.4-.2-.6-.6-.6-1.1V3.4c0-.5.2-.9.6-1.1zm10.4 8.5 2.5-2.6-11-6.3 8.5 8.9zm0 2.4-8.5 8.9 11-6.3-2.5-2.6zm3.8-4.2 2.6 1.5c.8.5.8 1.6 0 2.1l-2.6 1.5-2.7-2.6 2.7-2.5z" />
    </svg>
  );
}

export function StoreButtons({ lang, compact = false }: { lang: Lang; compact?: boolean }) {
  const t = T[lang];
  return (
    <div className="store-buttons">
      <a className="btn btn-store" href={APP_STORE_URL} target="_blank" rel="noopener" aria-label={t.appStore}>
        <AppleIcon />
        <span>{compact ? t.appStoreShort : t.appStore}</span>
      </a>
      <a className="btn btn-store" href={GOOGLE_PLAY_URL} target="_blank" rel="noopener" aria-label={t.googlePlay}>
        <PlayIcon />
        <span>{compact ? t.googlePlayShort : t.googlePlay}</span>
      </a>
    </div>
  );
}

/** Store buttons + QR code per store + device requirements. */
export function Stores({ lang }: { lang: Lang }) {
  const t = T[lang];
  const stores = [
    { href: APP_STORE_URL, label: t.appStore, qr: '/images/qr-app-store.svg', qrAlt: t.qrAppStore, Icon: AppleIcon },
    { href: GOOGLE_PLAY_URL, label: t.googlePlay, qr: '/images/qr-google-play.svg', qrAlt: t.qrGooglePlay, Icon: PlayIcon },
  ];
  return (
    <div className="stores">
      <div className="stores-grid">
        {stores.map(({ href, label, qr, qrAlt, Icon }) => (
          <div className="store-card glass" key={href}>
            <img className="qr" src={qr} alt={qrAlt} width={164} height={164} loading="lazy" decoding="async" />
            <p className="qr-hint">{t.qrHint}</p>
            <a className="btn btn-store" href={href} target="_blank" rel="noopener">
              <Icon />
              <span>{label}</span>
            </a>
          </div>
        ))}
      </div>
      <div className="requirements glass">
        <h3>{t.requirementsTitle}</h3>
        <ul>
          {t.requirements.map((r) => (
            <li key={r}>{r}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function OperatorTable({ lang, only }: { lang: Lang; only?: OperatorId[] }) {
  const t = T[lang];
  const rows = only ? OPERATORS.filter((o) => only.includes(o.id)) : OPERATORS;
  return (
    <div className="table-block">
      <div className="table-wrap" role="region" aria-label={t.opTableCaption} tabIndex={0}>
        <table>
          <caption>{t.opTableCaption}</caption>
          <thead>
            <tr>
              <th scope="col">{t.opOperator}</th>
              <th scope="col">{t.opPrefixes}</th>
              <th scope="col">{t.opUssd}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((o) => (
              <tr key={o.id}>
                <th scope="row">
                  <Link href={pathFor(o.id, lang)} prefetch={false}>
                    {o.name}
                  </Link>
                </th>
                <td>
                  {o.prefixes.map((p) => (
                    <span className="prefix" key={p}>
                      {p}
                    </span>
                  ))}
                </td>
                {/* TODO(owner): add USSD codes for Mobiuz, Uzmobile, Perfectum and Humans if they exist. */}
                <td>{o.ussd ? <code>{o.ussd}</code> : <span className="muted">{t.opUssdUnknown}</span>}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="table-note">{t.opPortability}</p>
    </div>
  );
}

export function Changelog({ lang }: { lang: Lang }) {
  const t = T[lang];
  return (
    <div className="table-wrap" role="region" aria-label={t.clCaption} tabIndex={0}>
      <table className="changelog">
        <caption>{t.clCaption}</caption>
        <thead>
          <tr>
            <th scope="col">{t.clVersion}</th>
            <th scope="col">{t.clDate}</th>
            <th scope="col">{t.clChanges}</th>
          </tr>
        </thead>
        <tbody>
          {CHANGELOG.map((v) => (
            <tr key={v.version} id={`v${v.version.replace(/\./g, '-')}`}>
              <th scope="row">{v.version}</th>
              <td>
                <time dateTime={v.date}>{formatDate(v.date, lang)}</time>
              </td>
              <td>
                <ul className="plain">
                  {v[lang].map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function Contacts({ lang }: { lang: Lang }) {
  const t = T[lang];
  return (
    <dl className="contacts glass">
      <div>
        <dt>{t.contactsCompany}</dt>
        <dd>{COMPANY.legalName}</dd>
      </div>
      <div>
        <dt>{t.contactsDeveloper}</dt>
        <dd>{COMPANY.developer}</dd>
      </div>
      <div>
        <dt>{t.contactsEmail}</dt>
        <dd>
          {COMPANY.emails.map((e, i) => (
            <span key={e}>
              {i > 0 && ', '}
              <a href={`mailto:${e}`}>{e}</a>
            </span>
          ))}
        </dd>
      </div>
      <div>
        <dt>{t.contactsPhone}</dt>
        <dd>
          <a href={`tel:${COMPANY.phoneE164}`}>{COMPANY.phone}</a>
        </dd>
      </div>
      <div>
        <dt>{t.contactsCity}</dt>
        <dd>
          {COMPANY.city[lang]}, {COMPANY.country[lang]}
        </dd>
      </div>
    </dl>
  );
}

export function Disclaimer({ lang }: { lang: Lang }) {
  const t = T[lang];
  return (
    <aside className="disclaimer" aria-label={t.disclaimerTitle}>
      <p>
        <strong>{t.disclaimerTitle}:</strong> {t.disclaimer}
      </p>
    </aside>
  );
}

export function GuideList({ lang, limit }: { lang: Lang; limit?: number }) {
  const t = T[lang];
  const keys = limit ? GUIDE_KEYS.slice(0, limit) : GUIDE_KEYS;
  return (
    <ul className="card-grid guide-list">
      {keys.map((k) => {
        const c = getContent(lang, k);
        return (
          <li key={k} className="card glass">
            <h3>
              <Link href={pathFor(k, lang)} prefetch={false} className="card-link">
                {c.h1}
              </Link>
            </h3>
            <p>{c.description}</p>
            <span className="card-more" aria-hidden="true">
              {t.readGuide} →
            </span>
          </li>
        );
      })}
    </ul>
  );
}

export function RelatedPages({ lang, keys }: { lang: Lang; keys: PageKey[] }) {
  const t = T[lang];
  return (
    <nav className="related" aria-labelledby="related-title">
      <h2 id="related-title">{t.related}</h2>
      <ul className="card-grid">
        {keys.map((k) => {
          const c = getContent(lang, k);
          return (
            <li key={k} className="card glass">
              <h3>
                <Link href={pathFor(k, lang)} prefetch={false} className="card-link">
                  {c.crumb}
                </Link>
              </h3>
              <p>{c.description}</p>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export function ContentImage({ src, alt, width, height }: { src: string; alt: string; width: number; height: number }) {
  return (
    <figure className="content-image">
      <Image src={src} alt={alt} width={width} height={height} sizes="(max-width: 600px) 70vw, 320px" />
    </figure>
  );
}
