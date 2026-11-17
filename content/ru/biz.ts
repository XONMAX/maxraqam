import type { PageContent } from '../types';

// TODO(owner): company mission / story text is unknown — add once provided.
const page: PageContent = {
  title: 'О компании MaxRaqam',
  description:
    'О MaxRaqam: маркетплейс красивых номеров и юзернеймов от компании MAXTOUR MOBILE APP MCHJ из Ташкента. Что делает платформа, чего она не делает, как связаться.',
  h1: 'О MaxRaqam',
  crumb: 'О нас',
  lead: [
    'MaxRaqam — маркетплейс красивых, золотых и VIP номеров, которые предлагают независимые дилеры, а также площадка аукционов юзернеймов Telegram и Instagram. Приложение разработано компанией MAXTOUR MOBILE APP MCHJ из Ташкента.',
  ],
  blocks: [
    { t: 'h2', text: 'Компания' },
    {
      t: 'p',
      text: 'Приложение MaxRaqam выпускает компания **MAXTOUR MOBILE APP MCHJ** (Ташкент, Узбекистан). Разработчик — Doston Absalamov.',
    },
    { t: 'h2', text: 'Что делает MaxRaqam' },
    {
      t: 'ul',
      items: [
        'Связывает покупателей и независимых дилеров [красивых номеров](/raqamlar).',
        'Даёт инструменты поиска, фильтров, сравнения разовой оплаты и [рассрочки](/raqamlar/nasiya).',
        'Проверяет сведения, которые предоставляют дилеры, в рамках [верификации](/dilerlar/verifikatsiya).',
        'Проводит живые [аукционы юзернеймов](/username) внутри приложения.',
      ],
    },
    { t: 'h2', text: 'Чего MaxRaqam не делает' },
    {
      t: 'p',
      text: 'MaxRaqam не является оператором связи. Платформа не владеет номерами, не продаёт и не переоформляет их. Наличие номера, условия сделки, оплата и окончательное переоформление согласуются между покупателем, дилером и оператором.',
    },
    { t: 'h2', text: 'Контакты' },
    { t: 'contacts' },
    {
      t: 'p',
      text: 'Другие способы связи и порядок подачи жалобы на объявление — на странице [контактов](/aloqa).',
    },
  ],
  related: ['aloqa', 'shartlar', 'maxfiylik', 'yangiliklar'],
};

export default page;
