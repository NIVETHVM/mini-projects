const buttons = document.querySelectorAll(".show");
const screen = document.getElementById("screen");
const clearButton = document.querySelector(".AC");
const backspace = document.querySelector(".back");
const calc = document.querySelector(".equal");
let expression = '';

buttons.forEach(button => {
  button.addEventListener("click", () => {
    expression += button.textContent; // Add button's value to expression
    screen.textContent = expression;  // Show expression on screen
  });
});
clearButton.addEventListener("click", () => {
    expression = '';               // Reset the stored expression
    screen.textContent = expression;       // Clear the screen
});
backspace.addEventListener("click", () => {
    expression = expression.slice(0,-1);
    screen.textContent = expression;
});  
calc.addEventListener("click", () => {
    expression = expression.replace(/x/g, '*');
    let answer = eval(expression);
    screen.textContent = answer;
});