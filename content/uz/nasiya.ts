import type { PageContent } from '../types';

// TODO(owner): no platform-level installment rules (limits, schedules, penalties) are known; terms are set by each dealer.
const page: PageContent = {
  title: "Nasiyaga raqam: bo'lib to'lash | MaxRaqam",
  description:
    "Nasiyaga raqam yoki bir martalik to'lov: MaxRaqam ilovasida to'lov usuli bo'yicha filtrlash, shartlarni solishtirish va diler bilan nimalarni aniqlash kerak.",
  h1: "Nasiyaga telefon raqam: bo'lib to'lash va bir martalik to'lov",
  crumb: 'Nasiya',
  lead: [
    "Nasiyaga raqam — chiroyli telefon raqami uchun bir yo'la emas, diler belgilagan shartlar asosida bo'lib to'lash imkoniyati. MaxRaqam ilovasida to'lov usuli bo'yicha filtrlab, nasiyali raqamlarni topishingiz va ularni bir martalik to'lov bilan solishtirishingiz mumkin.",
    "Nasiya shartlarini har bir diler o'zi belgilaydi. MaxRaqam bu shartlarni belgilamaydi va kafolatlamaydi.",
  ],
  blocks: [
    { t: 'h2', text: "Nasiya va bir martalik to'lov: farqi nimada" },
    {
      t: 'table',
      head: ['', "Bir martalik to'lov", 'Nasiya'],
      rows: [
        ["Qanday to'lanadi", "Kelishilgan summa bir yo'la to'lanadi", "Summa diler bilan kelishilgan jadval bo'yicha qismlarga bo'linadi"],
        ['Shartlarni kim belgilaydi', 'Diler', 'Diler'],
        ['Kimga qulay', "Darhol to'liq to'lashga tayyor xaridorga", "To'lovni vaqt bo'yicha taqsimlamoqchi bo'lgan xaridorga"],
      ],
    },

    { t: 'h2', text: 'Ilovada nasiyali raqamlarni qanday topish' },
    {
      t: 'ol',
      items: [
        'MaxRaqam katalogini oching.',
        "To'lov usuli filtridan nasiyani tanlang.",
        "Operator, raqamlar va valyuta (UZS yoki USD) bo'yicha qidiruvni toraytiring.",
        "Natijalarni saralang va bir martalik to'lov bilan nasiya shartlarini solishtiring.",
        "Mos e'lonni sevimlilarga saqlang va dilerga so'rov yuboring.",
      ],
    },

    { t: 'h2', text: 'Dilerdan nimalarni aniqlashtirish kerak' },
    {
      t: 'p',
      text: "Nasiya shartlari e'londan e'longa farq qiladi, shuning uchun kelishuvdan oldin quyidagilarni so'rang:",
    },
    {
      t: 'ul',
      items: [
        "Umumiy summa qancha va u bir martalik to'lovdan farq qiladimi?",
        "Birinchi to'lov qancha va qolgan qismi qanday jadval bilan to'lanadi?",
        "Raqam qachon sizning nomingizga rasmiylashtiriladi — to'liq to'lovdan keyinmi yoki oldinmi?",
        "To'lov kechiksa nima bo'ladi?",
        'Kelishuv qanday shaklda qayd etiladi?',
      ],
    },
    {
      t: 'p',
      text: "Bu savollarga diler javob beradi — MaxRaqam nasiya shartlarini o'zgartirmaydi va bitimda tomon emas. Raqamni qayta rasmiylashtirish esa operatorning rasmiy tartibi bo'yicha bajariladi.",
    },

    { t: 'h2', text: "Qo'shimcha maslahatlar" },
    {
      t: 'p',
      text: "Diler bilan ilova ichidagi [MaxChat](/maxchat) orqali yozishib, kelishilgan shartlarni yozishmada saqlab qo'yishingiz mumkin. Diler profili va verifikatsiya belgisini tekshiring: belgi MaxRaqam diler ma'lumotlarini ko'rib chiqqanini bildiradi, lekin bitimni kafolatlamaydi.",
    },
    {
      t: 'p',
      text: "Bosqichma-bosqich yo'riqnoma: [nasiyaga telefon raqam olish](/qollanma/nasiyaga-raqam-olish). Xavfsizlik bo'yicha: [firibgarlikdan saqlanish](/qollanma/firibgarlikdan-saqlanish). Nasiyali raqamlarni ko'rish uchun [ilovani yuklab oling](/yuklab-olish).",
    },
  ],
  related: ['g-nasiya', 'raqamlar', 'oltin', 'xavfsizlik'],
};

export default page;
