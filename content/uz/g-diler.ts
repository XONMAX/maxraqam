import type { PageContent } from '../types';

// TODO(owner): how a user becomes a dealer in the app (sign-up flow, required account type) is unknown — describe once confirmed.
// TODO(owner): whether posting listings has any fee or limits for dealers is unknown — do not mention fees until confirmed.
// TODO(owner): dealer verification procedure and required documents are unknown — add to /dilerlar/verifikatsiya once confirmed.
// TODO(owner): which fields a dealer profile contains (name, photo, description, contacts) is unknown.
// TODO(owner): operator re-registration documents, fees and deadlines are unknown.
// TODO(owner): USSD codes for checking numbers registered to a passport are unknown for Mobiuz, Uzmobile, Perfectum and Humans.
const page: PageContent = {
  title: "Diler sifatida raqam sotish: qo'llanma | MaxRaqam",
  description:
    "Diler sifatida chiroyli raqamlarni qanday sotish: MaxRaqam'da e'lon joylash, narx, valyuta va nasiya shartlarini belgilash, so'rovlarga javob berish.",
  h1: 'Diler sifatida raqamlarni qanday sotish mumkin',
  crumb: 'Diler sifatida sotish',
  lead: [
    "MaxRaqam ilovasida diler sifatida raqamlarni sotish uchun raqamlaringizni e'lon qilasiz — bittadan yoki ko'pini birdaniga — va narx, valyuta hamda nasiya shartlarini o'zingiz belgilaysiz. So'ng xaridorlarning so'rovlarini ilovada ko'rib, ular bilan MaxChat, qo'ng'iroq yoki Telegram orqali kelishasiz.",
    "MaxRaqam xaridor va dilerni bog'laydigan marketpleys, telekom operator emas. Platforma raqamlarga egalik qilmaydi, ularni sotmaydi va o'tkazmaydi: to'lov, bitim shartlari va operatorda qayta rasmiylashtirish siz, xaridor va operator o'rtasida hal qilinadi.",
  ],
  blocks: [
    { t: 'h2', text: '1-qadam: Raqamlaringizni sotuvga tayyorlang' },
    {
      t: 'p',
      text: "E'lon joylashdan oldin har bir raqam haqida asosiy ma'lumotlarni aniqlab oling: u qaysi operatorga tegishli, kimning nomida rasmiylashtirilgan va uni xaridor nomiga o'tkazish mumkinmi. Xaridorlar birinchi bo'lib aynan shu savollarni beradi.",
    },
    {
      t: 'p',
      text: "O'z pasportingizga ro'yxatdan o'tgan raqamlarni Beeline'da *303#, Ucell'da *360# orqali ko'rishingiz mumkin. Boshqa operatorlar bo'yicha bu ma'lumotni operatorning o'zidan so'rang. Prefiks har doim ham hozirgi operatorni ko'rsatmasligini unutmang — batafsil [raqam qaysi operatorga tegishli](/qollanma/raqam-qaysi-operatorga-tegishli) qo'llanmasida.",
    },
    { t: 'h2', text: '2-qadam: Diler profilingizni tayyorlang' },
    {
      t: 'p',
      text: "Har bir dilerning ilovada ochiq profili bo'ladi. Xaridorlar dilerlar katalogidan sizni topib, profilingizda barcha raqamlaringizni ko'ra oladi. Profil sizning \"vitrina\"ngiz: qanchalik tartibli bo'lsa, xaridorga sizni tanlash shunchalik oson.",
    },
    {
      t: 'p',
      text: "Profilda ko'rishlar statistikasi ham bor. U e'lonlaringizga qanchalik qiziqish bo'layotganini ko'rsatadi va qaysi raqamlar ko'proq e'tibor tortayotganini tushunishga yordam beradi.",
    },
    { t: 'h2', text: "3-qadam: Verifikatsiyadan o'ting" },
    {
      t: 'p',
      text: "Dilerlar ilovada verifikatsiyadan o'tishi mumkin. Verifikatsiya belgisi MaxRaqam siz taqdim etgan ma'lumotlarni tekshirganini bildiradi. Bu xaridorlar uchun qo'shimcha ishora bo'ladi, ammo belgi operator ruxsatnomasi emas va bitimni kafolatlamaydi — buni xaridorlarga ham halol tushuntiring.",
    },
    {
      t: 'p',
      text: "Verifikatsiya nimani tekshirishi va nimani kafolatlamasligi [dilerlar verifikatsiyasi](/dilerlar/verifikatsiya) sahifasida yozilgan.",
    },
    { t: 'h2', text: "4-qadam: Raqamlarni e'lon qiling — bittadan yoki ommaviy" },
    {
      t: 'p',
      text: "Ilovada bitta raqamni alohida joylashingiz yoki ko'p raqamni birdaniga, ommaviy tarzda yuklashingiz mumkin. Ommaviy joylash raqamlari ko'p bo'lgan dilerlar uchun vaqtni tejaydi.",
    },
    {
      t: 'ul',
      items: [
        "Raqamni to'liq va xatosiz yozing: xaridorlar raqamlar bo'yicha qidiradi, bitta xato raqam e'lonni qidiruvdan chiqarib yuborishi mumkin.",
        "Operatorni to'g'ri ko'rsating: xaridorlar ko'pincha operator filtri bilan qidiradi.",
        "Operator kodisiz raqamlar uchun ilovada alohida e'lonlar mavjud — raqamingiz shunday bo'lsa, buni hisobga oling.",
        "Raqamning naqshini (masalan, XX 777 77 77 yoki ABAB turidagi) xaridor tushunadigan tarzda ko'rsating. Turlar haqida [chiroyli raqam turlari](/qollanma/chiroyli-raqam-turlari) qo'llanmasida o'qing.",
      ],
    },
    { t: 'h2', text: "5-qadam: Narx, valyuta va nasiya shartlarini belgilang" },
    {
      t: 'p',
      text: "Har bir e'lon uchun narx va valyutani — UZS yoki USD — o'zingiz tanlaysiz. Agar nasiyaga sotishga tayyor bo'lsangiz, bo'lib to'lash shartlarini ham e'londa ko'rsating. Xaridorlar ilovada bir martalik to'lov va nasiyani solishtira oladi hamda to'lov usuli bo'yicha filtrlaydi, shuning uchun to'g'ri sozlangan e'lon kerakli xaridorga tezroq yetib boradi.",
    },
    {
      t: 'p',
      text: "Shartlarni aniq va tushunarli yozing: nasiya muddati, to'lovlar soni va raqam xaridor nomiga qachon o'tishi. Xaridorlar nasiya haqida nimalarni so'rashi [nasiya](/raqamlar/nasiya) sahifasida tushuntirilgan.",
    },
    { t: 'h2', text: "6-qadam: E'lonlaringizni dolzarb holda saqlang" },
    {
      t: 'p',
      text: "E'lonlarni istalgan vaqtda tahrirlashingiz va raqamning mavjudligini boshqarishingiz mumkin. Raqam sotilgan yoki band bo'lsa, uni darhol yangilang. Eskirgan e'lonlar xaridorni chalg'itadi va vaqtini oladi.",
    },
    {
      t: 'p',
      text: "Xaridorlar noto'g'ri yoki shubhali e'lonlar haqida shikoyat yubora oladi, platformada moderatsiya ham ishlaydi. Aniq va yangilangan ma'lumotlar sizni ortiqcha shikoyatlardan saqlaydi va obro'ingizni mustahkamlaydi.",
    },
    { t: 'h2', text: "7-qadam: Xaridorlar so'rovlariga javob bering" },
    {
      t: 'p',
      text: "Xaridorlar sizga ilova orqali so'rov yuboradi, va siz barcha so'rovlarni ilovada ko'rasiz. Ular bilan MaxChat'da yozishishingiz, ovozli xabar yuborishingiz mumkin. Ayrim xaridorlar to'g'ridan-to'g'ri qo'ng'iroq qiladi yoki Telegram orqali yozadi.",
    },
    {
      t: 'p',
      text: "Tez va aniq javob berish ishonch uyg'otadi. Xaridor raqam kimning nomida ekanini, to'lov tartibini va qayta rasmiylashtirish qanday o'tishini so'rasa, ochiq javob bering.",
    },
    { t: 'h2', text: '8-qadam: Bitimni halol yakunlang' },
    {
      t: 'p',
      text: "Shartlar kelishilgach, raqamni xaridor nomiga operatorning rasmiy tartibi orqali o'tkazing. Eng yaxshi yo'l — xaridor bilan birga operatorning rasmiy kanaliga murojaat qilish. Umumiy tartib [raqamni o'z nomiga o'tkazish](/qollanma/raqamni-oz-nomiga-otkazish) qo'llanmasida tasvirlangan.",
    },
    {
      t: 'p',
      text: "Hech qachon xaridordan SMS kod so'ramang va o'zingiz ham uni boshqalarga bermang. Qayta rasmiylashtirishdan keyin xaridor raqam uning nomiga o'tganini tekshira olishi kerak.",
    },
    { t: 'h2', text: 'Xaridorlar ishonchini qanday qozonish mumkin' },
    {
      t: 'ul',
      items: [
        "Profil va e'lonlardagi ma'lumotlar bir-biriga mos bo'lsin.",
        "Verifikatsiyadan o'ting va uning ma'nosini xaridorga to'g'ri tushuntiring.",
        "Sotilgan raqamlarni darhol mavjud emas deb belgilang.",
        "Nasiya shartlarini aniq yozing, keyinchalik ularni o'zgartirmang.",
        "Raqam egasi va qayta rasmiylashtirish haqidagi savollarga oshkora javob bering.",
      ],
    },
    { t: 'h2', text: "Dilerlar ko'p yo'l qo'yadigan xatolar" },
    {
      t: 'ul',
      items: [
        "Sotilgan raqamni e'londa qoldirish — xaridor qo'ng'iroq qilib, raqam yo'qligini bilgach, boshqa e'lonlaringizga ham ishonmay qo'yadi.",
        "Operatorni taxminan, faqat prefiksga qarab ko'rsatish — ko'chirilgan raqamda bu xato bo'lishi mumkin.",
        "Nasiya shartlarini e'londa yozmay, faqat suhbatda aytish — xaridor shartlarni solishtira olmaydi.",
        "So'rovlarga kechikib javob berish — xaridor bu vaqt ichida boshqa dilerni topishi mumkin.",
        "Verifikatsiya belgisini \"kafolat\" deb taqdim etish — bu noto'g'ri va xaridorni chalg'itadi.",
      ],
    },
    {
      t: 'faq',
      items: [
        {
          q: "Faqat bitta raqamni sotsam ham bo'ladimi?",
          a: "Ha. Ilovada bitta raqamni alohida e'lon qilish ham, ko'p raqamni birdaniga ommaviy joylash ham mumkin.",
        },
        {
          q: "Narxni qaysi valyutada ko'rsatsam bo'ladi?",
          a: "Har bir e'lon uchun UZS yoki USD ni tanlaysiz. Xaridorlar raqamlarni valyuta bo'yicha ham filtrlay oladi.",
        },
        {
          q: "MaxRaqam xaridordan to'lovni qabul qilib, menga o'tkazadimi?",
          a: "Yo'q. MaxRaqam raqam sotmaydi va to'lovlarda vositachilik qilmaydi. To'lov va bitim shartlarini siz xaridor bilan bevosita kelishasiz, qayta rasmiylashtirish esa operator orqali bo'ladi.",
        },
        {
          q: "Verifikatsiya belgisi xaridorga nimani bildiradi?",
          a: "U MaxRaqam siz bergan ma'lumotlarni tekshirganini bildiradi. Bu operator ruxsatnomasi yoki bitim kafolati emas.",
        },
      ],
    },
    { t: 'h2', text: 'Ilovada qanday qilinadi' },
    {
      t: 'ol',
      items: [
        "MaxRaqam ilovasini o'rnating va hisobingizga kiring.",
        "Diler profilingizni to'ldiring va verifikatsiyadan o'ting.",
        "Bitta raqamni yoki bir nechta raqamni ommaviy tarzda e'lon qiling.",
        "Har bir e'lon uchun narx, valyuta (UZS yoki USD) va kerak bo'lsa nasiya shartlarini belgilang.",
        "Kelgan so'rovlarni ko'ring va xaridorlarga MaxChat orqali javob bering.",
        "E'lonlarni tahrirlang, mavjudligini yangilang va profilingizdagi ko'rishlar statistikasini kuzating.",
      ],
    },
    {
      t: 'p',
      text: "Ilovada 3 tagacha hisob ochib, ular o'rtasida tez almashish mumkin — bu, masalan, shaxsiy va ish yozishmalarini ajratishda qulay. Dilerlar uchun imkoniyatlarning to'liq ro'yxati [dilerlar](/dilerlar) sahifasida.",
    },
    {
      t: 'p',
      text: "Raqamlaringizni joylashni boshlash uchun MaxRaqam ilovasini [yuklab oling](/yuklab-olish).",
    },
  ],
  related: ['qollanma', 'dilerlar', 'verifikatsiya', 'g-pereoformlenie', 'nasiya'],
};

export default page;
