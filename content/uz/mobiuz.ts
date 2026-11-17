import type { PageContent } from '../types';

// TODO(owner): no USSD code is known for checking numbers registered to a passport at Mobiuz; add it here if the owner confirms one.
// TODO(owner): Mobiuz re-registration documents, fees and deadlines are not provided.
const page: PageContent = {
  title: 'Mobiuz chiroyli raqamlar: 97 va 88 | MaxRaqam',
  description:
    "Mobiuz chiroyli va oltin raqamlari: 97 va 88 prefikslari uchun naqsh g'oyalari, MaxRaqam ilovasida qidirish rejasi va raqam operatorini aniqlash.",
  h1: 'Mobiuz chiroyli raqamlar va oltin nomerlar (97, 88)',
  crumb: 'Mobiuz',
  lead: [
    "Mobiuz raqamlari 97 va 88 prefikslari bilan boshlanadi, MaxRaqam ilovasida ularni operator filtri orqali bir zumda ajratib olasiz. Raqamlarni mustaqil dilerlar e'lon qiladi; ilova ularni topish, solishtirish va dilerga yozish uchun xizmat qiladi.",
    "Rus tilida so'zlashuvchi xaridorlar ko'pincha «Mobiuz золотой номер» deb qidiradi — gap takrorlanuvchi va ritmik raqamlar haqida.",
  ],
  blocks: [
    { t: 'h2', text: 'Mobiuz kodlari' },
    { t: 'operators', only: ['mobiuz'] },
    {
      t: 'p',
      text: "97 va 88 bir-biriga o'xshamaydi. 88 ikki bir xil raqamdan tuzilgan, demak takrorlanuvchi naqshlar uchun tayyor poydevor. 97 esa ketma-ketlik va oyna naqshlarida qiziqarli ko'rinadi.",
    },

    { t: 'h2', text: "88 — sakkizliklar uchun tabiiy boshlanish" },
    {
      t: 'p',
      text: "88 888 88 88 kabi raqam boshidan oxirigacha bitta raqamdan iborat — takrorlanishning eng yuqori darajasi. Yengilroq variantlar ham bor: 88 123 88 88 yoki 88 808 80 80, bunda kod raqam ichida aks-sado beradi.",
    },

    { t: 'h2', text: 'Kod 97 bilan nima qilsa bo\'ladi' },
    {
      t: 'ul',
      items: [
        "**Oyna:** 97 123 21 79 — to'qqiz raqamning hammasi ikki tomondan bir xil o'qiladi.",
        "**Ketma-ketlik:** 97 123 45 67 — raqamlar tartib bilan o'sib boradi.",
        "**Almashinuvchi juftlik:** 97 979 79 79 — kodning ikki raqami oxirigacha navbatlashadi.",
        "**Uchlik va to'rtlik:** 97 777 00 00 — ikki xil takrorlanish bitta raqamda uchrashadi.",
      ],
    },
    {
      t: 'p',
      text: "Bu misollar naqsh qanday ko'rinishini tushuntiradi, ular ilovadagi e'lon emas.",
    },

    { t: 'h2', text: 'Mobiuz raqamini qidirish rejasi' },
    {
      t: 'steps',
      items: [
        {
          title: 'Operatorni belgilang',
          text: "Katalog filtrlari orasidan Mobiuz'ni tanlang — ro'yxatda faqat shu operator raqamlari qoladi.",
        },
        {
          title: 'Raqamlarni kiriting',
          text: "88, 777 yoki o'zingiz uchun ahamiyatli sana kabi ketma-ketlikni yozing va natijani saralang.",
        },
        {
          title: 'Diler bilan gaplashing',
          text: "Dilerga ilova orqali so'rov yuboring, qo'ng'iroq qiling yoki Telegram'da yozing. Narx, to'lov usuli va rasmiylashtirishni aynan u bilan kelishasiz.",
        },
      ],
    },
    {
      t: 'p',
      text: "MaxRaqam ilovasi o'zbek, rus va ingliz tillarida ishlaydi, shuning uchun «золотой номер» deb qidiradigan xaridor interfeysni o'z tilida ochishi mumkin. Diler bilan esa [MaxChat](/maxchat) orqali yozishish, ovozli xabar yuborish yoki Telegram'da bog'lanish mumkin.",
    },
    {
      t: 'note',
      tone: 'warn',
      title: 'Prefiks haqida eslatma',
      text: "Mobiuz raqami boshqa operatorga ko'chirilgan bo'lishi mumkin, aksincha, boshqa prefiksli raqam Mobiuz tarmog'ida ishlashi ham mumkin. Shuning uchun 97 yoki 88 operatorning kafolati emas.",
    },

    { t: 'h2', text: "Raqam pasportingizga yozilganini qanday bilish" },
    {
      t: 'p',
      text: "Mobiuz uchun pasportga qayd etilgan raqamlarni ko'rsatadigan USSD kodi haqida bu yerda ma'lumot yo'q. Bu savolni Mobiuz'ning o'ziga, uning rasmiy aloqa kanallari orqali bering.",
    },
    {
      t: 'p',
      text: "Yodda tuting: MaxRaqam telekom operatori emas va raqamni hech kimga o'tkazib bermaydi. Qayta rasmiylashtirish diler va operator ishtirokida bajariladi — umumiy bosqichlar [qo'llanmada](/qollanma/raqamni-oz-nomiga-otkazish).",
    },
    {
      t: 'p',
      text: "Mobiuz raqamlarini ko'rish uchun [ilovani yuklab oling](/yuklab-olish). Naqshlar haqida ko'proq: [chiroyli raqam turlari](/qollanma/chiroyli-raqam-turlari).",
    },
  ],
  related: ['raqamlar', 'oltin', 'g-turlari', 'uzmobile'],
};

export default page;
