import localFont from 'next/font/local';

// Plus Jakarta Sans, self-hosted and subset to Latin (Uzbek). Cyrillic falls back to system fonts.
export const jakarta = localFont({
  src: [
    { path: '../app/fonts/plus-jakarta-sans-regular.woff2', weight: '400', style: 'normal' },
    { path: '../app/fonts/plus-jakarta-sans-semibold.woff2', weight: '600', style: 'normal' },
    { path: '../app/fonts/plus-jakarta-sans-bold.woff2', weight: '700', style: 'normal' },
    { path: '../app/fonts/plus-jakarta-sans-extrabold.woff2', weight: '800', style: 'normal' },
  ],
  display: 'swap',
  preload: true,
  variable: '--font-jakarta',
  fallback: ['system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif'],
});
