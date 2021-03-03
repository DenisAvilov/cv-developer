import {CVComponent} from '../../core/CVComponent'
import {bodyTemplate} from './body.template'


export class Body extends CVComponent {
 static className = 'cv__body'
 constructor($root){
     super($root)
 }
  toHtml() {
    return bodyTemplate()
  }
}


