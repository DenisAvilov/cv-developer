import {DomListener} from './DomListener';

export class CVComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners, options.name)
    this.prepare()
  }
  toHtml() {
    return ''
  }
  $emit(name, fn) {
    // return this.emitter.emit(name, fn)
  }
  $on(name, fn) {
    // debugger
    // return this.emitter.subscrube(name, fn)
  }
  prepare() { }
  init() {
    this.initDOMListeners()
  }
  remuve() {
    this.remuveDomListeners()
  }
}

