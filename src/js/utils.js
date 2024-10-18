'use strict'

window.utils = {
  BREAKPOINT_MOBILE: '(max-width: 767px)',
  BREAKPOINT_TABLET: '(max-width: 1023px)',

  /**
   * add/remove css class of button
   * @param {HTMLButtonElement} btn
   * @param {String} toggleClassName
   */
  toggleCssClass(btn, toggleClassName) {
    if (!btn) {
      throw new Error('toggleCssClass: button not passed to parameters')
    }

    if (typeof toggleClassName !== 'string') {
      throw new Error(
        'toggleCssClass: toggleClassName is not passed or is not a string'
      )
    }

    btn.classList.toggle(toggleClassName)
    btn.blur()
  },

  /**
   * add/remove css class of specified elements
   * @param {HTMLButtonElement} btn
   * @param {String} nodeClassName
   * @param {String} toggleClassName
   */
  toggleCssClassNodes(btn, nodeClassName, toggleClassName) {
    if (!btn) {
      throw new Error('toggleCssClassNodes: button not passed to parameters')
    }

    if (
      typeof nodeClassName !== 'string' ||
      typeof toggleClassName !== 'string'
    ) {
      throw new Error(
        `toggleCssClassNodes: nodeClassName or toggleClassName are not passed or is not a string`
      )
    }

    const nodes = document.querySelectorAll(`.${nodeClassName}`)

    if (nodes.length === 0) {
      throw new Error(
        `toggleCssClassNodes: nodes with class ${nodeClassName} do not exist`
      )
    }

    nodes.forEach((node) => node.classList.toggle(toggleClassName))
    btn.blur()
  },

  /**
   * add/remove attribute hidden for nodes with className
   * @param {HTMLButtonElement} btn
   * @param {String} nodeClassName
   */
  toggleVisibleNodes(btn, nodeClassName) {
    if (!btn) {
      throw new Error('toggleVisibleNodes: button not passed to parameters')
    }

    if (typeof nodeClassName !== 'string') {
      throw new Error(
        'toggleVisibleNodes: nodeClassName is not passed or is not a string'
      )
    }

    const nodes = document.querySelectorAll(`.${nodeClassName}`)

    if (nodes.length === 0) {
      throw new Error(
        `toggleVisibleNodes: nodes with class ${nodeClassName} do not exist`
      )
    }

    nodes.forEach((node) => {
      if (node.hasAttribute('hidden')) {
        node.removeAttribute('hidden')
      } else {
        node.setAttribute('hidden', 'hidden')
      }
    })
    btn.blur()
  }
}
