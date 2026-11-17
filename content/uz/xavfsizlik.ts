import type { PageContent } from '../types';

// TODO(owner): USSD codes to check numbers registered to a passport are unknown for Mobiuz, Uzmobile, Perfectum and Humans — add when confirmed.
const page: PageContent = {
  title: "Xavfsizlik: raqam xaridida ehtiyot choralari",
  description:
    "MaxRaqam'da xavfsiz raqam xaridi: diler profilini tekshiring, egalikni tasdiqlamay to'lamang, raqamni USSD orqali tekshiring, shubhali e'lonni xabar qiling.",
  h1: "MaxRaqam'da xavfsizlik: raqam sotib olishda nimalarga e'tibor berish kerak",
  crumb: "Xavfsizlik",
  lead: [
    "Raqamni xavfsiz sotib olish uchun diler profili va verifikatsiyasini tekshiring, raqam egasi aniq bo'lmaguncha to'lov qilmang va rasmiylashtirishdan keyin raqamni USSD orqali tekshiring. MaxRaqam o'z tomonidan shikoyatlar, diler verifikatsiyasi, moderatsiya va foydalanuvchini bloklash imkoniyatlarini taqdim etadi.",
    "Esda tuting: MaxRaqam telekom operator emas va raqamlarni o'zi sotmaydi. Bitim shartlari, to'lov va qayta rasmiylashtirish xaridor, diler va operator o'rtasida kelishiladi.",
  ],
  blocks: [
    { t: "h2", text: "Diler profili va verifikatsiyasini tekshiring" },
    {
      t: "p",
      text: "E'lon ostidagi diler profilini oching va tasdiqlangan diler belgisi bor-yo'qligini ko'ring. Bu belgi MaxRaqam diler bergan ma'lumotlarni tekshirganini bildiradi, lekin operator vakolati emas va bitimni kafolatlamaydi. Batafsil — [diler verifikatsiyasi](/dilerlar/verifikatsiya).",
    },
    { t: "h2", text: "Egalikni tekshirmasdan to'lov qilmang" },
    {
      t: "ul",
      items: [
        "Raqam haqiqatan dilerga tegishli ekanini va uni qanday rasmiylashtirish mumkinligini oldindan aniqlang.",
        "Shoshiltiradigan, faqat oldindan to'lov so'raydigan takliflardan ehtiyot bo'ling.",
        "Raqamni o'z nomingizga faqat operatorning rasmiy kanallari orqali rasmiylashtiring.",
        "SMS-kodlar, parollar va karta ma'lumotlarini hech kimga bermang.",
      ],
    },
    {
      t: "p",
      text: "Qayta rasmiylashtirishning umumiy tartibi [raqamni o'z nomiga o'tkazish](/qollanma/raqamni-oz-nomiga-otkazish) qo'llanmasida tushuntirilgan.",
    },
    { t: "h2", text: "Raqamlarni USSD orqali tekshiring" },
    {
      t: "p",
      text: "Rasmiylashtirishdan keyin pasportingizga qaysi raqamlar ro'yxatdan o'tganini tekshirib ko'ring:",
    },
    {
      t: "table",
      head: ["Operator", "Tekshirish usuli"],
      rows: [
        ["Beeline", "*303#"],
        ["Ucell", "*360#"],
        ["Mobiuz, Uzmobile, Perfectum, Humans", "Operatoringizdan so'rang"],
      ],
    },
    { t: "h2", text: "Shubhali e'lonlar haqida xabar bering" },
    {
      t: "p",
      text: "Noto'g'ri yoki shubhali e'lonni ko'rsangiz, ilovada u haqida xabar bering. E'lonlar moderatsiya qilinadi, keraksiz yozishmalarni to'xtatish uchun esa foydalanuvchini bloklashingiz mumkin. Ilovadan tashqari savollar uchun — [aloqa sahifasi](/aloqa).",
    },
    { t: "h2", text: "Ma'lumotlaringiz himoyasi" },
    {
      t: "ul",
      items: [
        "Ma'lumotlar uzatish vaqtida shifrlanadi.",
        "Ma'lumotlaringizni o'chirishni so'rashingiz mumkin.",
        "Ilova ishlab chiqaruvchisi ma'lumotlar uchinchi shaxslarga berilmasligini bildiradi.",
      ],
    },
    {
      t: "p",
      text: "Qisqacha mazmun — [maxfiylik sahifasida](/maxfiylik). Firibgarlik usullari va ulardan saqlanish haqida batafsil — [qo'llanmamizda](/qollanma/firibgarlikdan-saqlanish).",
    },
  ],
  related: ["verifikatsiya", "g-firibgarlik", "g-pereoformlenie", "maxfiylik", "aloqa"],
};

export default page;
