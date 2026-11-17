import type { PageContent } from '../types';

// TODO(owner): the process of transferring a won Instagram username to the winner is unknown — describe it once confirmed.
// TODO(owner): legal/policy review of Instagram username auctions is pending; do not add claims about Instagram's policies.
const page: PageContent = {
  title: 'Юзернеймы Instagram на аукционе | MaxRaqam',
  description:
    'Аукционы юзернеймов Instagram в приложении MaxRaqam: что такое имя профиля, как проходят живые торги, где купить MaxCoin и что проверить перед ставкой.',
  h1: 'Юзернеймы Instagram: живые торги в MaxRaqam',
  crumb: 'Instagram',
  lead: [
    'В приложении MaxRaqam проходят живые аукционы на юзернеймы Instagram. Для участия нужна внутренняя валюта MaxCoin, а условия торгов указаны в правилах аукциона в самом приложении.',
    'Здесь коротко о том, что такое имя профиля Instagram, как устроены торги и на что обратить внимание заранее.',
  ],
  blocks: [
    { t: 'h2', text: 'Что такое юзернейм Instagram' },
    {
      t: 'p',
      text: 'Юзернейм — это имя профиля вида @name, которое входит в адрес вашей страницы. По нему вас отмечают в публикациях и находят через поиск.',
    },
    {
      t: 'p',
      text: 'Короткое и осмысленное имя легче запомнить и проще продиктовать, поэтому такие имена обычно пользуются спросом. Это общий фактор, а не гарантия интереса к конкретному имени.',
    },
    { t: 'h2', text: 'Как проходят торги' },
    {
      t: 'steps',
      items: [
        { title: 'Приложение', text: '[Установите MaxRaqam](/yuklab-olish) и войдите в аккаунт.' },
        { title: 'MaxCoin', text: 'Купите пакет [MaxCoin](/maxcoin) в разделе «Профиль» через Payme.' },
        { title: 'Правила', text: 'Откройте аукцион и прочитайте условия, показанные в приложении.' },
        { title: 'Ставки', text: 'Участвуйте в торгах в реальном времени.' },
      ],
    },
    { t: 'h2', text: 'Что проверить перед ставкой' },
    {
      t: 'ul',
      items: [
        'Правила аукциона в приложении — общие сведения есть на странице [правил аукциона](/username/auksion-qoidalari).',
        'Баланс MaxCoin.',
        'Точное написание имени, включая точки и подчёркивания.',
        'Никому не сообщайте пароль от Instagram и коды подтверждения.',
      ],
    },
    { t: 'h2', text: 'Юзернеймы Telegram' },
    {
      t: 'p',
      text: 'В MaxRaqam также проходят аукционы на имена в Telegram. О них и об отличии от Fragment — на странице [юзернеймов Telegram](/username/telegram).',
    },
  ],
  related: ['username', 'telegram', 'auksion', 'maxcoin'],
};

export default page;
