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
    } else {
      this.$elDom.outerHTML = html
    }
    return this
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

  clear() {
    this.html('')
    return this
  }

  on(type, method) {
    this.$elDom.addEventListener(type, method)
  }

  off(type, method) {
    this.$elDom.removeEventListener(type, method)
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


