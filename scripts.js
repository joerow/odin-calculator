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
  displayValue = result;
  display.textContent = displayValue;
};

const setDisplay = function (a) {
  displayValue = a;
  display.textContent = a;
};

const reset = function () {
  displayValue = 0;
  actionDisplay.textContent = "";
  display.textContent = displayValue;
  toEval = [];
};

let toEval = [];

let displayValue = 0;
let num1 = 0;
let fncalled = false;
display = document.querySelector("#calculator-screen");
display.textContent = "0";

let actionDisplay = document.querySelector("#calculator-fnscreen");
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
  if (toEval.length === 2) {
    operate(toEval[0], toEval[1], displayValue);
    actionDisplay.textContent = toEval[1] + " + ";
    displayValue = 0;
    display.textContent = displayValue;
  } else {
    toEval[0] = add;
    toEval[1] = displayValue;
    actionDisplay.textContent = toEval[1] + " + ";
    displayValue = 0;
    display.textContent = displayValue;
  }
};

const multiplyButton = document.querySelector("button#fn-multiply");

const divideButton = document.querySelector("button#fn-divide");

const resetButton = document.querySelector("button#fn-reset");
resetButton.onclick = function () {
  reset();
};

// const mathButtons = document.querySelectorAll("button.mathfn-button");
// [...mathButtons].forEach(
//   (btn) =>
//     (btn.onclick = function () {
//       if (actionDisplay == "") {
//       }
//     })
// );

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
equalsButton.onclick = function () {
  result = operate(toEval[0], toEval[1], displayValue);
  actionDisplay.textContent += displayValue;
  toEval = [];
};
