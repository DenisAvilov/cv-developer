import {$} from './../core/dom'
export class Resume {
  constructor(selector, options) {
    this.$selector = $(selector)
    this.$component = options.component || []
  }

  getRoot() {
    // create root node
    const root = $.create('div', 'cv')
    this.component = this.$component.map( Component => {
      // Использую статический метод класса
      const rootClassName = $.create('section', Component.className)
      // Получаю инстанс
      const component = new Component(this.$component)
      // отрисовую HTML
      root.append(rootClassName.html(component.toHtml()))
      return component
    });

    return root
  }

  render() {
    this.$selector.append(this.getRoot())
    this.component.forEach(element => element.init());
  }
}

