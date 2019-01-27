// image
import logo from '../../img/dv4shapes64.svg'
// HTML markup sample
const html = `
  <!--<app-header>-->
  <img class="app-logo" src="${logo}" />
  <div class="app-title">This is my title</div>
  <!--</app-header>-->
`
/**
 * AppHeader component sample html
 * @param {object} el DOM element to append to
 */
export class appHeaderSample {
  constructor() {
    // debugger
    // console.log('I am')
  }
  addSample(parent) {
    //debugger
    //add sample html to element
    let el = document.createElement('app-header')
    el.innerHTML = html
    this.el = el
    parent.appendChild(el)
  }
  removeSample(parent) {
    debugger
    parent.removeChild(this.el)
  }
}

export default appHeaderSample
