import type { PageContent } from '../types';

// TODO(owner): no USSD code is known for checking numbers registered to a passport at Uzmobile; add it if the owner confirms one.
// TODO(owner): Uzmobile re-registration documents, fees and deadlines are not provided.
const page: PageContent = {
  title: 'Uzmobile chiroyli raqamlar: 95, 99, 77 | MaxRaqam',
  description:
    "Uzmobile chiroyli raqam tanlash: 95, 99 va 77 prefikslariga mos naqshlar, tanlashdan oldingi savollar va MaxRaqam ilovasida operator filtri bilan qidirish.",
  h1: 'Uzmobile chiroyli raqam tanlash: 95, 99 va 77',
  crumb: 'Uzmobile',
  lead: [
    "Uzmobile chiroyli raqami 95, 99 yoki 77 prefiksi bilan boshlanadi; MaxRaqam ilovasida ularni topish uchun katalogda Uzmobile operator filtrini yoqing. Ilovadagi har bir e'lon mustaqil dilerga tegishli, kelishuv ham u bilan bo'ladi.",
    "Bu sahifada prefiksga mos raqam g'oyalari, tanlov oldidan o'ylab ko'radigan savollar va raqamni tekshirish bo'yicha maslahat jamlangan.",
  ],
  blocks: [
    { t: 'h2', text: '95, 99, 77 — Uzmobile prefikslari' },
    { t: 'operators', only: ['uzmobile'] },
    {
      t: 'p',
      text: "Uchta koddan 77 alohida e'tiborga loyiq: u allaqachon ikki yettilikdan iborat. 777 yoki 7777 bilan birga kelganda raqam yanada yaxlit ko'rinadi.",
    },

    {
      t: 'p',
      text: "99 ham ikki bir xil raqamdan iborat, ammo bu safar to'qqizliklar: 99 999 99 99 kabi to'liq takrorlanish uning eng yorqin ko'rinishi. 95 esa takrorlanmaydigan kod, shu bois u bilan oyna va nollarga asoslangan naqshlar ko'proq ajralib turadi.",
    },

    { t: 'h2', text: "Prefiksga mos raqam g'oyalari" },
    {
      t: 'table',
      caption: "Jadvaldagi raqamlar faqat naqsh namunasi, real e'lonlar emas.",
      head: ['Prefiks', "G'oya", 'Naqsh namunasi'],
      rows: [
        ['77', 'Yettiliklarni davom ettirish', '77 777 77 77'],
        ['77', '707007 ritmi', '77 170 70 07'],
        ['99', "To'qqizliklar bilan yakun", '99 123 99 99'],
        ['99', 'ABAB juftliklari', '99 456 45 45'],
        ['95', "Oyna ko'rinishi", '95 135 75 31'],
        ['95', 'Nollar bilan tugash', '95 300 00 00'],
      ],
    },

    { t: 'h2', text: "Tanlashdan oldin o'zingizga beradigan savollar" },
    {
      t: 'ol',
      items: [
        "Raqam nima uchun kerak — shaxsiy foydalanishgami yoki biznesgami? Biznes uchun mijozlar oson eslaydigan oxirgi raqamlar muhimroq bo'lishi mumkin.",
        "Prefiks muhimmi yoki faqat oxirgi yetti raqam? Faqat oxiri muhim bo'lsa, qidiruvni boshqa operatorlarga ham kengaytiring.",
        "Bir martalik to'lov qulaymi yoki nasiya? Ilovada to'lov usuli bo'yicha filtr bor.",
        "Raqamni o'z nomingizga o'tkazish tartibini diler bilan oldindan muhokama qildingizmi?",
      ],
    },

    { t: 'h2', text: 'Ilovadagi filtr bilan ishlash' },
    {
      t: 'p',
      text: "MaxRaqam katalogida operator sifatida Uzmobile'ni tanlang, so'ng raqamlar maydoniga 77, 999 yoki boshqa kombinatsiyani yozing. Narxni UZS yoki USD ko'rinishida ko'rish, natijalarni saralash va qiziq variantlarni sevimlilarga qo'shish mumkin.",
    },
    {
      t: 'p',
      text: "Yoqqan raqam bo'yicha dilerga ilova ichida so'rov qoldiring, qo'ng'iroq qiling yoki Telegram'da yozing. MaxRaqam raqamni sotmaydi va o'tkazmaydi — mavjudlik, to'lov va qayta rasmiylashtirish xaridor, diler va operator o'rtasida hal bo'ladi.",
    },

    { t: 'h2', text: "Raqam boshqa operatorga ko'chirilgan bo'lishi mumkin" },
    {
      t: 'p',
      text: "Raqamlarni operatorlar o'rtasida ko'chirish imkoniyati sababli 95, 99 yoki 77 bilan boshlanish raqam hozir Uzmobile'da ekanini bildirmaydi. Pasportingizga qaysi raqamlar ro'yxatdan o'tganini bilish uchun Uzmobile'ning o'ziga murojaat qiling.",
    },
    {
      t: 'p',
      text: "Qidiruvni boshlash: [MaxRaqam'ni yuklab olish](/yuklab-olish). Qo'shni operatorlar sahifalari — [Mobiuz](/raqamlar/mobiuz) va [Perfectum](/raqamlar/perfectum).",
    },
  ],
  related: ['raqamlar', 'nasiya', 'g-operator', 'mobiuz'],
};

export default page;
