let current = '0';
let operator = '';
let previous = '';
let reset = false;

function updateDisplay() {
  document.getElementById('display').innerText = current;
}

function appendNumber(num) {
  if (current === '0' || reset) {
    current = num;
    reset = false;
  } else {
    current += num;
  }
  updateDisplay();
}

function appendOperator(op) {
  if (operator && !reset) {
    calculate();
  }
  operator = op;
  previous = current;
  reset = true;
}

function calculate() {
  if (!operator || reset) return;

  const a = parseFloat(previous);
  const b = parseFloat(current);
  let result = 0;

  switch (operator) {
    case '+': result = a + b; break;
    case '-': result = a - b; break;
    case '*': result = a * b; break;
    case '/': result = b === 0 ? 'Error' : a / b; break;
  }

  current = result.toString();
  operator = '';
  reset = true;
  updateDisplay();
}

function clearDisplay() {
  current = '0';
  previous = '';
  operator = '';
  reset = false;
  updateDisplay();
}

function toggleSign() {
  if (current !== '0') {
    current = (parseFloat(current) * -1).toString();
    updateDisplay();
  }
}

function percent() {
  current = (parseFloat(current) / 100).toString();
  updateDisplay();
}