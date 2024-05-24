


// document.addEventListener('keydown', appendToDisplay);

const display = document.getElementById("display");
const keys = document.getElementById("keys");

// 

// Event listener for keyboard inputs
document.addEventListener("keydown", function (event) {
  const key = event.key;
  handleInput(key);
});

function handleInput(input) {
  if ((input >= "0" && input <= "9") || input === ".") {
    appendToDisplay(input);
  } else if (input === "/" || input === "*" || input === "-" || input === "+") {
    appendToDisplay(` ${input} `);
  } else if (input === "Enter" || input === "=") {
    calculate();
  } else if (input === "Backspace") {
    backspace();
  } else if (input.toLowerCase() === "c") {
    clearDisplay();
  }
}

function appendToDisplay(input) {
  display.value += input;
}

function clearDisplay() {
  display.value = "";
}

function backspace() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}
