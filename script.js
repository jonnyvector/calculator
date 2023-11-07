let numberA = 0;
let numberB = 0;
let operator = "";
let displayValue = 0;
const buttons = document.querySelectorAll(".btn");
const display = document.querySelector(".display-value");

console.log(buttons);

const operate = function (numberA, numberB, operator) {
  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      display.innerHTML += button.value;
      numberA = display.innerHTML;
      console.log(parseInt(numberA));
    });
  });

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
