import type { PageContent } from '../types';

// Intentionally no price figures, ranges or example prices: prices are set by each dealer.
const page: PageContent = {
  title: "Oltin raqam narxi nimaga bog'liq | MaxRaqam",
  description:
    "Oltin raqam narxi nimaga bog'liq: takrorlanish, naqsh uzunligi va turi, operatorga talab, diler shartlari. Takliflarni ilovada qanday solishtirishni o'rganing.",
  h1: "Oltin raqam narxi nimaga bog'liq",
  crumb: 'Oltin raqam narxi',
  lead: [
    "Oltin raqam narxi asosan raqamdagi takrorlanish darajasiga, naqshning uzunligi va turiga hamda shu operator raqamlariga bo'lgan talabga bog'liq. Yakuniy narxni esa har bir mustaqil diler o'zi belgilaydi, shuning uchun bir xil naqshli raqamlar turli e'lonlarda turlicha baholanishi mumkin.",
    "Bu qo'llanmada aniq summalar yo'q — ularni dilerlar belgilaydi. Uning o'rniga oltin raqam (gold nomer, VIP raqam) qiymatini o'zingiz baholash va MaxRaqam ilovasida takliflarni solishtirish yo'lini qadamma-qadam ko'rsatamiz.",
  ],
  blocks: [
    { t: 'h2', text: 'Oltin raqam deganda nima tushuniladi' },
    {
      t: 'p',
      text: "Oltin yoki VIP raqam — eslab qolish oson bo'lgan, takrorlanuvchi yoki simmetrik raqamlardan tuzilgan telefon raqami. O'zbekistonda raqamlar +998 XX XXX XX XX ko'rinishida yoziladi: XX — operator prefiksi, qolgan yetti raqam esa naqsh joylashadigan qism.",
    },
    {
      t: 'table',
      caption: 'Keng tarqalgan naqsh turlari',
      head: ['Naqsh', "Namuna ko'rinishi", 'Xususiyati'],
      rows: [
        ['7777', 'XX XXX 77 77', "Oxirida to'rtta bir xil raqam"],
        ['0000', 'XX XXX 00 00', "Yaxlit, «tekis» ko'rinish"],
        ['1111', 'XX XXX 11 11', 'Bitta raqamning takrori'],
        ['777', 'XX 777 XX XX', 'Uch xonali takror'],
        ['ABAB', 'XX XXX 12 12', 'Ikki raqamli juftlikning takrori'],
        ['ABABABA', 'XX 121 21 21', "Yetti raqam bo'ylab almashinuv"],
        ['707007', 'XX X70 70 07', 'Raqam va nolning ritmik almashinuvi'],
        ["Ko'zgu (mirror)", 'XX 123 43 21', "Ikki tomondan bir xil o'qiladi"],
      ],
    },
    {
      t: 'p',
      text: "Har bir tur haqida batafsil: [chiroyli raqam turlari](/qollanma/chiroyli-raqam-turlari) qo'llanmasi va [oltin raqamlar](/raqamlar/oltin-raqamlar) sahifasi.",
    },

    { t: 'h2', text: '1-qadam. Takrorlanish darajasini baholang' },
    {
      t: 'p',
      text: "Umumiy qoida oddiy: raqamda bir xil raqamlar qancha ko'p takrorlansa, u shuncha oson esda qoladi va odatda shuncha talabgir bo'ladi. Faqat oxirgi ikki raqami bir xil bo'lgan raqam bilan oxirgi to'rt raqami bir xil bo'lgan raqam bir xil darajada qadrlanmaydi.",
    },
    {
      t: 'p',
      text: "Takror qaysi raqamdan iboratligi ham ba'zi xaridorlar uchun ahamiyatli bo'lishi mumkin. Biroq bu shaxsiy didga bog'liq omil, uni hamma uchun bir xil qoida deb qabul qilmang.",
    },

    { t: 'h2', text: "2-qadam. Naqsh uzunligi va turiga qarang" },
    {
      t: 'p',
      text: "Naqsh uzunligi — raqamning qancha qismi bitta mantiqqa bo'ysunishi. Faqat oxiri chiroyli bo'lgan raqam bilan butun yetti raqami bitta naqshni tashkil etgan raqam (masalan, ABABABA yoki ko'zgu raqam) bir-biridan sezilarli farq qiladi.",
    },
    {
      t: 'p',
      text: "Naqsh turi ham muhim: ba'zi kombinatsiyalar bir qarashda ko'zga tashlanadi, boshqalari esa diqqat bilan qaraganda seziladi. O'zingizga quyidagi savollarni bering:",
    },
    {
      t: 'ul',
      items: [
        "Naqsh raqamning qancha qismini egallaydi?",
        "Raqamni og'zaki aytib bersangiz, uni bir eshitishda eslab qolish mumkinmi?",
        "Raqamda naqshni buzadigan «ortiqcha» raqam bormi?",
      ],
    },

    { t: 'h2', text: '3-qadam. Operator va prefiksni hisobga oling' },
    {
      t: 'p',
      text: "Narxga operatorga bo'lgan talab ham ta'sir qiladi. Ba'zi xaridorlar ma'lum bir operator yoki prefiksni afzal ko'radi, shuning uchun bir xil naqsh turli prefikslarda turlicha qadrlanishi mumkin.",
    },
    { t: 'operators' },
    {
      t: 'p',
      text: "Yodda tuting: raqamni boshqa operatorga ko'chirish mumkin, shuning uchun prefiks raqamning hozirgi operatorini kafolatlamaydi. Sotib olishdan oldin buni diler bilan aniqlang — batafsil [raqam qaysi operatorga tegishli](/qollanma/raqam-qaysi-operatorga-tegishli) qo'llanmasida.",
    },

    { t: 'h2', text: '4-qadam. Diler shartlarini solishtiring' },
    {
      t: 'p',
      text: "MaxRaqam narxlarni belgilamaydi. Har bir diler e'lonida narxni, valyutani (so'm yoki AQSh dollari) va nasiya shartlarini o'zi ko'rsatadi. Shu sabab bir turdagi raqamning ikki xil dilerda turlicha taklif qilinishi tabiiy holat.",
    },
    {
      t: 'p',
      text: "To'lov usuli ham umumiy xarajatga ta'sir qilishi mumkin. Bir martalik to'lov va nasiyani ilovada solishtirish mumkin — batafsil [nasiyaga raqamlar](/raqamlar/nasiya) sahifasida va [nasiyaga telefon raqam olish](/qollanma/nasiyaga-raqam-olish) qo'llanmasida.",
    },

    { t: 'h2', text: "5-qadam. Ilovada o'xshash raqamlarni solishtiring" },
    {
      t: 'p',
      text: "Raqam qiymatini his qilishning eng amaliy yo'li — o'xshash naqshli bir nechta e'lonni solishtirish. Bitta e'longa qarab xulosa chiqarmang.",
    },
    {
      t: 'ol',
      items: [
        'Qidiruvga naqshni kiriting, masalan 7777 yoki 0000.',
        "Operator filtrini qo'llab, bitta operator ichida solishtiring.",
        "Valyutani bir xil qilib tanlang: aks holda so'm va dollardagi takliflarni adashtirib qo'yish oson.",
        "Narx bo'yicha saralang va eng mos variantlarni sevimlilarga saqlang.",
        "To'lov usuli filtri orqali bir martalik to'lov va nasiya takliflarini alohida ko'ring.",
      ],
    },

    { t: 'h2', text: "6-qadam. Haddan tashqari arzon takliflarga ehtiyot bo'ling" },
    {
      t: 'p',
      text: "Agar oltin raqam o'xshash e'lonlarga qaraganda juda arzon ko'rinsa, bu ehtiyot bo'lish uchun sabab. To'lovdan oldin diler profilini, verifikatsiya belgisini va raqamga egalikni tekshiring, SMS orqali kelgan kodlarni hech kimga aytmang.",
    },
    {
      t: 'p',
      text: "Verifikatsiya belgisi MaxRaqam diler taqdim etgan ma'lumotlarni tekshirganini bildiradi, lekin u operator ruxsatnomasi emas va bitimni kafolatlamaydi ([diler verifikatsiyasi](/dilerlar/verifikatsiya)). Shubhali e'lonni ilovada shikoyat qilib yuboring, ko'proq maslahatlar esa [xavfsizlik](/xavfsizlik) sahifasida.",
    },

    { t: 'h2', text: 'Qisqacha: narxga ta\'sir qiluvchi omillar' },
    {
      t: 'table',
      head: ['Omil', "Narxga qanday ta'sir qiladi", 'Qanday tekshiriladi'],
      rows: [
        ['Takrorlanish', "Bir xil raqamlar qancha ko'p bo'lsa, raqam odatda shuncha talabgir", 'Raqamdagi takrorlarni sanang'],
        ['Naqsh uzunligi', "Naqsh raqamning katta qismini egallasa, u yaxlitroq ko'rinadi", 'Naqsh nechta raqamni qamrab olishiga qarang'],
        ['Naqsh turi', "Oson eslab qolinadigan naqshlar ko'proq qiziqish uyg'otadi", "Raqamni ovoz chiqarib aytib ko'ring"],
        ['Operatorga talab', "Ba'zi prefikslar ayrim xaridorlar uchun afzalroq", 'Operator filtri bilan solishtiring'],
        ['Diler shartlari', 'Narx, valyuta va nasiyani diler belgilaydi', "Bir nechta e'lonni solishtiring"],
      ],
    },

    { t: 'h2', text: 'Ilovada qanday qilinadi' },
    {
      t: 'ol',
      items: [
        'MaxRaqam ilovasini oching va qidiruvga sizni qiziqtirgan raqamlar kombinatsiyasini kiriting.',
        "Operator, narx, valyuta (UZS yoki USD) va to'lov usuli bo'yicha filtrlang.",
        "Natijalarni narx bo'yicha saralang.",
        "Qiziqarli raqamlarni sevimlilarga saqlab, ularni solishtiring.",
        "Tanlangan raqam bo'yicha dilerga so'rov yuboring yoki MaxChat, qo'ng'iroq, Telegram orqali bog'lanib, yakuniy narx va shartlarni aniqlang.",
      ],
    },
    {
      t: 'p',
      text: "Esda tuting: MaxRaqam telekom operatori emas, raqamlarni sotmaydi va narxlarni belgilamaydi. Narx, to'lov va qayta rasmiylashtirish xaridor, diler va operator o'rtasida kelishiladi.",
    },

    { t: 'h2', text: "Ko'p beriladigan savollar" },
    {
      t: 'faq',
      items: [
        {
          q: 'Oltin raqamning aniq narxini qayerdan bilsam bo\'ladi?',
          a: "Aniq narxni raqamni taklif qilayotgan diler aytadi. Ilovada o'xshash e'lonlarni solishtirib, umumiy tasavvur hosil qilishingiz mumkin.",
        },
        {
          q: "Nega bir xil naqshli raqamlarning narxi har xil?",
          a: "Narxni har bir diler o'zi belgilaydi. Bundan tashqari prefiks, naqshning uzunligi va to'lov usuli ham farq qilishi mumkin.",
        },
        {
          q: "Oltin raqamni nasiyaga olsa bo'ladimi?",
          a: "Agar diler e'londa nasiya shartlarini belgilagan bo'lsa, ha. Bunday e'lonlarni to'lov usuli filtri orqali topasiz.",
        },
        {
          q: "Prefiks narxga ta'sir qiladimi?",
          a: "Ta'sir qilishi mumkin, chunki ba'zi xaridorlar ma'lum operator yoki prefiksni afzal ko'radi. Biroq prefiks raqamning hozirgi operatorini kafolatlamaydi.",
        },
      ],
    },
    {
      t: 'p',
      text: "Oltin raqamlarni solishtirishni boshlash uchun MaxRaqam ilovasini [yuklab oling](/yuklab-olish).",
    },
  ],
  related: ['qollanma', 'oltin', 'g-turlari', 'nasiya', 'g-sotib-olish'],
};

export default page;
