import type { PageContent } from '../types';

// TODO(owner): the verification procedure (steps, which documents/information dealers submit, review time) is unknown — add when confirmed.
const page: PageContent = {
  title: "Diler verifikatsiyasi nima | MaxRaqam",
  description:
    "Tasdiqlangan diler belgisi MaxRaqam diler bergan ma'lumotlarni tekshirganini bildiradi. U nimani kafolatlamaydi va xaridor o'zi nimalarni tekshirishi kerak.",
  h1: "Diler verifikatsiyasi: tasdiqlangan diler belgisi nimani anglatadi",
  crumb: "Verifikatsiya",
  lead: [
    "Tasdiqlangan diler belgisi MaxRaqam diler taqdim etgan ma'lumotlarni tekshirganini bildiradi. Bu belgi operator vakolatini anglatmaydi va bitimni kafolatlamaydi — raqam bo'yicha asosiy tekshiruvlarni xaridor o'zi ham qilishi kerak.",
  ],
  blocks: [
    { t: "h2", text: "Verifikatsiya nimani bildiradi" },
    {
      t: "p",
      text: "Diler ilovada verifikatsiyadan o'tganda, MaxRaqam u o'zi haqida bergan ma'lumotlarni tekshiradi. Natijada diler profilida tasdiqlangan diler belgisi paydo bo'ladi va xaridor bu diler haqida ko'proq ma'lumotga ega bo'ladi.",
    },
    { t: "h2", text: "Verifikatsiya nimani bildirmaydi" },
    {
      t: "ul",
      items: [
        "Diler operatorning vakili yoki rasmiy hamkori ekanini **bildirmaydi**.",
        "Bitim muvaffaqiyatli o'tishini **kafolatlamaydi**.",
        "To'lovni himoya qilish yoki pulni qaytarishni **anglatmaydi**.",
      ],
    },
    {
      t: "note",
      tone: "warn",
      title: "Muhim",
      text: "MaxRaqam telekom operator emas va raqamlarni o'zi sotmaydi. Raqam mavjudligi, bitim shartlari, to'lov va qayta rasmiylashtirish xaridor, diler va operator o'rtasida kelishiladi.",
    },
    { t: "h2", text: "Xaridor o'zi nimalarni tekshirishi kerak" },
    {
      t: "ol",
      items: [
        "Diler profilini ko'rib chiqing: boshqa e'lonlari va verifikatsiya belgisi bor-yo'qligini tekshiring.",
        "Raqam haqiqatan dilerga tegishli ekanini va uni qanday rasmiylashtirish mumkinligini oldindan aniqlang.",
        "Egalikni tekshirmasdan turib to'lov qilmang.",
        "Raqamni o'z nomingizga faqat operatorning rasmiy kanallari orqali rasmiylashtiring.",
        "Keyin pasportingizga qaysi raqamlar ro'yxatdan o'tganini tekshiring: Beeline'da *303#, Ucell'da *360#. Boshqa operatorlarda bu haqda operatoringizdan so'rang.",
        "SMS-kodlarni hech kimga bermang.",
      ],
    },
    {
      t: "p",
      text: "Batafsil maslahatlar — [xavfsizlik sahifasida](/xavfsizlik) va [firibgarlikdan saqlanish qo'llanmasida](/qollanma/firibgarlikdan-saqlanish). Shubhali e'lonni ko'rsangiz, ilovada xabar bering.",
    },
    { t: "h2", text: "Dilerlar uchun" },
    {
      t: "p",
      text: "Diler sifatida verifikatsiyadan ilovaning o'zida o'tasiz. Dilerlar uchun boshqa imkoniyatlar — [dilerlar sahifasida](/dilerlar).",
    },
  ],
  related: ["dilerlar", "xavfsizlik", "g-firibgarlik", "g-diler"],
};

export default page;
