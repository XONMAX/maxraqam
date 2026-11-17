import type { PageContent } from '../types';

// TODO(owner): MaxRaqam mission/brand statement is not provided; the home page describes features only.
const page: PageContent = {
  title: 'MaxRaqam — chiroyli raqamlar va username savdosi',
  description:
    "MaxRaqam ilovasida mustaqil dilerlarning chiroyli va oltin raqamlarini toping, nasiyani solishtiring va Telegram username auksionlarida qatnashing.",
  h1: 'MaxRaqam — chiroyli telefon raqamlar va username savdo platformasi',
  crumb: 'Bosh sahifa',
  lead: [
    "MaxRaqam — mustaqil dilerlar taklif qiladigan chiroyli, oltin va VIP telefon raqamlarni topish hamda Telegram va Instagram username auksionlarida qatnashish uchun bepul mobil ilova. Platforma xaridor va dilerni bog'laydi: siz raqamni qidirasiz, solishtirasiz va diler bilan to'g'ridan-to'g'ri gaplashasiz.",
    "MaxRaqam telekom operatori emas va raqamlarni o'zi sotmaydi. Raqam mavjudligi, kelishuv shartlari, to'lov va raqamni qayta rasmiylashtirish xaridor, diler va operator o'rtasida hal qilinadi.",
  ],
  blocks: [
    { t: 'h2', text: 'MaxRaqam nima' },
    {
      t: 'p',
      text: "MaxRaqam — eslab qolish oson bo'lgan telefon raqamlar e'lonlari jamlangan marketpleys. Mustaqil dilerlar o'z raqamlarini ilovaga joylashtiradi, xaridorlar esa ularni raqamlar, operator, narx, valyuta (UZS yoki USD) va to'lov usuli bo'yicha saralab ko'radi.",
    },
    {
      t: 'ul',
      items: [
        "Raqamlar, operator, narx, valyuta va to'lov usuli bo'yicha qidiruv, saralash.",
        "Mustaqil dilerlar katalogi va tasdiqlangan diler profillari.",
        "Sevimlilar ro'yxati va yangiliklar haqida push-bildirishnomalar.",
        "Dilerga so'rov, to'g'ridan-to'g'ri qo'ng'iroq yoki Telegram orqali aloqa.",
        "Aksiyalar, bepul raqamlar va operator kodisiz raqamlar uchun e'lonlar.",
      ],
    },
    {
      t: 'p',
      text: "Raqamlardan tashqari ilovada username auksionlari, ichki valyuta MaxCoin va dilerlar bilan yozishish uchun MaxChat bor. Qidiruv imkoniyatlari bilan [raqamlar katalogi](/raqamlar) sahifasida tanishing.",
    },

    { t: 'h2', text: 'Qanday ishlaydi: 3 qadam' },
    {
      t: 'steps',
      items: [
        {
          title: 'Raqamni toping',
          text: "Kerakli raqamlar kombinatsiyasi, operator yoki to'lov usuli bo'yicha filtrlang va natijalarni saralang. Yoqqan raqamlarni sevimlilarga saqlab qo'ying.",
        },
        {
          title: "Diler bilan bog'laning",
          text: "Dilerga ilova ichida so'rov yuboring, MaxChat orqali yozing, qo'ng'iroq qiling yoki Telegram'da bog'laning. Avval diler profilini va verifikatsiya belgisini ko'rib chiqing.",
        },
        {
          title: 'Shartlarni kelishing',
          text: "Narx, to'lov va rasmiylashtirish tartibini diler bilan kelishasiz. Raqamni o'z nomingizga o'tkazish operatorning rasmiy tartibi orqali bajariladi.",
        },
      ],
    },
    {
      t: 'p',
      text: "Har bir bosqich batafsil: [chiroyli raqamni qanday sotib olish](/qollanma/chiroyli-raqam-sotib-olish).",
    },

    { t: 'h2', text: 'Operatorlar va prefikslar' },
    {
      t: 'p',
      text: "Ilovada raqamlarni operator bo'yicha filtrlash mumkin. Quyidagi jadvalda O'zbekiston mobil operatorlari va ularning +998 dan keyingi prefikslari keltirilgan.",
    },
    { t: 'operators' },
    {
      t: 'p',
      text: "Raqamni boshqa operatorga ko'chirish mumkin bo'lgani uchun prefiks hozirgi operatorni kafolatlamaydi. Har bir operator bo'yicha sahifalar va operator kodisiz raqamlar — [raqamlar](/raqamlar) bo'limida.",
    },

    { t: 'h2', text: 'Nasiyaga raqam' },
    {
      t: 'p',
      text: "Dilerlar raqam uchun nasiya shartlarini o'zlari belgilaydi. Ilovada bir martalik to'lov va nasiyani solishtirish, to'lov usuli bo'yicha filtrlash mumkin — batafsil [nasiyaga raqam](/raqamlar/nasiya) sahifasida.",
    },

    { t: 'h2', text: 'Username auksionlari' },
    {
      t: 'p',
      text: "MaxRaqam ilovasida Telegram va Instagram username'lari uchun jonli auksionlar o'tadi. Username — profil havolasidagi @nom, masalan t.me/name. Qisqa va ma'noli username'lar odatda ko'proq e'tibor tortadi. Bellashuvdan oldin ilovada ko'rsatilgan auksion qoidalarini o'qing; qanday qatnashish haqida [username auksionlari](/username) sahifasida.",
    },

    { t: 'h2', text: 'MaxCoin' },
    {
      t: 'p',
      text: "MaxCoin — MaxRaqam ilovasining ichki valyutasi, u username auksionlarida ishlatiladi. MaxCoin paketlari ilovaning Profil bo'limida Payme orqali sotib olinadi. Batafsil: [MaxCoin](/maxcoin).",
    },

    { t: 'h2', text: 'MaxChat' },
    {
      t: 'p',
      text: "MaxChat — dilerlar bilan ilova ichida yozishish uchun chat, unda ovozli xabar ham yuborish mumkin. Ilovada 3 tagacha hisob ochib, ular orasida tez almashasiz. [MaxChat haqida batafsil](/maxchat).",
    },

    { t: 'h2', text: 'Xavfsizlik' },
    {
      t: 'p',
      text: "Ilovada shikoyatlar, dilerlarni verifikatsiya qilish, moderatsiya va foydalanuvchilarni bloklash mavjud. Shubhali yoki noto'g'ri e'lonni ilovaning o'zida xabar qilishingiz mumkin.",
    },
    {
      t: 'p',
      text: "Ma'lumotlar uzatish vaqtida shifrlanadi, foydalanuvchi o'z ma'lumotlarini o'chirishni so'rashi mumkin. Dasturchi ma'lumotlar uchinchi shaxslarga berilmasligini bildiradi — batafsil [maxfiylik](/maxfiylik) sahifasida.",
    },
    {
      t: 'note',
      tone: 'warn',
      title: '«Tasdiqlangan diler» nimani bildiradi',
      text: "Bu belgi MaxRaqam diler bergan ma'lumotlarni tekshirganini bildiradi. U operator ruxsati emas va bitimni kafolatlamaydi, shuning uchun raqam egaligini tekshirmasdan pul o'tkazmang. Maslahatlar: [xavfsizlik](/xavfsizlik).",
    },

    { t: 'h2', text: 'Dilerlar uchun' },
    {
      t: 'p',
      text: "Diler sifatida bitta raqamni yoki bir vaqtda ko'plab raqamlarni joylashtirib, narx, valyuta va nasiya shartlarini belgilaysiz. E'lonlarni tahrirlash, mavjudligini boshqarish, xaridor so'rovlarini ko'rish va ommaviy profilingiz ko'rishlar statistikasini kuzatish mumkin. Boshlash uchun: [dilerlar uchun](/dilerlar).",
    },

    { t: 'h2', text: "So'nggi qo'llanmalar" },
    { t: 'guides', limit: 3 },
    { t: 'p', text: "Barcha maqolalar: [qo'llanmalar](/qollanma)." },

    { t: 'h2', text: "Ko'p beriladigan savollar" },
    {
      t: 'faq',
      items: [
        {
          q: 'MaxRaqam raqam sotadimi?',
          a: "Yo'q. MaxRaqam — marketpleys: raqamlarni mustaqil dilerlar joylashtiradi, kelishuv, to'lov va qayta rasmiylashtirish xaridor, diler va operator o'rtasida bo'ladi.",
        },
        {
          q: 'Ilova pullikmi?',
          a: "Yo'q, MaxRaqam ilovasi bepul. U iOS va Android qurilmalari uchun mavjud.",
        },
        {
          q: '«Tasdiqlangan diler» nimani anglatadi?',
          a: "MaxRaqam diler taqdim etgan ma'lumotlarni tekshirgan. Bu operator ruxsati emas va bitimni kafolatlamaydi — batafsil [verifikatsiya](/dilerlar/verifikatsiya) sahifasida.",
        },
        {
          q: 'Raqam qaysi operatorga tegishli ekanini qanday bilaman?',
          a: "Prefiks faqat taxminiy yo'l-yo'riq beradi, chunki raqam boshqa operatorga ko'chirilgan bo'lishi mumkin. Qo'llanma: [raqam qaysi operatorga tegishli](/qollanma/raqam-qaysi-operatorga-tegishli).",
        },
        {
          q: 'Ilova qaysi tillarda ishlaydi?',
          a: "O'zbek, rus va ingliz tillarida.",
        },
      ],
    },
    { t: 'p', text: "Boshqa savollar va javoblar: [savol-javoblar](/savollar)." },

    { t: 'h2', text: 'Ilovani yuklab oling' },
    {
      t: 'p',
      text: "MaxRaqam bepul va App Store hamda Google Play'da mavjud. Qurilma talablari va QR kodlar — quyida yoki [yuklab olish](/yuklab-olish) sahifasida.",
    },
    { t: 'stores' },
  ],
  related: ['raqamlar', 'username', 'dilerlar', 'qollanma'],
};

export default page;
