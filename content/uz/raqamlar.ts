import type { PageContent } from '../types';

// TODO(owner): exact sorting options available in the app catalog are not specified; list them here if wanted.
const page: PageContent = {
  title: 'Chiroyli telefon raqamlar katalogi | MaxRaqam',
  description:
    "Chiroyli telefon raqamlarni MaxRaqam ilovasida raqamlar, operator, narx, valyuta va to'lov usuli bo'yicha qidiring, saqlang va diler bilan bog'laning.",
  h1: 'Chiroyli telefon raqamlar — qidirish va tanlash',
  crumb: 'Raqamlar',
  lead: [
    "MaxRaqam ilovasida chiroyli telefon raqamlarni raqamlar kombinatsiyasi, operator, narx, valyuta (UZS yoki USD) va to'lov usuli bo'yicha qidirishingiz mumkin. Raqamlarni mustaqil dilerlar joylashtiradi, siz esa ular bilan so'rov, qo'ng'iroq yoki Telegram orqali bog'lanasiz.",
    "Buni har kim o'zicha yozadi — chiroyli raqam, chiroyli nomer, чиройли ракам yoki «рақам сотилади» — lekin gap bitta narsa haqida: eslab qolish oson bo'lgan telefon raqami.",
  ],
  blocks: [
    { t: 'h2', text: 'Raqamlarni qanday qidirish mumkin' },
    {
      t: 'ul',
      items: [
        "**Raqamlar bo'yicha** — kerakli ketma-ketlikni kiriting, masalan 777 yoki 0000.",
        "**Operator bo'yicha** — faqat tanlangan operator raqamlarini ko'rsating.",
        "**Narx va valyuta bo'yicha** — narxlarni UZS yoki USD ko'rinishida ko'ring va filtrlang.",
        "**To'lov usuli bo'yicha** — bir martalik to'lov yoki nasiya.",
      ],
    },
    {
      t: 'p',
      text: "Natijalarni saralab, sizga mos variantlarni ro'yxat boshiga chiqarishingiz mumkin. Ilovada bir martalik to'lov va nasiyani yonma-yon solishtirish ham mumkin.",
    },

    { t: 'h2', text: "Sevimlilar va diler bilan bog'lanish" },
    {
      t: 'p',
      text: "Yoqqan raqamni sevimlilarga saqlang va keyinroq unga qayting. Qaror qilganingizda dilerga ilova ichida so'rov yuboring, unga to'g'ridan-to'g'ri qo'ng'iroq qiling yoki Telegram orqali yozing. Ilova ichida [MaxChat](/maxchat) orqali yozishish ham mumkin.",
    },
    {
      t: 'note',
      text: "Raqam mavjudligi, narx, to'lov va raqamni o'z nomingizga rasmiylashtirish diler va operator bilan kelishiladi. MaxRaqam operator emas, raqamlarga egalik qilmaydi va ularni o'zi sotmaydi.",
    },

    { t: 'h2', text: 'Operator kodisiz raqamlar' },
    {
      t: 'p',
      text: "Ilovada operator kodi ko'rsatilmagan raqamlar uchun ham e'lonlar bor. Bunday e'londa raqam qaysi operatorga tegishli ekanini dilerdan albatta aniqlab oling.",
    },

    { t: 'h2', text: 'Operatorlar va prefikslar' },
    { t: 'operators' },
    {
      t: 'p',
      text: "Raqam boshqa operatorga ko'chirilgan bo'lishi mumkin, shuning uchun prefiks hozirgi operatorni kafolatlamaydi. Tekshirish usullari — [raqam qaysi operatorga tegishli](/qollanma/raqam-qaysi-operatorga-tegishli) qo'llanmasida.",
    },

    { t: 'h2', text: "Bo'limlar" },
    {
      t: 'cards',
      items: [
        { title: 'Beeline', text: '90 va 91 prefiksli raqamlar.', href: '/raqamlar/beeline' },
        { title: 'Ucell', text: '93, 94 va 50 prefiksli raqamlar.', href: '/raqamlar/ucell' },
        { title: 'Mobiuz', text: '97 va 88 prefiksli raqamlar.', href: '/raqamlar/mobiuz' },
        { title: 'Uzmobile', text: '95, 99 va 77 prefiksli raqamlar.', href: '/raqamlar/uzmobile' },
        { title: 'Perfectum', text: '98 prefiksli raqamlar.', href: '/raqamlar/perfectum' },
        { title: 'Humans', text: '33 prefiksli raqamlar.', href: '/raqamlar/humans' },
        {
          title: 'Oltin raqamlar',
          text: "7777, 0000, ABAB va boshqa naqshli VIP raqamlar.",
          href: '/raqamlar/oltin-raqamlar',
        },
        { title: 'Nasiya', text: "Bo'lib to'lash va bir martalik to'lovni solishtirish.", href: '/raqamlar/nasiya' },
        { title: 'Bepul raqamlar', text: 'Aksiyalar va bepul raqamlar.', href: '/raqamlar/bepul-raqamlar' },
      ],
    },
    {
      t: 'p',
      text: "Shubhali yoki noto'g'ri e'lonni ko'rsangiz, ilovada xabar bering. To'lovdan oldin nimalarni tekshirish kerakligi — [xavfsizlik](/xavfsizlik) sahifasida. Qidiruvni boshlash uchun [ilovani yuklab oling](/yuklab-olish).",
    },
  ],
  related: ['oltin', 'nasiya', 'g-sotib-olish', 'xavfsizlik'],
};

export default page;
