import type { PageContent } from '../types';

// TODO(owner): operator re-registration documents, fees and deadlines are unknown — add them (per operator) only when confirmed.
// TODO(owner): USSD codes for checking numbers registered to a passport are unknown for Mobiuz, Uzmobile, Perfectum and Humans.
const page: PageContent = {
  title: 'Chiroyli raqamni qanday sotib olish | MaxRaqam',
  description:
    "Chiroyli telefon raqamni qanday sotib olish: ilovada qidirish va filtrlash, dilerni tekshirish, shartlarni kelishish va raqamni o'z nomingizga o'tkazish.",
  h1: 'Chiroyli telefon raqamni qanday sotib olish mumkin',
  crumb: 'Raqam sotib olish',
  lead: [
    "Chiroyli telefon raqamni (chiroyli nomer) sotib olish uchun MaxRaqam ilovasida kerakli raqamni toping, mustaqil diler bilan shartlarni kelishing va raqamni operatorning rasmiy tartibi orqali o'z nomingizga o'tkazing. To'lovdan oldin diler profilini va raqamga egalikni tekshiring, rasmiylashtirishdan keyin esa natijani USSD orqali tasdiqlang.",
    "Muhim: MaxRaqam telekom operatori emas va raqamlarni o'zi sotmaydi. Ilovada raqamlarni mustaqil dilerlar taklif qiladi; mavjudlik, kelishuv shartlari, to'lov va yakuniy qayta rasmiylashtirish xaridor, diler va operator o'rtasida hal qilinadi.",
  ],
  blocks: [
    { t: 'h2', text: '1-qadam. Qanday raqam kerakligini aniqlang' },
    {
      t: 'p',
      text: "Qidiruvni boshlashdan oldin o'zingiz uchun uchta savolga javob bering: qaysi operator kerak, raqamda qanday naqsh bo'lishi kerak va qaysi to'lov usuli qulay. Bu tanlovni ancha qisqartiradi va vaqtingizni tejaydi.",
    },
    {
      t: 'ul',
      items: [
        "**Operator.** O'zbekistonda har bir operatorning o'z prefikslari bor: Beeline — 90 va 91, Ucell — 93, 94 va 50, Mobiuz — 97 va 88, Uzmobile — 95, 99 va 77, Perfectum — 98, Humans — 33.",
        "**Naqsh.** Takrorlanuvchi raqamlar (XX 777 77 77 ko'rinishida), ABAB juftliklari, ko'zgu (mirror) raqamlar yoki o'zingiz uchun ma'noli kombinatsiya. Turlari [chiroyli raqam turlari](/qollanma/chiroyli-raqam-turlari) qo'llanmasida batafsil yoritilgan.",
        "**To'lov.** Bir martalik to'lov yoki nasiya. Nasiya shartlarini har bir diler o'zi belgilaydi.",
      ],
    },
    {
      t: 'p',
      text: "Esda tuting: raqamni boshqa operatorga ko'chirish (number portability) mumkin bo'lgani uchun prefiks raqamning hozirgi operatorini kafolatlamaydi. Buni qanday aniqlash haqida [raqam qaysi operatorga tegishli](/qollanma/raqam-qaysi-operatorga-tegishli) qo'llanmasini o'qing.",
    },

    { t: 'h2', text: '2-qadam. Ilovada raqamlarni qidiring va filtrlang' },
    {
      t: 'p',
      text: "MaxRaqam ilovasida raqamlarni bir nechta mezon bo'yicha qidirish mumkin. Qidiruvga o'zingiz xohlagan raqamlarni kiriting, so'ng natijalarni filtrlar bilan toraytiring:",
    },
    {
      t: 'ul',
      items: [
        "raqamdagi raqamlar — masalan, 777 yoki 0000 qismi bo'yicha;",
        'operator;',
        'narx;',
        "valyuta — so'm (UZS) yoki AQSh dollari (USD);",
        "to'lov usuli — bir martalik to'lov yoki nasiya.",
      ],
    },
    {
      t: 'p',
      text: "Natijalarni saralab, ro'yxatni o'zingizga qulay tartibda ko'rasiz. Barcha operatorlar bo'yicha umumiy ma'lumot [raqamlar katalogida](/raqamlar) jamlangan, oltin va VIP naqshlar esa [oltin raqamlar](/raqamlar/oltin-raqamlar) sahifasida.",
    },
    {
      t: 'p',
      text: "Ilovada operator kodisiz e'lon qilingan raqamlar ham uchraydi, shuningdek aksiyalar va [bepul raqamlar](/raqamlar/bepul-raqamlar) bo'limi mavjud.",
    },

    { t: 'h2', text: '3-qadam. Yoqqan raqamlarni sevimlilarga saqlang' },
    {
      t: 'p',
      text: "Birinchi ko'rgan raqamni darhol olishga shoshilmang. Yoqqan e'lonlarni sevimlilarga saqlab qo'ying — keyin ularni bir joyda ko'rish, narx va to'lov shartlarini taqqoslash oson bo'ladi.",
    },
    {
      t: 'p',
      text: "Bir xil naqshli raqamlarni turli dilerlar turli narx va shartlarda taklif qilishi mumkin. Narxga nimalar ta'sir qilishini tushunish uchun [oltin raqam narxi](/qollanma/oltin-raqam-narxi) qo'llanmasiga qarang.",
    },

    { t: 'h2', text: '4-qadam. Diler profilini tekshiring' },
    {
      t: 'p',
      text: "Har bir e'lon ortida mustaqil diler turadi. E'londan diler profiliga o'ting va undagi ma'lumotlarni, verifikatsiya belgisi bor-yo'qligini ko'rib chiqing.",
    },
    {
      t: 'note',
      tone: 'warn',
      title: '«Tasdiqlangan diler» nimani anglatadi',
      text: "Bu belgi MaxRaqam diler taqdim etgan ma'lumotlarni tekshirganini bildiradi. U operator ruxsatnomasi emas va bitimni kafolatlamaydi. Batafsil: [diler verifikatsiyasi](/dilerlar/verifikatsiya).",
    },
    {
      t: 'p',
      text: "Shuning uchun verifikatsiyadan o'tgan diler bilan ishlaganda ham keyingi qadamlardagi tekshiruvlarni o'tkazib yubormang.",
    },

    { t: 'h2', text: "5-qadam. Diler bilan bog'laning" },
    { t: 'p', text: "Ilovada diler bilan bog'lanishning bir necha yo'li bor:" },
    {
      t: 'ul',
      items: [
        "e'lon orqali dilerga so'rov yuborish;",
        "dilerga to'g'ridan-to'g'ri qo'ng'iroq qilish;",
        'Telegram orqali yozish;',
        "[MaxChat](/maxchat) — ilova ichidagi chat, unda ovozli xabar ham yuborish mumkin.",
      ],
    },
    {
      t: 'p',
      text: "Yozishmani ilova ichida olib borish qulay: kelishilgan shartlar yozishma tarixida qoladi va keyin ularga qaytish oson bo'ladi.",
    },

    { t: 'h2', text: '6-qadam. Shartlarni aniqlashtiring' },
    {
      t: 'p',
      text: "Diler bilan bog'langaningizda quyidagilarni aniq so'rang. Javoblarni yozma shaklda olgan ma'qul.",
    },
    {
      t: 'ul',
      items: [
        "Raqam hozir mavjudmi va boshqa xaridor bilan kelishilmaganmi?",
        "Raqam hozir kimning nomida va qaysi operatorda?",
        'Yakuniy narx qancha va u qaysi valyutada?',
        "To'lov bir martalikmi yoki nasiyami; nasiya bo'lsa, muddat va to'lov jadvali qanday?",
        "Raqam sizning nomingizga qachon va qanday o'tkaziladi?",
      ],
    },
    {
      t: 'p',
      text: "Nasiyaga olmoqchi bo'lsangiz, [nasiyaga telefon raqam olish](/qollanma/nasiyaga-raqam-olish) qo'llanmasida qaysi savollarni berish kerakligi batafsil keltirilgan.",
    },

    { t: 'h2', text: "7-qadam. To'lovdan oldin egalikni tekshiring" },
    {
      t: 'p',
      text: "Raqamga egalik tasdiqlanmaguncha pul o'tkazmang. Raqam haqiqatan diler yoki u vakil bo'lgan shaxs nomida ekanini va uni sizning nomingizga qayta rasmiylashtirish mumkinligini aniqlab oling.",
    },
    {
      t: 'ul',
      items: [
        'SMS orqali kelgan kodlarni hech kimga aytmang.',
        "Juda arzon taklif yoki «tezroq to'lang» degan bosim — ehtiyot bo'lish uchun jiddiy sabab.",
        "Shubhali yoki noto'g'ri e'lonni ilovada shikoyat qilib yuboring.",
      ],
    },
    {
      t: 'p',
      text: "Firibgarlikning keng tarqalgan belgilari [xavfsizlik](/xavfsizlik) sahifasida va [firibgarlikdan saqlanish](/qollanma/firibgarlikdan-saqlanish) qo'llanmasida tushuntirilgan.",
    },

    { t: 'h2', text: "8-qadam. Raqamni o'z nomingizga o'tkazing" },
    {
      t: 'p',
      text: "Kelishuvdan so'ng raqam sizning nomingizga qayta rasmiylashtirilishi kerak. Buni faqat operatorning rasmiy kanallari orqali, diler bilan birgalikda bajaring. MaxRaqam bu jarayonda raqamni o'tkazmaydi.",
    },
    {
      t: 'p',
      text: "Umumiy tartib [raqamni o'z nomiga o'tkazish](/qollanma/raqamni-oz-nomiga-otkazish) qo'llanmasida yoritilgan. Kerakli hujjatlar va xizmat shartlarini to'g'ridan-to'g'ri operatoringizdan so'rang.",
    },

    { t: 'h2', text: '9-qadam. Natijani USSD orqali tekshiring' },
    {
      t: 'p',
      text: "Qayta rasmiylashtirishdan keyin raqam haqiqatan pasportingizga biriktirilganini tekshiring. Beeline abonentlari *303#, Ucell abonentlari *360# raqamini terib, pasportiga ro'yxatdan o'tgan raqamlarni ko'rishi mumkin.",
    },
    {
      t: 'p',
      text: "Mobiuz, Uzmobile, Perfectum va Humans abonentlari bunday tekshiruv usulini o'z operatoridan so'rashi kerak. Raqam ro'yxatda ko'rinmasa, diler bilan bog'lanib, holatni operator orqali aniqlang.",
    },

    { t: 'h2', text: 'Ilovada qanday qilinadi' },
    {
      t: 'ol',
      items: [
        'MaxRaqam ilovasini oching (u bepul) va qidiruvga kerakli raqamlar kombinatsiyasini kiriting.',
        "Operator, narx, valyuta (UZS yoki USD) va to'lov usuli filtrlarini qo'llang, natijalarni saralang.",
        "Yoqqan raqamlarni sevimlilarga qo'shing va ularni solishtiring.",
        "E'londan diler profiliga o'ting va verifikatsiya belgisini ko'ring.",
        "Dilerga so'rov yuboring, qo'ng'iroq qiling, Telegram yoki MaxChat orqali yozing.",
        "Shubhali e'lonni ko'rsangiz, shikoyat yuboring.",
      ],
    },
    {
      t: 'p',
      text: "Yangi takliflar va aksiyalardan xabardor bo'lish uchun yangiliklar va takliflar haqidagi bildirishnomalarni sozlamalarda yoqib qo'yishingiz mumkin.",
    },

    { t: 'h2', text: "Ko'p beriladigan savollar" },
    {
      t: 'faq',
      items: [
        {
          q: 'Raqamni MaxRaqamning o\'zidan sotib olsa bo\'ladimi?',
          a: "Yo'q. MaxRaqam raqamlarni sotmaydi: u xaridorlar va mustaqil dilerlarni bog'laydigan platforma. Raqam diler bilan kelishiladi va operator orqali rasmiylashtiriladi.",
        },
        {
          q: 'Tasdiqlangan diler bitimni kafolatlaydimi?',
          a: "Yo'q. Belgi faqat MaxRaqam diler taqdim etgan ma'lumotlarni tekshirganini bildiradi va operator ruxsatnomasi hisoblanmaydi.",
        },
        {
          q: "Ilovadan foydalanish pullikmi?",
          a: "Yo'q, MaxRaqam ilovasi bepul va iOS hamda Android uchun mavjud.",
        },
      ],
    },
    {
      t: 'p',
      text: "Kerakli raqamni qidirishni boshlash uchun MaxRaqam ilovasini [yuklab oling](/yuklab-olish).",
    },
  ],
  related: ['qollanma', 'raqamlar', 'oltin', 'xavfsizlik', 'g-pereoformlenie', 'verifikatsiya'],
};

export default page;
