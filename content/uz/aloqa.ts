import type { PageContent } from '../types';

// TODO(owner): support hours / response time are unknown — add when confirmed.
// TODO(owner): the exact channel for data-deletion requests (email or in-app) is unknown — confirm and state it here.
const page: PageContent = {
  title: "Aloqa: MaxRaqam bilan bog'lanish",
  description:
    "MaxRaqam bilan bog'lanish: developer@mxtr.uz va maxtour.app@gmail.com pochtalari, +998 94 451 54 11 telefoni. Ilovada e'lon haqida qanday xabar berish mumkin.",
  h1: "MaxRaqam bilan bog'lanish",
  crumb: "Aloqa",
  lead: [
    "MaxRaqam bilan developer@mxtr.uz yoki maxtour.app@gmail.com elektron pochtalari, shuningdek +998 94 451 54 11 telefon raqami orqali bog'lanishingiz mumkin. Kompaniya Toshkentda joylashgan.",
  ],
  blocks: [
    { t: "h2", text: "Kontaktlar" },
    { t: "contacts" },
    { t: "h2", text: "E'lon haqida xabar berish" },
    {
      t: "p",
      text: "Shubhali yoki noto'g'ri e'lonni ko'rsangiz, eng tez yo'l — ilovaning o'zida xabar berish:",
    },
    {
      t: "ol",
      items: [
        "E'lonni ilovada oching.",
        "E'lon haqida xabar berish (shikoyat) imkoniyatini tanlang.",
        "Kerak bo'lsa, foydalanuvchini bloklang — e'lonlar moderatsiya qilinadi.",
      ],
    },
    {
      t: "p",
      text: "Xavfsiz xarid bo'yicha maslahatlar — [xavfsizlik sahifasida](/xavfsizlik).",
    },
    { t: "h2", text: "Raqam bo'yicha savollar kimga beriladi" },
    {
      t: "p",
      text: "MaxRaqam telekom operator emas va raqamlarni o'zi sotmaydi. Raqam mavjudligi, narx va to'lov bo'yicha savollarni e'lon egasi — dilerga bering, raqamni o'z nomingizga rasmiylashtirish bo'yicha esa operatorga murojaat qiling.",
    },
    { t: "h2", text: "Ma'lumotlarni o'chirish" },
    {
      t: "p",
      text: "Ma'lumotlaringizni o'chirishni so'rashingiz mumkin. Ma'lumotlar bilan ishlash tartibi [maxfiylik sahifasida](/maxfiylik) qisqacha bayon qilingan.",
    },
    {
      t: "p",
      text: "Murojaat qilishdan oldin javobni [ko'p so'raladigan savollar](/savollar) orasidan ham izlab ko'ring.",
    },
  ],
  related: ["savollar", "xavfsizlik", "biz", "maxfiylik"],
};

export default page;
