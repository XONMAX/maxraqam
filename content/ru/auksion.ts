import type { PageContent } from '../types';

// TODO(owner): full auction rules text (bid steps, auction duration, winner determination, payment, cancellations,
// what happens to MaxCoin after a lost/won auction, username transfer) — not available; add here once provided.
const page: PageContent = {
  title: 'Правила аукциона юзернеймов | MaxRaqam',
  description:
    'Что известно об аукционах юзернеймов Telegram и Instagram в MaxRaqam: живые торги в приложении, MaxCoin через Payme и правила, показанные в приложении.',
  h1: 'Правила аукциона юзернеймов',
  crumb: 'Правила аукциона',
  lead: [
    'Аукционы юзернеймов Telegram и Instagram проходят в приложении MaxRaqam в формате живых торгов. Действующие правила показаны в самом приложении — прочитайте их перед первой ставкой.',
  ],
  blocks: [
    { t: 'h2', text: 'Что известно о торгах' },
    {
      t: 'ul',
      items: [
        'Торги идут в реальном времени внутри приложения MaxRaqam.',
        'На аукционы выставляются юзернеймы [Telegram](/username/telegram) и [Instagram](/username/instagram).',
        'Для участия используется внутренняя валюта [MaxCoin](/maxcoin).',
        'Пакеты MaxCoin покупаются в разделе «Профиль» через Payme.',
      ],
    },
    { t: 'h2', text: 'Где взять MaxCoin' },
    {
      t: 'p',
      text: 'Откройте раздел «Профиль» в приложении, выберите пакет MaxCoin и оплатите его через Payme. Подробная инструкция — на странице [MaxCoin](/maxcoin).',
    },
    { t: 'h2', text: 'Перед участием' },
    {
      t: 'p',
      text: 'Откройте аукцион в приложении и внимательно прочитайте его условия: именно они определяют, как проходят торги. Проверьте точное написание юзернейма и баланс MaxCoin. Если что-то непонятно, задайте вопрос через [страницу контактов](/aloqa) до того, как делать ставку.',
    },
    {
      t: 'note',
      tone: 'warn',
      text: 'Ориентируйтесь только на правила, показанные в приложении MaxRaqam. Условия других площадок, включая Fragment, к аукционам MaxRaqam не относятся.',
    },
  ],
  related: ['username', 'telegram', 'instagram', 'maxcoin'],
};

export default page;
