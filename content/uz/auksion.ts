import type { PageContent } from '../types';

// TODO(owner): full auction rules text (bidding steps, minimum increments, auction duration, winner determination,
// what happens to MaxCoin of non-winning bids, username transfer) is missing — add the official rules here.
const page: PageContent = {
  title: "Username auksion qoidalari | MaxRaqam",
  description:
    "MaxRaqam username auksionlari haqida asosiy ma'lumot: ilova ichidagi jonli savdo, MaxCoin paketlari va taklif berishdan oldin ilovadagi qoidalarni o'qish.",
  h1: "Username auksion qoidalari",
  crumb: "Auksion qoidalari",
  lead: [
    "MaxRaqam'dagi username auksionlari ilova ichida jonli savdo shaklida o'tadi: Telegram va Instagram username'lari uchun real vaqtda taklif beriladi. Amaldagi to'liq qoidalar ilovada ko'rsatiladi — taklif berishdan oldin ularni albatta o'qing.",
  ],
  blocks: [
    { t: "h2", text: "Asosiy ma'lumotlar" },
    {
      t: "ul",
      items: [
        "Auksionlar MaxRaqam ilovasi ichida jonli savdo shaklida o'tkaziladi.",
        "Auksionga [Telegram](/username/telegram) va [Instagram](/username/instagram) username'lari qo'yiladi.",
        "Ishtirok uchun [MaxCoin](/maxcoin) kerak — uning paketlari Profil bo'limida Payme orqali sotib olinadi.",
      ],
    },
    { t: "h2", text: "Taklif berishdan oldin" },
    {
      t: "ol",
      items: [
        "Auksionni ilovada oching va ko'rsatilgan qoidalarni oxirigacha o'qing.",
        "MaxCoin balansingizni tekshiring.",
        "Qoidalarda tushunarsiz joy bo'lsa, taklif berishdan oldin [biz bilan bog'laning](/aloqa).",
      ],
    },
  ],
  related: ["username", "maxcoin", "telegram", "instagram"],
};

export default page;
