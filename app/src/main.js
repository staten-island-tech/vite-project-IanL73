import './style.css'
import { setupCounter } from './counter.js'


// Doing digital art gallery
//create array of entries
//function to insert filtered entries
//program entries to show popup when clicked
//make input fields for new image and accompanying description
//highlighted entry of the day that changes on the minute for testing purposes
//light mode dark mode

document.querySelector('#app').innerHTML = `
  <button class="button">click this button to do... something i guess</button>
`

setupCounter(document.querySelector('#counter'))
