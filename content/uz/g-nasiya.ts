import type { PageContent } from '../types';

// TODO(owner): which installment details (term, schedule, first payment) are shown on a listing in the app is unknown — describe them only when confirmed.
// TODO(owner): operator re-registration documents, fees and deadlines are unknown.
// TODO(owner): USSD codes for checking numbers registered to a passport are unknown for Mobiuz, Uzmobile, Perfectum and Humans.
const page: PageContent = {
  title: 'Nasiyaga telefon raqam olish | MaxRaqam',
  description:
    "Nasiyaga telefon raqam qanday olinadi: ilovada to'lov usuli bo'yicha filtrlash, bir martalik to'lov bilan solishtirish va diler bilan kelishiladigan shartlar.",
  h1: 'Nasiyaga telefon raqam olish',
  crumb: 'Nasiyaga raqam',
  lead: [
    "Nasiyaga telefon raqam olish uchun MaxRaqam ilovasida to'lov usuli bo'yicha filtrlab, nasiya taklif qiladigan dilerlarning e'lonlarini toping va ularni bir martalik to'lov bilan solishtiring. Nasiya muddati, jadvali va boshqa shartlarni har bir diler o'zi belgilaydi, shuning uchun ularni kelishuvdan oldin yozma ravishda aniqlab oling.",
    "Nasiyani MaxRaqam emas, diler taklif qiladi: MaxRaqam telekom operatori emas va raqam sotmaydi, u xaridorlarni mustaqil dilerlar bilan bog'laydi. Kelishuv shartlari, to'lov va raqamni qayta rasmiylashtirish xaridor, diler va operator o'rtasida hal qilinadi.",
  ],
  blocks: [
    { t: 'h2', text: 'Nasiya nima va u kimga qulay' },
    {
      t: 'p',
      text: "Nasiyaga raqam (rus tilida «номер в рассрочку») — raqam narxini bir vaqtda emas, kelishilgan muddat davomida bo'lib-bo'lib to'lash. Bu chiroyli yoki oltin raqamni butun summani birdaniga to'lamasdan olish imkonini beradi.",
    },
    {
      t: 'p',
      text: "Nasiyaning bir martalik to'lovdan farqi faqat to'lov tartibida emas. Muddat, jadval va raqam qachon sizning nomingizga o'tishi kabi qo'shimcha shartlar paydo bo'ladi — ularni oldindan tushunib olish muhim.",
    },
    {
      t: 'table',
      caption: "Bir martalik to'lov va nasiya",
      head: ['', "Bir martalik to'lov", 'Nasiya'],
      rows: [
        ["To'lov tartibi", "Kelishilgan summa bir martada to'lanadi", "Summa kelishilgan muddat davomida qismlarga bo'lib to'lanadi"],
        ['Shartlarni kim belgilaydi', 'Diler', 'Diler'],
        [
          'Diler bilan nimani aniqlashtirish kerak',
          'Yakuniy narx, qayta rasmiylashtirish vaqti',
          "Muddat, jadval, kechikish holati, qayta rasmiylashtirish vaqti",
        ],
        ['Ilovada qanday topiladi', "To'lov usuli filtri", "To'lov usuli filtri"],
      ],
    },

    { t: 'h2', text: '1-qadam. Byudjetingizni oldindan belgilang' },
    {
      t: 'p',
      text: "Nasiya qulay, lekin har bir to'lov sizning imkoniyatingizga mos bo'lishi kerak. Qancha muddat davomida va qanday hajmdagi muntazam to'lovni bemalol ko'tara olishingizni oldindan hisoblab qo'ying.",
    },
    {
      t: 'p',
      text: "Byudjetni bilish qidiruvni ham osonlashtiradi: ilovadagi narx filtri yordamida imkoniyatingizdan tashqaridagi e'lonlarni darhol chetlab o'tasiz.",
    },

    { t: 'h2', text: '2-qadam. Ilovada nasiya takliflarini toping' },
    {
      t: 'p',
      text: "MaxRaqam ilovasida raqamlarni to'lov usuli bo'yicha filtrlash mumkin. Shu filtr orqali nasiya imkoniyati bor e'lonlarni qoldiring, so'ng ularni operator, raqamlar kombinatsiyasi, narx va valyuta (UZS yoki USD) bo'yicha toraytiring.",
    },
    {
      t: 'p',
      text: "Nasiya mavjud raqamlar haqida umumiy ma'lumot [nasiyaga raqamlar](/raqamlar/nasiya) sahifasida, butun katalog esa [raqamlar](/raqamlar) bo'limida.",
    },

    { t: 'h2', text: "3-qadam. Bir martalik to'lov bilan solishtiring" },
    {
      t: 'p',
      text: "Ilovada bir martalik to'lov va nasiyani solishtirish mumkin. Agar raqam ikkala usulda ham taklif qilingan bo'lsa, umumiy summani, muddatni va qo'shimcha shartlarni yonma-yon qo'yib ko'ring.",
    },
    {
      t: 'ul',
      items: [
        "Nasiya bo'yicha jami to'lanadigan summa bir martalik narxdan farq qiladimi?",
        "Muddat qancha va to'lovlar qanchalik tez-tez amalga oshiriladi?",
        "Bir martalik to'lovda raqamni tezroq o'z nomingizga o'tkaza olasizmi?",
      ],
    },
    {
      t: 'p',
      text: "Bir xil naqshli raqamlarni turli dilerlar turli shartlarda taklif qilishi mumkin, shuning uchun bir nechta e'lonni sevimlilarga saqlab, solishtirib chiqing. Narxga nimalar ta'sir qilishi [oltin raqam narxi](/qollanma/oltin-raqam-narxi) qo'llanmasida tushuntirilgan.",
    },

    { t: 'h2', text: '4-qadam. Diler profilini tekshiring' },
    {
      t: 'p',
      text: "Nasiya — diler bilan bir kunlik emas, ma'lum muddat davom etadigan munosabat. Shuning uchun kim bilan ishlayotganingizni bilish bu holatda ayniqsa muhim.",
    },
    {
      t: 'p',
      text: "E'londan diler profiliga o'ting va verifikatsiya belgisi bor-yo'qligini ko'ring. Bu belgi MaxRaqam diler taqdim etgan ma'lumotlarni tekshirganini bildiradi, ammo u operator ruxsatnomasi emas va bitimni kafolatlamaydi — batafsil [diler verifikatsiyasi](/dilerlar/verifikatsiya) sahifasida.",
    },

    { t: 'h2', text: '5-qadam. Nasiya shartlarini aniqlashtiring' },
    {
      t: 'p',
      text: "Dilerga so'rov yuboring, qo'ng'iroq qiling yoki Telegram yoxud [MaxChat](/maxchat) orqali yozing va quyidagilarni aniq so'rang:",
    },
    {
      t: 'ul',
      items: [
        "Nasiya muddati qancha va to'lovlar qaysi kunlarda amalga oshiriladi?",
        "Birinchi to'lov qancha va u qachon to'lanadi?",
        "Jami to'lanadigan summa qancha va u qaysi valyutada?",
        "To'lov kechiksa nima bo'ladi?",
        "Muddatidan oldin to'liq to'lash mumkinmi?",
        "Nasiya davomida raqamdan foydalana olasizmi va u kimning nomida turadi?",
        "Raqam sizning nomingizga qaysi bosqichda o'tkaziladi?",
      ],
    },
    {
      t: 'note',
      tone: 'info',
      text: "Shartlarni og'zaki emas, yozma ravishda kelishing. Ilova ichidagi yozishma kelishilgan gaplarni keyinchalik qayta ko'rish imkonini beradi.",
    },

    { t: 'h2', text: "6-qadam. Egalikni tekshiring va ehtiyot bo'ling" },
    {
      t: 'p',
      text: "Birinchi to'lovni qilishdan oldin raqam haqiqatan diler yoki u vakil bo'lgan shaxs nomida ekaniga ishonch hosil qiling. SMS orqali kelgan kodlarni hech kimga aytmang.",
    },
    {
      t: 'p',
      text: "Shubhali yoki noto'g'ri e'lonni ilovada shikoyat qilib yuboring. Firibgarlik belgilari [firibgarlikdan saqlanish](/qollanma/firibgarlikdan-saqlanish) qo'llanmasida va [xavfsizlik](/xavfsizlik) sahifasida yoritilgan.",
    },

    { t: 'h2', text: "7-qadam. Raqamni o'z nomingizga o'tkazing" },
    {
      t: 'p',
      text: "Raqamni qayta rasmiylashtirish operatorning rasmiy tartibi orqali amalga oshiriladi. Nasiyada bu qadamning vaqti diler bilan kelishiladi, shuning uchun uni 5-qadamda aniq belgilab oling.",
    },
    {
      t: 'p',
      text: "Rasmiylashtirishdan so'ng raqam pasportingizga biriktirilganini tekshiring: Beeline abonentlari buni *303#, Ucell abonentlari *360# orqali ko'rishi mumkin, boshqa operatorlarda esa operatoringizdan so'rang. Umumiy tartib: [raqamni o'z nomiga o'tkazish](/qollanma/raqamni-oz-nomiga-otkazish).",
    },

    { t: 'h2', text: "Nasiyada nimalarga e'tibor berish kerak" },
    {
      t: 'p',
      text: "Nasiya qulayligi bilan birga ma'lum mas'uliyat ham yuklaydi. Kelishuvdan oldin quyidagilarni yodda tuting:",
    },
    {
      t: 'ul',
      items: [
        "Shartlar diler sayin farq qiladi — bitta e'lon bilan cheklanib qolmang.",
        "Muddat, summa va to'lov sanalari yozishmada aniq ko'rsatilgan bo'lsin.",
        "Raqam qachon sizning nomingizga o'tishi noaniq qolmasin.",
        "Har bir to'lovni qilganingizni tasdiqlovchi ma'lumotni saqlab qo'ying.",
        "Biror shart tushunarsiz bo'lsa, savol bering — tushunmagan shartga rozi bo'lmang.",
      ],
    },

    { t: 'h2', text: 'Ilovada qanday qilinadi' },
    {
      t: 'ol',
      items: [
        "MaxRaqam ilovasini oching va qidiruv filtrlaridan to'lov usulini tanlang.",
        "Operator, raqamlar, narx va valyuta bo'yicha natijalarni toraytiring hamda saralang.",
        "Mos e'lonlarni sevimlilarga saqlang va bir martalik to'lov bilan solishtiring.",
        "Diler profilini va verifikatsiya belgisini ko'rib chiqing.",
        "Dilerga so'rov yuboring yoki MaxChat, qo'ng'iroq, Telegram orqali bog'lanib, nasiya shartlarini aniqlashtiring.",
        "Shubhali e'lonni ko'rsangiz, shikoyat yuboring.",
      ],
    },

    { t: 'h2', text: "Ko'p beriladigan savollar" },
    {
      t: 'faq',
      items: [
        {
          q: 'Nasiyani MaxRaqam beradimi?',
          a: "Yo'q. Nasiya shartlarini har bir diler o'zi belgilaydi; MaxRaqam xaridor va dilerni bog'laydigan platforma.",
        },
        {
          q: 'Nasiya shartlari hamma dilerlarda bir xilmi?',
          a: "Yo'q, har bir diler o'z shartlarini belgilaydi. Shuning uchun bir nechta e'lonni solishtirib chiqing.",
        },
        {
          q: "Oltin raqamni ham nasiyaga olsa bo'ladimi?",
          a: "Agar diler e'londa nasiya shartlarini ko'rsatgan bo'lsa, ha. Bunday e'lonlarni to'lov usuli filtri orqali topasiz.",
        },
        {
          q: 'Nasiya shartlarini qayerda kelishaman?',
          a: "Diler bilan to'g'ridan-to'g'ri: so'rov, qo'ng'iroq, Telegram yoki MaxChat orqali. Kelishuvni yozma shaklda saqlab qo'ying.",
        },
        {
          q: "Nasiyaga olingan raqam qachon mening nomimga o'tadi?",
          a: "Bu diler bilan kelishiladi. Shartni oldindan aniq belgilab oling va qayta rasmiylashtirish operator orqali bajarilishini unutmang.",
        },
      ],
    },
    {
      t: 'p',
      text: "Nasiya takliflarini ko'rish uchun MaxRaqam ilovasini [yuklab oling](/yuklab-olish).",
    },
  ],
  related: ['qollanma', 'nasiya', 'g-sotib-olish', 'verifikatsiya', 'g-pereoformlenie'],
};

export default page;
