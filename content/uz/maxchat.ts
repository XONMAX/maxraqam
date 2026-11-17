import type { PageContent } from '../types';

const page: PageContent = {
  title: "MaxChat — dilerlar bilan ilova ichidagi chat",
  description:
    "MaxChat — MaxRaqam ilovasidagi chat: dilerlarga yozing, ovozli xabar yuboring va 3 tagacha hisob o'rtasida tez almashing. Qo'ng'iroq va Telegram ham mavjud.",
  h1: "MaxChat: dilerlar bilan ilova ichida yozishing",
  crumb: "MaxChat",
  lead: [
    "MaxChat — MaxRaqam ilovasi ichidagi chat bo'lib, unda siz dilerlarga to'g'ridan-to'g'ri yozasiz va ovozli xabar yuborasiz. Ilovadan chiqmasdan raqam bo'yicha savollaringizni aniqlab olishingiz mumkin.",
  ],
  blocks: [
    { t: "h2", text: "MaxChat imkoniyatlari" },
    {
      t: "cards",
      items: [
        { title: "Diler bilan yozishma", text: "E'lon bo'yicha savolni ilova ichida dilerga yuboring." },
        { title: "Ovozli xabarlar", text: "Yozish noqulay bo'lsa, ovozli xabar qoldiring." },
        { title: "3 tagacha hisob", text: "Bir ilovada uchtagacha hisob ochib, ular o'rtasida tez almashing." },
      ],
    },
    { t: "h2", text: "Diler bilan bog'lanishning boshqa yo'llari" },
    {
      t: "p",
      text: "MaxChat yagona yo'l emas. E'lon sahifasidan dilerga bog'lanishning qulay usulini tanlang:",
    },
    {
      t: "ul",
      items: [
        "**So'rov yuborish** — diler so'rovingizni ilovada ko'radi.",
        "**Qo'ng'iroq** — dilerga to'g'ridan-to'g'ri telefon qiling.",
        "**Telegram** — diler bilan Telegram orqali bog'laning.",
      ],
    },
    { t: "h2", text: "Chatda nimalarni aniqlashtirish kerak" },
    {
      t: "ul",
      items: [
        "Raqam hozir mavjudmi va uni kim taklif qilyapti.",
        "To'lov usuli: bir martalik to'lovmi yoki [nasiya](/raqamlar/nasiya), shartlari qanday.",
        "Raqamni operator orqali o'z nomingizga qanday rasmiylashtirasiz.",
      ],
    },
    {
      t: "note",
      tone: "warn",
      title: "Ehtiyot bo'ling",
      text: "Chatda SMS-kodlar va parollarni hech kimga yubormang. Shubhali xabar yoki e'lon bo'lsa, ilovada xabar bering yoki foydalanuvchini bloklang. Batafsil — [xavfsizlik sahifasida](/xavfsizlik).",
    },
    { t: "h2", text: "Hisoblar o'rtasida almashish" },
    {
      t: "p",
      text: "Ilovada 3 tagacha hisob ochish mumkin. Masalan, bittasidan xaridor sifatida raqam qidirasiz, boshqasidan esa [diler](/dilerlar) sifatida e'lonlaringizni boshqarasiz — hisoblar o'rtasida tez almashish mumkin.",
    },
    { t: "h2", text: "MaxChat qachon qo'shilgan" },
    {
      t: "p",
      text: "MaxChat ilovaning 1.0.4 versiyasida qo'shilgan, ovozli xabarlar va 3 tagacha hisob esa 1.0.6 versiyasida paydo bo'lgan. To'liq ro'yxat — [yangiliklar sahifasida](/yangiliklar).",
    },
  ],
  related: ["dilerlar", "xavfsizlik", "yangiliklar", "raqamlar"],
};

export default page;
