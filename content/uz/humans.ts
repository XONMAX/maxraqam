import type { PageContent } from '../types';

// TODO(owner): no USSD code is known for checking numbers registered to a passport at Humans; add it if the owner confirms one.
// TODO(owner): Humans re-registration documents, fees and deadlines are not provided.
const page: PageContent = {
  title: 'Humans chiroyli raqamlar: 33 prefiksi | MaxRaqam',
  description:
    "Humans chiroyli raqamlari 33 prefiksi bilan: uchliklar, ABAB va oyna naqshlari g'oyalari, MaxRaqam ilovasida qidirish yo'riqnomasi va muhim eslatmalar.",
  h1: 'Humans chiroyli raqamlar — 33 kodi bilan',
  crumb: 'Humans',
  lead: [
    "Humans raqamlari 33 prefiksi bilan boshlanadi: +998 33 XXX XX XX. MaxRaqam ilovasida bunday raqamlarni Humans operator filtri orqali topasiz, ularni esa mustaqil dilerlar taklif qiladi.",
    "33 kodining o'zi ikki bir xil raqamdan iborat, shuning uchun uchliklarga asoslangan naqshlar unga ayniqsa mos tushadi.",
  ],
  blocks: [
    { t: 'h2', text: 'Humans prefiksi' },
    { t: 'operators', only: ['humans'] },
    {
      t: 'p',
      text: "Humans'da faqat bitta kod bor, demak tanlov oxirgi yetti raqamning kombinatsiyasiga bog'liq. Kodning o'zi takrorlanuvchi bo'lgani tufayli hatto oddiy 33 33 juftligi ham raqamni yaxlit qiladi.",
    },

    { t: 'h2', text: "33 uchun naqsh g'oyalari" },
    {
      t: 'cards',
      items: [
        { title: 'Uchliklar zanjiri', text: "33 333 33 33 — kod va qolgan raqamlar bir xil, raqam bitta raqam bilan yoziladi." },
        { title: 'Qisqa ABAB', text: '33 125 30 30 — oxirida 30 30 juftligi takrorlanadi.' },
        { title: 'Yettiliklar', text: "33 777 77 77 yoki 33 200 77 77 — oxiridagi yettiliklar ko'zga tez tashlanadi." },
        { title: 'Nol bilan tugash', text: '33 300 00 00 — kod uchligidan keyin nollar keladi.' },
        { title: 'Oyna', text: "33 147 77 41 — raqamlar o'rtadagi yettilikdan ikki tomonga bir xil tarqaladi." },
      ],
    },
    {
      t: 'p',
      text: "Kartalardagi raqamlar faqat naqshni tushuntiradi, ular e'lon emas.",
    },

    { t: 'h2', text: "Humans raqamini tanlash: qisqa yo'riqnoma" },
    {
      t: 'steps',
      items: [
        {
          title: 'Filtrni sozlang',
          text: "MaxRaqam katalogida operator sifatida Humans'ni tanlang. Xohlasangiz, valyuta (UZS yoki USD) va to'lov usulini ham belgilang.",
        },
        {
          title: 'Kombinatsiyani yozing',
          text: "Raqamlar maydoniga 333, 3030 yoki boshqa ketma-ketlikni kiriting va natijalarni saralang.",
        },
        {
          title: "Dilerni o'rganing",
          text: "Diler profili va verifikatsiya belgisini ko'rib chiqing, so'ng so'rov yuboring, qo'ng'iroq qiling yoki Telegram'da yozing.",
        },
      ],
    },

    {
      t: 'p',
      text: "Dilerga yozishda [MaxChat](/maxchat) qulay: savollarni matn yoki ovozli xabar bilan yuborasiz, javoblar ilova ichida saqlanadi. Bir nechta raqamni ko'rib chiqayotgan bo'lsangiz, ularni avval sevimlilarga qo'shib, so'ng har biri bo'yicha alohida so'rov yuboring.",
    },

    { t: 'h2', text: 'Muhim eslatmalar' },
    {
      t: 'note',
      tone: 'warn',
      title: 'Prefiks hali operator emas',
      text: "Raqamlar operatorlar o'rtasida ko'chirilishi mumkin. 33 bilan boshlangan raqam boshqa tarmoqqa o'tgan bo'lishi ehtimoli bor, shuning uchun hozirgi operatorni diler bilan aniqlashtiring.",
    },
    {
      t: 'note',
      title: 'Pasportdagi raqamlar',
      text: "Humans uchun pasportga qayd etilgan raqamlarni ko'rsatadigan USSD kodi haqida ma'lumot yo'q. Bu haqda Humans'ning rasmiy kanallaridan so'rang.",
    },
    {
      t: 'p',
      text: "Humans raqami bo'yicha barcha kelishuvlar — mavjudlik, narx, to'lov va rasmiylashtirish — diler va operator bilan qilinadi. MaxRaqam esa ularni topishga yordam beradigan platforma, xolos. Firibgarlikdan qanday saqlanish haqida: [qo'llanma](/qollanma/firibgarlikdan-saqlanish).",
    },
    {
      t: 'p',
      text: "Humans raqamlarini ko'rish uchun [MaxRaqam ilovasini yuklab oling](/yuklab-olish) yoki [Perfectum](/raqamlar/perfectum) va [Beeline](/raqamlar/beeline) sahifalarini ko'zdan kechiring.",
    },
  ],
  related: ['raqamlar', 'g-firibgarlik', 'oltin', 'perfectum'],
};

export default page;
