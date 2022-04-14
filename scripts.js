const add = function (a, b) {
  let result = parseInt(a) + parseInt(b);
  console.log("add fucntion ran");
  return result;
};

const subtract = function (a, b) {
  let subtract = a - b;
  return subtract;
};

const multiply = function (a, b) {
  let product = a * b;
  return product;
};

const divide = function (a, b) {
  let product = a / b;
  return product;
};

const operate = function (operator, a, b) {
  console.log("operate called");
  let result = operator(a, b);
  display.textContent = result;
};

let displayValue = "";
let num1 = 0;
let num2 = NaN;
let fncalled = false;
display = document.querySelector("#calculator-screen");
display.textContent = "8008135";

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

const fnButtons = document.querySelectorAll("button[data-action]");
[...fnButtons].forEach(
  (btn) =>
    (btn.onclick = function () {
      let operator = btn.getAttribute("data-action");
      console.log(operator + " key pressed");
      if (num1 == 0) {
        num1 = parseInt(displayValue);
        console.log("num 1 set to " + num1);
        displayValue = 0;
        console.log("display value reset");
        display.textContent = displayValue;
      } else {
        switch (operator) {
          case "add":
            console.log("case add");
            if (displayValue != 0 && num1 != 0) {
              return operate(add, num1, displayValue);
            }
            break;
          //   case operator == "operate" && displayValue != 0 && num1 != 0:
          //     console.log("case1");
          //     operate(operator, num1, displayValue);
          //     break;
          //   // case operator == "operate" && displayValue == "":
          //   //   console.log("case2");
          //   //   display.textContent = num1;
          //   //   break;
          //   case operator === "add" && num1 != 0 && displayValue != 0:
          //     console.log("case3");
          //     console.log(
          //       "add with num1(" +
          //         num1 +
          //         ") and display value(" +
          //         displayValue +
          //         ")"
          //     );
          //     operate(operator, num1, displayValue);
          //     break;
          //   //   case :
          //   //   break;
          default:
            console.log("default switch");
            displayValue = 0;
            console.log("display value reset");
            display.textContent = displayValue;
            break;
        }
      }
    })
);
