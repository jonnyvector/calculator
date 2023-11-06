let numberA = 0;
let numberB = 0;
let operator = "";

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

console.log(operate(10, 12, "+"));
