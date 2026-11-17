import type { PageContent } from '../types';

const page: PageContent = {
  title: "Qo'llanmalar: chiroyli raqam va username | MaxRaqam",
  description:
    "MaxRaqam qo'llanmalari: chiroyli raqamni qanday sotib olish, o'z nomiga o'tkazish, nasiya, Telegram username, firibgarlikdan saqlanish va diler sifatida sotish.",
  h1: "MaxRaqam qo'llanmalari",
  crumb: "Qo'llanmalar",
  lead: [
    "Bu bo'limda chiroyli telefon raqamini tanlash, sotib olish va o'z nomingizga rasmiylashtirish bo'yicha bosqichma-bosqich qo'llanmalar jamlangan. Har bir qo'llanmada ilovada nima qilish kerakligi ham alohida ko'rsatilgan.",
  ],
  blocks: [
    { t: "h2", text: "Barcha qo'llanmalar" },
    { t: "guides" },
    { t: "h2", text: "Qo'llanmalarda nimalar bor" },
    {
      t: "ul",
      items: [
        "**Xaridorlar uchun** — raqamni tanlash, oltin raqam turlari, nasiya va raqam qaysi operatorga tegishli ekanini aniqlash.",
        "**Xavfsizlik** — firibgarlikdan saqlanish va raqamni operator orqali o'z nomingizga o'tkazishning umumiy tartibi.",
        "**Username** — Telegram username auksionlari va ularda qatnashish.",
        "**Dilerlar uchun** — raqamlarni ilovada e'lon qilish va boshqarish.",
      ],
    },
    {
      t: "p",
      text: "Tez javob kerak bo'lsa, [ko'p so'raladigan savollar](/savollar) sahifasiga qarang. Xavfsizlik bo'yicha asosiy qoidalar [xavfsizlik sahifasida](/xavfsizlik), raqamlar katalogi esa [raqamlar sahifasida](/raqamlar).",
    },
  ],
  related: ["g-sotib-olish", "g-firibgarlik", "g-telegram", "savollar"],
};

export default page;
