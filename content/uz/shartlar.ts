import type { PageContent } from '../types';

// TODO(owner): full terms of use text is unknown — add the official terms when provided. Do not write legal clauses here until then.
const page: PageContent = {
  title: "Foydalanish shartlari | MaxRaqam",
  description:
    "MaxRaqam platformasining roli oddiy tilda: marketpleys, operator emas, bitimlar xaridor, diler va operator o'rtasida. Tasdiqlangan diler va moderatsiya haqida.",
  h1: "MaxRaqam foydalanish shartlari: qisqacha",
  crumb: "Shartlar",
  lead: [
    "MaxRaqam — mustaqil dilerlar chiroyli telefon raqamlarini taklif qiladigan marketpleys; u xaridorlar va dilerlarni bog'laydi, lekin telekom operator emas. Raqam mavjudligi, bitim shartlari, to'lov va qayta rasmiylashtirish xaridor, diler va operator o'rtasida kelishiladi.",
    "Quyida platformaning roli oddiy tilda qisqacha tushuntirilgan.",
  ],
  blocks: [
    { t: "h2", text: "Platformaning roli" },
    {
      t: "ul",
      items: [
        "MaxRaqam xaridorlar va mustaqil dilerlarni bog'laydigan ilova.",
        "MaxRaqam raqamlarga egalik qilmaydi, ularni o'tkazmaydi va sotmaydi.",
        "Raqamlarni ilovada mustaqil dilerlar taklif qiladi.",
      ],
    },
    { t: "h2", text: "Bitimlar kim o'rtasida tuziladi" },
    {
      t: "p",
      text: "Narx, to'lov usuli, nasiya shartlari va raqamni rasmiylashtirish tartibi xaridor, diler va operator o'rtasida kelishiladi. Raqamni o'z nomingizga faqat operatorning rasmiy kanallari orqali rasmiylashtiring — umumiy tartib [qo'llanmamizda](/qollanma/raqamni-oz-nomiga-otkazish).",
    },
    { t: "h2", text: "Tasdiqlangan diler belgisi" },
    {
      t: "p",
      text: "Bu belgi MaxRaqam diler taqdim etgan ma'lumotlarni tekshirganini bildiradi. U operator vakolati emas va bitimni kafolatlamaydi — [batafsil](/dilerlar/verifikatsiya).",
    },
    { t: "h2", text: "Shikoyatlar, moderatsiya va bloklash" },
    {
      t: "p",
      text: "Foydalanuvchilar shubhali yoki noto'g'ri e'lonlar haqida xabar berishi mumkin, e'lonlar moderatsiya qilinadi, foydalanuvchilarni esa bloklash mumkin. Xavfsizlik bo'yicha maslahatlar — [xavfsizlik sahifasida](/xavfsizlik).",
    },
    { t: "h2", text: "Maxfiylik va aloqa" },
    {
      t: "p",
      text: "Ma'lumotlaringiz bilan qanday ishlanishi — [maxfiylik sahifasida](/maxfiylik). Savollar bo'lsa, [biz bilan bog'laning](/aloqa).",
    },
  ],
  related: ["maxfiylik", "aloqa", "verifikatsiya", "xavfsizlik"],
};

export default page;
