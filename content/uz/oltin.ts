import type { PageContent } from '../types';

// TODO(owner): no price figures or price ranges for gold/VIP numbers are available; do not add any without the owner's data.
const page: PageContent = {
  title: 'Oltin raqamlar va VIP nomerlar | MaxRaqam',
  description:
    "Oltin raqam, gold nomer va VIP raqam turlari: 7777, 0000, 1111, ABAB, ABABABA, 707007 va oyna naqshlari, qiymatga ta'sir qiluvchi omillar va qidirish.",
  h1: 'Oltin raqamlar va VIP raqamlar: turlari va naqshlari',
  crumb: 'Oltin raqamlar',
  lead: [
    "Oltin raqam (gold nomer, VIP raqam) — 7777, 0000 yoki ABAB kabi takrorlanuvchi yoki simmetrik naqshga ega, oson eslab qolinadigan telefon raqami. MaxRaqam ilovasida bunday raqamlarni mustaqil dilerlar joylashtiradi, siz esa ularni raqamlar va operator bo'yicha qidirasiz.",
    "Rus tilida ular «золотой номер» yoki «VIP номер» deb ataladi.",
  ],
  blocks: [
    { t: 'h2', text: 'Oltin raqam naqshlari' },
    {
      t: 'table',
      caption: "XX — operator prefiksi. Namunalar faqat naqshni ko'rsatadi.",
      head: ['Naqsh', 'Namuna', 'Tavsif'],
      rows: [
        ['7777', 'XX 123 77 77', "Oxirgi to'rt raqam — yettiliklar"],
        ['0000', 'XX 450 00 00', "Ketma-ket to'rtta nol"],
        ['1111', 'XX 382 11 11', "To'rtta bir xil birlik"],
        ['777', 'XX 777 45 61', 'Ketma-ket uchta bir xil raqam'],
        ['ABAB', 'XX 234 56 56', 'Ikki raqamli juftlik takrorlanadi'],
        ['ABABABA', 'XX 525 25 25', 'Ikki raqam yetti marta navbatlashadi'],
        ['707007', 'XX 170 70 07', "707 va 007 bo'laklaridan tuzilgan ritm"],
        ['Oyna (mirror)', 'XX 123 43 21', "Raqam ikki tomondan bir xil o'qiladi"],
      ],
    },

    { t: 'h2', text: "Oltin raqam qiymatiga nima ta'sir qiladi" },
    {
      t: 'p',
      text: "Har bir raqamning narxini uni joylashtirgan diler belgilaydi. Umumiy holda xaridorlar e'tiborini quyidagi omillar tortadi:",
    },
    {
      t: 'ul',
      items: [
        "**Takrorlanish** — bir xil raqamlar qancha ko'p bo'lsa, raqam shuncha oson eslanadi.",
        "**Naqsh uzunligi** — 777 dan ko'ra 7777, undan ham ko'ra butun raqam bo'ylab davom etgan naqsh ko'proq ajralib turadi.",
        "**Operatorga talab** — ba'zi xaridorlar ma'lum operator yoki prefiksni afzal ko'radi.",
      ],
    },
    {
      t: 'p',
      text: "Batafsil tahlil — [oltin raqam narxi nimaga bog'liq](/qollanma/oltin-raqam-narxi) qo'llanmasida. Raqam turlarining to'liq tavsifi: [chiroyli raqam turlari](/qollanma/chiroyli-raqam-turlari).",
    },

    { t: 'h2', text: 'Ilovada oltin raqamni qanday qidirish' },
    {
      t: 'ol',
      items: [
        "Katalogdagi raqamlar maydoniga naqshni kiriting: 7777, 0000, 777 va hokazo.",
        "Kerak bo'lsa, operator filtrini yoqing — masalan, faqat [Beeline](/raqamlar/beeline) yoki [Ucell](/raqamlar/ucell).",
        "Valyutani (UZS yoki USD) va to'lov usulini tanlang — bir martalik yoki [nasiya](/raqamlar/nasiya).",
        "Natijalarni saralang, yoqqanlarini sevimlilarga qo'shing va dilerga so'rov yuboring.",
      ],
    },

    { t: 'h2', text: 'Kelishuvdan oldin' },
    {
      t: 'p',
      text: "Oltin raqam odatda puxta o'ylab tanlanadi, shuning uchun bitim tafsilotlarini oldindan aniqlang. MaxRaqam operator emas va raqamni o'zi sotmaydi: mavjudlik, kelishuv, to'lov va qayta rasmiylashtirish xaridor, diler va operator o'rtasida bo'ladi.",
    },
    {
      t: 'ul',
      items: [
        "Diler profili va verifikatsiya belgisini tekshiring — belgi diler bergan ma'lumotlar tekshirilganini bildiradi, bitim kafolatini emas.",
        "Raqam egaligi tasdiqlanmaguncha pul o'tkazmang va SMS kodlarni hech kimga bermang.",
        "Qayta rasmiylashtirishni operatorning rasmiy kanallari orqali bajaring.",
      ],
    },
    {
      t: 'p',
      text: "Ko'proq maslahat — [xavfsizlik](/xavfsizlik) sahifasida. Oltin raqamlarni ko'rish uchun [ilovani yuklab oling](/yuklab-olish).",
    },
  ],
  related: ['g-oltin-narxi', 'g-turlari', 'raqamlar', 'xavfsizlik'],
};

export default page;
