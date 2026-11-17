import type { PageContent } from '../types';

// TODO(owner): company mission / story text is unknown — add when provided.
const page: PageContent = {
  title: "Biz haqimizda | MaxRaqam",
  description:
    "MaxRaqam haqida: MAXTOUR MOBILE APP MCHJ (Toshkent) ilovasi, chiroyli telefon raqamlar va username savdosi uchun platforma. Biz kimmiz va nima qilmaymiz.",
  h1: "MaxRaqam haqida",
  crumb: "Biz haqimizda",
  lead: [
    "MaxRaqam — chiroyli, oltin va VIP telefon raqamlarini mustaqil dilerlar taklif qiladigan marketpleys; u xaridorlar va dilerlarni bog'laydi. Ilovani Toshkentdagi MAXTOUR MOBILE APP MCHJ kompaniyasi ishlab chiqqan.",
  ],
  blocks: [
    { t: "h2", text: "Kompaniya" },
    {
      t: "p",
      text: "MaxRaqam ilovasi MAXTOUR MOBILE APP MCHJ (Toshkent, O'zbekiston) tomonidan yaratilgan. Ilova ishlab chiqaruvchisi — Doston Absalamov.",
    },
    { t: "h2", text: "MaxRaqam nima qiladi" },
    {
      t: "ul",
      items: [
        "Mustaqil dilerlar taklif qiladigan chiroyli raqamlarni bir joyda jamlaydi — [raqamlar](/raqamlar).",
        "Xaridorlarga raqamlarni filtrlash, solishtirish va diler bilan bog'lanish imkonini beradi.",
        "Dilerlarga raqamlarni e'lon qilish va xaridorlar so'rovlarini ko'rish vositalarini beradi — [dilerlar uchun](/dilerlar).",
        "Ilova ichida Telegram va Instagram [username auksionlarini](/username) o'tkazadi.",
      ],
    },
    { t: "h2", text: "MaxRaqam nima qilmaydi" },
    {
      t: "ul",
      items: [
        "MaxRaqam telekom operator emas.",
        "Raqamlarga egalik qilmaydi, ularni o'tkazmaydi va sotmaydi.",
        "Raqam mavjudligi, bitim shartlari, to'lov va qayta rasmiylashtirish xaridor, diler va operator o'rtasida kelishiladi.",
        "Tasdiqlangan diler belgisi operator vakolati emas va bitimni kafolatlamaydi — [verifikatsiya](/dilerlar/verifikatsiya).",
      ],
    },
    { t: "h2", text: "Ilova" },
    {
      t: "p",
      text: "MaxRaqam bepul, o'zbek, rus va ingliz tillarida ishlaydi va App Store hamda Google Play'da mavjud — [yuklab olish](/yuklab-olish). Ilova qanday rivojlanganini [yangiliklar sahifasida](/yangiliklar) ko'ring.",
    },
    { t: "h2", text: "Aloqa" },
    { t: "contacts" },
  ],
  related: ["aloqa", "shartlar", "maxfiylik", "yuklab"],
};

export default page;
