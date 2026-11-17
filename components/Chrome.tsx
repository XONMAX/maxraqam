import Image from 'next/image';
import Link from 'next/link';
import { getContent } from '@/lib/content';
import { FOOTER_GROUPS, NAV, T } from '@/lib/i18n';
import { pathFor, trail, type Lang, type PageKey } from '@/lib/routes';
import { COMPANY, PRIVACY_POLICY_URL } from '@/lib/site';
import { MobileNav } from './MobileNav';
import { SmartStoreLink } from './SmartStoreLink';
import { StoreButtons } from './Widgets';

export function SkipLink({ lang }: { lang: Lang }) {
  return (
    <a className="skip-link" href="#main">
      {T[lang].skip}
    </a>
  );
}

export function Header({ lang, current }: { lang: Lang; current?: PageKey }) {
  const t = T[lang];
  const active = current ? trail(current) : [];
  const uzHref = current ? pathFor(current, 'uz') : '/';
  const ruHref = current ? pathFor(current, 'ru') : '/ru';
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href={pathFor('home', lang)} prefetch={false} className="brand" aria-label={t.homeLabel}>
          <Image src="/images/maxraqam-logo.webp" alt="" width={32} height={32} className="brand-logo" />
          <span className="brand-name">MaxRaqam</span>
        </Link>
        <MobileNav navLabel={t.mainNav} openLabel={t.openMenu} closeLabel={t.closeMenu}>
          <ul className="nav-list">
            {NAV.map((n) => (
              <li key={n.key}>
                <Link
                  href={pathFor(n.key, lang)}
                  prefetch={false}
                  className={n.key === 'yuklab' ? 'nav-link nav-link-cta' : 'nav-link'}
                  aria-current={current === n.key ? 'page' : active.includes(n.key) ? 'true' : undefined}
                >
                  {n[lang]}
                </Link>
              </li>
            ))}
          </ul>
        </MobileNav>
        <div className="lang-switch" role="group" aria-label={t.langSwitch}>
          <a href={uzHref} hrefLang="uz" lang="uz" aria-current={lang === 'uz' ? 'true' : undefined}>
            <abbr title="O'zbekcha">UZ</abbr>
          </a>
          <span aria-hidden="true">|</span>
          <a href={ruHref} hrefLang="ru" lang="ru" aria-current={lang === 'ru' ? 'true' : undefined}>
            <abbr title="Русский">RU</abbr>
          </a>
        </div>
      </div>
    </header>
  );
}

export function Breadcrumbs({ lang, current }: { lang: Lang; current: PageKey }) {
  const items = trail(current);
  return (
    <nav className="breadcrumbs" aria-label={T[lang].breadcrumbs}>
      <ol>
        {items.map((k, i) => {
          const label = getContent(lang, k).crumb;
          const last = i === items.length - 1;
          return (
            <li key={k}>
              {last ? (
                <span aria-current="page">{label}</span>
              ) : (
                <Link href={pathFor(k, lang)} prefetch={false}>
                  {label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export function DownloadCta({ lang }: { lang: Lang }) {
  const t = T[lang];
  return (
    <section className="download-cta" aria-labelledby="download-cta-title">
      <div className="container">
        <div className="download-cta-inner glass">
          <Image src="/images/maxraqam-logo.webp" alt="" width={56} height={56} className="cta-logo" />
          <h2 id="download-cta-title" className="cta-title">
            {t.ctaTitle}
          </h2>
          <p className="cta-text">{t.ctaText}</p>
          <SmartStoreLink fallback={pathFor('yuklab', lang)} label={t.ctaButton} className="btn btn-primary" />
          <StoreButtons lang={lang} compact />
        </div>
      </div>
    </section>
  );
}

export function Footer({ lang }: { lang: Lang }) {
  const t = T[lang];
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link href={pathFor('home', lang)} prefetch={false} className="brand" aria-label={t.homeLabel}>
              <Image src="/images/maxraqam-logo.webp" alt="" width={32} height={32} className="brand-logo" />
              <span className="brand-name">MaxRaqam</span>
            </Link>
            <p>{t.footerAbout}</p>
            <StoreButtons lang={lang} compact />
          </div>
          {FOOTER_GROUPS.map((g) => (
            <div key={g.title.uz} className="footer-col">
              <h2 className="footer-title">{g.title[lang]}</h2>
              <ul>
                {g.keys.map((k) => (
                  <li key={k}>
                    <Link href={pathFor(k, lang)} prefetch={false}>
                      {getContent(lang, k).crumb}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="footer-col">
            <h2 className="footer-title">{t.footerContacts}</h2>
            <ul>
              {COMPANY.emails.map((e) => (
                <li key={e}>
                  <a href={`mailto:${e}`}>{e}</a>
                </li>
              ))}
              <li>
                <a href={`tel:${COMPANY.phoneE164}`}>{COMPANY.phone}</a>
              </li>
              <li>
                {COMPANY.city[lang]}, {COMPANY.country[lang]}
              </li>
            </ul>
          </div>
        </div>
        <p className="footer-disclaimer">
          <strong>{t.disclaimerTitle}:</strong> {t.disclaimer}
        </p>
        <div className="footer-bottom">
          <p>
            © {year} {COMPANY.legalName}
          </p>
          <ul className="footer-legal">
            <li>
              <Link href={pathFor('maxfiylik', lang)} prefetch={false}>
                {t.privacy}
              </Link>
            </li>
            <li>
              <Link href={pathFor('shartlar', lang)} prefetch={false}>
                {t.terms}
              </Link>
            </li>
            <li>
              <a href={PRIVACY_POLICY_URL} target="_blank" rel="noopener">
                {t.privacyFull}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
