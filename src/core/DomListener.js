import {upperFirstLiteral} from './untills'

export class DomListener {
  constructor($root, listeners = [], name) {
    if (!$root) {
      throw new Error(`No $root provided for DomListener!`)
    }
    this.$root = $root
    this.listeners = listeners
    this.name = name
  }
  initDOMListeners() {
    this.listeners.forEach(element => {
      const method = getMethod(element)
      if (!this[method]) {
        throw new Error(`Add this ${method}(){} method
        in ${this.name} Component`)
      }
      // method это новая функция и он свегда
      // будит забайдена на свой собственый контекст,
      this[method] = this[method].bind(this)
      this.$root.on(element, this[method])
    });
  }

  remuveDomListeners() {
    this.listeners.forEach(element => {
      const method = getMethod(element)
      // передаем функцию this[method] созданую выше
      this.$root.off(element, this[method])
    })
  }
}

const getMethod = (listener) => {
  return listener = 'on' + upperFirstLiteral(listener)
}

