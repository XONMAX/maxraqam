import type { PageContent } from '../types';

// TODO(owner): support hours / response times are unknown — add once confirmed.
// TODO(owner): exact in-app path for reporting a listing (button names) is unknown — add step-by-step once confirmed.
const page: PageContent = {
  title: 'Контакты MaxRaqam',
  description:
    'Как связаться с MaxRaqam: электронная почта, телефон и адрес в Ташкенте. Как пожаловаться на подозрительное объявление и запросить удаление своих данных.',
  h1: 'Контакты',
  crumb: 'Контакты',
  lead: [
    'Связаться с командой MaxRaqam можно по электронной почте или по телефону — все контакты указаны ниже. Если вас насторожило объявление, быстрее всего отправить жалобу прямо в приложении.',
  ],
  blocks: [
    { t: 'h2', text: 'Как с нами связаться' },
    { t: 'contacts' },
    { t: 'h2', text: 'Как пожаловаться на объявление' },
    {
      t: 'p',
      text: 'Если объявление выглядит подозрительно или в нём указаны неверные данные, отправьте на него жалобу прямо в приложении MaxRaqam.',
    },
    {
      t: 'p',
      text: 'О том, как обезопасить себя при покупке, читайте на странице [безопасности](/xavfsizlik).',
    },
    { t: 'h2', text: 'Вопросы о сделке' },
    {
      t: 'p',
      text: 'MaxRaqam не является оператором и не продаёт номера. Вопросы о наличии номера, цене, оплате и переоформлении задавайте дилеру — через заявку, звонок, Telegram или [MaxChat](/maxchat).',
    },
    { t: 'h2', text: 'Данные и конфиденциальность' },
    {
      t: 'p',
      text: 'Вы можете запросить удаление своих данных. Как обрабатываются данные, описано на странице [конфиденциальности](/maxfiylik).',
    },
    {
      t: 'p',
      text: 'Возможно, ответ уже есть в разделе [вопросов и ответов](/savollar).',
    },
  ],
  related: ['savollar', 'xavfsizlik', 'biz', 'maxfiylik'],
};

export default page;
