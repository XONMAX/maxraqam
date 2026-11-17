import type { PageContent } from '../types';

// TODO(owner): operator re-registration documents, fees and deadlines are unknown — add only after confirming with each operator.
// TODO(owner): USSD codes for checking numbers registered to a passport are unknown for Mobiuz, Uzmobile, Perfectum and Humans.
// TODO(owner): describe exactly how the "report listing" and "block user" actions are reached in the app (button names / menu path) once confirmed.
const page: PageContent = {
  title: 'Raqam sotib olishda firibgarlikdan saqlanish | MaxRaqam',
  description:
    "Chiroyli raqam sotib olishda firibgarlikdan qanday saqlanish: diler profilini tekshirish, to'lovdan oldin egalikni aniqlash, SMS kodni bermaslik qoidalari.",
  h1: 'Raqam sotib olishda firibgarlikdan qanday saqlanish',
  crumb: 'Firibgarlikdan saqlanish',
  lead: [
    "Firibgarlikdan saqlanishning asosiy qoidasi — raqam haqiqatan sotuvchiga tegishli ekanini va uni operator orqali sizning nomingizga o'tkazish mumkinligini aniqlamaguningizcha pul to'lamang. Buning uchun diler profilini va verifikatsiya belgisini ko'ring, shartlarni oldindan yozma kelishib oling, SMS kodlarni hech kimga bermang va qayta rasmiylashtirishni faqat operatorning rasmiy kanallari orqali bajaring.",
    "MaxRaqam telekom operator emas: u raqamlarga egalik qilmaydi, ularni sotmaydi va o'tkazmaydi. Ilovada raqamlarni mustaqil dilerlar taklif qiladi, to'lov, bitim shartlari va yakuniy qayta rasmiylashtirish esa xaridor, diler va operator o'rtasida hal qilinadi. Shuning uchun quyidagi qadamlar sizning o'zingizni himoya qilishingiz uchun.",
  ],
  blocks: [
    { t: 'h2', text: "1-qadam: Diler profilini diqqat bilan o'rganing" },
    {
      t: 'p',
      text: "Har bir dilerning MaxRaqam ilovasida ochiq profili bor. Profilda diler joylagan boshqa raqamlarni va uning qanday faoliyat yuritayotganini ko'rishingiz mumkin. Bir nechta e'lonni solishtiring: ma'lumotlar bir-biriga mos keladimi, raqamlar tartibli yozilganmi, operator to'g'ri ko'rsatilganmi.",
    },
    {
      t: 'p',
      text: "Profilda **verifikatsiya belgisi** bo'lsa, bu MaxRaqam diler taqdim etgan ma'lumotlarni tekshirganini bildiradi. Lekin bu belgi operator ruxsatnomasi emas va bitimni kafolatlamaydi. Belgining aniq ma'nosi haqida [dilerlar verifikatsiyasi](/dilerlar/verifikatsiya) sahifasida batafsil yozilgan.",
    },
    {
      t: 'p',
      text: "Verifikatsiya belgisi bo'lmagan diler albatta firibgar degani emas, belgisi bor diler esa avtomatik ravishda xavfsiz degani ham emas. Har ikki holatda ham quyidagi qadamlarni bir xil diqqat bilan bajaring.",
    },
    { t: 'h2', text: "2-qadam: E'lon ma'lumotlarini tekshiring" },
    {
      t: 'p',
      text: "E'londagi raqam, operator, valyuta (UZS yoki USD) va to'lov usuli — bir martalik to'lov yoki nasiya — dilerning suhbatdagi so'zlari bilan bir xil bo'lishi kerak. Agar e'londa bir narsa yozilgan-u, suhbatda boshqasi aytilsa, bu savol berish uchun jiddiy sabab.",
    },
    {
      t: 'p',
      text: "Prefiksga alohida e'tibor bering. Raqamni boshqa operatorga ko'chirish imkoniyati tufayli prefiks raqam hozir qaysi operatorda ekanini kafolatlamaydi. Buni qanday aniqlash haqida [raqam qaysi operatorga tegishli ekanini bilish](/qollanma/raqam-qaysi-operatorga-tegishli) qo'llanmasini o'qing.",
    },
    { t: 'h2', text: '3-qadam: Raqam kimning nomida ekanini aniqlang' },
    {
      t: 'p',
      text: "Raqam sotuvchining nomida rasmiylashtirilganmi yoki boshqa shaxsdami — buni to'lovdan oldin bilishingiz kerak. Dilerdan raqamning hozirgi egasi kimligini va uni sizning nomingizga o'tkazish mumkinligini aniq so'rang. Javob noaniq bo'lsa yoki diler bu savoldan qochsa, shoshilmang.",
    },
    {
      t: 'p',
      text: "Operatorlarning ayrimlarida pasportga ro'yxatdan o'tgan raqamlarni USSD kod orqali ko'rish mumkin: Beeline — *303#, Ucell — *360#. Bu kod faqat egasining o'z pasportidagi raqamlarni ko'rsatadi, shuning uchun u sotuvchiga o'z raqamini tekshirishda, sizga esa qayta rasmiylashtirishdan keyin natijani tasdiqlashda yordam beradi. Mobiuz, Uzmobile, Perfectum va Humans abonentlari bu ma'lumotni o'z operatoridan so'rashlari kerak.",
    },
    { t: 'h2', text: "4-qadam: Shartlarni to'lovdan oldin kelishib oling" },
    {
      t: 'p',
      text: "Narx, valyuta, to'lov usuli va nasiya bo'lsa — uning shartlari — har bir diler tomonidan alohida belgilanadi. MaxRaqam to'lovlarni qabul qilmaydi va bitim uchun kafolat bermaydi, shuning uchun barcha tafsilotlarni o'zingiz aniqlashtirib olishingiz muhim.",
    },
    {
      t: 'ul',
      items: [
        "To'lov qachon va qanday qilinadi: qayta rasmiylashtirishdan oldinmi, keyinmi yoki operator ofisida birga.",
        "Nasiya bo'lsa: necha oyga, qancha qismga bo'linadi va raqam qaysi paytda sizning nomingizga o'tadi.",
        "Qayta rasmiylashtirish kim bilan va qaysi operatorning rasmiy kanali orqali o'tkaziladi.",
        "Biror narsa rejadagidek bo'lmasa, tomonlar qanday yo'l tutishi.",
      ],
    },
    {
      t: 'p',
      text: "Nasiya bo'yicha nimalarni so'rash kerakligi [nasiyaga raqam olish](/qollanma/nasiyaga-raqam-olish) qo'llanmasida batafsil yoritilgan.",
    },
    { t: 'h2', text: "5-qadam: SMS kodlar va shaxsiy ma'lumotlaringizni himoya qiling" },
    {
      t: 'p',
      text: "Hech qachon telefoningizga kelgan SMS kodni sotuvchiga, \"operator xodimi\"ga yoki boshqa birovga aytmang. Bunday kod orqali sizning hisoblaringizga yoki raqamingizga kirish mumkin. Halol diler sizdan SMS kod so'ramaydi.",
    },
    {
      t: 'p',
      text: "Pasport ma'lumotlari, karta raqami va boshqa shaxsiy ma'lumotlarni faqat zarur bo'lganda va faqat operatorning rasmiy jarayonida taqdim eting. Notanish havolalar orqali to'lov sahifalariga o'tmang. Kimdir o'zini MaxRaqam yoki operator xodimi deb tanishtirib, kod yoki pul so'rasa, muloqotni to'xtating.",
    },
    { t: 'h2', text: "6-qadam: Raqamni faqat operator orqali o'z nomingizga o'tkazing" },
    {
      t: 'p',
      text: "Raqamni o'z nomingizga o'tkazish operatorning rasmiy tartibi orqali amalga oshiriladi. Eng xavfsiz yo'l — diler bilan birga operatorning rasmiy kanaliga murojaat qilish va jarayon yakunlanganini o'z ko'zingiz bilan ko'rish. Umumiy tartib [raqamni o'z nomiga o'tkazish](/qollanma/raqamni-oz-nomiga-otkazish) qo'llanmasida tushuntirilgan.",
    },
    {
      t: 'p',
      text: "Qayta rasmiylashtirishdan keyin raqam haqiqatan sizning pasportingizga o'tganini tekshiring: Beeline'da *303#, Ucell'da *360#, boshqa operatorlarda esa operatorning o'zidan so'rang.",
    },
    { t: 'h2', text: "7-qadam: Shubhali e'lon haqida xabar bering" },
    {
      t: 'p',
      text: "Agar e'lon noto'g'ri yoki shubhali tuyulsa, ilovada u haqida shikoyat yuboring. MaxRaqam'da shikoyatlar, moderatsiya va foydalanuvchini bloklash imkoniyati bor. Sizning xabaringiz boshqa xaridorlarni ham himoya qiladi.",
    },
    {
      t: 'p',
      text: "Agar suhbat davomida bosim yoki noaniqlik sezsangiz, muloqotni to'xtatishdan tortinmang. Yaxshi raqamni boshqa dilerdan ham topish mumkin, yo'qotilgan pulni qaytarish esa ancha qiyin.",
    },
    { t: 'h2', text: 'Firibgarlikning odatiy belgilari' },
    {
      t: 'ul',
      items: [
        "Sotuvchi tezroq to'lashga undaydi va \"hozir boshqa xaridor bor\" deb bosim o'tkazadi.",
        "Raqam kimning nomida ekani haqidagi savolga aniq javob bermaydi.",
        "Operatorga birga borishdan yoki rasmiy qayta rasmiylashtirishdan bosh tortadi.",
        "Sizdan SMS kod, parol yoki bir martalik tasdiqlash kodini so'raydi.",
        "E'londagi ma'lumot suhbatdagi ma'lumotdan farq qiladi.",
        "Narx shunga o'xshash raqamlarnikidan keskin past va buning sababini tushuntira olmaydi.",
      ],
    },
    {
      t: 'note',
      tone: 'warn',
      title: 'Esda tuting',
      text: "MaxRaqam raqamlarni sotmaydi va bitimlar uchun kafolat, pulni ushlab turish yoki qaytarish xizmatini taklif qilmaydi. Verifikatsiya belgisi ham bitim kafolati emas. Pul to'lash to'g'risidagi qaror va javobgarlik xaridor bilan dilerda qoladi.",
    },
    { t: 'h2', text: 'Ilovada qanday qilinadi' },
    {
      t: 'ol',
      items: [
        "Raqamni toping va e'londan dilerning profiliga o'ting.",
        "Profilda verifikatsiya belgisi bor-yo'qligini va dilerning boshqa e'lonlarini ko'ring.",
        "Bir nechta variantni solishtirish uchun raqamlarni sevimlilarga saqlang.",
        "Dilerga ilova ichidagi MaxChat orqali yozing yoki ovozli xabar yuboring. Xohlasangiz, qo'ng'iroq qiling yoki Telegram orqali bog'laning.",
        "Raqam egasi, to'lov tartibi va qayta rasmiylashtirish haqidagi kelishuvni yozma ravishda aniqlashtirib oling.",
        "Shubhali yoki noto'g'ri e'lonni ko'rsangiz, u haqida ilovada xabar bering; kerak bo'lsa, foydalanuvchini bloklang.",
      ],
    },
    {
      t: 'p',
      text: "Xavfsizlik bo'yicha umumiy tavsiyalar va ma'lumotlaringiz qanday himoyalanishi haqida [xavfsizlik](/xavfsizlik) sahifasida o'qing. Raqamlarni xavfsiz qidirishni boshlash uchun MaxRaqam ilovasini [yuklab oling](/yuklab-olish).",
    },
  ],
  related: ['qollanma', 'xavfsizlik', 'verifikatsiya', 'g-pereoformlenie', 'g-operator'],
};

export default page;
