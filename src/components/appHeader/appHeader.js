/**
 * App header custom web component
 */

import htmlTemplate from './appHeaderHtml'

class AppHeader extends HTMLElement {
  constructor() {
    super()
    this._init()
  }

  _init() {
    // create shadow dom
    this.attachShadow({ mode: 'open' })
    // attach template
    this._addTemplate()
  }

  _addTemplate() {
    this.shadowRoot.innerHTML = htmlTemplate
  }
  /**
   * Lifecycle method when element is attached to DOM
   */
  connectedCallback() {
    console.log('AppHeader...attached')
    this._logo = this.getAttribute('data-logo')
    this._title = this.getAttribute('data-title')
  }
  _render() {}
}

customElements.define('app-header', AppHeader)
