import type { PageContent } from '../types';

// TODO(owner): how MaxRaqam username auctions relate to Fragment technically is unknown — describe only when confirmed.
// TODO(owner): describe how a won Telegram username is transferred to the auction winner (steps, timing, who does what).
// TODO(owner): how a seller can put a Telegram username up for auction in MaxRaqam (process, requirements, fees) is unknown.
// TODO(owner): MaxCoin rules are unknown — exchange rates, refunds, exactly how MaxCoin is used in bidding, other uses.
// TODO(owner): full auction rules text (see /username/auksion-qoidalari).
const page: PageContent = {
  title: 'Telegram username sotib olish va sotish | MaxRaqam',
  description:
    "Telegram username qanday sotib olinadi va sotiladi: Fragment va MaxRaqam auksionlari, MaxCoin, jonli savdo va taklif berishdan oldin tekshiriladigan narsalar.",
  h1: 'Telegram username qanday sotib olinadi va sotiladi',
  crumb: 'Telegram username',
  lead: [
    "Telegram username'ni Telegram'ning kolleksion username'lar uchun rasmiy platformasi Fragment'da yoki MaxRaqam ilovasidagi jonli auksionlarda sotib olish mumkin. MaxRaqam auksionida qatnashish uchun Profil bo'limida Payme orqali MaxCoin paketini olasiz, ilovadagi auksion qoidalarini o'qiysiz va jonli savdoda taklif berasiz.",
    "MaxRaqam — Telegram'dan alohida ilova. Auksionlar MaxRaqam ilovasi ichida o'tadi, shuning uchun taklif berishdan oldin ilovada ko'rsatilgan auksion qoidalarini albatta o'qing.",
  ],
  blocks: [
    { t: 'h2', text: 'Telegram username nima' },
    {
      t: 'p',
      text: "Username — Telegram profilingizning ommaviy nomi, u @ belgisi bilan yoziladi. U profil havolasida ham ko'rinadi: masalan, @name username'li profilni t.me/name havolasi orqali ochish mumkin.",
    },
    {
      t: 'p',
      text: "Har bir username noyob: bir vaqtning o'zida u faqat bitta profil, kanal yoki guruhga tegishli bo'ladi. Username orqali sizni telefon raqamingizni bilmagan odamlar ham topa oladi. Shu sababli kanallar, bizneslar va shaxsiy brendlar uchun qisqa va esda qoladigan username alohida ahamiyatga ega.",
    },

    { t: 'h2', text: "Nega qisqa username'lar qadrli" },
    {
      t: 'p',
      text: "Umumiy qoida: username qanchalik qisqa va ma'noli bo'lsa, uni eslab qolish shunchalik oson va unga talab odatda shunchalik yuqori. Bir so'zdan iborat yoki brend nomiga mos username tasodifiy belgilar to'plamidan ko'ra ko'proq qiziqish uyg'otadi.",
    },
    {
      t: 'ul',
      items: [
        "**Uzunlik** — qisqa nomni yozish va aytish qulay.",
        "**Ma'no** — tanish so'z yoki nom yaxshiroq eslab qolinadi.",
        "**Moslik** — kanal, kompaniya yoki loyiha nomiga to'g'ri kelishi.",
      ],
    },
    {
      t: 'p',
      text: "Bular umumiy omillar. Muayyan username'ga qancha taklif berishni har bir ishtirokchi o'zi hal qiladi.",
    },

    { t: 'h2', text: '1-qadam. Qaysi platformada olishni tanlang' },
    {
      t: 'p',
      text: "Fragment — Telegram'ning kolleksion username'lar uchun rasmiy savdo maydonchasi, u TON blokcheynida ishlaydi. MaxRaqam esa alohida ilova bo'lib, unda Telegram va Instagram username'lari bo'yicha jonli auksionlar o'tkaziladi.",
    },
    {
      t: 'p',
      text: "Qaysi yo'lni tanlasangiz ham, savdo qoidalari va username g'olibga qanday topshirilishini oldindan bilib oling. MaxRaqam auksionlari haqida umumiy ma'lumot [username auksionlari](/username) va [Telegram username](/username/telegram) sahifalarida.",
    },

    { t: 'h2', text: "2-qadam. Kerakli username'ni aniqlang" },
    {
      t: 'p',
      text: "Auksionga kirishdan oldin o'zingizga qanday nom kerakligini aniqlab oling: shaxsiy profil, kanal yoki biznes uchun. Bir nechta muqobil variantni ham o'ylab qo'ying — kerakli nom auksionda bo'lmasligi yoki uni boshqa ishtirokchi yutib olishi mumkin.",
    },
    {
      t: 'p',
      text: "O'zingiz uchun taklif chegarasini ham oldindan belgilang. Jonli savdoda hayajonga berilib, rejalashtirilganidan ko'proq taklif berib yuborish oson.",
    },

    { t: 'h2', text: '3-qadam. MaxCoin paketini oling' },
    {
      t: 'p',
      text: "MaxCoin — MaxRaqam ilovasining ichki valyutasi, u username auksionlarida ishlatiladi. MaxCoin paketlari ilovaning Profil bo'limida Payme orqali sotib olinadi.",
    },
    {
      t: 'ol',
      items: [
        "Ilovada Profil bo'limini oching.",
        'Mos MaxCoin paketini tanlang.',
        "To'lovni Payme orqali amalga oshiring.",
      ],
    },
    { t: 'p', text: "Batafsil ma'lumot [MaxCoin](/maxcoin) sahifasida." },

    { t: 'h2', text: "4-qadam. Auksion qoidalarini o'qing" },
    {
      t: 'p',
      text: "Taklif berishdan oldin ilovada ko'rsatilgan auksion qoidalarini diqqat bilan o'qing. Auksion qanday yakunlanishi, taklif qanday qabul qilinishi va g'olib username'ni qanday olishi kabi savollarga javobni aynan shu qoidalardan izlang.",
    },
    {
      t: 'p',
      text: "Qisqacha ma'lumot [auksion qoidalari](/username/auksion-qoidalari) sahifasida berilgan, lekin asosiy manba — ilovaning o'zida ko'rsatilgan qoidalar matni.",
    },

    { t: 'h2', text: '5-qadam. Jonli savdoda ishtirok eting' },
    {
      t: 'p',
      text: "MaxRaqam'da username auksionlari jonli o'tadi: ishtirokchilar ilova ichida taklif beradi. Savdoni kuzatib boring va oldindan belgilagan chegarangizdan oshib ketmang.",
    },
    {
      t: 'p',
      text: "Username sizga juda zarur bo'lsa ham, xotirjam qaror qabul qiling. Qoidalarni bilmasdan yoki chegarasiz taklif berish keyinchalik afsuslanishga olib kelishi mumkin.",
    },
    {
      t: 'p',
      text: "Bir vaqtning o'zida bir nechta auksionda qatnashsangiz, har biri uchun alohida chegara belgilang va qaysi auksionda qancha taklif berganingizni kuzatib boring.",
    },

    { t: 'h2', text: "6-qadam. Username'ni qabul qilishda ehtiyot bo'ling" },
    {
      t: 'p',
      text: "G'olib bo'lganingizdan keyingi harakatlar uchun ilovadagi ko'rsatmalar va auksion qoidalariga amal qiling. Shu bilan birga oddiy xavfsizlik qoidalarini unutmang:",
    },
    {
      t: 'ul',
      items: [
        "Telegram'dan kelgan kirish kodlarini va ikki bosqichli tekshiruv parolini hech kimga aytmang.",
        "Hisobingizga kirish huquqini boshqa shaxsga bermang.",
        "Ilovadan tashqarida «tezroq va arzonroq» taklif qilayotgan notanish shaxslarga pul o'tkazmang.",
      ],
    },
    {
      t: 'p',
      text: "Shubhali foydalanuvchi yoki e'lonni ilovada shikoyat qiling yoki bloklang. Ko'proq maslahatlar [xavfsizlik](/xavfsizlik) sahifasida.",
    },

    { t: 'h2', text: 'Telegram username qanday sotiladi' },
    {
      t: 'p',
      text: "Username sotish uchun ham avval platformani tanlash kerak. Fragment — Telegram'ning rasmiy platformasi; MaxRaqam auksioniga username qo'yish tartibini ilovadagi auksion qoidalaridan yoki [aloqa](/aloqa) sahifasidagi kanallar orqali MaxRaqam jamoasidan so'rang.",
    },
    {
      t: 'p',
      text: "Sotishdan oldin username'ingizni xolis baholang: uzunligi, ma'nosi va u kimga kerak bo'lishi mumkinligi. Hisobingizga kirish ma'lumotlarini hech kimga bermang.",
    },
    {
      t: 'p',
      text: "Agar username'dan kanal yoki biznes uchun foydalanayotgan bo'lsangiz, sotishdan oldin obunachilaringiz va mijozlaringiz yangi nomni qanday bilib olishini o'ylab qo'ying.",
    },

    { t: 'h2', text: "Taklif berishdan oldin tekshiruv ro'yxati" },
    {
      t: 'ul',
      items: [
        "Username sizga nima uchun kerakligi va uning muqobil variantlari aniq.",
        'Taklif chegarangiz oldindan belgilangan.',
        "Profil bo'limida MaxCoin paketi olingan.",
        "Ilovadagi auksion qoidalari to'liq o'qilgan.",
        "G'alabadan keyin username qanday topshirilishi qoidalarda tushunarli.",
        "Telegram kirish kodlari va parolingiz hech kimga aytilmagan.",
      ],
    },

    { t: 'h2', text: 'Ilovada qanday qilinadi' },
    {
      t: 'ol',
      items: [
        "MaxRaqam ilovasini o'rnating va hisobingizga kiring.",
        "Profil bo'limida Payme orqali MaxCoin paketini oling.",
        "Username auksionlarini oching va Telegram username'larini ko'rib chiqing.",
        "Tanlangan auksion qoidalarini o'qing.",
        'Jonli savdoda taklif bering va natijani kuzatib boring.',
        "G'alabadan keyin ilovadagi ko'rsatmalarga amal qiling.",
      ],
    },
    {
      t: 'p',
      text: "Ilovada 3 tagacha hisob ochib, ular o'rtasida tez almashish mumkin. MaxRaqam'da Instagram username'lari bo'yicha auksionlar ham o'tkaziladi — [Instagram username](/username/instagram).",
    },

    { t: 'h2', text: "Ko'p beriladigan savollar" },
    {
      t: 'faq',
      items: [
        {
          q: "Fragment va MaxRaqam o'rtasida qanday farq bor?",
          a: "Fragment — Telegram'ning kolleksion username'lar uchun rasmiy platformasi va u TON'da ishlaydi. MaxRaqam esa alohida ilova, uning auksionlari ilova ichida o'tadi.",
        },
        {
          q: 'MaxCoin qayerdan olinadi?',
          a: "MaxCoin paketlari MaxRaqam ilovasining Profil bo'limida Payme orqali sotib olinadi.",
        },
        {
          q: 'MaxRaqam ilovasi pullikmi?',
          a: "Yo'q, ilovaning o'zi bepul. U iOS va Android uchun mavjud.",
        },
        {
          q: "Auksion qoidalarini qayerdan o'qisam bo'ladi?",
          a: "Qoidalar MaxRaqam ilovasida ko'rsatiladi. Qisqacha ma'lumot [auksion qoidalari](/username/auksion-qoidalari) sahifasida ham bor.",
        },
        {
          q: "Instagram username'lari ham auksionga qo'yiladimi?",
          a: "Ha, MaxRaqam ilovasida Telegram va Instagram username'lari bo'yicha jonli auksionlar o'tkaziladi.",
        },
      ],
    },
    {
      t: 'p',
      text: "Telegram username auksionlarini kuzatish uchun MaxRaqam ilovasini [yuklab oling](/yuklab-olish).",
    },
  ],
  related: ['qollanma', 'telegram', 'username', 'maxcoin', 'auksion'],
};

export default page;
