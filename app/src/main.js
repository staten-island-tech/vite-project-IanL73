import './style.css'
import { setupCounter } from './counter.js'
import charlie from './array.json'


document.querySelector(".btn").addEventListener("click", function () {
  if (document.body.classList.contains("cool")) {
    document.body.classList.add("warm");
    document.body.classList.remove("cool");
  }
  else {
    document.body.classList.add("cool");
    document.body.classList.remove("warm");
  }
});


function inject(product){
    //query the html where we inject the card
    const container = document.querySelector(".main");
    container.insertAdjacentHTML(
        "beforeend",
        `<div class="item" data-title="${product.title}" price=${product.price}>
            <h4 class="item-title">${product.title}</h4>
            <img class="item-image" src="${product.image}"/>
        </div>`
    );
}
charlie.forEach((product) => inject(product))

document.querySelector(".item").addEventListener("click", function () {
  document.querySelector(".blurb").showModal();
})

/*
 _________   _________
|          \|         \
|         ()\        ()\
|            |          |
 \__________/__________/
   _______________________\ 
 /___|___|____|___|____|__|
|                  /
|__________________\_____                     
 \__|_____|____|___|____|
                       /
 */