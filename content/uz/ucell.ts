import type { PageContent } from '../types';

// TODO(owner): Ucell re-registration procedure (documents, fees, deadlines) is not provided; add only from an official source.
const page: PageContent = {
  title: 'Ucell chiroyli raqamlar: 93, 94, 50 | MaxRaqam',
  description:
    "Ucell chiroyli raqam tanlash: 93, 94 va 50 prefikslari uchun naqsh g'oyalari, MaxRaqam ilovasidagi operator filtri va *360# orqali raqamlarni tekshirish.",
  h1: 'Ucell chiroyli raqamlar: 93, 94 va 50 kodlari',
  crumb: 'Ucell',
  lead: [
    "Ucell chiroyli raqamini topish uchun MaxRaqam ilovasida operator filtridan Ucell'ni tanlang — ro'yxatda 93, 94 va 50 prefiksli raqamlar qoladi. E'lonlarni mustaqil dilerlar joylashtiradi, shartlarni esa siz diler bilan bevosita kelishasiz.",
    "Uchta prefiks tanlovni kengaytiradi: bir xil «chiroyli» oxir turli kodlar bilan butunlay boshqacha ko'rinadi.",
  ],
  blocks: [
    { t: 'h2', text: 'Bir operator — uchta kod' },
    { t: 'operators', only: ['ucell'] },
    {
      t: 'p',
      text: "Ucell raqami +998 93…, +998 94… yoki +998 50… ko'rinishida bo'ladi. Qaysi biri ma'qul — didga bog'liq: kimdir kod bilan uyg'un raqamni, kimdir faqat oxiri chiroyli variantni izlaydi.",
    },

    { t: 'h2', text: "Har bir prefiks uchun g'oyalar" },
    { t: 'h3', text: '93' },
    {
      t: 'p',
      text: "93 393 93 93 kabi kombinatsiyada kod raqam ichida qayta-qayta uchraydi. Yana bir yo'l — 3333 bilan tugaydigan raqam: u koddagi uchlik bilan hamohang eshitiladi.",
    },
    { t: 'h3', text: '94' },
    {
      t: 'p',
      text: "94 bilan juftliklar yaxshi chiqadi: 94 494 94 94 yoki 94 123 44 44. To'rtliklar bilan yakunlangan raqam bir qarashdayoq yodda qoladi.",
    },
    { t: 'h3', text: '50' },
    {
      t: 'p',
      text: "50 kodi nol bilan tugagani uchun 50 500 00 00 yoki 50 555 50 50 kabi naqshlar tabiiy ko'rinadi. Nollar ko'p raqamni og'zaki aytish ham qulay.",
    },
    {
      t: 'p',
      text: "Yuqoridagilar — naqsh namunasi, xolos. Hozir ilovada qaysi raqamlar borligini qidiruv ko'rsatadi.",
    },

    { t: 'h2', text: 'Uchta koddan unumli foydalanish' },
    {
      t: 'ul',
      items: [
        "Avval yoqtirgan oxiringizni toping, prefiksni esa keyin tanlang — shunda birorta ham mos variant ko'zdan qochmaydi.",
        "Bir xil oxirni 93, 94 va 50 bilan alohida yozib ko'ring: qaysi biri og'zaki aytishda qulayroq ekanini darrov sezasiz.",
        "Bir nechta nomzodni sevimlilarga yig'ing va dilerlar bilan shundan keyin gaplashing.",
      ],
    },

    { t: 'h2', text: "Ilovada Ucell bo'yicha qidirish" },
    {
      t: 'p',
      text: "Katalogda operator filtridan Ucell'ni belgilang. Keyin raqamlar maydoniga kerakli ketma-ketlikni yozing — masalan, 4444 yoki 505. Natijani valyuta (UZS yoki USD) va to'lov usuli bo'yicha toraytirish, saralash va sevimlilarga saqlash mumkin.",
    },
    {
      t: 'p',
      text: "Diler bilan ilova ichidagi [MaxChat](/maxchat) orqali yozishasiz, qo'ng'iroq qilasiz yoki Telegram'ga o'tasiz. Bo'lib to'lash haqida — [nasiyaga raqam](/raqamlar/nasiya) sahifasida.",
    },

    { t: 'h2', text: '*360#: pasportingizga qaysi raqamlar yozilgan' },
    {
      t: 'p',
      text: "Ucell'da o'z pasportingizga qayd etilgan raqamlarni *360# USSD so'rovi bilan ko'rish mumkin. Raqamni diler bilan kelishib, operatorda o'z nomingizga rasmiylashtirgach, natijani shu so'rov orqali tekshiring.",
    },

    { t: 'h2', text: 'Ucell raqamlari haqida savollar' },
    {
      t: 'faq',
      items: [
        {
          q: "93 yoki 94 bilan boshlangan raqam albatta Ucell'dami?",
          a: "Shart emas. Raqamni boshqa operatorga ko'chirish mumkin, shuning uchun prefiks hozirgi operatorni kafolatlamaydi — buni dilerdan aniqlang.",
        },
        {
          q: "Raqamni MaxRaqam'ning o'zi sotadimi?",
          a: "Yo'q. MaxRaqam — xaridor va dilerni bog'laydigan marketpleys. Raqam mavjudligi, narx, to'lov va rasmiylashtirish xaridor, diler va Ucell o'rtasida hal qilinadi.",
        },
        {
          q: 'Dilerga qanchalik ishonish mumkin?',
          a: "Profildagi verifikatsiya belgisi MaxRaqam diler bergan ma'lumotlarni tekshirganini anglatadi. U bitimni kafolatlamaydi, shuning uchun to'lovdan oldin [xavfsizlik maslahatlari](/xavfsizlik) bilan tanishing.",
        },
      ],
    },
    {
      t: 'p',
      text: "Ucell chiroyli raqamlarini ko'rish uchun [MaxRaqam ilovasini o'rnating](/yuklab-olish). Oltin naqshlar to'plami — [oltin raqamlar](/raqamlar/oltin-raqamlar) sahifasida.",
    },
  ],
  related: ['raqamlar', 'oltin', 'nasiya', 'beeline'],
};

export default page;
