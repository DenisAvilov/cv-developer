import {CVComponent} from '../../core/CVComponent'
import  {headerTemplate} from './header.template'
import logo from './../../img/logo.png'
import {language} from '../../js/function/language'

export class Header extends CVComponent {
    static className = 'cv__header'
  constructor($root){
   super($root,{
    name: 'Header',
    listeners: ['click', 'mousedown', 'input']
   }) 
   
  }
  toHtml() {
      
    return  headerTemplate(language.contacts,logo)
  }
  
 onInput(event) {
     console.log('Header: onInput', event)
 }

 onClick (event) {
    console.log(event.target)
 }

 onMousedown () {
     console.log('mousedown')
 }



}
