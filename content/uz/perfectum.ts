import type { PageContent } from '../types';

// TODO(owner): no USSD code is known for checking numbers registered to a passport at Perfectum; add it if the owner confirms one.
// TODO(owner): Perfectum re-registration documents, fees and deadlines are not provided.
const page: PageContent = {
  title: 'Perfectum chiroyli raqamlar: 98 kodi | MaxRaqam',
  description:
    "Perfectum chiroyli raqamlari: 98 prefiksi uchun kombinatsiya g'oyalari, dilerga yozishdan oldingi tekshiruv ro'yxati va MaxRaqam ilovasida qidirish.",
  h1: 'Perfectum raqamlari: 98 prefiksli chiroyli kombinatsiyalar',
  crumb: 'Perfectum',
  lead: [
    "Perfectum'ning prefiksi bitta — 98, ya'ni bunday raqam +998 98 XXX XX XX ko'rinishida bo'ladi. MaxRaqam ilovasida operator filtridan Perfectum'ni tanlab, mustaqil dilerlar joylashtirgan 98 kodli raqamlarni ko'rasiz.",
    "Prefiks bitta bo'lgani uchun butun diqqat qolgan yetti raqamga qaratiladi.",
  ],
  blocks: [
    { t: 'h2', text: '98 kodi' },
    { t: 'operators', only: ['perfectum'] },
    {
      t: 'p',
      text: "Qiziq jihati: to'liq yozilganda kod mamlakat kodiga ulanib ketadi — +998 98. Shu sababli 9 va 8 ko'p qatnashgan kombinatsiyalar butun raqam bilan uyg'un ko'rinadi.",
    },

    {
      t: 'p',
      text: "Bitta prefiks qidiruvni soddalashtiradi: operatorni tanlaganingizdan keyin kod haqida o'ylash shart emas, faqat qolgan raqamlar ustida ishlaysiz. Masalan, siz uchun ahamiyatli sanani yoki oson aytiladigan juftliklarni izlash mumkin.",
    },

    { t: 'h2', text: "98 uchun raqam g'oyalari" },
    {
      t: 'ul',
      items: [
        "**98 989 89 89** — kod juftligi oxirigacha navbatlashadi (ABABABA turi).",
        "**98 888 88 88** — koddan keyin faqat sakkizliklar.",
        "**98 100 00 00** — bitta raqam va ortidan nollar.",
        "**98 246 86 42** — o'rtadagi 8 atrofida oyna.",
        "**98 707 00 71** — 707007 ritmi raqam boshida.",
      ],
    },
    {
      t: 'p',
      text: "Bu ro'yxat — g'oyalar to'plami. Ilovada qaysi raqamlar mavjudligi dilerlarning joriy e'lonlariga bog'liq.",
    },

    { t: 'h2', text: "Dilerga yozishdan oldin tekshirish ro'yxati" },
    {
      t: 'ul',
      items: [
        "Diler profilini oching: verifikatsiya belgisi bormi, ma'lumotlar to'liqmi?",
        "Raqam hozir qaysi tarmoqda ekanini so'rang — prefiks 98 bo'lsa ham, raqam boshqa operatorga ko'chirilgan bo'lishi mumkin.",
        "To'lov variantini aniqlang: bir martalik yoki [nasiya](/raqamlar/nasiya).",
        "Raqam sizning nomingizga qanday rasmiylashtirilishini kelishib oling.",
        "SMS kodlarni hech kimga aytmang va egalik tekshirilmaguncha pul o'tkazmang.",
      ],
    },
    {
      t: 'note',
      text: "Verifikatsiya belgisi MaxRaqam diler bergan ma'lumotlarni ko'rib chiqqanini bildiradi. U operator ruxsati ham, bitim kafolati ham emas.",
    },

    { t: 'h2', text: "Ilovada Perfectum raqamlarini ajratish" },
    {
      t: 'p',
      text: "Katalogda operator filtridan Perfectum'ni belgilang — ro'yxat 98 kodli raqamlar bilan cheklanadi. Raqamlar maydoniga, masalan, 989 yoki 8888 ni kiriting va natijalarni saralang. Yoqqan variantni sevimlilarga saqlab, dilerga ilova orqali so'rov yuboring yoki unga qo'ng'iroq qiling.",
    },

    { t: 'h2', text: 'Perfectum bo\'yicha qisqa javoblar' },
    {
      t: 'faq',
      items: [
        {
          q: "Perfectum'da pasportimdagi raqamlarni qanday tekshiraman?",
          a: "Perfectum uchun bunday USSD kodi haqida ma'lumot yo'q. Pasportingizga qaysi raqamlar yozilganini operatorning o'zidan so'rang.",
        },
        {
          q: "Raqamni MaxRaqam o'tkazib beradimi?",
          a: "Yo'q. MaxRaqam — dilerlar va xaridorlar uchrashadigan platforma, operator emas. To'lov va qayta rasmiylashtirish diler hamda Perfectum bilan hal qilinadi.",
        },
      ],
    },
    {
      t: 'p',
      text: "98 kodli raqamlarni ko'rish uchun [ilovani yuklab oling](/yuklab-olish). Naqsh turlari haqida batafsil — [oltin raqamlar](/raqamlar/oltin-raqamlar) sahifasida.",
    },
  ],
  related: ['raqamlar', 'oltin', 'xavfsizlik', 'humans'],
};

export default page;
