const add = function (a, b) {
  return parseInt(a) + parseInt(b);
};

const subtract = function (a, b) {
  return parseInt(a) - parseInt(b);
};

const multiply = function (a, b) {
  return parseInt(a) * parseInt(b);
};

const divide = function (a, b) {
  return parseInt(a) / parseInt(b);
};

const operate = function (operand, a, b) {
  result = operand(a, b);
  actionDisplay.textContent = a + " " + result;
  display.textContent = displayValue;
  toEval[1] = result;
  toEval[2] = null;
};

const setDisplay = function (a) {
  displayValue = a;
  display.textContent = displayValue;
};

const reset = function () {
  displayValue = 0;
  actionDisplay.textContent = "type something";
  display.textContent = displayValue;
  toEval = [];
  currentOperand = null;
};

let toEval = [null, null, null];
let displayValue = 0;
let num1 = 0;
let currentOperand = null;

display = document.querySelector("#calculator-screen");
display.textContent = "0";
actionDisplay = document.querySelector("#calculator-fnscreen");
actionDisplay.textContent = "type something";

const numButtons = document.querySelectorAll("button[data-key]");
[...numButtons].forEach(
  (btn) =>
    (btn.onclick = function () {
      if (displayValue === 0) {
        displayValue = btn.getAttribute("data-key");
        display.textContent = displayValue;
      } else {
        displayValue += btn.getAttribute("data-key");
        display.textContent = displayValue;
      }
    })
);

const minusButton = document.querySelector("button#fn-minus");

const plusButton = document.querySelector("button#fn-plus");
plusButton.onclick = function () {
  toEval[0] = add;
  if (toEval[1] == null) {
    toEval[1] = displayValue;
    console.log(toEval[1]);
    actionDisplay.textContent = toEval[1] + " + ";
    displayValue = 0;
    displayValue.textContent = 0;
  }
  if (toEval[1] !== null) {
    toEval[2] = displayValue;
    operate(...toEval);
    displayValue = 0;
    displayValue.textContent = 0;
  }
};

const multiplyButton = document.querySelector("button#fn-multiply");

const divideButton = document.querySelector("button#fn-divide");

const resetButton = document.querySelector("button#fn-reset");
resetButton.onclick = function () {
  reset();
};

const deleteButton = document.querySelector("button#fn-delete");
deleteButton.onclick = function () {
  displayValueString = displayValue.toString();
  if (displayValueString.length === 1 || displayValueString === "NaN") {
    displayValue = 0;
  } else {
    displayValue = parseInt(displayValueString.slice(0, -1));
  }
  display.textContent = displayValue;
};

const equalsButton = document.querySelector("button#fn-equals");
equalsButton.onclick = function () {};
