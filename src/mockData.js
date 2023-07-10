const SERVICES_LIST = [
  {
    id: 1,
    name: 'Дипломная работа',
    price: '400 срок до 20 дней',
    priceSnipept: '6000',
  },
  {
    id: 2,
    name: 'Не Дипломная работа',
    price: '200 срок до 20 дней',
    priceSnipept: '60400',
  },
  {
    id: 3,
    name: 'До Дипломная работа',
    price: '100 срок до 20 дней',
    priceSnipept: '64000',
  },
]

const PAGES_LIST = [
  {
    id: 1,
    name: 'Дипломная работа',
    text: '',
    metaTitle: '',
    metaDescription: '',
    h1: '',
    activity: true,
  },
  {
    id: 2,
    name: 'Не Дипломная работа',
    text: '',
    metaTitle: '',
    metaDescription: '',
    h1: '',
    activity: true,
  },
  {
    id: 3,
    name: 'До Дипломная работа',
    text: '',
    metaTitle: '',
    metaDescription: '',
    h1: '',
    activity: true,
  },
]

const MENU_LIST = [
  {
    id: 1,
    name: 'Дипломная работа',
    link: 'some link',
  },
  {
    id: 2,
    name: 'Не Дипломная работа',
    link: 'some link',
  },
  {
    id: 3,
    name: 'До Дипломная работа',
    link: 'some link',
  },
]

const TYPES_LIST = [
  {
    id: 1,
    name: 'Дипломная работа',
    link: 'some link',
    activity: true,
    filterValue: 'нет',
    metaTitleValue: 'нет',
    h1Value: 'нет',
    metaDescriptionValue: 'нет',
    genderValue: 0,
    externalLinkValue: 'нет',
    genitiveNameValue: 'нет',
    genitiveNameXValue: 'нет',
  },
  {
    id: 2,
    name: 'Не Дипломная работа',
    link: 'some link',
    priceSnipept: true,
    filterValue: 'нет',
    metaTitleValue: 'нет',
    h1Value: 'нет',
    metaDescriptionValue: 'нет',
    genderValue: 0,
    externalLinkValue: 'нет',
    genitiveNameValue: 'нет',
    genitiveNameXValue: 'нет',
  },
  {
    id: 3,
    name: 'До Дипломная работа',
    link: 'some link',
    priceSnipept: true,
    filterValue: 'нет',
    metaTitleValue: 'нет',
    h1Value: 'нет',
    metaDescriptionValue: 'нет',
    genderValue: 0,
    externalLinkValue: 'нет',
    genitiveNameValue: 'нет',
    genitiveNameXValue: 'нет',
  },
]

const GENDER_LIST = [
  'Выберите гендер',
  {
    label: 'средний',
    value: 0,
  },
  {
    label: 'мужской',
    value: 1,
  },
  {
    label: 'женский',
    value: 2,
  },
  {
    label: 'множ.число',
    value: 3,
  },
]

const PIGS_SETTINGS = [
  {
    id: 1,
    name: 'Ловец лидов (по таймауту)',
    activity: true,
    h1: 'Рассчитайте стоимость в пару кликов!',
    h1AuthUsers: 'Рассчитай стоимость в пару кликов!',
    h2: 'Дарим <b>300 рублей</b> на первый заказ!</br><span>У вас есть шанс значительно сэкономить!</span>',
    h2AuthUsers:
      'Сегодня мы дарим <b>до 400 рублей</b> на первый заказ</br><span>У вас есть шанс значительно сэкономить!</span>',
    banner: 'https://placebear.com/200/300',
    textButton: 'Получить бонус',
    textButtonAuth: 'Получить подарок',
    timeToScript: 60,
    timeToShowAgain: 3600,
    pagesDoNotShow: 'contacts,authors,gotovye-raboty/{*}',
  },
  {
    id: 2,
    name: 'Ловец лидов (закрытие вкладки)',
    h1: 'Секундочку… взгляните!',
    activity: false,
    h1AuthUsers: 'Постойте… останьтесь',
    h2: 'Дарим <b>300 рублей</b> на первый заказ!</br><span>У вас есть шанс значительно сэкономить!</span>',
    h2AuthUsers:
      'Сегодня мы дарим <b>до 400 рублей</b> на первый заказ</br><span>У вас есть шанс значительно сэкономить!</span>',
    banner: 'https://placebear.com/200/300',
    textButton: 'Получить бонус',
    textButtonAuth: 'Получить подарок',
    timeToScript: 1,
    timeToShowAgain: 3600,
    pagesDoNotShow: 'contacts,authors',
  },
]

const PIGS_HEAD_NAMES = {
  id: ' ',
  name: 'Название',
  h1: 'Заголовок',
  activity: 'Активность',
  h1AuthUsers: 'Заголовок для авторизированных пользователей',
  h2: 'Подзаголовок',
  h2AuthUsers: 'Подзаголовок для авторизированных пользователей',
  bannerValue: 'Баннер',
  textButton: 'Текст кнопки',
  textButtonAuth: 'Текст кнопки для авторизированных пользователей',
  timeToScript: 'Время до запуска скрипта (секунды)',
  timeToShowAgain: 'Повторный показ (секунды)',
  pagesDoNotShow: 'Не показывать на страницах',
}
export {
  SERVICES_LIST,
  TYPES_LIST,
  GENDER_LIST,
  PIGS_SETTINGS,
  PIGS_HEAD_NAMES,
  PAGES_LIST,
  MENU_LIST,
}
