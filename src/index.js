// WEB COMPONENTS
import './components/appHeader/appHeader'
import './components/sideBar/sideBar'

// SAMPLES
import appHeaderSample from './components/appHeader/appHeaderSample'
// add header
let el = document.querySelector('#app-header')
appHeaderSample.addSample(el)

function addWebComponent(parent, elementId) {
  if (parent && elementId) {
    // add sidebar
    let el = document.createElement(elementId)
    parent.appendChild(el)
  }
}

const parent = document.getElementById('app-main')

//addWebComponent(parent, 'app-sidebar')
