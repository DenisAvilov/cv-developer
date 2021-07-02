// import {storage} from '../core/untills'
// storage('language')
// ? storage('language')
// :
import viber from './../img/viber.png'
const defaultState = {
  ua: {
    name: 'Денис Авілов',
    typeDevelopment: 'Frontend Розробник',
    adress: 'Харків вул. Дерев\'янко 50',
    contacts: [
      {
        href: 'https://www.facebook.com/avilovd.a',
        title: 'Профіль у facebook',
        content: 'Профіль у facebook',
        materialIcons: 'facebook'
      },
      {
        href: 'https://github.com/DenisAvilov/cv-developer',
        title: 'подивитись код резюме на GitHub',
        content: 'Код резюме на GitHub',
        materialIcons: 'code'
      },

      {
        href: 'mailto:avilovd.a@gmail.com',
        title: null,
        content: 'avilovd.a@gmail.com',
        materialIcons: 'alternate_email'
      },

      {
        href: 'tel:0506195452',
        title: 'viber',
        content: '050-619-54-52',
        materialIcons: 'stay_current_portrait',
        img: viber
      }

    ],
    about: {
      about: 'Про мене',
      p1: `Шукаю свою першу роботу в команді 
          <strong> 
          фронтенд </strong> розробників на <strong>React JS</strong>.`,
      p2: `У 2017 році почав знайомитись з веб-розробкою,
          у 2018 році
          створив свой перший додаток на <strong>JavaScript.</strong>`,
      p3: `Навчаюсь самостійно, черпаю натхнення з інтернет ресурсів`,
      p4: `Я не маю комерційного досвіду в <strong>IT</strong> сфері, 
            якщо не вважати розміщення <strong>WP</strong> на сервер за грощі.
            Вважаючи на вишесказане також розгляну такі варіанти як інтерн
            на Full Stack Developer JavaScript`
    },
    skills: {
      title: `Професійні навички`,
      article: `Сумісність між браузерами (стандарти W3C); <br/>
          Побудова архітектури Flux; Перевірка форм; <br/>
          Здатність розуміти нові інструменти;`
    },
    knowledge: {
      title: `Джерела знань`,
      google: `Головний помічник`,
      lavrik: `Дмитрій Лаврік`,
      incubator: 'ІТ інкубатор',
      vladilen: `Владілен Мінін`
    },
    achievements: {
      title: `Мої досягнення`,
      subtitle: `Що застосовується:`,
      viewCode: 'Ознайомитись з кодом',
      viewSite: 'Подивитись сайт'
    },
    tagline: {
      title: `Давайте розвиватися разом!`,
      downTitle: `Добре організован,
    можу розставляти пріоритети в завданнях`
    },
    footer: {
      title: 'Резюме веб-розробника'+
      'з Харкова | 2021 | Навички Англійської мови B1'
    },
    month: {
      july: 'Липень',
      february: 'Лютий',
    }

  },
  en: {
    name: 'Denis Avilov',
    typeDevelopment: 'Front-End Developer',
    adress: 'Kharkiv st. Wooden 50',
    contacts: [
      {
        href: 'https://www.facebook.com/avilovd.a',
        title: 'view profile in facebook',
        content: 'Profile in facebook',
        materialIcons: 'facebook'
      },
      {
        href: 'https://github.com/DenisAvilov/cv-developer',
        title: 'view code this cv',
        content: 'The code for this page',
        materialIcons: 'code'
      },
      {
        href: 'mailto:avilovd.a@gmail.com',
        title: null,
        content: 'avilovd.a@gmail.com',
        materialIcons: 'alternate_email'
      },
      {
        href: 'tel:0506195452',
        title: 'viber',
        content: '050-619-54-52',
        materialIcons: 'stay_current_portrait',
        img: viber
      }
    ],
    about: {
      about: 'About me',
      p1: `Looking for my first job in a team 
          <strong> Frontend </strong>
           development with <strong>React JS</strong>.`,
      p2: `In 2017 he started getting acquainted with web development,
           in 2018 he created his first application on
            <strong>JavaScript.</strong>`,
      p3: `I study on my own, I draw inspiration from Internet resources.`,
      p4: `I have no commercial experience in <strong>IT</strong> sphere, 
            excluding template placement 
            <strong>WP</strong> on the server for money.
            Therefore, I will consider options for the vacancy of an 
            intern to study Full Stack Developer JavaScript`
    },
    skills: {
      title: `Professional skills`,
      article: `Cross-browser compatibility (W3C standards); <br/>
          Construction of Flux architecture; Form validation;  <br/>
          Ability to understand new tools;`
    },
    knowledge: {
      title: `Sources of knowledge`,
      google: `The main assistant`,
      lavrik: `Dmitry Lavrik`,
      incubator: 'IT incubator',
      vladilen: `Vladilen Minin`
    },
    achievements: {
      title: `My achievements`,
      subtitle: `What applied:`,
      viewCode: 'View Code',
      viewSite: 'View Site'
    },
    tagline: {
      title: `Let's develop together!`,
      downTitle: `Well organized, with the ability to prioritize tasks`
    },
    month: {
      july: 'July',
      february: 'February',
    },
    footer: {
      title: 'Resume of a web developer from Kharkov | 2021 | Skills English B1'
    },

  },
  lang: null
}

const flag = JSON.parse( localStorage.getItem('language'))

if ( flag ) {
  defaultState.lang = defaultState[flag]
} else {
  defaultState.lang = defaultState['en']
}

export const initial = defaultState

