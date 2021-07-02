import {$} from '../../core/dom';
import Typed from 'typed.js';
import {language} from '../../js/function/language'


export const typing = ($el) =>{
  const div = document.createElement('div')
  const options = {
    strings: [`${language.typeDevelopment}</br> `,
      `<span>${language.adress} </span>`],
    typeSpeed: 40
  };
  const typed = new Typed( `${$el}`, options)
  div.innerHTML = typed
  $el.append(div)
}


