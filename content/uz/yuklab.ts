import type { PageContent } from '../types';

const page: PageContent = {
  title: "MaxRaqam ilovasini yuklab olish: iOS va Android",
  description:
    "MaxRaqam ilovasini App Store yoki Google Play'dan bepul yuklab oling: chiroyli raqamlar, dilerlar, nasiya, MaxChat va username auksionlari bitta ilovada.",
  h1: "MaxRaqam ilovasini yuklab oling",
  crumb: "Yuklab olish",
  lead: [
    "MaxRaqam ilovasi bepul va App Store hamda Google Play'da mavjud. iPhone, Mac, Apple Vision yoki Android qurilmangizga o'rnatib, chiroyli raqamlarni qidirishni boshlang.",
  ],
  blocks: [
    { t: "stores" },
    { t: "h2", text: "Ilovada nimalar bor" },
    {
      t: "cards",
      items: [
        { title: "Raqam qidirish", text: "Raqamlar, operator, narx, valyuta va to'lov usuli bo'yicha filtr va saralash.", href: "/raqamlar" },
        { title: "Nasiya", text: "Bir martalik to'lovni dilerlar taklif qiladigan nasiya bilan solishtiring.", href: "/raqamlar/nasiya" },
        { title: "Dilerlar katalogi", text: "Mustaqil dilerlar va tasdiqlangan diler profillari.", href: "/dilerlar" },
        { title: "MaxChat", text: "Dilerlar bilan yozishma va ovozli xabarlar.", href: "/maxchat" },
        { title: "Username auksionlari", text: "Telegram va Instagram username'lari uchun jonli savdo.", href: "/username" },
        { title: "Aksiyalar va bepul raqamlar", text: "Yangiliklar va takliflar haqida bildirishnomalar.", href: "/raqamlar/bepul-raqamlar" },
      ],
    },
    { t: "h2", text: "Qo'shimcha imkoniyatlar" },
    {
      t: "ul",
      items: [
        "Yoqqan raqamlarni sevimlilarga saqlash.",
        "Diler bilan so'rov, qo'ng'iroq yoki Telegram orqali bog'lanish.",
        "Shubhali yoki noto'g'ri e'lonlar haqida xabar berish.",
        "3 tagacha hisob va ular o'rtasida tez almashish.",
      ],
    },
    { t: "h2", text: "Tillar va qurilmalar" },
    {
      t: "p",
      text: "Ilova o'zbek, rus va ingliz tillarida ishlaydi. iOS versiyasi iOS 18.0 va undan yuqori iPhone, M1 yoki undan yangi chipli macOS 15+ Mac hamda visionOS 2+ Apple Vision uchun mo'ljallangan, ilova hajmi 20.2 MB. Android versiyasi Google Play'da.",
    },
    {
      t: "p",
      text: "Har bir versiyada nima o'zgargani — [yangiliklar sahifasida](/yangiliklar). Savollaringiz bo'lsa, [ko'p so'raladigan savollar](/savollar)ga qarang.",
    },
  ],
  related: ["yangiliklar", "savollar", "raqamlar", "username"],
};

export default page;
