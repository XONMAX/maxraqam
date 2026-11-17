import type { PageContent } from '../types';

// TODO(owner): Beeline re-registration documents, fees and deadlines are not provided; do not add them without a source.
const page: PageContent = {
  title: 'Beeline chiroyli raqamlar: 90 va 91 | MaxRaqam',
  description:
    "Beeline chiroyli raqamlari va gold nomer g'oyalari: 90 va 91 prefikslari, ilovada operator filtri va *303# orqali pasportdagi raqamlarni tekshirish.",
  h1: 'Beeline chiroyli raqamlar — 90 va 91 prefikslari',
  crumb: 'Beeline',
  lead: [
    "Beeline raqamlari +998 dan keyin 90 yoki 91 bilan boshlanadi va MaxRaqam ilovasida ularni operator filtri orqali alohida ko'rish mumkin. Bu raqamlarni mustaqil dilerlar joylashtiradi, MaxRaqam esa sizni ular bilan bog'laydi.",
    "Ko'pchilik qidiruvda «Beeline gold nomer» deb yozadi — ya'ni bir xil raqamlar takrorlanadigan yoki oson eslanadigan kombinatsiya. Quyida shunday naqshlar, qidiruv tartibi va raqamni tekshirish usuli bor.",
  ],
  blocks: [
    { t: 'h2', text: 'Beeline prefikslari: 90 va 91' },
    { t: 'operators', only: ['beeline'] },
    {
      t: 'p',
      text: "To'liq ko'rinishda raqam +998 90 XXX XX XX yoki +998 91 XXX XX XX shaklida yoziladi. Prefiksdan keyingi yetti raqam qanchalik tartibli bo'lsa, uni eslab qolish shunchalik oson.",
    },

    { t: 'h2', text: "Beeline gold nomer: naqsh g'oyalari" },
    {
      t: 'p',
      text: "Jadvaldagi raqamlar faqat naqsh qanday ko'rinishini tushuntiradi. Ilovada aynan qaysi variantlar borligini qidiruv natijalari ko'rsatadi.",
    },
    {
      t: 'table',
      head: ['Naqsh', "Namuna ko'rinishi", 'Nimasi bilan esda qoladi'],
      rows: [
        ['Oxiri 7777', '90 123 77 77', "So'nggi to'rt raqam bir xil"],
        ['Prefiks aks-sadosi', '90 909 09 09', 'Prefiks juftligi raqam oxirigacha almashinib boradi'],
        ['Uchlik 777', '91 777 45 67', "O'rtada uchta yettilik"],
        ['ABAB', '91 234 12 12', 'Oxirida ikki juftlik takrorlanadi'],
        ['Oyna (mirror)', '90 125 65 21', "Yetti raqam ikki tomondan bir xil o'qiladi"],
        ['Nollar', '90 450 00 00', "Oxirida to'rtta nol"],
      ],
    },

    { t: 'h2', text: '90 yoki 91: qaysi birini tanlash' },
    {
      t: 'p',
      text: "Bu yerda tanlov ko'proq ko'rinishga bog'liq. 90 nol bilan tugaydigan yumaloq kod, u nollar ko'p raqamlar bilan yaxshi uyg'unlashadi — masalan, 90 100 00 00. 91 esa birlik bilan tugaydi, shuning uchun 91 111 11 11 yoki 91 191 91 91 kabi naqshlar uning mantiqiy davomi bo'lib ko'rinadi.",
    },
    {
      t: 'p',
      text: "Sizga faqat oxirgi raqamlar muhim bo'lsa, qidiruvda ikkala prefiksni ham qoldiring: variantlar ko'proq bo'ladi, keyin esa yoqqanlarini sevimlilarda yonma-yon ko'rib chiqasiz.",
    },

    { t: 'h2', text: 'Pasportingizdagi raqamlarni *303# bilan tekshirish' },
    {
      t: 'p',
      text: "Beeline abonenti o'z pasportiga qaysi raqamlar ro'yxatdan o'tganini *303# USSD so'rovi orqali bilishi mumkin. Bu ayniqsa raqamni o'z nomingizga o'tkazgandan keyin foydali: yangi raqam haqiqatan sizga qayd etilganini ko'rasiz.",
    },
    {
      t: 'ol',
      items: [
        "Telefonda qo'ng'iroq oynasini oching.",
        "*303# ni tering va qo'ng'iroq tugmasini bosing.",
        "Ekranga chiqqan ma'lumotda yangi raqam bor-yo'qligini tekshiring.",
      ],
    },
    {
      t: 'p',
      text: "Qayta rasmiylashtirishning o'zi faqat operatorning rasmiy kanallari orqali bajariladi. Umumiy tartib — [raqamni o'z nomiga o'tkazish](/qollanma/raqamni-oz-nomiga-otkazish) qo'llanmasida.",
    },

    { t: 'h2', text: 'Ilovada Beeline raqamlarini qanday topish mumkin' },
    {
      t: 'ol',
      items: [
        "MaxRaqam ilovasini oching va raqamlar katalogiga o'ting.",
        "Operator filtridan Beeline'ni tanlang.",
        "Raqamlar maydoniga sevimli kombinatsiyangizni yozing, masalan 777 yoki 0909.",
        "Natijalarni saralang, yoqqanlarini sevimlilarga qo'shing.",
        "Dilerga so'rov yuboring, qo'ng'iroq qiling yoki Telegram'da yozing.",
      ],
    },
    {
      t: 'p',
      text: "Diler profili va «tasdiqlangan» belgisiga e'tibor bering. Bu belgi MaxRaqam diler bergan ma'lumotlarni tekshirganini bildiradi, ammo u operator ruxsati ham, bitim kafolati ham emas.",
    },

    { t: 'h2', text: "90 bilan boshlangani — hali Beeline degani emas" },
    {
      t: 'p',
      text: "Raqamni saqlab qolgan holda boshqa operatorga o'tish mumkin. Shu sababli 90 yoki 91 prefiksi raqam hozir aynan Beeline tarmog'ida ekanini kafolatlamaydi. Operator siz uchun muhim bo'lsa, buni dilerdan alohida so'rang — batafsil [raqam qaysi operatorga tegishli](/qollanma/raqam-qaysi-operatorga-tegishli) qo'llanmasida.",
    },
    {
      t: 'p',
      text: "Narx, to'lov va qayta rasmiylashtirish shartlari diler bilan kelishiladi: MaxRaqam operator emas va raqamlarni o'zi sotmaydi. Qidiruvni boshlash uchun [ilovani yuklab oling](/yuklab-olish); boshqa operatorlar — [Ucell](/raqamlar/ucell) va [Uzmobile](/raqamlar/uzmobile).",
    },
  ],
  related: ['raqamlar', 'oltin', 'g-operator', 'ucell'],
};

export default page;
