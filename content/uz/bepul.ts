import type { PageContent } from '../types';

// TODO(owner): conditions of promotions and free numbers (who offers them, eligibility, duration, any obligations) are unknown; describe them here only from the owner's data.
// TODO(owner): exact location/name of the promotions section and of the notification toggle in app settings is not specified.
const page: PageContent = {
  title: 'Bepul raqamlar va aksiyalar | MaxRaqam',
  description:
    "MaxRaqam ilovasidagi aksiyalar va bepul raqamlar: takliflardan xabardor bo'lish, bildirishnomalarni yoqish va bepul raqam olishda nimalarga e'tibor berish.",
  h1: 'Bepul raqamlar va aksiyalar MaxRaqam ilovasida',
  crumb: 'Bepul raqamlar',
  lead: [
    "MaxRaqam ilovasida aksiyalar va bepul raqamlar bor — bu imkoniyat 1.0.2 versiyasida qo'shilgan. Yangi aksiyalar va takliflardan xabardor bo'lish uchun ilovada yangiliklar va takliflar haqidagi bildirishnomalarni yoqing.",
    "Joriy takliflar va ularning shartlarini ilovaning o'zida ko'ring, savollaringizni esa dilerga bering.",
  ],
  blocks: [
    { t: 'h2', text: 'Aksiyalar va bepul raqamlar' },
    {
      t: 'p',
      text: "Aksiyalar va bepul raqamlar ilovaning o'zida ko'rsatiladi. Bu sahifada aniq takliflar sanab o'tilmaydi, chunki ular ilovadagi e'lonlarga bog'liq.",
    },

    { t: 'h2', text: 'Bildirishnomalarni yoqing' },
    {
      t: 'p',
      text: "1.0.3 versiyasidan boshlab ilova yangiliklar va takliflar haqida push-bildirishnomalar yuboradi. Ularni ilova sozlamalarida yoqish yoki o'chirish mumkin.",
    },
    {
      t: 'ol',
      items: [
        'MaxRaqam ilovasini oching.',
        "Sozlamalarga o'ting.",
        'Yangiliklar va takliflar haqidagi bildirishnomalarni yoqing.',
        "Telefon sozlamalarida ham MaxRaqam uchun bildirishnomalarga ruxsat berilganini tekshiring.",
      ],
    },

    { t: 'h2', text: "Bepul raqam olishda nimalarga e'tibor berish kerak" },
    {
      t: 'p',
      text: "Raqam bepul taklif qilingan bo'lsa ham, uni o'z nomingizga o'tkazish operatorning rasmiy tartibi orqali bajariladi. MaxRaqam operator emas va raqamlarni o'tkazmaydi — kelishuv va rasmiylashtirish xaridor, diler va operator o'rtasida bo'ladi.",
    },
    {
      t: 'ul',
      items: [
        "Taklif shartlarini oxirigacha o'qing va noaniq joylarini dilerdan so'rang.",
        "Raqam hozir qaysi operatorda ekanini aniqlang — prefiks buni kafolatlamaydi.",
        "Hech kimga SMS kodlarni bermang va shubhali talablarga rozi bo'lmang.",
        "Shubhali yoki noto'g'ri e'lonni ilovada xabar qiling. Batafsil: [xavfsizlik](/xavfsizlik).",
      ],
    },

    { t: 'h2', text: "Boshqa bo'limlar" },
    {
      t: 'p',
      text: "Bepul variantlar orasida mosini topmasangiz, [raqamlar katalogida](/raqamlar) raqamlar va operator bo'yicha qidiring yoki [nasiyaga raqam](/raqamlar/nasiya) variantlarini ko'ring. Ilova yangilanishlari tarixi — [yangiliklar](/yangiliklar) sahifasida. Ilovani [bu yerdan yuklab oling](/yuklab-olish).",
    },
  ],
  related: ['raqamlar', 'yangiliklar', 'nasiya', 'xavfsizlik'],
};

export default page;
