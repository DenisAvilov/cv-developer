import {CVComponent} from '../../core/CVComponent'
import { CvComponentStyle } from '../../core/CvComponentStyle'
import { initial } from '../../redux/initial'
import {bodyTemplate} from './body.template'


export class Body extends CvComponentStyle {
 static className = 'cv__body'

  constructor($root, options) {
    super($root, {...options})
  this.store = options.store
  this.emitter = options.emitter
  }

  prepare() {
    this.initState(initial)
  }
  
  init() {
    super.init
    this.emitter.subscrube('select:check', value =>  this.setState(value.getStore().lang))
  }

  
  get template() {    
    return bodyTemplate(this.store.getStore().lang)
  }

  toHtml() {
    
    return this.template
  }
}


