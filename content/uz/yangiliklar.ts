import type { PageContent } from '../types';

const page: PageContent = {
  title: "MaxRaqam yangiliklari: ilova versiyalari tarixi",
  description:
    "MaxRaqam ilovasining versiyalar tarixi: 1.0 dan 1.1.2 gacha. MaxChat, 3 tagacha hisob, ovozli xabarlar, username auksionlari va MaxCoin qachon qo'shilgani.",
  h1: "MaxRaqam ilovasi yangiliklari va versiyalar tarixi",
  crumb: "Yangiliklar",
  lead: [
    "MaxRaqam ilovasi 2026-yil 3-sentabrda 1.0 versiyasi bilan ishga tushgan, eng so'nggi 1.1.2 versiyasi esa 16-noyabrda chiqib, username auksionlari va MaxCoin paketlarini qo'shgan. Quyida barcha versiyalar va asosiy o'zgarishlar keltirilgan.",
  ],
  blocks: [
    { t: "h2", text: "Versiyalar tarixi" },
    { t: "changelog" },
    { t: "h2", text: "MaxChat — 1.0.4" },
    {
      t: "p",
      text: "1.0.4 versiyasida ilova ichidagi chat — [MaxChat](/maxchat) paydo bo'ldi: endi dilerlarga ilovadan chiqmasdan yozish mumkin. Shu versiyada operator kodisiz raqamlar uchun e'lonlar ham qo'shildi.",
    },
    { t: "h2", text: "Ovozli xabarlar va 3 tagacha hisob — 1.0.6" },
    {
      t: "p",
      text: "1.0.6 versiyasi MaxChat'ga ovozli xabarlarni qo'shdi va bitta ilovada 3 tagacha hisob ochib, ular o'rtasida almashish imkonini berdi. Yangi prefikslar ham qo'shildi — ro'yxat [raqamlar sahifasida](/raqamlar).",
    },
    { t: "h2", text: "Username auksionlari va MaxCoin — 1.1.2" },
    {
      t: "p",
      text: "1.1.2 versiyasida Telegram va Instagram [username auksionlari](/username) hamda Profil bo'limida Payme orqali sotib olinadigan [MaxCoin](/maxcoin) paketlari qo'shildi. Dizayn, tarjima va tezlik ham yaxshilandi.",
    },
    {
      t: "p",
      text: "Eng so'nggi versiyani [yuklab olish sahifasidan](/yuklab-olish) o'rnating.",
    },
  ],
  related: ["maxchat", "username", "maxcoin", "yuklab"],
};

export default page;
