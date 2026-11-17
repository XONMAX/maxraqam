import type { PageContent } from '../types';

// TODO(owner): dealer sign-up requirements and whether listing is free or paid are unknown — add when confirmed.
const page: PageContent = {
  title: "Dilerlar uchun: raqamlarni e'lon qilish | MaxRaqam",
  description:
    "MaxRaqam dilerlar uchun: ko'p raqamni birdan e'lon qiling, narx, valyuta va nasiya shartlarini belgilang, so'rovlarni ko'ring va verifikatsiyadan o'ting.",
  h1: "MaxRaqam dilerlar uchun: raqamlaringizni xaridorlarga ko'rsating",
  crumb: "Dilerlar",
  lead: [
    "MaxRaqam dilerlarga chiroyli telefon raqamlarini ilovada e'lon qilib, ularni qidirayotgan xaridorlarga ko'rsatish imkonini beradi. Siz bitta yoki ko'p raqamni birdan joylaysiz, narx, valyuta va nasiya shartlarini o'zingiz belgilaysiz va xaridorlar so'rovlarini ko'rasiz.",
    "MaxRaqam telekom operator emas va raqamlarni o'zi sotmaydi: bitim shartlari, to'lov va qayta rasmiylashtirish xaridor, diler va operator o'rtasida kelishiladi.",
  ],
  blocks: [
    { t: "h2", text: "Dilerlar uchun imkoniyatlar" },
    {
      t: "cards",
      items: [
        { title: "Xaridorlarga yetish", text: "Raqamlaringiz raqam, operator va narx bo'yicha qidirayotgan xaridorlarga ko'rinadi." },
        { title: "Ommaviy profil", text: "Barcha e'lonlaringiz jamlangan diler profili va ko'rishlar statistikasi." },
        { title: "So'rovlar", text: "Xaridorlar yuborgan so'rovlarni bir joyda ko'ring." },
        { title: "Verifikatsiya", text: "Profilingizga tasdiqlangan diler belgisini oling.", href: "/dilerlar/verifikatsiya" },
      ],
    },
    { t: "h2", text: "Raqamlarni e'lon qilish" },
    {
      t: "ul",
      items: [
        "**Bitta raqam** — alohida e'lon sifatida joylang.",
        "**Ko'p raqam birdan** — ommaviy e'lon qilish orqali butun ro'yxatni tez qo'shing.",
      ],
    },
    {
      t: "p",
      text: "Xaridorlar raqamlarni raqamlar, operator, narx, valyuta va to'lov usuli bo'yicha filtrlaydi. Shu sababli har bir e'londa ma'lumotlarni to'liq va aniq ko'rsating. Xaridorlar qanday qidirishini [raqamlar sahifasida](/raqamlar) ko'ring.",
    },
    { t: "h2", text: "Narx, valyuta va nasiya shartlari" },
    {
      t: "p",
      text: "Har bir raqam uchun narxni va valyutani — UZS yoki USD — o'zingiz tanlaysiz. Agar bo'lib to'lashni taklif qilsangiz, nasiya shartlarini ham o'zingiz belgilaysiz: xaridor ilovada bir martalik to'lovni nasiya bilan solishtira oladi. Batafsil — [nasiya sahifasida](/raqamlar/nasiya).",
    },
    { t: "h2", text: "E'lonlarni va so'rovlarni boshqarish" },
    {
      t: "ul",
      items: [
        "E'lonlarni istalgan vaqtda tahrirlang.",
        "Raqam mavjudligini boshqaring va holatini doim dolzarb saqlang.",
        "Xaridorlar so'rovlarini ko'ring va ularga javob bering.",
        "Xaridorlar bilan [MaxChat](/maxchat) orqali yozishing, ular sizga qo'ng'iroq qilishi yoki Telegram orqali yozishi ham mumkin.",
      ],
    },
    { t: "h2", text: "Verifikatsiyadan o'ting" },
    {
      t: "p",
      text: "Verifikatsiya MaxRaqam siz taqdim etgan ma'lumotlarni tekshirganini bildiradi va xaridorlarga profilingiz haqida qo'shimcha ma'lumot beradi. U operator vakolati emas va bitimni kafolatlamaydi. Batafsil — [diler verifikatsiyasi](/dilerlar/verifikatsiya).",
    },
    {
      t: "p",
      text: "Diler sifatida ishlashni boshlash bo'yicha bosqichma-bosqich tavsiyalar [qo'llanmamizda](/qollanma/diler-sifatida-raqam-sotish). Boshlash uchun ilovani [yuklab oling](/yuklab-olish).",
    },
  ],
  related: ["verifikatsiya", "g-diler", "nasiya", "maxchat", "xavfsizlik"],
};

export default page;
