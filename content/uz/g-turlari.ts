import type { PageContent } from '../types';

// Pattern examples below are abstract illustrations (X = any digit), not listings.
// TODO(owner): if the app has dedicated filters/categories per pattern type (e.g. "7777", "ABAB"), describe them here once confirmed.
const page: PageContent = {
  title: 'Chiroyli raqam turlari: 7777, 0000, ABAB | MaxRaqam',
  description:
    "Chiroyli raqam turlari: 7777, 0000, 1111, 777, ABAB, ABABABA, 707007 va oyna raqamlar. Har bir naqsh misollari va o'zingizga mos raqamni tanlash maslahatlari.",
  h1: 'Chiroyli raqam turlari: 7777, 0000, ABAB va boshqalar',
  crumb: 'Chiroyli raqam turlari',
  lead: [
    "Chiroyli raqamlar raqamlarning takrorlanishi va ritmiga qarab bir necha turga bo'linadi: bir xil raqamlar qatori (7777, 0000, 1111), uchliklar (777), almashinuvchi juftliklar (ABAB, ABABABA), 707007 kabi ritmik naqshlar va oyna (ko'zgu) raqamlar. Qaysi tur sizga mos kelishi raqam qanchalik oson esda qolishi, aytilishi va shaxsiy didingizga bog'liq.",
    "Quyida har bir tur misollar bilan tushuntiriladi, so'ng o'zingizga mos raqamni tanlash qadamlari va MaxRaqam ilovasida bunday raqamlarni qanday qidirish ko'rsatiladi. Misollarda X — istalgan raqam.",
  ],
  blocks: [
    { t: 'h2', text: 'Chiroyli raqam nima' },
    {
      t: 'p',
      text: "Chiroyli raqam (chiroyli nomer, чиройли ракам) — raqamlari tartibli, takrorlanuvchi yoki ritmik joylashgan, shu sababli birinchi eshitishdayoq esda qoladigan telefon raqami. O'zbekistonda mobil raqam +998 XX XXX XX XX ko'rinishida yoziladi: XX — operator prefiksi, qolgan yetti raqam esa naqsh hosil qiladigan qism.",
    },
    {
      t: 'p',
      text: "Bunday raqamni aytish, yozib olish va eslab qolish oson. Shuning uchun uni biznes egalari, xizmat ko'rsatuvchilar va shunchaki o'ziga yoqqan raqamni xohlovchilar tanlaydi.",
    },
    { t: 'h2', text: 'Asosiy turlar bir jadvalda' },
    {
      t: 'table',
      caption: "Chiroyli raqam naqshlari (X — istalgan raqam)",
      head: ['Tur', 'Naqsh', 'Misol'],
      rows: [
        ["To'rtta bir xil raqam", '7777, 0000, 1111', 'XX XXX 77 77'],
        ['Yettita bir xil raqam', '1111111', 'XX 111 11 11'],
        ['Uchlik', '777', 'XX 777 XX XX'],
        ['Almashinuvchi juftlik', 'ABAB', 'XX XXX 12 12'],
        ['Uzun almashinuv', 'ABABABA', 'XX 121 21 21'],
        ['Ritmik naqsh', '707007', 'XX X70 70 07'],
        ["Oyna (ko'zgu) raqam", 'ABCDCBA', 'XX 123 43 21'],
      ],
    },
    { t: 'h2', text: "Bir xil raqamlar qatori: 7777, 0000, 1111" },
    {
      t: 'p',
      text: "Bu eng tanish tur: raqamning oxirida yoki o'rtasida bir xil raqam ketma-ket to'rt va undan ko'p marta takrorlanadi. Masalan, XX XXX 77 77, XX XXX 00 00 yoki XX XXX 11 11. Takrorlanish qancha uzun bo'lsa, raqam shuncha yorqin ko'rinadi.",
    },
    {
      t: 'p',
      text: "Yettita raqamning hammasi bir xil bo'lgan raqamlar — masalan, XX 777 77 77 — bu turning eng kamyob ko'rinishi hisoblanadi. Ular odatda [oltin va VIP raqamlar](/raqamlar/oltin-raqamlar) qatoriga kiritiladi.",
    },
    { t: 'h2', text: "Uchliklar: 777 va shunga o'xshashlar" },
    {
      t: 'p',
      text: "Uchlik — bir xil raqamning uch marta ketma-ket kelishi, masalan XX 777 XX XX yoki XX XXX X7 77. U to'rtlik kabi kuchli bo'lmasa ham, raqamga aniq \"tayanch nuqta\" beradi va uni eslab qolishni osonlashtiradi.",
    },
    {
      t: 'p',
      text: "Bir raqamda ikkita uchlik bo'lsa (masalan, 777 va 000 birga), naqsh yanada sezilarli bo'ladi.",
    },
    { t: 'h2', text: 'ABAB va ABABABA: almashinuvchi raqamlar' },
    {
      t: 'p',
      text: "ABAB naqshida ikki xil raqam navbatma-navbat keladi: masalan, XX XXX 12 12 yoki XX XXX 50 50. Bunday raqam \"o'n ikki — o'n ikki\" kabi juftlab aytiladi va qulay ritm hosil qiladi.",
    },
    {
      t: 'p',
      text: "ABABABA — xuddi shu almashinuvning butun yetti raqam bo'ylab davom etishi, masalan XX 121 21 21. Naqsh uzunroq bo'lgani uchun u oddiy ABAB'dan ancha ko'zga tashlanadi.",
    },
    { t: 'h2', text: '707007 kabi ritmik naqshlar' },
    {
      t: 'p',
      text: "Ba'zi raqamlar to'liq takrorlanmaydi, lekin o'ziga xos ritmga ega. 707007 shunday naqsh: ikki xil raqam (7 va 0) aniq tartibda joylashadi va raqam bir necha bo'lakka bo'linib oson aytiladi, masalan XX X70 70 07.",
    },
    {
      t: 'p',
      text: "Bunday naqshlar oddiy takrorlanishdan ko'ra noodatiyroq ko'rinadi va ko'pincha shaxsiy did bilan tanlanadi.",
    },
    { t: 'h2', text: "Oyna (ko'zgu) raqamlar" },
    {
      t: 'p',
      text: "Oyna raqam boshidan ham, oxiridan ham bir xil o'qiladi: masalan, XX 123 43 21 yoki XX 700 00 07. Raqamning ikki yarmi bir-birining aksi bo'lgani uchun u simmetrik va tartibli ko'rinadi.",
    },
    {
      t: 'p',
      text: "Oyna naqshlar boshqa turlar bilan qo'shilib kelishi mumkin — masalan, o'rtasida 0000 bo'lgan simmetrik raqam ikki naqshni birlashtiradi. Bunday aralash naqshlar bir qarashda ham, aytganda ham yaxshi esda qoladi.",
    },
    { t: 'h2', text: "Raqam qiymatiga nimalar ta'sir qiladi" },
    {
      t: 'ul',
      items: [
        "**Takrorlanish:** bir xil raqamlar qancha ko'p bo'lsa, raqam odatda shuncha ko'p e'tibor tortadi.",
        "**Naqsh uzunligi:** butun raqam bo'ylab davom etadigan naqsh (masalan, ABABABA) qisqa naqshdan ko'ra yorqinroq.",
        "**Operatorga talab:** ayrim operatorlarning raqamlari xaridorlar orasida ko'proq qidiriladi.",
      ],
    },
    {
      t: 'p',
      text: "Narx har bir diler tomonidan belgilanadi va bu omillar faqat umumiy yo'nalish beradi. Batafsil tahlil [oltin raqam narxi nimaga bog'liq](/qollanma/oltin-raqam-narxi) qo'llanmasida.",
    },
    { t: 'h2', text: '1-qadam: Raqam nima uchun kerakligini aniqlang' },
    {
      t: 'p',
      text: "Biznes uchun raqam mijozlar eslab qolishi oson bo'lishi kerak — bunday holatda oxiri 0000 yoki 7777 bilan tugaydigan raqamlar qulay. Shaxsiy raqam uchun esa o'zingizga yoqqan ritm yoki muhim sana eslatadigan naqsh ko'proq mos kelishi mumkin.",
    },
    { t: 'h2', text: '2-qadam: Naqsh turini tanlang' },
    {
      t: 'p',
      text: "Yuqoridagi jadvaldan sizga eng yoqqan 1–2 turni belgilang. Raqamni ovoz chiqarib aytib ko'ring: ba'zi naqshlar qog'ozda chiroyli ko'rinadi, boshqalari esa aytilganda yaxshiroq eshitiladi.",
    },
    {
      t: 'p',
      text: "Bitta turga qattiq bog'lanib qolmang. Masalan, sizga 7777 yoqsa, 777 yoki ABAB naqshli raqamlarni ham ko'rib chiqing: ular ham oson esda qoladi va tanlov ancha kengayadi.",
    },
    { t: 'h2', text: '3-qadam: Operatorni hisobga oling' },
    {
      t: 'p',
      text: "Bir xil naqsh turli operatorlarda turli prefiks bilan keladi. Lekin raqamni ko'chirish imkoniyati sababli prefiks hozirgi operatorni kafolatlamaydi. Buni qanday aniqlash haqida [raqam qaysi operatorga tegishli](/qollanma/raqam-qaysi-operatorga-tegishli) qo'llanmasini o'qing.",
    },
    { t: 'h2', text: '4-qadam: Diler va shartlarni tekshiring' },
    {
      t: 'p',
      text: "MaxRaqam telekom operator emas va raqam sotmaydi: raqamlarni ilovada mustaqil dilerlar taklif qiladi, to'lov, shartlar va qayta rasmiylashtirish esa xaridor, diler va operator o'rtasida hal qilinadi. To'lovdan oldin diler profilini ko'ring va [firibgarlikdan saqlanish](/qollanma/firibgarlikdan-saqlanish) bo'yicha maslahatlarga amal qiling.",
    },
    { t: 'h2', text: 'Ilovada qanday qilinadi' },
    {
      t: 'ol',
      items: [
        "MaxRaqam ilovasida raqamlar katalogini oching.",
        "Qidiruvga kerakli raqamlarni kiriting — masalan, 7777, 0000 yoki 1212.",
        "Operator, valyuta (UZS yoki USD) va to'lov usuli bo'yicha filtrlang.",
        "Natijalarni saralang va yoqqan raqamlarni sevimlilarga saqlang.",
        "Bir martalik to'lov va nasiyani solishtiring.",
        "Dilerga so'rov yuboring, MaxChat orqali yozing, qo'ng'iroq qiling yoki Telegram orqali bog'laning.",
      ],
    },
    {
      t: 'p',
      text: "Barcha raqamlarni ko'rish uchun [raqamlar](/raqamlar) sahifasiga o'ting. O'zingizga yoqqan naqshni qidirishni boshlash uchun MaxRaqam ilovasini [yuklab oling](/yuklab-olish).",
    },
  ],
  related: ['qollanma', 'oltin', 'raqamlar', 'g-oltin-narxi', 'g-sotib-olish'],
};

export default page;
