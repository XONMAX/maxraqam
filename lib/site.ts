// Single source of truth for site-wide facts. The domain is hardcoded on purpose:
// never read it from env variables or placeholders.
export const SITE_URL = 'https://maxraqam.mxtr.uz';
export const SITE_NAME = 'MaxRaqam';

/** Date the current content was written/reviewed (used for sitemap lastModified and Article dates). */
export const CONTENT_DATE = '2026-11-17';

export const IOS_APP_ID = '6804719400';
export const APP_STORE_URL = 'https://apps.apple.com/app/id6804719400';
export const GOOGLE_PLAY_URL = 'https://play.google.com/store/apps/details?id=uz.maxraqam.app';
export const PRIVACY_POLICY_URL = 'https://raqampolicy.mxtr.uz';

export const COMPANY = {
  legalName: 'MAXTOUR MOBILE APP MCHJ',
  developer: 'Doston Absalamov',
  city: { uz: 'Toshkent', ru: 'Ташкент', en: 'Tashkent' },
  country: { uz: "O'zbekiston", ru: 'Узбекистан', code: 'UZ' },
  emails: ['developer@mxtr.uz', 'maxtour.app@gmail.com'],
  phone: '+998 94 451 54 11',
  phoneE164: '+998944515411',
} as const;

export const APP_FACTS = {
  ios: {
    minIos: '18.0',
    minMacos: '15',
    macChip: 'M1',
    minVisionOs: '2',
    sizeMb: '20.2',
  },
  // TODO(owner): update this download count periodically from Google Play Console.
  androidDownloads: '10 000+',
  languages: { uz: "o'zbek, rus, ingliz", ru: 'узбекский, русский, английский' },
} as const;

export const OG_IMAGE = {
  uz: { url: `${SITE_URL}/images/og-image.png`, alt: 'MaxRaqam — chiroyli raqamlar va username savdosi' },
  ru: { url: `${SITE_URL}/images/og-image-ru.png`, alt: 'MaxRaqam — красивые номера и юзернеймы' },
  width: 1200,
  height: 630,
} as const;

export const LOGO_URL = `${SITE_URL}/images/maxraqam-logo.png`;

export type OperatorId = 'beeline' | 'ucell' | 'mobiuz' | 'uzmobile' | 'perfectum' | 'humans';

export const OPERATORS: { id: OperatorId; name: string; prefixes: string[]; ussd?: string }[] = [
  { id: 'beeline', name: 'Beeline', prefixes: ['90', '91'], ussd: '*303#' },
  { id: 'ucell', name: 'Ucell', prefixes: ['93', '94', '50'], ussd: '*360#' },
  { id: 'mobiuz', name: 'Mobiuz', prefixes: ['97', '88'] },
  { id: 'uzmobile', name: 'Uzmobile', prefixes: ['95', '99', '77'] },
  { id: 'perfectum', name: 'Perfectum', prefixes: ['98'] },
  { id: 'humans', name: 'Humans', prefixes: ['33'] },
];

/** App version history (2026). Wording kept to the published release notes. */
export const CHANGELOG: { version: string; date: string; uz: string[]; ru: string[] }[] = [
  {
    version: '1.1.2',
    date: '2026-11-16',
    uz: ['Username auksionlari', 'MaxCoin paketlari', 'Dizayn, tarjima va tezlik yaxshilandi'],
    ru: ['Аукционы юзернеймов', 'Пакеты MaxCoin', 'Улучшены дизайн, переводы и скорость'],
  },
  { version: '1.1.1', date: '2026-11-05', uz: ['Dizayn yangilanishlari va yangi imkoniyatlar'], ru: ['Обновления дизайна и новые функции'] },
  { version: '1.1.0', date: '2026-10-29', uz: ['Dizayn yangilanishlari va yangi imkoniyatlar'], ru: ['Обновления дизайна и новые функции'] },
  { version: '1.0.9', date: '2026-10-13', uz: ['Xatolar tuzatildi, ishlash tezligi oshirildi'], ru: ['Исправления ошибок и улучшение производительности'] },
  { version: '1.0.8', date: '2026-10-10', uz: ['Xatolar tuzatildi, ishlash tezligi oshirildi'], ru: ['Исправления ошибок и улучшение производительности'] },
  { version: '1.0.7', date: '2026-10-02', uz: ['Xatolar tuzatildi, ishlash tezligi oshirildi'], ru: ['Исправления ошибок и улучшение производительности'] },
  {
    version: '1.0.6',
    date: '2026-09-30',
    uz: ['Ovozli xabarlar', '3 tagacha hisob', 'Yangi prefikslar'],
    ru: ['Голосовые сообщения', 'До 3 аккаунтов', 'Новые префиксы'],
  },
  {
    version: '1.0.5',
    date: '2026-09-28',
    uz: ["Barqarorlik va e'lonlarni boshqarish yaxshilandi"],
    ru: ['Стабильность и управление объявлениями'],
  },
  {
    version: '1.0.4',
    date: '2026-09-27',
    uz: ['MaxChat — ilova ichidagi chat', 'Operator kodisiz raqamlar'],
    ru: ['MaxChat — чат внутри приложения', 'Номера без кода оператора'],
  },
  {
    version: '1.0.3',
    date: '2026-09-24',
    uz: ['Yangiliklar va takliflar haqida bildirishnomalar'],
    ru: ['Уведомления о новостях и предложениях'],
  },
  {
    version: '1.0.2',
    date: '2026-09-05',
    uz: ['Aksiyalar', 'Bepul raqamlar', 'Yangi operatorlar'],
    ru: ['Акции', 'Бесплатные номера', 'Новые операторы'],
  },
  {
    version: '1.0.1',
    date: '2026-09-04',
    uz: ["Ko'rib chiqish va saralash yaxshilandi", 'Diler profillari', "Ko'rishlar statistikasi"],
    ru: ['Улучшены просмотр и сортировка', 'Профили дилеров', 'Статистика просмотров'],
  },
  { version: '1.0', date: '2026-09-03', uz: ['Ilova ishga tushirildi'], ru: ['Запуск приложения'] },
];
