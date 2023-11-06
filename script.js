let numberA = 0;
let numberB = 0;
let operator = "";
let displayValue = 0;
const numberButtons = document.querySelectorAll(".number-button");
const operatorButtons = document.querySelectorAll(".operator-button");
const display = document.querySelector(".display-value");

numberButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    display.innerHTML = `${button.value}`;
  });
});

const operate = function (numberA, numberB, operator) {
  if (operator === "x") {
    return numberA * numberB;
  } else if (operator === "/") {
    return numberA / numberB;
  } else if (operator === "+") {
    return numberA + numberB;
  } else if (operator === "-") {
    return numberA - numberB;
  }
};

console.log(operate(8, 12, "+"));
