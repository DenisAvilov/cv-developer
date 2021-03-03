import {$} from './../core/dom'
export class Resume {
  constructor(selector, options) {
    this.$selector = $(selector)
    this.$components = options.component || []
  }

  getRoot() {
    // create root node
    const root = $.createElementAndClassName('div', 'cv')

    this.$components = this.$components.map( Component => {
      const el = $.createElementAndClassName('section', Component.className)
      const instance = new Component(el)
      if ( instance.name) {
        window['c' + instance.name] = instance
      }
      el.html(instance.toHtml())
      root.append(el)
      return instance
    });

    // Подготовка структуры для событий
    return root
  }

  render() {
    this.$selector.append(this.getRoot())
    this.$components.forEach(element => element.init());
    window.$ = this.$components
  }
}


