import type { PageContent } from '../types';

// TODO(owner): USSD codes for Mobiuz, Uzmobile, Perfectum and Humans are unknown — update the related answer when confirmed.
// TODO(owner): MaxCoin rates, refunds and other uses are unknown — add Q&As when confirmed.
const page: PageContent = {
  title: "Ko'p so'raladigan savollar | MaxRaqam",
  description:
    "MaxRaqam bo'yicha ko'p so'raladigan savollar: raqam qidirish, nasiya, dilerlar, username auksionlari, MaxCoin, xavfsizlik va hisoblar haqida qisqa javoblar.",
  h1: "Ko'p so'raladigan savollar",
  crumb: "Savollar",
  lead: [
    "Bu sahifada MaxRaqam ilovasi haqidagi eng ko'p beriladigan savollarga qisqa javoblar to'plangan. Savollar mavzular bo'yicha guruhlangan: raqamlar, nasiya, dilerlar, username, MaxCoin, xavfsizlik va hisob.",
  ],
  blocks: [
    { t: "h2", text: "Raqamlar" },
    {
      t: "faq",
      items: [
        {
          q: "MaxRaqam raqam sotadimi?",
          a: "Yo'q. MaxRaqam telekom operator emas, raqamlarga egalik qilmaydi, ularni o'tkazmaydi va sotmaydi. Raqamlarni ilovada mustaqil dilerlar taklif qiladi; mavjudlik, shartlar, to'lov va qayta rasmiylashtirish xaridor, diler va operator o'rtasida kelishiladi.",
        },
        {
          q: "Ilovada kerakli raqamni qanday topaman?",
          a: "Raqamlarni raqamlar, operator, narx, valyuta (UZS yoki USD) va to'lov usuli bo'yicha filtrlang va natijalarni saralang. Batafsil — [raqamlar sahifasida](/raqamlar).",
        },
        {
          q: "Qaysi operatorlarning raqamlari bor?",
          a: "Beeline, Ucell, Mobiuz, Uzmobile, Perfectum va Humans raqamlari, shuningdek operator kodisiz raqamlar uchun e'lonlar bor. Prefikslar jadvali [raqamlar sahifasida](/raqamlar).",
        },
        {
          q: "Prefiks bo'yicha operatorni aniq bilsa bo'ladimi?",
          a: "Har doim emas: raqamni boshqa operatorga ko'chirish mumkinligi sababli prefiks hozirgi operatorni kafolatlamaydi. Batafsil — [raqam qaysi operatorga tegishli](/qollanma/raqam-qaysi-operatorga-tegishli) qo'llanmasida.",
        },
        {
          q: "Oltin yoki VIP raqam nima?",
          a: "Bu takrorlanuvchi yoki esda qoladigan raqamlar, masalan 7777, 0000, ABAB yoki ko'zgu shaklidagi raqamlar. Turlari — [oltin raqamlar sahifasida](/raqamlar/oltin-raqamlar).",
        },
        {
          q: "Yoqqan raqamni keyinroq ko'rish uchun saqlab qo'ysa bo'ladimi?",
          a: "Ha, raqamni sevimlilarga qo'shib qo'yishingiz mumkin.",
        },
        {
          q: "Bepul raqamlar va aksiyalar bormi?",
          a: "Ha, ilovada aksiyalar va bepul raqamlar bo'limi bor. Ular haqida bilish uchun yangiliklar va takliflar bildirishnomalarini yoqing — [bepul raqamlar](/raqamlar/bepul-raqamlar).",
        },
      ],
    },
    { t: "h2", text: "Nasiya" },
    {
      t: "faq",
      items: [
        {
          q: "Raqamni nasiyaga olsa bo'ladimi?",
          a: "Ha, agar diler nasiya shartlarini taklif qilsa. Ilovada to'lov usuli bo'yicha filtrlab, nasiyaga beriladigan raqamlarni topasiz — [nasiya sahifasi](/raqamlar/nasiya).",
        },
        {
          q: "Nasiya shartlarini kim belgilaydi?",
          a: "Har bir diler o'z shartlarini o'zi belgilaydi. Muddat va to'lov tartibini to'lovdan oldin diler bilan aniqlashtiring.",
        },
        {
          q: "Bir martalik to'lov va nasiyani qanday solishtiraman?",
          a: "Ilovada bir martalik to'lov va nasiya variantlarini yonma-yon solishtirish mumkin. Qadamlar — [nasiya qo'llanmasida](/qollanma/nasiyaga-raqam-olish).",
        },
      ],
    },
    { t: "h2", text: "Dilerlar" },
    {
      t: "faq",
      items: [
        {
          q: "Diler bilan qanday bog'lanaman?",
          a: "E'londan so'rov yuboring, dilerga qo'ng'iroq qiling, Telegram orqali yozing yoki ilova ichidagi [MaxChat](/maxchat)dan foydalaning.",
        },
        {
          q: "Tasdiqlangan diler nimani anglatadi?",
          a: "MaxRaqam diler taqdim etgan ma'lumotlarni tekshirganini. Bu operator vakolati emas va bitimni kafolatlamaydi — [verifikatsiya](/dilerlar/verifikatsiya).",
        },
        {
          q: "Diler sifatida raqamlarimni qanday joylayman?",
          a: "Ilovada bitta raqamni yoki ko'p raqamni birdan e'lon qilasiz, narx, valyuta va nasiya shartlarini belgilaysiz. Batafsil — [dilerlar sahifasida](/dilerlar).",
        },
        {
          q: "Dilerlar uchun qanday imkoniyatlar bor?",
          a: "E'lonlarni tahrirlash, raqam mavjudligini boshqarish, xaridorlar so'rovlarini ko'rish, ko'rishlar statistikasi bilan ommaviy profil va verifikatsiya.",
        },
      ],
    },
    { t: "h2", text: "Username" },
    {
      t: "faq",
      items: [
        {
          q: "Username auksioni nima?",
          a: "Bu MaxRaqam ilovasi ichidagi jonli savdo bo'lib, unda Telegram va Instagram username'lari uchun taklif beriladi — [username auksionlari](/username).",
        },
        {
          q: "MaxRaqam auksioni Fragment bilan bir xilmi?",
          a: "Yo'q. Fragment — Telegram'ning TON'da ishlaydigan rasmiy platformasi, MaxRaqam auksionlari esa MaxRaqam ilovasi ichida o'tadi. Taklif berishdan oldin ilovadagi qoidalarni o'qing.",
        },
        {
          q: "Auksion qoidalarini qayerda ko'raman?",
          a: "Amaldagi qoidalar ilovada ko'rsatiladi — ularni taklif berishdan oldin o'qing. Qisqacha — [auksion qoidalari](/username/auksion-qoidalari).",
        },
      ],
    },
    { t: "h2", text: "MaxCoin" },
    {
      t: "faq",
      items: [
        {
          q: "MaxCoin nima?",
          a: "MaxCoin — MaxRaqam ilovasining ichki valyutasi, u username auksionlarida ishlatiladi — [MaxCoin haqida](/maxcoin).",
        },
        {
          q: "MaxCoin qanday sotib olinadi?",
          a: "Ilovaning Profil bo'limida MaxCoin paketini tanlab, Payme orqali to'laysiz.",
        },
        {
          q: "MaxCoin qachondan beri bor?",
          a: "MaxCoin paketlari ilovaning 1.1.2 versiyasida username auksionlari bilan birga qo'shilgan — [yangiliklar](/yangiliklar).",
        },
      ],
    },
    { t: "h2", text: "Xavfsizlik" },
    {
      t: "faq",
      items: [
        {
          q: "Raqam sotib olishda firibgarlikdan qanday saqlanaman?",
          a: "Diler profilini tekshiring, egalikni tasdiqlamay to'lov qilmang, SMS-kodlarni bermang va raqamni operatorning rasmiy kanallari orqali rasmiylashtiring — [xavfsizlik](/xavfsizlik).",
        },
        {
          q: "Shubhali e'lonni qanday xabar qilaman?",
          a: "Ilovada shubhali yoki noto'g'ri e'lon haqida xabar bering — e'lonlar moderatsiya qilinadi. Kerak bo'lsa, foydalanuvchini bloklashingiz ham mumkin.",
        },
        {
          q: "Pasportimga qaysi raqamlar ro'yxatdan o'tganini qanday bilaman?",
          a: "Beeline'da *303#, Ucell'da *360# raqamini tering. Boshqa operatorlar uchun operatoringizdan so'rang.",
        },
        {
          q: "Ma'lumotlarim himoyalanganmi?",
          a: "Ma'lumotlar uzatish vaqtida shifrlanadi, ishlab chiqaruvchi esa ular uchinchi shaxslarga berilmasligini bildiradi. Ma'lumotlaringizni o'chirishni so'rashingiz mumkin — [maxfiylik](/maxfiylik).",
        },
      ],
    },
    { t: "h2", text: "Hisob" },
    {
      t: "faq",
      items: [
        {
          q: "Ilova pullikmi?",
          a: "Yo'q, MaxRaqam ilovasi bepul — [yuklab olish](/yuklab-olish).",
        },
        {
          q: "Nechta hisob ochish mumkin?",
          a: "Bitta ilovada 3 tagacha hisob ochib, ular o'rtasida tez almashishingiz mumkin.",
        },
        {
          q: "Ilova qaysi qurilmalarda ishlaydi?",
          a: "iOS 18.0 va undan yuqori iPhone, M1 yoki undan yangi chipli macOS 15+ Mac, visionOS 2+ Apple Vision va Google Play orqali Android qurilmalarda.",
        },
        {
          q: "Ilova qaysi tillarda?",
          a: "O'zbek, rus va ingliz tillarida.",
        },
        {
          q: "Bildirishnomalarni qanday sozlayman?",
          a: "Yangiliklar va takliflar haqidagi push-bildirishnomalarni ilova sozlamalarida yoqish yoki o'chirish mumkin.",
        },
        {
          q: "Savolimga javob topmadim. Kimga murojaat qilaman?",
          a: "Bizga elektron pochta yoki telefon orqali yozing — kontaktlar [aloqa sahifasida](/aloqa).",
        },
      ],
    },
  ],
  related: ["raqamlar", "username", "xavfsizlik", "qollanma", "aloqa"],
};

export default page;
