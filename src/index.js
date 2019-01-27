// WEB COMPONENTS
import './components/appHeader/appHeader'

// SAMPLES
import { appHeaderSample } from './components/appHeader/appHeaderSample'

const parent = document.getElementById('main')

if (parent) {
  let sample = new appHeaderSample()
  sample.addSample(parent)
}
