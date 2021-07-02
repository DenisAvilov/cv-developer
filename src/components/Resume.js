import {Emitter} from '../core/Emitter'
import {$} from './../core/dom'
export class Resume {
  constructor(selector, options, store) {
    this.$selector = $(selector)
    this.$components = options.component || []
    this.emitter = new Emitter()
    this.store = store
    window.resume = this.store
  }

  getRoot() {
    const root = $.createElementAndClassName('div', 'cv')
    const options = {
      store: this.store,
      emitter: this.emitter
    }
    this.$components = this.$components.map( Component => {
      const el = $.createElementAndClassName('section', Component.className)
      const instance = new Component(el, options)
      el.html(instance.toHtml())
      root.append(el)
      return instance
    });
    return root
  }

  render() {
    this.$selector.append(this.getRoot())
    this.$components.forEach(element => element.init());
    window.$ = this.$components
  }
}


