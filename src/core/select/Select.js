import {CVComponent} from '../CVComponent'
import { greateSelect } from './select.tamplate'
import {$} from './../dom'
import { perekladach } from '../../redux/actions'


export class Select extends CVComponent {
  static className = 'select'
  constructor($root, options = {}) {
    super($root, {
      name: 'Select',
      listeners: ['click'],
      ...options })
    this.placeholder = options.placeholder
    this.items = options.items || []
    this.store = options.store
    this.emitter =options.emitter
  }
  


  toHtml() {
    return greateSelect( this.placeholder, this.items )
  }

  init(){
    super.init()
    }

  toggle(flag, icon) {
    icon ? icon : ''   
    flag.classContains('open')
    ? (this.close(flag, icon))
    : (this.open(flag), icon.text('arrow_drop_down'))
  }
    
  open(dropdown) {
    dropdown.classAdd('open')
  }

  close(dropdown, icon) {
    icon.text('arrow_drop_up')
    dropdown.classRemove('open')
  }

  onClick(event) {
    const $target = $(event.target)
    const $dropdown = this.$root.querySelector(`[data-type="dropdown"]`)
    const icon = this.$root.querySelector('[data-material="icon"]')
    const keys = this.items.map(element => element.value )
    const key = $target.data.value

    if( $target.data.type === 'input'){   
    this.toggle($dropdown, icon)  
    }else if( keys.includes(key)){  
      this.placeholder = $target.data.value
      switch(key){
        case 'EN':       
        this.store.dispatch(perekladach('en') ) 
        this.emitter.emit('select:check', this.store)        
        break 
      case 'UA':      
        this.store.dispatch(perekladach( 'ua') )        
        this.emitter.emit('select:check', this.store)
      break 
      default: this.close($dropdown, icon)
      }   
    } else {
      this.close($dropdown, icon)
    }
    
 
}

}
