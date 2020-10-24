"use strict"

// Simplify class selection process
function selectClass(className) {
  return document.querySelector(className);
}

// Console log function 
function feedback(element) {
  return console.log(element);
}

const hint = selectClass(".js-hint");
// hint.setAttribute("autocomplete","off"); // des not work, hence the HTML parameter
const numberElement = selectClass(".js-num-field");
const button = selectClass(".js-button");
const counter = selectClass(".js-counter");
const reset = selectClass(".js-reset");
const form = selectClass(".js-form");

// Random number
function numRandomizer () {
  let numResult = Math.ceil(Math.random() * 100);
  return numResult;
}

let randomNum = numRandomizer();
feedback(`Mi número aleatorio es ${randomNum}`);

// Hint integer parser
function parseNumber(element) {
  return parseInt(element);
};

// .innerHTML populator
function populateDiv(variable, content) {
  variable.innerHTML = content;
}

// Number guesser
function guessNumber(event) {
  const value = numberElement.value;
  const number = parseNumber(value);

  if (value.length === 0) {
      populateDiv(hint, "El vacío es existencial y no numérico");
  } else if (isNaN(number) === true) {
      populateDiv(hint, `"${value}" no es un número 🤦🏻‍♀️`);
  } else if (number < 1 || number > 100) {
      populateDiv(hint, "El número debe estar entre 1️⃣ y 1️⃣0️⃣0️⃣");
  } else if (randomNum > number) {
      populateDiv(hint, "Demasiado bajo  🤏🏻");
	} else if (randomNum < number) {
		populateDiv(hint, "Demasiado alto  ☝🏻");
	} else if (randomNum === number) {
		populateDiv(hint, "Has ganado campeona!!! 👏🏻");
	}
}

// Click counter
let count = 0;
function countClicks() {
  count++ ;
  populateDiv(counter, `Número de intentos: ${count}`);
};

// General event function
function onClick() {
  guessNumber();
  countClicks();
}

button.addEventListener("click", onClick);

// Enter triggers click event 
numberElement.addEventListener("keydown", function (event) {
  if (event.code === "Enter") {
    event.preventDefault();
    event.stopPropagation(); // Explicar
    button.click();
  }
});

// Reset button
reset.addEventListener("click", function () {
  randomNum = numRandomizer();
  feedback(`Mi número aleatorio es ${randomNum}`);
  count = 0;
  populateDiv(counter, `Número de intentos: ${count}`);
});

