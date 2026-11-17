import type { Lang, PageKey } from './routes';

export const HTML_LANG: Record<Lang, string> = { uz: 'uz', ru: 'ru' };
export const OG_LOCALE: Record<Lang, string> = { uz: 'uz_UZ', ru: 'ru_RU' };

export const NAV: { key: PageKey; uz: string; ru: string }[] = [
  { key: 'raqamlar', uz: 'Raqamlar', ru: 'Номера' },
  { key: 'username', uz: 'Username', ru: 'Юзернеймы' },
  { key: 'maxcoin', uz: 'MaxCoin', ru: 'MaxCoin' },
  { key: 'maxchat', uz: 'MaxChat', ru: 'MaxChat' },
  { key: 'dilerlar', uz: 'Dilerlar', ru: 'Дилерам' },
  { key: 'qollanma', uz: "Qo'llanma", ru: 'Гайды' },
  { key: 'yuklab', uz: 'Yuklab olish', ru: 'Скачать' },
];

export const FOOTER_GROUPS: { title: Record<Lang, string>; keys: PageKey[] }[] = [
  {
    title: { uz: 'Raqamlar', ru: 'Номера' },
    keys: ['raqamlar', 'beeline', 'ucell', 'mobiuz', 'uzmobile', 'perfectum', 'humans', 'oltin', 'nasiya', 'bepul'],
  },
  {
    title: { uz: 'Ilova', ru: 'Приложение' },
    keys: ['username', 'telegram', 'maxcoin', 'maxchat', 'dilerlar', 'verifikatsiya', 'yuklab', 'yangiliklar'],
  },
  {
    title: { uz: "Ma'lumot", ru: 'Информация' },
    keys: ['qollanma', 'savollar', 'xavfsizlik', 'biz', 'aloqa', 'maxfiylik', 'shartlar'],
  },
];

const MONTHS: Record<Lang, string[]> = {
  uz: ['yanvar', 'fevral', 'mart', 'aprel', 'may', 'iyun', 'iyul', 'avgust', 'sentabr', 'oktabr', 'noyabr', 'dekabr'],
  ru: ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'],
};

export function formatDate(iso: string, lang: Lang): string {
  const [y, m, d] = iso.split('-').map(Number);
  return lang === 'uz' ? `${d}-${MONTHS.uz[m - 1]}, ${y}` : `${d} ${MONTHS.ru[m - 1]} ${y}`;
}

