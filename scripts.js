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

const getSymbol = function (operand) {
  let symbol = "";
  switch (operand) {
    case add:
      symbol = " + ";
      break;
    case subtract:
      symbol = " - ";
      break;
    case multiply:
      symbol = " x ";
      break;
    case divide:
      symbol = " / ";
      break;
    default:
      symbol = " no symbol ";
  }
  return symbol;
};

const operate = function (operand, a, b) {
  result = operand(a, b);
  if (b === 0 && displayValue === 0) {
    actionDisplay.textContent = toEval[1] + getSymbol(operand);
    console.log("thisone");
    setDisplay(0);
  } else {
    actionDisplay.textContent =
      toEval[1] + getSymbol(operand) + toEval[2] + " = " + result;
    console.log("that one");
    setDisplay(result);
    toEval[0] = null;
    toEval[1] = result;
    toEval[2] = null;
  }
};

const setDisplay = function (a) {
  displayValue = a;
  display.textContent = a;
};

const reset = function () {
  setDisplay(0);
  actionDisplay.textContent = "type something";
  toEval = [];
  currentOperand = null;
};

let toEval = [null, null, null];
let displayValue = 0;
let num1 = 0;
let currentOperand = null;
let result = null;

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
minusButton.onclick = function () {
  if (toEval[0] != null) {
    if (toEval[1] == null) {
      toEval[1] = displayValue;
      console.log(toEval[1]);
      actionDisplay.textContent = toEval[1] + " - ";
      setDisplay(0);
    }
    if (toEval[1] != null) {
      toEval[2] = displayValue;
      operate(...toEval);
      setDisplay(0);
    }
  } else {
    toEval[0] = subtract;
    if (toEval[1] == null) {
      toEval[1] = displayValue;
      console.log(toEval[1]);
      actionDisplay.textContent = toEval[1] + " - ";
      setDisplay(0);
    }
    if (toEval[1] != null) {
      toEval[2] = displayValue;
      operate(...toEval);
      setDisplay(0);
    }
  }
};

const plusButton = document.querySelector("button#fn-plus");
plusButton.onclick = function () {
  if (toEval[0] != null) {
    if (toEval[1] == null) {
      toEval[1] = displayValue;
      console.log(toEval[1]);
      actionDisplay.textContent = toEval[1] + " + ";
      setDisplay(0);
    }
    if (toEval[1] != null) {
      toEval[2] = displayValue;
      operate(...toEval);
      setDisplay(0);
    }
  } else {
    toEval[0] = add;
    if (toEval[1] == null) {
      toEval[1] = displayValue;
      console.log(toEval[1]);
      actionDisplay.textContent = toEval[1] + " + ";
      setDisplay(0);
    }
    if (toEval[1] != null) {
      toEval[2] = displayValue;
      operate(...toEval);
      setDisplay(0);
    }
  }
};

const multiplyButton = document.querySelector("button#fn-multiply");
multiplyButton.onclick = function () {
  toEval[0] = multiply;
  if (toEval[1] == null) {
    toEval[1] = displayValue;
    console.log(toEval[1]);
    actionDisplay.textContent = toEval[1] + " x ";
    setDisplay(0);
  }
  if (toEval[1] != null) {
    toEval[2] = displayValue;
    operate(...toEval);
    setDisplay(0);
  }
};

const divideButton = document.querySelector("button#fn-divide");
divideButton.onclick = function () {
  toEval[0] = divide;
  if (toEval[1] == null) {
    toEval[1] = displayValue;
    console.log(toEval[1]);
    actionDisplay.textContent = toEval[1] + " / ";
    setDisplay(0);
  }
  if (toEval[1] != null) {
    toEval[2] = displayValue;
    operate(...toEval);
    setDisplay(0);
  }
};

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
equalsButton.onclick = function () {
  toEval[2] = displayValue;
  operate(...toEval);
};
