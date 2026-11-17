import type { PageContent } from '../types';

// TODO(owner): operator re-registration documents, fees and deadlines are unknown — add them per operator only when confirmed by the operators.
// TODO(owner): whether both the current owner and the buyer must be present, and whether any operator offers online re-registration, is unknown.
// TODO(owner): USSD codes for checking numbers registered to a passport are unknown for Mobiuz, Uzmobile, Perfectum and Humans.
const page: PageContent = {
  title: "Raqamni o'z nomiga o'tkazish | MaxRaqam",
  description:
    "Sotib olingan telefon raqamni o'z nomingizga o'tkazish (pereoformlenie): diler bilan kelishish, operatorning rasmiy tartibi va USSD orqali yakuniy tekshiruv.",
  h1: "Raqamni o'z nomiga o'tkazish (pereoformlenie)",
  crumb: "O'z nomiga o'tkazish",
  lead: [
    "Raqamni o'z nomingizga o'tkazish uchun avval diler bilan barcha shartlarni kelishib olasiz, so'ng u bilan birga operatorning rasmiy qayta rasmiylashtirish tartibidan o'tasiz. Jarayon tugagach, raqam pasportingizga biriktirilganini USSD so'rovi yoki operatorning o'zi orqali tekshirasiz.",
    "Bu jarayon so'zlashuvda «pereoformlenie», rus tilida «переоформление номера» deb ataladi. MaxRaqam telekom operatori emas: u raqamlarni sotmaydi va o'tkazmaydi. Qayta rasmiylashtirish xaridor, diler va operator o'rtasida amalga oshiriladi.",
  ],
  blocks: [
    { t: 'h2', text: 'Qayta rasmiylashtirish nima va nega kerak' },
    {
      t: 'p',
      text: "Har bir telefon raqami operatorda ma'lum bir shaxs nomiga ro'yxatdan o'tgan bo'ladi. Siz raqamni diler bilan kelishib olganingizda ham, u rasman sizning nomingizga o'tkazilmaguncha boshqa odamning nomida qolaveradi.",
    },
    {
      t: 'p',
      text: "Shuning uchun chiroyli yoki oltin raqam olishda qayta rasmiylashtirishni kelishuvning eng muhim yakuniy qadami deb qarang. Usiz raqam amalda boshqa shaxsga tegishli bo'lib qoladi va siz uni to'liq o'zingizniki deb hisoblay olmaysiz.",
    },
    {
      t: 'p',
      text: "Raqam tanlash va diler bilan bog'lanishgacha bo'lgan bosqichlar [chiroyli raqamni qanday sotib olish](/qollanma/chiroyli-raqam-sotib-olish) qo'llanmasida yoritilgan. Bu yerda esa kelishuvdan keyingi qism haqida gaplashamiz.",
    },

    { t: 'h2', text: '1-qadam. Raqamning hozirgi operatorini aniqlang' },
    {
      t: 'p',
      text: "Qaysi operatorga murojaat qilishni bilish uchun avval raqam hozir qaysi operatorda ekanini aniqlang. Prefiks bunga har doim javob bermaydi: raqamni boshqa operatorga ko'chirish mumkin bo'lgani uchun prefiks hozirgi operatorni kafolatlamaydi.",
    },
    { t: 'operators' },
    {
      t: 'p',
      text: "Buni diler bilan aniqlashtiring va [raqam qaysi operatorga tegishli](/qollanma/raqam-qaysi-operatorga-tegishli) qo'llanmasidagi usullardan foydalaning.",
    },

    { t: 'h2', text: '2-qadam. Diler bilan shartlarni kelishib oling' },
    {
      t: 'p',
      text: "Operatorga murojaat qilishdan oldin diler bilan quyidagilarni aniq kelishib oling. Yozishmani ilova ichida, masalan [MaxChat](/maxchat) orqali olib borsangiz, kelishilgan gaplar tarixda saqlanib qoladi.",
    },
    {
      t: 'ul',
      items: [
        "Raqam hozir kimning nomida: dilerning o'zidami yoki boshqa shaxsdami?",
        "Raqamning hozirgi egasi qayta rasmiylashtirishda ishtirok eta oladimi?",
        "Operatorga qachon va qaysi rasmiy kanal orqali birga murojaat qilasiz?",
        "Qayta rasmiylashtirish bilan bog'liq xarajatlar bo'lsa, ularni kim qoplaydi?",
        "To'lov qaysi bosqichda amalga oshiriladi?",
      ],
    },
    {
      t: 'p',
      text: "Raqamni nasiyaga olayotgan bo'lsangiz, u qaysi paytda sizning nomingizga o'tkazilishini alohida kelishing — nasiya shartlarini har bir diler o'zi belgilaydi. Batafsil: [nasiyaga telefon raqam olish](/qollanma/nasiyaga-raqam-olish).",
    },

    { t: 'h2', text: "3-qadam. To'lovdan oldin egalikni tekshiring" },
    {
      t: 'p',
      text: "Raqam haqiqatan dilerga yoki u vakil bo'lgan shaxsga tegishli ekaniga ishonch hosil qilmaguncha pul o'tkazmang. Diler profilini va verifikatsiya belgisini ko'rib chiqing, lekin faqat unga tayanib qolmang.",
    },
    {
      t: 'note',
      tone: 'warn',
      text: "Verifikatsiya belgisi MaxRaqam diler taqdim etgan ma'lumotlarni tekshirganini bildiradi. U operator ruxsatnomasi emas va bitimni kafolatlamaydi. Batafsil: [diler verifikatsiyasi](/dilerlar/verifikatsiya).",
    },

    { t: 'h2', text: "4-qadam. Operatorning rasmiy tartibidan birga o'ting" },
    {
      t: 'p',
      text: "Qayta rasmiylashtirishni faqat operatorning rasmiy kanallari orqali bajaring. Notanish shaxslarning «hujjatsiz, tez o'tkazib beramiz» degan takliflariga ishonmang.",
    },
    {
      t: 'p',
      text: "Qanday hujjatlar kerakligi, xizmat pullik yoki bepulligi va jarayon qancha vaqt olishi operatorga bog'liq. Bu ma'lumotlarni operatorning rasmiy sayti yoki aloqa markazidan oldindan so'rab oling, shunda diler bilan uchrashuvda kutilmagan to'siqlar chiqmaydi.",
    },
    {
      t: 'ul',
      items: [
        "Operatorning rasmiy kanalidan kerakli hujjatlar ro'yxatini so'rang.",
        "Diler yoki raqamning hozirgi egasi bilan qulay vaqtni kelishing.",
        "Telefoningizga kelgan SMS kodlarni hech kimga aytmang.",
        "Barcha harakatlarni operator xodimi yoki operatorning rasmiy xizmati orqali bajaring.",
      ],
    },
    {
      t: 'p',
      text: "Jarayon davomida diler bilan aloqada bo'ling va kelishuvdagi har bir o'zgarishni yozishmada qayd eting. Bu keyinchalik kim nimaga rozi bo'lganini aniqlashtirishga yordam beradi.",
    },

    { t: 'h2', text: '5-qadam. Natijani USSD orqali tekshiring' },
    {
      t: 'p',
      text: "Jarayon tugagach, raqam haqiqatan pasportingizga biriktirilganini tekshiring. Ba'zi operatorlarda buni USSD so'rovi orqali qilish mumkin:",
    },
    {
      t: 'table',
      caption: "Pasportga biriktirilgan raqamlarni tekshirish",
      head: ['Operator', 'Qanday tekshiriladi'],
      rows: [
        ['Beeline', '*303#'],
        ['Ucell', '*360#'],
        ['Mobiuz, Uzmobile, Perfectum, Humans', "Operatoringizdan so'rang"],
      ],
    },
    {
      t: 'p',
      text: "Agar raqam ro'yxatda ko'rinmasa, diler bilan bog'laning va holatni operator orqali aniqlang. Raqam sizning nomingizda ekani tasdiqlanmaguncha kelishuvni yakunlangan deb hisoblamang.",
    },

    { t: 'h2', text: '6-qadam. Muammo chiqsa nima qilish kerak' },
    {
      t: 'p',
      text: "Agar diler kelishuvdan qochsa, javob bermay qo'ysa yoki e'londagi ma'lumot noto'g'ri bo'lib chiqsa, e'lonni ilovada shikoyat qilib yuboring. Ilovada shikoyat, moderatsiya va foydalanuvchini bloklash imkoniyatlari bor.",
    },
    {
      t: 'p',
      text: "Raqamning o'ziga oid savollar — u kimning nomida ekani va uni o'tkazish mumkinmi — operator tomonidan hal qilinadi. MaxRaqam bitimni kafolatlamaydi, shuning uchun ehtiyot choralarini oldindan ko'ring. Ko'proq maslahatlar [xavfsizlik](/xavfsizlik) sahifasida va [firibgarlikdan saqlanish](/qollanma/firibgarlikdan-saqlanish) qo'llanmasida.",
    },

    { t: 'h2', text: "Qisqa tekshiruv ro'yxati" },
    {
      t: 'ul',
      items: [
        "Raqamning hozirgi operatori aniqlangan.",
        "Raqam kimning nomida ekani va hozirgi egasi jarayonda ishtirok etishi kelishilgan.",
        "To'lov qaysi bosqichda bo'lishi yozma ravishda kelishilgan.",
        "Operatorning rasmiy kanalidan hujjatlar ro'yxati so'ralgan.",
        "SMS kodlar hech kimga aytilmagan.",
        "Jarayondan keyin raqam pasportingizga biriktirilgani tekshirilgan.",
      ],
    },
    {
      t: 'p',
      text: "Ro'yxatdagi biror band bajarilmagan bo'lsa, shoshilmang: avval uni hal qiling, keyin keyingi qadamga o'ting.",
    },

    { t: 'h2', text: 'Ilovada qanday qilinadi' },
    {
      t: 'ol',
      items: [
        "Ilovada raqamni toping va e'londan diler profiliga o'ting.",
        "Profil ma'lumotlari va verifikatsiya belgisini ko'rib chiqing.",
        "Dilerga so'rov yuboring yoki MaxChat, qo'ng'iroq, Telegram orqali bog'laning va qayta rasmiylashtirish tartibini kelishing.",
        "Kelishilgan shartlarni ilovadagi yozishmada qayd eting.",
        "Muammo bo'lsa, e'lonni shikoyat qilib yuboring yoki foydalanuvchini bloklang.",
      ],
    },
    {
      t: 'p',
      text: "Yodda tuting: MaxRaqam raqamni o'tkazmaydi — qayta rasmiylashtirish faqat operator orqali amalga oshiriladi. Ilova sizga raqamni topish va diler bilan bog'lanishga yordam beradi.",
    },

    { t: 'h2', text: "Ko'p beriladigan savollar" },
    {
      t: 'faq',
      items: [
        {
          q: 'Qayta rasmiylashtirish uchun qanday hujjatlar kerak?',
          a: "Hujjatlar ro'yxatini operator belgilaydi. Uni operatorning rasmiy kanallari orqali oldindan so'rab oling.",
        },
        {
          q: 'Qayta rasmiylashtirishni MaxRaqam bajaradimi?',
          a: "Yo'q. MaxRaqam telekom operatori emas va raqamlarni o'tkazmaydi; bu ish diler bilan birga operator orqali bajariladi.",
        },
        {
          q: "Raqam o'z nomimga o'tganini qanday bilaman?",
          a: "Beeline'da *303#, Ucell'da *360# orqali pasportingizga biriktirilgan raqamlarni ko'ring. Boshqa operatorlarda buni operatorning o'zidan so'rang.",
        },
        {
          q: "Prefiksga qarab operatorni bilsa bo'ladimi?",
          a: "Har doim emas. Raqamni boshqa operatorga ko'chirish mumkin, shuning uchun prefiks hozirgi operatorni kafolatlamaydi.",
        },
        {
          q: "Verifikatsiyadan o'tgan diler bilan ishlasam, tekshirish shartmi?",
          a: "Ha. Verifikatsiya faqat diler taqdim etgan ma'lumotlar tekshirilganini bildiradi; u operator ruxsatnomasi emas va bitimni kafolatlamaydi.",
        },
      ],
    },
    {
      t: 'p',
      text: "Chiroyli raqam tanlash va diler bilan bog'lanish uchun MaxRaqam ilovasini [yuklab oling](/yuklab-olish).",
    },
  ],
  related: ['qollanma', 'g-sotib-olish', 'g-operator', 'xavfsizlik', 'verifikatsiya'],
};

export default page;
