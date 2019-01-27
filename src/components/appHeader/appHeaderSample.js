// image
import logo from '../../img/dv4shapes64.svg'
import { isNullOrUndefined } from 'util'
// HTML markup sample
const html = `
  <!--<app-header>-->
  <img class="app-logo" src="${logo}" />
  <div class="app-title">This is my title</div>
  <!--</app-header>-->
`

// holds current element
let el = null
export const appHeaderSample = {
  /**
   * Add sample markup
   * @param {object} parent element
   */
  addSample(parent) {
    //debugger
    //add sample html to element
    el = document.createElement('app-header')
    el.innerHTML = html
    parent.appendChild(el)
  },
  /**
   * Remove sample element
   * @param {*} parent
   */
  removeSample(parent) {
    debugger
    parent.removeChild(el)
  }
}

export default appHeaderSample
