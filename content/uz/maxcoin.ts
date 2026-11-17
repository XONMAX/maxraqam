import type { PageContent } from '../types';

// TODO(owner): MaxCoin exchange rate, package sizes, refund policy and any other uses besides username auctions are unknown — add when confirmed.
const page: PageContent = {
  title: "MaxCoin — MaxRaqam ilova valyutasi",
  description:
    "MaxCoin — MaxRaqam ilovasining ichki valyutasi, username auksionlarida ishlatiladi. Paketlarni Profil bo'limida Payme orqali qanday sotib olishni bilib oling.",
  h1: "MaxCoin nima va uni qanday sotib olish mumkin",
  crumb: "MaxCoin",
  lead: [
    "MaxCoin — MaxRaqam ilovasining ichki valyutasi, u Telegram va Instagram username auksionlarida ishlatiladi. MaxCoin paketlari ilovaning Profil bo'limida Payme orqali sotib olinadi.",
  ],
  blocks: [
    { t: "image", src: "/images/maxcoin.webp", alt: "MaxCoin — MaxRaqam ilovasining ichki valyutasi belgisi", width: 400, height: 400 },
    { t: "h2", text: "MaxCoin nimaga kerak" },
    {
      t: "p",
      text: "MaxCoin [username auksionlarida](/username) qatnashish uchun kerak. Auksionlar ilova ichida jonli savdo shaklida o'tadi va takliflar MaxCoin orqali beriladi.",
    },
    {
      t: "p",
      text: "Telefon raqamlari bo'yicha to'lov esa boshqacha: uni xaridor va mustaqil diler o'zaro kelishadi. Bu haqda [raqamlar sahifasida](/raqamlar) o'qing.",
    },
    { t: "h2", text: "MaxCoin paketini qanday sotib olish mumkin" },
    {
      t: "steps",
      items: [
        { title: "Ilovani oching", text: "MaxRaqam ilovasiga kiring. Hali o'rnatmagan bo'lsangiz, [yuklab oling](/yuklab-olish)." },
        { title: "Profilga o'ting", text: "Ilovaning Profil bo'limini oching." },
        { title: "Paketni tanlang", text: "Sizga mos MaxCoin paketini tanlang." },
        { title: "Payme orqali to'lang", text: "To'lovni Payme orqali tasdiqlang." },
      ],
    },
    { t: "h2", text: "Sotib olishdan oldin" },
    {
      t: "ul",
      items: [
        "Paket shartlarini to'lovdan oldin ilovada diqqat bilan o'qing.",
        "Qatnashmoqchi bo'lgan [auksion qoidalari](/username/auksion-qoidalari) bilan tanishing.",
        "To'lov kodlarini va SMS-kodlarni hech kimga bermang.",
      ],
    },
    { t: "h2", text: "MaxCoin qachon paydo bo'lgan" },
    {
      t: "p",
      text: "MaxCoin paketlari va username auksionlari ilovaning 1.1.2 versiyasida qo'shilgan. Boshqa o'zgarishlar — [yangiliklar sahifasida](/yangiliklar).",
    },
  ],
  related: ["username", "auksion", "telegram", "yangiliklar"],
};

export default page;
