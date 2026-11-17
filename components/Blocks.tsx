import Link from 'next/link';
import type { Block } from '@/content/types';
import { isInternalPath, localizePath, type Lang } from '@/lib/routes';
import { RichText, plainText } from './RichText';
import { Changelog, Contacts, ContentImage, Disclaimer, GuideList, OperatorTable, Stores } from './Widgets';

export function slugify(s: string): string {
  return plainText(s)
    .toLowerCase()
    .replace(/['ʻ‘’`]/g, '')
    .replace(/[^\p{L}\p{N}]+/gu, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 60);
}

function BlockView({ b, lang }: { b: Block; lang: Lang }) {
  const R = ({ s }: { s: string }) => <RichText text={s} lang={lang} />;
  switch (b.t) {
    case 'h2':
      return null; // rendered by the section wrapper
    case 'h3':
      return (
        <h3>
          <R s={b.text} />
        </h3>
      );
    case 'p':
      return (
        <p>
          <R s={b.text} />
        </p>
      );
    case 'ul':
      return (
        <ul className="list">
          {b.items.map((it, i) => (
            <li key={i}>
              <R s={it} />
            </li>
          ))}
        </ul>
      );
    case 'ol':
      return (
        <ol className="list">
          {b.items.map((it, i) => (
            <li key={i}>
              <R s={it} />
            </li>
          ))}
        </ol>
      );
    case 'table':
      return (
        <div className="table-wrap" role="region" aria-label={b.caption ? plainText(b.caption) : undefined} tabIndex={0}>
          <table>
            {b.caption && (
              <caption>
                <R s={b.caption} />
              </caption>
            )}
            <thead>
              <tr>
                {b.head.map((h, i) => (
                  <th key={i} scope="col">
                    <R s={h} />
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {b.rows.map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) =>
                    j === 0 ? (
                      <th key={j} scope="row">
                        <R s={cell} />
                      </th>
                    ) : (
                      <td key={j} className={/^[X\d\s+*#()-]+$/.test(cell) ? 'nowrap' : undefined}>
                        <R s={cell} />
                      </td>
                    ),
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case 'note':
      return (
        <div className={`note ${b.tone === 'warn' ? 'note-warn' : ''}`}>
          {b.title && (
            <p className="note-title">
              <R s={b.title} />
            </p>
          )}
          <p>
            <R s={b.text} />
          </p>
        </div>
      );
    case 'steps':
      return (
        <ol className="steps">
          {b.items.map((s, i) => (
            <li key={i} className="step glass">
              <span className="step-num" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3>
                <R s={s.title} />
              </h3>
              <p>
                <R s={s.text} />
              </p>
            </li>
          ))}
        </ol>
      );
    case 'cards':
      return (
        <ul className="card-grid">
          {b.items.map((c, i) => (
            <li key={i} className="card glass">
              <h3>
                {c.href ? (
                  isInternalPath(c.href) ? (
                    <Link href={localizePath(c.href, lang)} prefetch={false} className="card-link">
                      {plainText(c.title)}
                    </Link>
                  ) : (
                    <a href={c.href} target="_blank" rel="noopener" className="card-link">
                      {plainText(c.title)}
                    </a>
                  )
                ) : (
                  <R s={c.title} />
                )}
              </h3>
              <p>{c.href ? plainText(c.text) : <R s={c.text} />}</p>
            </li>
          ))}
        </ul>
      );
    case 'faq':
      return (
        <div className="faq">
          {b.items.map((f, i) => (
            <div key={i} className="faq-item">
              <h3>
                <R s={f.q} />
              </h3>
              <p>
                <R s={f.a} />
              </p>
            </div>
          ))}
        </div>
      );
    case 'operators':
      return <OperatorTable lang={lang} only={b.only} />;
    case 'guides':
      return <GuideList lang={lang} limit={b.limit} />;
    case 'stores':
      return <Stores lang={lang} />;
    case 'changelog':
      return <Changelog lang={lang} />;
    case 'contacts':
      return <Contacts lang={lang} />;
    case 'disclaimer':
      return <Disclaimer lang={lang} />;
    case 'image':
      return <ContentImage src={b.src} alt={b.alt} width={b.width} height={b.height} />;
  }
}

/** Renders content blocks, wrapping every h2 and the blocks after it in a <section>. */
export function Blocks({ blocks, lang }: { blocks: Block[]; lang: Lang }) {
  const groups: { h2?: Extract<Block, { t: 'h2' }>; items: Block[] }[] = [];
  for (const b of blocks) {
    if (b.t === 'h2') groups.push({ h2: b, items: [] });
    else {
      if (!groups.length) groups.push({ items: [] });
      groups[groups.length - 1].items.push(b);
    }
  }
  const used = new Set<string>();
  return (
    <>
      {groups.map((g, gi) => {
        let id: string | undefined;
        if (g.h2) {
          id = g.h2.id ?? slugify(g.h2.text);
          while (used.has(id)) id += '-2';
          used.add(id);
        }
        return (
          <section key={gi} className="content-section" aria-labelledby={id}>
            {g.h2 && (
              <h2 id={id}>
                <RichText text={g.h2.text} lang={lang} />
              </h2>
            )}
            {g.items.map((b, i) => (
              <BlockView key={i} b={b} lang={lang} />
            ))}
          </section>
        );
      })}
    </>
  );
}