export const T = {
  uz: {
    skip: "Asosiy matnga o'tish",
    homeLabel: 'MaxRaqam bosh sahifasi',
    mainNav: 'Asosiy navigatsiya',
    openMenu: 'Menyuni ochish',
    closeMenu: 'Menyuni yopish',
    langSwitch: 'Tilni tanlash',
    breadcrumbs: "Sahifa yo'li",
    related: 'Tegishli sahifalar',
    readMore: 'Batafsil',
    readGuide: "Qo'llanmani o'qish",
    disclaimerTitle: 'Muhim eslatma',
    disclaimer:
      "MaxRaqam telekom operatori emas: u raqamlarga egalik qilmaydi, ularni sotmaydi va boshqa shaxsga o'tkazmaydi. Ilovadagi raqamlarni mustaqil dilerlar taklif qiladi. Raqam mavjudligi, kelishuv shartlari, to'lov va raqamni yakuniy qayta rasmiylashtirish xaridor, diler va operator o'rtasida hal qilinadi. \"Tasdiqlangan diler\" belgisi MaxRaqam diler taqdim etgan ma'lumotlarni tekshirganini bildiradi — bu operator ruxsatnomasi ham, bitim kafolati ham emas.",
    ctaTitle: 'Ilovani yuklab oling',
    ctaText:
      "MaxRaqam bepul. Chiroyli raqamlarni qidiring, dilerlar bilan MaxChat orqali yozishing va username auksionlarida ishtirok eting.",
    ctaButton: 'Ilovani yuklab olish',
    appStore: "App Store'dan yuklab olish",
    googlePlay: "Google Play'dan yuklab olish",
    appStoreShort: 'App Store',
    googlePlayShort: 'Google Play',
    qrAppStore: 'App Store sahifasiga olib boruvchi QR kod',
    qrGooglePlay: 'Google Play sahifasiga olib boruvchi QR kod',
    qrHint: "Telefon kamerasi bilan skanerlang",
    requirementsTitle: 'Qurilma talablari',
    requirements: [
      'iPhone: iOS 18.0 yoki yangiroq',
      'Mac: macOS 15 yoki yangiroq, Apple M1 yoki yangiroq protsessor',
      'Apple Vision: visionOS 2 yoki yangiroq',
      'Android: Google Play orqali',
      'iOS ilova hajmi: 20,2 MB',
      "Ilova tillari: o'zbek, rus, ingliz",
      'Narxi: bepul',
    ],
    opTableCaption: "O'zbekiston mobil operatorlari va prefikslari",
    opOperator: 'Operator',
    opPrefixes: 'Prefikslar (+998 dan keyin)',
    opUssd: "Pasportga ro'yxatdan o'tgan raqamlarni tekshirish",
    opUssdUnknown: "Operatordan so'rang",
    opPortability:
      "Raqamni boshqa operatorga ko'chirish mumkin, shuning uchun prefiks raqamning hozirgi operatorini kafolatlamaydi.",
    clVersion: 'Versiya',
    clDate: 'Sana',
    clChanges: "O'zgarishlar",
    clCaption: 'MaxRaqam ilovasi versiyalari tarixi (2026)',
    contactsCompany: 'Kompaniya',
    contactsDeveloper: 'Dasturchi',
    contactsEmail: 'Elektron pochta',
    contactsPhone: 'Telefon',
    contactsCity: 'Manzil',
    published: "E'lon qilingan",
    updated: 'Yangilangan',
    author: 'Muallif: MaxRaqam jamoasi',
    footerAbout:
      "MaxRaqam — mustaqil dilerlarning chiroyli telefon raqamlari va Telegram, Instagram username auksionlari uchun bepul mobil ilova.",
    footerContacts: 'Aloqa',
    footerDownload: 'Yuklab olish',
    privacy: 'Maxfiylik',
    terms: 'Shartlar',
    privacyFull: "To'liq maxfiylik siyosati",
    notFoundTitle: 'Sahifa topilmadi',
    notFoundMeta: "Sahifa topilmadi — MaxRaqam",
    notFoundText:
      "Siz qidirgan sahifa mavjud emas yoki boshqa manzilga ko'chirilgan. Quyidagi bo'limlardan birini tanlang.",
    notFoundHome: 'Bosh sahifaga qaytish',
  },
  ru: {
    skip: 'Перейти к основному содержанию',
    homeLabel: 'Главная страница MaxRaqam',
    mainNav: 'Основная навигация',
    openMenu: 'Открыть меню',
    closeMenu: 'Закрыть меню',
    langSwitch: 'Выбор языка',
    breadcrumbs: 'Навигационная цепочка',
    related: 'Читайте также',
    readMore: 'Подробнее',
    readGuide: 'Читать',
    disclaimerTitle: 'Важно',
    disclaimer:
      'MaxRaqam не является оператором связи: сервис не владеет номерами, не продаёт и не переоформляет их. Номера в приложении предлагают независимые дилеры. Наличие номера, условия сделки, оплата и окончательное переоформление согласуются между покупателем, дилером и оператором. Значок «проверенный дилер» означает, что MaxRaqam проверил сведения, которые предоставил дилер, — это не авторизация оператора и не гарантия сделки.',
    ctaTitle: 'Скачайте приложение',
    ctaText:
      'MaxRaqam бесплатный. Ищите красивые номера, переписывайтесь с дилерами в MaxChat и участвуйте в аукционах юзернеймов.',
    ctaButton: 'Скачать приложение',
    appStore: 'Скачать в App Store',
    googlePlay: 'Скачать в Google Play',
    appStoreShort: 'App Store',
    googlePlayShort: 'Google Play',
    qrAppStore: 'QR-код со ссылкой на страницу в App Store',
    qrGooglePlay: 'QR-код со ссылкой на страницу в Google Play',
    qrHint: 'Отсканируйте камерой телефона',
    requirementsTitle: 'Требования к устройству',
    requirements: [
      'iPhone: iOS 18.0 или новее',
      'Mac: macOS 15 или новее, процессор Apple M1 или новее',
      'Apple Vision: visionOS 2 или новее',
      'Android: через Google Play',
      'Размер приложения для iOS: 20,2 МБ',
      'Языки приложения: узбекский, русский, английский',
      'Цена: бесплатно',
    ],
    opTableCaption: 'Мобильные операторы Узбекистана и их префиксы',
    opOperator: 'Оператор',
    opPrefixes: 'Префиксы (после +998)',
    opUssd: 'Проверить номера, оформленные на паспорт',
    opUssdUnknown: 'Уточните у оператора',
    opPortability:
      'Номер можно перенести к другому оператору, поэтому префикс не гарантирует, кто обслуживает номер сейчас.',
    clVersion: 'Версия',
    clDate: 'Дата',
    clChanges: 'Изменения',
    clCaption: 'История версий приложения MaxRaqam (2026)',
    contactsCompany: 'Компания',
    contactsDeveloper: 'Разработчик',
    contactsEmail: 'Эл. почта',
    contactsPhone: 'Телефон',
    contactsCity: 'Адрес',
    published: 'Опубликовано',
    updated: 'Обновлено',
    author: 'Автор: команда MaxRaqam',
    footerAbout:
      'MaxRaqam — бесплатное мобильное приложение с красивыми номерами от независимых дилеров и аукционами юзернеймов Telegram и Instagram.',
    footerContacts: 'Контакты',
    footerDownload: 'Скачать',
    privacy: 'Конфиденциальность',
    terms: 'Условия',
    privacyFull: 'Полная политика конфиденциальности',
    notFoundTitle: 'Страница не найдена',
    notFoundMeta: 'Страница не найдена — MaxRaqam',
    notFoundText: 'Такой страницы нет или она переехала. Выберите один из разделов ниже.',
    notFoundHome: 'На главную',
  },
} satisfies Record<Lang, Record<string, string | string[]>>;

export type Strings = (typeof T)['uz'];
