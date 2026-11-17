import type { PageContent } from '../types';

const page: PageContent = {
  title: "Maxfiylik: ma'lumotlaringiz himoyasi | MaxRaqam",
  description:
    "MaxRaqam maxfiylik qoidalari qisqacha: ma'lumotlar uzatishda shifrlanadi, o'chirishni so'rash mumkin, uchinchi shaxslarga berilmaydi. To'liq siyosatga havola.",
  h1: "Maxfiylik va ma'lumotlar himoyasi",
  crumb: "Maxfiylik",
  lead: [
    "MaxRaqam ilovasida ma'lumotlaringiz uzatish vaqtida shifrlanadi va siz ularni o'chirishni so'rashingiz mumkin. Ishlab chiqaruvchi ma'lumotlar uchinchi shaxslarga berilmasligini bildiradi.",
    "Bu sahifa — qisqacha mazmun. Rasmiy matn [to'liq maxfiylik siyosatida](https://raqampolicy.mxtr.uz).",
  ],
  blocks: [
    { t: "h2", text: "Asosiy qoidalar qisqacha" },
    {
      t: "ul",
      items: [
        "**Shifrlash** — ma'lumotlar uzatish vaqtida shifrlanadi.",
        "**O'chirish** — ma'lumotlaringizni o'chirishni so'rashingiz mumkin.",
        "**Uchinchi shaxslar** — ishlab chiqaruvchi ma'lumotlar uchinchi shaxslarga berilmasligini bildiradi.",
      ],
    },
    { t: "h2", text: "To'liq maxfiylik siyosati" },
    {
      t: "p",
      text: "Qanday ma'lumotlar yig'ilishi va ular qanday ishlatilishi haqidagi to'liq matn alohida sahifada: [raqampolicy.mxtr.uz](https://raqampolicy.mxtr.uz).",
    },
    { t: "h2", text: "Platformadagi xavfsizlik vositalari" },
    {
      t: "ul",
      items: [
        "Shubhali yoki noto'g'ri e'lonlar haqida shikoyat qilish.",
        "Dilerlar verifikatsiyasi — [batafsil](/dilerlar/verifikatsiya).",
        "E'lonlar moderatsiyasi.",
        "Foydalanuvchilarni bloklash.",
      ],
    },
    {
      t: "p",
      text: "Xavfsiz xarid bo'yicha maslahatlar — [xavfsizlik sahifasida](/xavfsizlik). Maxfiylik bo'yicha savollar bo'lsa, [biz bilan bog'laning](/aloqa).",
    },
  ],
  related: ["xavfsizlik", "shartlar", "aloqa"],
};

export default page;
