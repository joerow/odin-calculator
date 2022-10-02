function add(a, b) {
  return parseInt(a) + parseInt(b);
}

const subtract = function (a, b) {
  return a - b;
};

const multiply = function (a, b) {
  return a * b;
};

const divide = function (a, b) {
  return a / b;
};

const operate = function (operand, a, b) {
  console.log(operand);
  return operand(a, b);
};

const reset = function () {
  displayValue = 0;
  actionDisplay.textContent = "";
  display.textContent = displayValue;
};

const toEval = [];

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
        console.log("display value === 0");
        displayValue = btn.getAttribute("data-key");
        display.textContent = displayValue;
        console.log("displayValue set to " + displayValue);
      } else {
        console.log("display value !=== 0");
        console.log(btn.getAttribute("data-key"));
        displayValue += btn.getAttribute("data-key");
        display.textContent = displayValue;
        console.log("displayValue set to " + displayValue);
      }
    })
);

const minusButton = document.querySelector("button#fn-minus");

const plusButton = document.querySelector("button#fn-plus");
plusButton.onclick = function () {
  console.log("plus button pressed");
  num1 = displayValue;
  console.log("num1 is " + num1);
  toEval.push(add);
  toEval.push(num1);
  console.log(toEval);
  actionDisplay.textContent = num1 + " + ";
  displayValue = 0;
  display.textContent = displayValue;
};

const multiplyButton = document.querySelector("button#fn-multiply");

const divideButton = document.querySelector("button#fn-divide");

const resetButton = document.querySelector("button#fn-reset");

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
  console.log("delete button pressed");
  displayValueString = displayValue.toString();
  if (displayValueString.length === 1 || displayValueString === "NaN") {
    displayValue = 0;
  } else {
    displayValue = parseInt(displayValueString.slice(0, -1));
  }
  console.log("displayValue set to " + displayValue);
  display.textContent = displayValue;
};

const equalsButton = document.querySelector("button#fn-equals");
equalsButton.onclick = function () {
  console.log("equals button pressed");
  console.log(toEval[0]);
  result = operate(toEval[0], toEval[1], displayValue);
  displayValue = result;
  display.textContent = displayValue;
};
