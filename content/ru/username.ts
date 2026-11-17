import type { PageContent } from '../types';

// TODO(owner): how a won username is transferred to the winner (Telegram and Instagram) is unknown — add once confirmed.
// TODO(owner): who puts usernames up for auction and how the auction relates to Fragment technically is unknown.
const page: PageContent = {
  title: 'Купить юзернейм Telegram и Instagram | MaxRaqam',
  description:
    'Аукционы юзернеймов Telegram и Instagram в приложении MaxRaqam: живые торги, внутренняя валюта MaxCoin и правила, которые стоит прочитать до первой ставки.',
  h1: 'Аукционы юзернеймов Telegram и Instagram',
  crumb: 'Юзернеймы',
  lead: [
    'В MaxRaqam юзернеймы Telegram и Instagram разыгрываются на живых аукционах прямо в приложении. Для участия в торгах используется внутренняя валюта MaxCoin — её пакеты покупаются в разделе «Профиль» через Payme.',
    'Если вы ищете, где купить юзернейм Telegram или короткое имя для Instagram, начните с правил аукциона в приложении: там указано, как проходят торги именно сейчас.',
  ],
  blocks: [
    { t: 'h2', text: 'Что такое юзернейм' },
    {
      t: 'p',
      text: 'Юзернейм — это публичное имя аккаунта вида @name, которое входит в ссылку на профиль, например t.me/name в Telegram. По нему вас находят без номера телефона, поэтому короткие и осмысленные имена обычно легче запомнить и на них выше спрос.',
    },
    { t: 'h2', text: 'Telegram и Instagram' },
    {
      t: 'cards',
      items: [
        {
          title: 'Юзернеймы Telegram',
          text: 'Что такое имя @name в Telegram, чем MaxRaqam отличается от Fragment и как устроены торги в приложении.',
          href: '/username/telegram',
        },
        {
          title: 'Юзернеймы Instagram',
          text: 'Аукционы на имена профилей Instagram внутри приложения MaxRaqam и что проверить перед ставкой.',
          href: '/username/instagram',
        },
        {
          title: 'Правила аукциона',
          text: 'Что известно о торгах и почему важно прочитать правила в приложении до участия.',
          href: '/username/auksion-qoidalari',
        },
      ],
    },
    { t: 'h2', text: 'Как проходят живые торги' },
    {
      t: 'ol',
      items: [
        '[Скачайте приложение MaxRaqam](/yuklab-olish) и войдите в аккаунт.',
        'Пополните баланс: купите пакет [MaxCoin](/maxcoin) в разделе «Профиль» через Payme.',
        'Откройте аукцион нужного юзернейма и прочитайте правила, показанные в приложении.',
        'Делайте ставки в режиме реального времени и следите за ходом торгов.',
      ],
    },
    {
      t: 'note',
      tone: 'info',
      title: 'Перед первой ставкой',
      text: 'Условия аукциона показаны в самом приложении. Прочитайте их до участия, а общие сведения о торгах собраны на странице [правил аукциона](/username/auksion-qoidalari).',
    },
    { t: 'h2', text: 'MaxCoin для аукционов' },
    {
      t: 'p',
      text: '[MaxCoin](/maxcoin) — внутренняя валюта MaxRaqam, которая используется в аукционах юзернеймов. Пакеты MaxCoin покупаются в разделе «Профиль» через Payme. Аукционы и пакеты MaxCoin появились в версии 1.1.2 — подробнее в [истории обновлений](/yangiliklar).',
    },
    { t: 'h2', text: 'Полезно почитать' },
    {
      t: 'p',
      text: 'Пошаговый разбор — в руководстве [«Как купить и продать юзернейм Telegram»](/qollanma/telegram-username-sotib-olish). Ответы на частые вопросы о торгах и MaxCoin есть в разделе [вопросов и ответов](/savollar).',
    },
  ],
  related: ['telegram', 'instagram', 'auksion', 'maxcoin', 'g-telegram'],
};

export default page;
