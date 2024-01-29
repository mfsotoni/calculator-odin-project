let num1;
let num2;

function add(num1, num2) {
  return num1 + num2;
}
console.log(add(3, 5));

function subtract(num1, num2) {
  return num1 - num2;
}
console.log(subtract(3, 2));

function multiply(num1, num2) {
  return num1 * num2;
}
console.log(multiply(2, 5));

function divide(num1, num2) {
  return num1 / num2;
}
console.log(divide(10, 5));

function operate(operation, num1, num2) {
  switch (operation) {
    case "add":
      return add(num1, num2);
    case "subtract":
      return subtract(num1, num2);
    case "multiply":
      return multiply(num1, num2);
    case "divide":
      return divide(num1, num2);
    default:
      console.log("invalid operation");
      return NaN;
  }
}
