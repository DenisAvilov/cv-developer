class Dom {
  constructor(selectorOrNode) {
    // #app
    this.$elDom = typeof selectorOrNode === 'string'
    ? document.querySelector(selectorOrNode)
    // event.target
    : selectorOrNode
  }

  html(html) {
    if (typeof html === 'string') {
      this.$elDom.innerHTML = html
      return this
    }
    return this.$elDom.outerHTML.trim()
  }
  get data() {
    return this.$elDom.dataset
  }

  text(text) {
    if (typeof text === 'string') {
      this.$elDom.innerHTML = text
      return this
    } return this.$elDom.innerHTML.trim()
  }

  closest(element) {
    return $(this.$elDom.closest(element))
  }
  append(node) {
    if (node instanceof Dom) {
      node = node.$elDom
    } if (Element.prototype.append) {
      this.$elDom.append(node)
    } else {
      this.$elDom.appendChild(node)
    }
    return this
  }

  classContains(elem) {
    return this.$elDom.classList.contains(elem)
  }

  classAdd(elem) {
    return this.$elDom.classList.add(elem)
  }

  classRemove(elem) {
    return this.$elDom.classList.remove(elem)
  }


  clear() {
    this.html('')
    return this
  }

  off(type, method) {
    this.$elDom.removeEventListener(type, method)
  }

  on(type, method) {
    this.$elDom.addEventListener(type, method)
  }

  getCoords() {
    return $(this.$elDom.getBoundingClientRect())
  }

  getAttribute(attributeName) {
    return $(this.$elDom.getAttribute(attributeName))
  }

  querySelector(selector) {
    return $(this.$elDom.querySelector(selector))
  }
}


export const $ = (selectorOrNode) => {
  return new Dom(selectorOrNode)
}

$.createElementAndClassName = (element, className = '') => {
  const root = document.createElement(element)
  if (className) {
    root.classList.add(className)
  }
  return $(root)
}


