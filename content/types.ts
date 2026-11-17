import type { OperatorId } from '@/lib/site';
import type { PageKey } from '@/lib/routes';

/**
 * Inline text supports two markers only:
 *   **bold**
 *   [link text](/uz-path)   internal link, written with the UZBEK path (e.g. /raqamlar/beeline).
 *                           The renderer adds the /ru prefix automatically on Russian pages.
 *   [link text](https://…)  external link, opens in a new tab with rel="noopener".
 */
export type Inline = string;

export type Block =
  /** Section heading. Every h2 starts a new <section>. */
  | { t: 'h2'; text: Inline; id?: string }
  | { t: 'h3'; text: Inline }
  | { t: 'p'; text: Inline }
  | { t: 'ul'; items: Inline[] }
  | { t: 'ol'; items: Inline[] }
  | { t: 'table'; caption?: Inline; head: Inline[]; rows: Inline[][] }
  /** Highlighted callout box. */
  | { t: 'note'; title?: Inline; text: Inline; tone?: 'info' | 'warn' }
  /** Numbered step cards (e.g. "how it works in 3 steps"). */
  | { t: 'steps'; items: { title: Inline; text: Inline }[] }
  /** Grid of feature cards. Card titles render as h3. Optional href makes the card link somewhere. */
  | { t: 'cards'; items: { title: Inline; text: Inline; href?: string }[] }
  /** Question/answer list. Questions render as visible h3. No FAQPage schema is emitted. */
  | { t: 'faq'; items: { q: Inline; a: Inline }[] }
  /** Standard operator → prefix table. `only` limits it to some operators. */
  | { t: 'operators'; only?: OperatorId[] }
  /** Automatic list of guide articles (titles + descriptions). */
  | { t: 'guides'; limit?: number }
  /** App Store / Google Play buttons with QR codes and device requirements. */
  | { t: 'stores' }
  /** Version history table built from lib/site.ts CHANGELOG. */
  | { t: 'changelog' }
  /** Company contact list (emails, phone, city). */
  | { t: 'contacts' }
  /** The platform disclaimer box. Number pages already get it automatically. */
  | { t: 'disclaimer' }
  | { t: 'image'; src: string; alt: string; width: number; height: number };

export interface PageContent {
  /** <title>, under 60 characters, unique. Include the brand where it fits. */
  title: string;
  /** Meta description, 140–160 characters, unique. */
  description: string;
  /** The single H1 of the page. */
  h1: string;
  /** Short label used in breadcrumbs, nav cards and related-page links. */
  crumb: string;
  /** Opening paragraph(s). The first 2 sentences must directly answer the page's main question. */
  lead: Inline[];
  blocks: Block[];
  /** Related pages shown at the bottom (at least 3). */
  related: PageKey[];
}
