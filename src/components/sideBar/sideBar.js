/**
 * Sidebar custom web component
 */

import htmlTemplate from './sideBarHtml'

class AppSidebar extends HTMLElement {
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
    console.log('SideBar...attached')
  }
  _render() {}
}

customElements.define('app-sidebar', AppSidebar)
