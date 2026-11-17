import type { PageContent } from '../types';

// TODO(owner): USSD codes for checking numbers registered to a passport are unknown for Mobiuz, Uzmobile, Perfectum and Humans — add if the operators publish them.
// TODO(owner): an official way to check a number's CURRENT operator after porting (operator service, USSD, website) is unknown — add only after confirming.
// TODO(owner): explain what the app's "numbers without an operator code" listings contain exactly, once confirmed.
const page: PageContent = {
  title: 'Raqam qaysi operatorga tegishli? | MaxRaqam',
  description:
    "Raqam qaysi operatorga tegishli ekanini qanday bilish: +998 dan keyingi prefikslar jadvali, raqamni ko'chirish holati va diler bilan aniqlashtirish usullari.",
  h1: 'Raqam qaysi operatorga tegishli ekanini qanday bilish mumkin',
  crumb: 'Operatorni aniqlash',
  lead: [
    "Raqam qaysi operatorga tegishli ekanini taxminan +998 dan keyingi ikki xonali prefiks orqali bilish mumkin: masalan, 90 va 91 — Beeline, 93, 94 va 50 — Ucell, 97 va 88 — Mobiuz. Biroq raqamni boshqa operatorga ko'chirish imkoniyati sababli prefiks raqamning hozirgi operatorini kafolatlamaydi, shuning uchun xariddan oldin buni diler va operator orqali tasdiqlab oling.",
    "Quyida prefikslar jadvali, raqam ko'chirilgan bo'lishi mumkinligini hisobga olish usullari va MaxRaqam ilovasida operator bo'yicha qanday qidirish haqida qadamma-qadam tushuntiriladi.",
  ],
  blocks: [
    { t: 'h2', text: "Prefiks nima va u qayerda yoziladi" },
    {
      t: 'p',
      text: "O'zbekistondagi mobil raqamlar **+998 XX XXX XX XX** ko'rinishida yoziladi. +998 — mamlakat kodi, undan keyingi ikki raqam (XX) esa prefiks yoki operator kodi deb ataladi. Qolgan yetti raqam abonentning shaxsiy raqami.",
    },
    {
      t: 'p',
      text: "Har bir operatorga o'z prefikslari ajratilgan. Shuning uchun raqamning boshidagi ikki raqamga qarab, u dastlab qaysi operator tomonidan berilganini aniqlash mumkin.",
    },
    {
      t: 'p',
      text: "Raqam turli ko'rinishda yozilishi mumkin: +998 90 123 45 67, 998901234567 yoki shunchaki 90 123 45 67. Qaysi shaklda bo'lmasin, prefiks — bu 998 dan keyin keladigan birinchi ikki raqam. Agar raqam 998 siz yozilgan bo'lsa, prefiks uning eng boshidagi ikki raqam bo'ladi.",
    },
    { t: 'h2', text: '1-qadam: Prefiksni operatorlar jadvali bilan solishtiring' },
    {
      t: 'p',
      text: "Raqamdagi +998 dan keyingi ikki raqamni toping va quyidagi jadvaldan qaysi operatorga tegishli ekanini ko'ring.",
    },
    { t: 'operators' },
    {
      t: 'p',
      text: "Har bir operatorning raqamlari va ularga xos naqshlar haqida alohida sahifalar bor: [Beeline](/raqamlar/beeline), [Ucell](/raqamlar/ucell), [Mobiuz](/raqamlar/mobiuz), [Uzmobile](/raqamlar/uzmobile), [Perfectum](/raqamlar/perfectum) va [Humans](/raqamlar/humans).",
    },
    { t: 'h2', text: "2-qadam: Raqam ko'chirilgan bo'lishi mumkinligini hisobga oling" },
    {
      t: 'note',
      tone: 'warn',
      title: 'Prefiks hozirgi operatorni kafolatlamaydi',
      text: "Raqamni saqlagan holda boshqa operatorga o'tish (raqamni ko'chirish) imkoniyati bor. Shu sababli, masalan, 90 bilan boshlanadigan raqam hozir Beeline'da emas, boshqa operatorda xizmat ko'rsatilayotgan bo'lishi mumkin. Prefiks faqat raqam dastlab qaysi operatorga tegishli bo'lganini ko'rsatadi.",
    },
    {
      t: 'p',
      text: "Demak, jadval sizga birinchi taxminni beradi, xolos. Raqam bir necha marta operator almashtirgan bo'lishi ham mumkin, shuning uchun prefiksga qarab xulosa chiqarishdan oldin keyingi qadamlarni ham bajaring.",
    },
    {
      t: 'p',
      text: "Raqam sotib olayotganda bu farq juda muhim, chunki raqamni o'z nomingizga o'tkazish aynan hozirgi operatorning rasmiy tartibi orqali amalga oshiriladi.",
    },
    { t: 'h2', text: "3-qadam: E'londagi operator ma'lumotini ko'ring" },
    {
      t: 'p',
      text: "MaxRaqam ilovasida raqamlar operator bo'yicha filtrlanadi va har bir e'londa diler operatorni ko'rsatadi. E'lonni ochib, ko'rsatilgan operator prefiksga mos kelishini tekshiring. Agar mos kelmasa, bu xato emas, balki raqam ko'chirilgani belgisi bo'lishi mumkin — buni dilerdan so'rang.",
    },
    {
      t: 'p',
      text: "Aksincha, operator va prefiks mos kelsa ham, bu yakuniy tasdiq emas: e'londagi ma'lumotni diler kiritadi. Shuning uchun keyingi qadamda uni diler bilan suhbatda aniqlashtiring.",
    },
    {
      t: 'p',
      text: "Ilovada operator kodisiz raqamlar uchun alohida e'lonlar ham bor. Bunday holatda raqam qaysi operatorda ekanini dilerning o'zidan aniqlashtiring.",
    },
    { t: 'h2', text: '4-qadam: Dilerdan hozirgi operatorni tasdiqlab oling' },
    {
      t: 'p',
      text: "Xarid haqida gaplashganda dilerga to'g'ridan-to'g'ri savol bering: raqam hozir qaysi operatorda va kimning nomida rasmiylashtirilgan. Halol diler bu savollarga aniq javob beradi. Javoblar e'londagi ma'lumot bilan mos kelishiga e'tibor bering.",
    },
    {
      t: 'ul',
      items: [
        "Raqam hozir qaysi operatorda xizmat ko'rsatilmoqda?",
        "Raqam ilgari boshqa operatordan ko'chirilganmi?",
        "Raqam kimning nomida rasmiylashtirilgan — sizningmi yoki boshqa shaxsningmi?",
        "Raqamni mening nomimga o'tkazish uchun qaysi operatorga birga murojaat qilamiz?",
      ],
    },
    {
      t: 'p',
      text: "Dilerga ilova ichidagi MaxChat orqali yozish, ovozli xabar yuborish, qo'ng'iroq qilish yoki Telegram orqali bog'lanish mumkin. Profilda verifikatsiya belgisi bo'lsa, bu MaxRaqam diler bergan ma'lumotlarni tekshirganini bildiradi, lekin operator ruxsatnomasi yoki bitim kafolati emas — batafsil [verifikatsiya](/dilerlar/verifikatsiya) sahifasida.",
    },
    { t: 'h2', text: "5-qadam: O'z nomingizdagi raqamlarni USSD orqali tekshiring" },
    {
      t: 'p',
      text: "Ayrim operatorlarda pasportingizga ro'yxatdan o'tgan barcha raqamlarni USSD kod orqali ko'rish mumkin:",
    },
    {
      t: 'ul',
      items: [
        'Beeline: *303#',
        'Ucell: *360#',
        "Mobiuz, Uzmobile, Perfectum, Humans: bu ma'lumotni o'z operatoringizdan so'rang.",
      ],
    },
    {
      t: 'p',
      text: "Bu kod egasining o'z pasportidagi raqamlarni ko'rsatadi. Sotuvchi u orqali raqam haqiqatan uning nomida ekanini ko'rishi mumkin, siz esa qayta rasmiylashtirishdan keyin raqam sizning nomingizga o'tganini tekshirasiz.",
    },
    { t: 'h2', text: 'Nima uchun xariddan oldin operatorni bilish muhim' },
    {
      t: 'ul',
      items: [
        "Raqamni o'z nomingizga o'tkazish hozirgi operatorning rasmiy kanallari orqali bo'ladi — qaysi operatorga murojaat qilishni oldindan bilishingiz kerak.",
        "Ba'zi xaridorlar ma'lum bir operatorning raqamini qidiradi; ko'chirilgan raqam kutilganidan boshqa operatorda bo'lishi mumkin.",
        "E'londagi operator va dilerning javobi orasidagi nomuvofiqlik ehtiyot bo'lish uchun signal.",
      ],
    },
    {
      t: 'p',
      text: "Raqamni o'z nomingizga o'tkazishning umumiy tartibi [raqamni o'z nomiga o'tkazish](/qollanma/raqamni-oz-nomiga-otkazish) qo'llanmasida, xarid paytida o'zingizni qanday himoya qilish esa [firibgarlikdan saqlanish](/qollanma/firibgarlikdan-saqlanish) qo'llanmasida yoritilgan.",
    },
    { t: 'h2', text: "Ko'p uchraydigan xatolar" },
    {
      t: 'ul',
      items: [
        "Prefiksni hozirgi operator deb qabul qilish va buni tekshirmaslik.",
        "Raqamni o'z nomingizga o'tkazish uchun noto'g'ri operatorga murojaat qilish.",
        "Faqat e'londagi ma'lumotga tayanib, dilerdan hech narsa so'ramaslik.",
        "Qayta rasmiylashtirishdan keyin raqam haqiqatan sizning nomingizga o'tganini tekshirmaslik.",
      ],
    },
    {
      t: 'faq',
      items: [
        {
          q: "Prefiks bo'yicha operatorni aniqlash har doim to'g'rimi?",
          a: "Yo'q. Prefiks raqam dastlab qaysi operatorga tegishli bo'lganini ko'rsatadi. Raqam boshqa operatorga ko'chirilgan bo'lishi mumkin, shuning uchun hozirgi operatorni diler va operator orqali tasdiqlang.",
        },
        {
          q: "Pasportimdagi raqamlarni qanday ko'raman?",
          a: "Beeline abonentlari *303#, Ucell abonentlari *360# kodini teradi. Boshqa operatorlarda bu ma'lumotni operatorning o'zidan so'rang.",
        },
        {
          q: "MaxRaqam raqamning operatorini tasdiqlaydimi?",
          a: "Yo'q. MaxRaqam telekom operator emas; e'londagi ma'lumotni diler kiritadi. Yakuniy ma'lumot va qayta rasmiylashtirish operatorning rasmiy kanallari orqali bo'ladi.",
        },
      ],
    },
    { t: 'h2', text: 'Ilovada qanday qilinadi' },
    {
      t: 'ol',
      items: [
        "MaxRaqam ilovasida raqamlar katalogini oching.",
        "Operator filtridan kerakli operatorni tanlang yoki raqamlar bo'yicha qidiring.",
        "Natijalarni saralang va yoqqan raqamlarni sevimlilarga saqlang.",
        "E'lonni ochib, ko'rsatilgan operator prefiksga mos kelishini tekshiring.",
        "Dilerga MaxChat orqali yozing va raqamning hozirgi operatori hamda egasini so'rang.",
        "E'londa xato yoki shubhali ma'lumot ko'rsangiz, u haqida ilovada xabar bering.",
      ],
    },
    {
      t: 'p',
      text: "Barcha operatorlarning raqamlarini bir joyda ko'rish uchun [raqamlar](/raqamlar) sahifasiga o'ting yoki operator bo'yicha qidirishni boshlash uchun MaxRaqam ilovasini [yuklab oling](/yuklab-olish).",
    },
  ],
  related: ['qollanma', 'raqamlar', 'beeline', 'ucell', 'g-pereoformlenie', 'g-firibgarlik'],
};

export default page;
