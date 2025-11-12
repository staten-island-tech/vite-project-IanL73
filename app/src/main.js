import './style.css'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <button class="button">click this button to do... something i guess</button>
`

setupCounter(document.querySelector('#counter'))
