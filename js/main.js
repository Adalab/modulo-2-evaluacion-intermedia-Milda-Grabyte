"use strict"

// Simplify class selection process
// function selectClass(className) {
//   return document.querySelector(`".${className}"`);
// }

const number = document.querySelector(".js-num-field");
console.log(number);
const hint = document.querySelector(".js-hint");
const button = document.querySelector(".js-button");
const counter = document.querySelector(".js-counter");

// Random number
let randomNum = Math.ceil(Math.random() * 100);
  console.log(`Mi número aleatorio es ${randomNum}`);

// Number guesser
function guessNumber (event) {
  if (number.value < 1 || number.value > 100) {
    hint.innerHTML = "El número debe estar entre 1 y 100";
  } else if (randomNum > number.value) {
    hint.innerHTML = "Demasiado bajo";
  } else if (randomNum < number.value) {
    hint.innerHTML = "Demasiado alto";
  } else {
    hint.innerHTML = "Has ganado campeona!!!";
  }
}

// Click counter
let count = 0;
function countClicks() {
  count += 1;
  counter.innerHTML = `Número de intentos: ${count}`;
};

// General event function
function onClick() {
  guessNumber();
  countClicks();
}

button.addEventListener("click", onClick);