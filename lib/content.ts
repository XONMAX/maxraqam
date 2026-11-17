import uz from '@/content/uz';
import ru from '@/content/ru';
import type { PageContent } from '@/content/types';
import type { Lang, PageKey } from './routes';

const CONTENT: Record<Lang, Record<PageKey, PageContent>> = { uz, ru };

export function getContent(lang: Lang, key: PageKey): PageContent {
  return CONTENT[lang][key];
}
