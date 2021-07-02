import {$} from './../../core/dom' 
import  {headerTemplate} from './header.template'
import {Select} from './../../core/select/Select'
import { CvComponentStyle } from '../../core/CvComponentStyle'
import {initial} from './../../redux/initial'

export class Header extends CvComponentStyle {
    static className = 'cv__header'
  constructor($root, options){
  super($root,{
    name: 'Header',
    listeners: ['mousedown', 'click' ] ,
    ...options
  }) 
  this.store = options.store
  this.emitter = options.emitter
  this.local = JSON.parse( localStorage.getItem('language'))
  this.placeholder = this.local === null ? 'en' : this.local
  this.select = new Select($root,
    {
      placeholder: this.placeholder,
      items: [
        {value: 'UA'},
        {value: 'EN'},
      ],
      store: this.store,
      emitter: this.emitter
    }
)

  }

  prepare() {   
    this.initState(initial)
    }

  get template() {    
    const TEST = {
      select: this.select,
      }
    return headerTemplate( this.store.getStore(), TEST)
  }  

  toHtml() {   
    return  this.template
  }

  init(){
    super.init()
    this.select.init() 
    this.emitter.subscrube('select:check', value =>  this.setState(value.getStore().lang) )
    }
  onMousedown(event){  
        if(event.target.dataset.slider){
      let $slider = $(event.target)   
      let parents = $slider.closest(`[data-type="resize"]`) 
      parents = parents.querySelector(`[data-type="resize-before"]`)   
      const parentsCoording = parents.getCoords()

    
      
      document.onmousemove = e => {
        e.preventDefault()

        let delta = e.pageX - parentsCoording.$elDom.right     
          let value = parentsCoording.$elDom.width + delta       
          parents.$elDom.style.width = `${value}px`
          $slider.$elDom.style.left = `${value}px`

          function matchMedia(x) {
            let maxLench = 290
            if (x.matches) { 
              maxLench = 280
            } else {
              maxLench = 280
            }
            return maxLench
          }
          
          var x = window.matchMedia("(max-width: 400px)")
        const valueSize = matchMedia(x)    
  
        if( value < 30){       
          parents.$elDom.style.width = `0px`
          $slider.$elDom.style.left = `0px`
         
        }
        if( value > 260){      
          parents.$elDom.style.width = `${valueSize}px`
          $slider.$elDom.style.left = `${valueSize}px`
         
        }      
      }  
    

    document.onmouseup = ee => {
      document.onmousemove = null
    }
    }
  }
  onClick(event) {  
  const $lang = $(event.target)  
  const icon = document.querySelector('#icon') 
  if($lang.data.type === 'title') {  
  const select = document.querySelector('[data-type="dropdown"]')
  const test = select.classList.toggle('open') 
  test ? icon.textContent = `arrow_drop_up` : icon.textContent = `arrow_drop_down`
  }
  if($lang.data.type === 'ua'){  
    const select = document.querySelector('[data-type="dropdown"]')
    const test =  select.classList.toggle('open') 
    test ? icon.textContent = `arrow_drop_up` : icon.textContent = `arrow_drop_down`   
  }
  if($lang.data.type === 'en'){  
    const select = document.querySelector('[data-type="dropdown"]')
    const test = select.classList.toggle('open') 
    test ? icon.textContent = `arrow_drop_up` : icon.textContent = `arrow_drop_down`    
  }
}
}
