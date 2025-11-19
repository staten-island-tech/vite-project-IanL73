import './style.css'
import { setupCounter } from './counter.js'


document.querySelector(".btn").addEventListener("click", function () {
  if (document.body.classList.contains("cool")) {
    document.body.classList.add("warm");
    document.body.classList.remove("cool");
  } else {
    document.body.classList.add("cool");
    document.body.classList.remove("warm");
  }
});





/*
 _________   _______
|          \|         \
|           \          \
|           O|         O|
 \__________/__________/
   _______________________\ 
 /___|___|____|___|____|__|
|                  /
|__________________\_____                     
 \__|_____|____|___|____|
 */