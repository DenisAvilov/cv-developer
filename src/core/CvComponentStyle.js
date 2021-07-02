import {CVComponent} from './CVComponent';

export class CvComponentStyle extends CVComponent {
  constructor(...art) {
    super(...art)
  }

  //получить шаблон для перерисовки

  get template() {
    return JSON.stringify(this.store, null, 2)
}


  initState(initialState = {}) {
    this.store = {...initialState}
  }

  setState(newState) {    
    this.store = {...this.store, ...newState}
    this.$root.html(this.template)  
  }

  
}
