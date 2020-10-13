"use strict"

const number = document.querySelector(".js-num-field");
const hint = document.querySelector(".js-hint");
hint.readOnly = true; 
const button = document.querySelector(".js-button");
const counter = document.querySelector(".js-counter");
counter.readOnly = true; 

let randomNum = Math.ceil(Math.random() * 100);
  console.log(`Mi número aleatorio es ${randomNum}`);

function guessNumber (event) {
  if (number.value < 1 || number.value > 100) {
    hint.value = "El número debe estar entre 1 y 100";
  } else if (randomNum > number.value) {
    hint.value = "Demasiado bajo";
  } else if (randomNum < number.value) {
    hint.value = "Demasiado alto";
  } else {
    hint.value = "Has ganado campeona!!!";
  }
}

button.addEventListener("click", guessNumber);

let count = 0;
function countClicks() {
  count += 1;
  counter.value = `Número de intentos: ${count}`;
};

button.addEventListener("click", countClicks);