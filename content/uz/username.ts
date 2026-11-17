import type { PageContent } from '../types';

// TODO(owner): how a won username is transferred to the winner (Telegram and Instagram) is unknown — add the process when confirmed.
// TODO(owner): how MaxRaqam auctions relate to Fragment technically is unknown — do not describe until confirmed.
const page: PageContent = {
  title: "Username auksioni: Telegram va Instagram | MaxRaqam",
  description:
    "MaxRaqam ilovasida Telegram va Instagram username auksionlari: jonli savdoda taklif bering, MaxCoin paketlarini Payme orqali oling, qoidalarni o'qing.",
  h1: "Telegram va Instagram username auksionlari",
  crumb: "Username",
  lead: [
    "MaxRaqam ilovasida Telegram va Instagram username'lari uchun jonli auksionlar o'tkaziladi: siz ilova ichida real vaqtda taklif berasiz. Auksionlarda ilovaning ichki valyutasi — MaxCoin ishlatiladi, uning paketlari Profil bo'limida Payme orqali sotib olinadi.",
    "Quyida username nima ekanini, auksionda qanday qatnashishni va taklif berishdan oldin nimalarni tekshirish kerakligini qisqacha tushuntiramiz.",
  ],
  blocks: [
    { t: "h2", text: "Username nima" },
    {
      t: "p",
      text: "Username — bu profilingiz havolasidagi @nom. Masalan, Telegram'da u t.me/nom ko'rinishida bo'ladi. Odamlar sizni yoki kanalingizni aynan shu nom orqali topadi, shuning uchun qisqa va esda qoladigan username'lar ko'proq e'tibor tortadi.",
    },
    { t: "h2", text: "Qaysi username'lar auksionga qo'yiladi" },
    {
      t: "cards",
      items: [
        {
          title: "Telegram username",
          text: "Kanal, guruh yoki shaxsiy profil uchun @nom. Telegram username auksioni haqida batafsil.",
          href: "/username/telegram",
        },
        {
          title: "Instagram username",
          text: "Instagram profilidagi @nom. Ilovadagi Instagram username auksioni haqida.",
          href: "/username/instagram",
        },
        {
          title: "Auksion qoidalari",
          text: "Taklif berishdan oldin nimalarni bilish kerak.",
          href: "/username/auksion-qoidalari",
        },
      ],
    },
    { t: "h2", text: "Auksionda qanday qatnashiladi" },
    {
      t: "steps",
      items: [
        { title: "Ilovani o'rnating", text: "MaxRaqam ilovasini [yuklab oling](/yuklab-olish) — u bepul." },
        { title: "MaxCoin oling", text: "Profil bo'limida [MaxCoin](/maxcoin) paketini Payme orqali sotib oling." },
        { title: "Qoidalarni o'qing", text: "Auksionni ochib, ilovada ko'rsatilgan qoidalar bilan tanishing." },
        { title: "Taklif bering", text: "Jonli savdoda o'zingizga yoqqan username uchun taklif bering." },
      ],
    },
    { t: "h2", text: "Qaysi username'lar qadrliroq" },
    {
      t: "ul",
      items: [
        "**Qisqa** nomlar — yozish va eslab qolish oson.",
        "**Ma'noli** so'z yoki ism — boshqalarga tushuntirish shart emas.",
        "**Oddiy yozilish** — raqam va belgilarsiz nomlar xato yozilishi kamroq.",
      ],
    },
    {
      t: "p",
      text: "Bular umumiy omillar: har bir username'ning qadri talabga bog'liq. Telegram username tanlash bo'yicha batafsil maslahatlar [qo'llanmamizda](/qollanma/telegram-username-sotib-olish).",
    },
    { t: "h2", text: "Fragment va MaxRaqam" },
    {
      t: "p",
      text: "Fragment — Telegram'ning kolleksion username'lar uchun rasmiy platformasi, u TON blokcheynida ishlaydi. MaxRaqam esa alohida ilova: undagi auksionlar MaxRaqam ilovasi ichida o'tadi.",
    },
    {
      t: "note",
      tone: "info",
      title: "Taklif berishdan oldin",
      text: "Auksion qoidalarini ilovada albatta o'qing va MaxCoin balansingizni tekshiring. Qisqacha ma'lumot — [auksion qoidalari](/username/auksion-qoidalari) sahifasida.",
    },
  ],
  related: ["telegram", "instagram", "auksion", "maxcoin", "g-telegram"],
};

export default page;
