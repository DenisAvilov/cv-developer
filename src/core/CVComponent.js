import {DomListener} from './DomListener';

export class CVComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners)
  }

  // Возвращает шаблон компонента
  toHtml() {
    return ''
  }
  // Назначаем слушателей для каждого компонента
  init() {
    this.initDOMListeners()
  }
}
