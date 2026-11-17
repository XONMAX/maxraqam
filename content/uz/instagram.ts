import type { PageContent } from '../types';

// TODO(owner): the process for transferring a won Instagram username to the winner is unknown — add it here when confirmed.
// TODO(owner): legal/policy review of Instagram username auctions is pending (page is noindex) — confirm before indexing.
const page: PageContent = {
  title: "Instagram username auksioni | MaxRaqam",
  description:
    "Instagram username nima, qanday @nomlar ko'proq e'tibor tortadi va MaxRaqam ilovasidagi jonli auksionda MaxCoin bilan qanday qatnashish mumkinligi haqida.",
  h1: "Instagram username auksioni MaxRaqam ilovasida",
  crumb: "Instagram",
  lead: [
    "Instagram username — bu profilingiz havolasidagi @nom, masalan instagram.com/nom; MaxRaqam ilovasida Instagram username'lari uchun ham jonli auksionlar o'tadi. Qatnashish uchun Profil bo'limida Payme orqali MaxCoin paketini olasiz va ilova ichida taklif berasiz.",
  ],
  blocks: [
    { t: "h2", text: "Instagram username nima" },
    {
      t: "p",
      text: "Username — Instagram'dagi profilingizning qisqa manzili. Uni bio, vizitka yoki reklamada ko'rsatasiz, odamlar esa qidiruvga @nom yozib sizni topadi.",
    },
    { t: "h2", text: "Qanday username'lar e'tibor tortadi" },
    {
      t: "ul",
      items: [
        "Qisqa va bir qarashda o'qiladigan nomlar.",
        "Nuqta, pastki chiziq va raqamlarsiz, oddiy yoziladigan nomlar.",
        "Ism, kasb yoki faoliyat sohasini bildiradigan tushunarli so'zlar.",
      ],
    },
    {
      t: "p",
      text: "Bu umumiy kuzatuvlar: aniq username'ning qadrini talab belgilaydi.",
    },
    { t: "h2", text: "Ilovadagi auksion" },
    {
      t: "p",
      text: "Instagram username auksionlari MaxRaqam ilovasi ichida jonli savdo shaklida o'tadi. Takliflar ilovaning ichki valyutasi — [MaxCoin](/maxcoin) orqali beriladi.",
    },
    {
      t: "steps",
      items: [
        { title: "Ilovani o'rnating", text: "MaxRaqam'ni [yuklab oling](/yuklab-olish) va hisobingizga kiring." },
        { title: "MaxCoin paketini oling", text: "Profil bo'limida Payme orqali to'lov qiling." },
        { title: "Auksionda qatnashing", text: "Ilovadagi qoidalarni o'qib, jonli savdoda taklif bering." },
      ],
    },
    { t: "h2", text: "Qatnashishdan oldin" },
    {
      t: "p",
      text: "Har bir auksion boshlanishidan oldin ilovada ko'rsatilgan qoidalarni o'qing. Qisqacha ma'lumot [auksion qoidalari](/username/auksion-qoidalari) sahifasida, Telegram username'lari haqida esa [alohida sahifa](/username/telegram) bor.",
    },
  ],
  related: ["username", "telegram", "auksion", "maxcoin"],
};

export default page;
