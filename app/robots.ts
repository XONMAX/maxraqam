import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';

// The site has no private routes (/api, /admin, /account do not exist), so nothing is disallowed.
const CRAWLERS = ['Googlebot', 'Bingbot', 'GPTBot', 'OAI-SearchBot', 'ClaudeBot', 'PerplexityBot', 'Google-Extended'];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: '*', allow: '/' }, ...CRAWLERS.map((userAgent) => ({ userAgent, allow: '/' }))],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
