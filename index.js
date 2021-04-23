'use strict';
console.log ("funguji!");

let currentSign="circleHraje";
const kdoHrajeElm=document.querySelector("#hrac");

const currentPlayer = (event) => {
if(currentSign==="circleHraje") {
event.target.classList.add("kolecko");
event.target.disabled = true;
kdoHrajeElm.src = "images/cross.svg";
kdoHrajeElm.alt = "obrazek krize";
currentSign = "krizek";
} else {
event.target.classList.add("krizek");
event.target.disabled = true;
kdoHrajeElm.src="images/circle.svg";
kdoHrajeElm.alt = "obrazek kolecka";
currentSign = "circleHraje";
}
};


const buttonsElm = document.querySelectorAll(".buttonTlacitko");
for (let i = 0; i < buttonsElm.length; i++) {
  buttonsElm[i].addEventListener('click', currentPlayer);
}

