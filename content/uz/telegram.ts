import type { PageContent } from '../types';

// TODO(owner): the process for transferring a won Telegram username to the winner is unknown — add it here when confirmed.
// TODO(owner): how MaxRaqam auctions relate to Fragment technically (if at all) is unknown — do not describe until confirmed.
const page: PageContent = {
  title: "Telegram username auksioni | MaxRaqam",
  description:
    "Telegram username nima, nega qisqa @nomlar qadrli va MaxRaqam ilovasidagi jonli auksionda qanday qatnashish mumkin. Fragment bilan farqi ham tushuntirilgan.",
  h1: "Telegram username auksioni MaxRaqam ilovasida",
  crumb: "Telegram",
  lead: [
    "Telegram username — bu profil, kanal yoki guruh havolasidagi @nom, masalan t.me/nom; MaxRaqam ilovasida bunday username'lar uchun jonli auksionlar o'tkaziladi. Telegram username sotib olishni o'ylayotgan bo'lsangiz, ilovada MaxCoin paketini Payme orqali olib, auksionda taklif berishingiz mumkin.",
  ],
  blocks: [
    { t: "h2", text: "Telegram username nima" },
    {
      t: "p",
      text: "Username Telegram'dagi ommaviy nomingiz. U orqali sizni telefon raqamingizni bilmasdan ham topish mumkin: qidiruvga @nom yozish yoki t.me/nom havolasini ochish kifoya.",
    },
    {
      t: "p",
      text: "Username shaxsiy profil, kanal, guruh yoki bot uchun bo'lishi mumkin. Har bir nom yagona — bir vaqtning o'zida uni faqat bitta hisob egallaydi.",
    },
    { t: "h2", text: "Nega qisqa username qadrli" },
    {
      t: "ul",
      items: [
        "**Eslab qolish oson** — qisqa nomni bir marta ko'rgan odam keyin ham topadi.",
        "**Xato kam** — harflar qancha kam bo'lsa, noto'g'ri yozish ehtimoli shuncha past.",
        "**Ma'no** — tushunarli so'z yoki ism kanal yoki loyiha mavzusini darrov bildiradi.",
        "**Yagonalik** — har bir nom bitta, shuning uchun mashhur so'zlarga talab yuqori.",
      ],
    },
    {
      t: "p",
      text: "Bu umumiy omillar. Aniq bir username'ning qadri talabga bog'liq va auksionning o'zida aniqlanadi.",
    },
    { t: "h2", text: "MaxRaqam'da jonli savdo qanday o'tadi" },
    {
      t: "p",
      text: "Auksionlar to'g'ridan-to'g'ri MaxRaqam ilovasi ichida, jonli savdo shaklida o'tadi. Ishtirok etish uchun sizga ilovaning ichki valyutasi — [MaxCoin](/maxcoin) kerak bo'ladi.",
    },
    {
      t: "ol",
      items: [
        "MaxRaqam ilovasini [yuklab oling](/yuklab-olish) va hisobingizga kiring.",
        "Profil bo'limida MaxCoin paketini Payme orqali sotib oling.",
        "Telegram username auksionini oching va ilovada ko'rsatilgan qoidalarni o'qing.",
        "Jonli savdoda taklif bering va savdo jarayonini ilovada kuzatib boring.",
      ],
    },
    { t: "h2", text: "Fragment bilan farqi" },
    {
      t: "p",
      text: "Fragment — Telegram'ning kolleksion username'lar uchun rasmiy platformasi, u TON blokcheynida ishlaydi. MaxRaqam esa alohida ilova: undagi username auksionlari MaxRaqam ilovasi ichida o'tkaziladi.",
    },
    {
      t: "p",
      text: "Shu sababli MaxRaqam'dagi auksion shartlarini Fragment shartlari bilan bir xil deb o'ylamang — taklif berishdan oldin [auksion qoidalari](/username/auksion-qoidalari)ni ilovada o'qing.",
    },
    { t: "h2", text: "Taklif berishdan oldin tekshiring" },
    {
      t: "ul",
      items: [
        "Ilovadagi auksion qoidalarini oxirigacha o'qing.",
        "MaxCoin balansingiz yetarli ekanini tekshiring.",
        "Username sizga nima uchun kerakligini oldindan aniqlang: kanal, shaxsiy profil yoki loyiha.",
        "Hech kimga Telegram'dan kelgan tasdiqlash kodlarini bermang.",
      ],
    },
    {
      t: "p",
      text: "Username tanlash va savdo jarayoni haqida batafsil — [Telegram username qo'llanmasida](/qollanma/telegram-username-sotib-olish). Barcha auksionlar ro'yxati [username sahifasida](/username).",
    },
  ],
  related: ["username", "auksion", "maxcoin", "g-telegram", "instagram"],
};

export default page;
