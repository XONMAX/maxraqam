import type { PageContent } from '../types';

// TODO(owner): MaxCoin exchange rate / package sizes are unknown — do not list until confirmed (and never as prices on the site).
// TODO(owner): MaxCoin refund rules are unknown.
// TODO(owner): whether MaxCoin can be spent on anything besides username auctions is unknown.
const page: PageContent = {
  title: 'MaxCoin — внутренняя валюта MaxRaqam',
  description:
    'MaxCoin — внутренняя валюта приложения MaxRaqam для аукционов юзернеймов. Как купить пакет MaxCoin в разделе «Профиль» через Payme: пошаговая инструкция.',
  h1: 'MaxCoin — внутренняя валюта приложения MaxRaqam',
  crumb: 'MaxCoin',
  lead: [
    'MaxCoin — это внутренняя валюта приложения MaxRaqam, которая используется в аукционах юзернеймов Telegram и Instagram. Пакеты MaxCoin покупаются в разделе «Профиль» через Payme.',
  ],
  blocks: [
    { t: 'image', src: '/images/maxcoin.webp', alt: 'Монета MaxCoin — внутренняя валюта приложения MaxRaqam', width: 400, height: 400 },
    { t: 'h2', text: 'Для чего нужен MaxCoin' },
    {
      t: 'p',
      text: 'MaxCoin нужен для участия в [аукционах юзернеймов](/username): живые торги за имена в [Telegram](/username/telegram) и [Instagram](/username/instagram) проходят прямо в приложении.',
    },
    { t: 'h2', text: 'Как купить MaxCoin' },
    {
      t: 'steps',
      items: [
        { title: 'Откройте приложение', text: 'Если MaxRaqam ещё не установлен, [скачайте его](/yuklab-olish) и войдите в аккаунт.' },
        { title: 'Перейдите в «Профиль»', text: 'Пакеты MaxCoin находятся в разделе «Профиль».' },
        { title: 'Выберите пакет', text: 'Посмотрите доступные пакеты в приложении и выберите подходящий.' },
        { title: 'Оплатите через Payme', text: 'Подтвердите оплату в Payme — пакет MaxCoin будет куплен.' },
      ],
    },
    {
      t: 'note',
      tone: 'info',
      title: 'Условия — в приложении',
      text: 'Актуальные пакеты и условия смотрите в разделе «Профиль». Перед участием в торгах прочитайте [правила аукциона](/username/auksion-qoidalari).',
    },
    { t: 'h2', text: 'Когда появился MaxCoin' },
    {
      t: 'p',
      text: 'Пакеты MaxCoin и аукционы юзернеймов добавлены в версии 1.1.2. Все изменения приложения собраны в [истории обновлений](/yangiliklar), а ответы на частые вопросы — в разделе [вопросов и ответов](/savollar).',
    },
  ],
  related: ['username', 'auksion', 'telegram', 'savollar'],
};

export default page;
