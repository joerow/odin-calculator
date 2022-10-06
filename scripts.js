let toEval = [null, null, null];
let displayValue = 0;
let num1 = 0;
let currentOperand = null;
let result = null;
let ans = null;
let equalspressed = false;

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
  if (parseInt(b) === 0) {
    return "naughty";
  }
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
  result = operand(a, b).toFixed(2);
  if (equalspressed === true) {
    if (b === 0 && displayValue === 0) {
      actionDisplay.textContent = result;
      setDisplay(0);
    } else {
      actionDisplay.textContent = result;
      setDisplay(0);
      ans = result;
      toEval[0] = operand;
      toEval[1] = ans;
      toEval[2] = null;
    }
    equalspressed = false;
  } else {
    if (b === 0 && displayValue === 0) {
      actionDisplay.textContent = toEval[1] + getSymbol(operand);
      setDisplay(0);
    } else {
      actionDisplay.textContent = result + getSymbol(operand);
      setDisplay(0);
      ans = result;
      toEval[0] = operand;
      toEval[1] = ans;
      toEval[2] = null;
    }
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
  result = null;
  ans = null;
};

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

const plusButton = document.querySelector("button#fn-plus");
plusButton.onclick = function () {
  if (toEval[0] != add && toEval[0] != null) {
    operate(toEval[0], toEval[1], displayValue);
    toEval[0] = add;
  } else {
    toEval[0] = add;
  }
  if (toEval[1] == null && ans == null) {
    toEval[1] = displayValue;
    actionDisplay.textContent = toEval[1] + " + ";
    setDisplay(0);
  }
  toEval[2] = displayValue;
  operate(...toEval);
};

const minusButton = document.querySelector("button#fn-minus");
minusButton.onclick = function () {
  if (toEval[0] != subtract && toEval[0] != null) {
    operate(toEval[0], toEval[1], displayValue);
    toEval[0] = subtract;
  } else {
    toEval[0] = subtract;
  }
  if (toEval[1] == null && ans == null) {
    toEval[1] = displayValue;
    actionDisplay.textContent = toEval[1] + " - ";
    setDisplay(0);
  }
  toEval[2] = displayValue;
  operate(...toEval);
};

const multiplyButton = document.querySelector("button#fn-multiply");
multiplyButton.onclick = function () {
  if (toEval[0] != multiply && toEval[0] != null) {
    operate(toEval[0], toEval[1], displayValue);
    toEval[0] = multiply;
  } else {
    toEval[0] = multiply;
  }
  if (toEval[1] == null && ans == null) {
    toEval[1] = displayValue;
    actionDisplay.textContent = toEval[1] + " x ";
    setDisplay(0);
  }
  toEval[2] = displayValue;
  operate(...toEval);
};

const divideButton = document.querySelector("button#fn-divide");
divideButton.onclick = function () {
  if (toEval[0] != divide && toEval[0] != null) {
    operate(toEval[0], toEval[1], displayValue);
    toEval[0] = divide;
  } else {
    toEval[0] = divide;
  }
  if (toEval[1] == null && ans == null) {
    toEval[1] = displayValue;
    actionDisplay.textContent = toEval[1] + " / ";
    setDisplay(0);
  }
  toEval[2] = displayValue;
  operate(...toEval);
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
  equalspressed = true;
  if ((toEval[0] != null) & (toEval[1] != null)) {
    toEval[2] = displayValue;
    operate(...toEval);
  } else {
    toEval[1] = displayValue;
    actionDisplay.textContent = toEval[1];
    setDisplay(0);
  }
};

const resetButton = document.querySelector("button#fn-reset");
resetButton.onclick = function () {
  reset();
};
