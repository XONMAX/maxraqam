import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import { SkipLink } from '@/components/Chrome';
import { jakarta } from './fonts';
import { HTML_LANG } from './i18n';
import type { Lang } from './routes';
import { IOS_APP_ID, SITE_NAME, SITE_URL } from './site';

export const rootMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '48x48' },
      { url: '/icon.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
  manifest: '/manifest.webmanifest',
  formatDetection: { telephone: false },
  other: { 'apple-itunes-app': `app-id=${IOS_APP_ID}` },
  ...(process.env.GOOGLE_SITE_VERIFICATION
    ? { verification: { google: process.env.GOOGLE_SITE_VERIFICATION } }
    : {}),
};

export const rootViewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#050505',
  colorScheme: 'dark',
};

export function RootHtml({ lang, children }: { lang: Lang; children: ReactNode }) {
  return (
    <html lang={HTML_LANG[lang]} className={jakarta.variable}>
      <body>
        <SkipLink lang={lang} />
        {children}
      </body>
    </html>
  );
}
