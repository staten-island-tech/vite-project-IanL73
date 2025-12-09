import './style.css'
import { setupCounter } from './counter.js'
import gallery from './array.json'

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
let randomArt = getRandomInt(gallery.length)
document.querySelector(".art-of-day").insertAdjacentHTML(
  "beforeend",
  `
  <h4 class="art-of-day-title">${gallery[randomArt].title}</h4>
  <img class="art-of-day-image" src="${gallery[randomArt].image}"/>
  `
)

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


function inject(piece){
    //query the html where we inject the card
    const container = document.querySelector(".main");
    container.insertAdjacentHTML(
        "beforeend",
        `<div class="item" data-title="${piece.title}" arbitrary-number=${piece.price}>
            <h4 class="item-title">${piece.title}</h4>
            <img class="item-image" src="${piece.image}"/>
        </div>`
    );
}

document.querySelectorAll(".item").forEach((item)=>item.addEventListener("click", function () {
  document.querySelector(".blurb-container").innerHTML = ""
  console.log(gallery)
  let title = event.target.closest(".item").getAttribute("data-title")
  let selecteditem = gallery.find((item)=>item.title === title)
  document.querySelector(".blurb-container").insertAdjacentHTML(
    "afterbegin",
    `
    <h4 class="blurb-author">Artist: ${selecteditem.artist}</h4>
    <h4 class="blurb-text">${selecteditem.desc}</h4>
    <img class="blurb-image" src="${selecteditem.image}"/>
    `
  )
  document.querySelector(".blurb").showModal();
}))
document.querySelector(".close").addEventListener("click", () => {
  document.querySelector(".blurb").close("animalNotChosen");
});
document.querySelector(".submit").addEventListener("click", function () {
  gallery.push({"title": document.querySelector(".Title-box").value, "image": document.querySelector(".Url-box")});
  console.log("gallery")
})
gallery.forEach((piece) => inject(piece))



/*
   _________    _______
 /          \ /        \
|         () \       () \
|            |          |
 \__________/__________/
   _______________________\ 
 /___|___|____|___|___|__|
|                  /
\__________________\_____                     
 \__|_____|____|___|____|
                       /
 */