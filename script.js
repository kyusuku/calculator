function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return b === 0 ? "nice try" : a / b;
}

function operate(leftOperand, rightOperand, operator) {
    switch (operator) {
        case "+": 
            return add(leftOperand, rightOperand);
        case "-":
            return subtract(leftOperand, rightOperand);
        case "*":
            return multiply(leftOperand, rightOperand);
        case "/":
            return divide(leftOperand, rightOperand);
    }
}

function updateDisplay() {
    if (displayNumber.includes('.')) {
        if (displayNumber.includes('e-')) {
            displayNumber = Number(displayNumber).toFixed(displayNumber.toString().split('-')[1]);
        }
        display.textContent = displayNumber.slice(0, 13);
    } else if (displayNumber.length > 13) {
        display.textContent = Number(displayNumber).toExponential(2);
    } else {
        display.textContent = displayNumber;
    }
}

let leftOperand = '';
let rightOperand = '';
let operator = '';
let displayNumber = '';
let operated = false;

const digits = document.querySelectorAll('.digit');
const operators = document.querySelectorAll('.operators');
const display = document.querySelector('.display');
const clear = document.querySelector('.clear');
const negate = document.querySelector('.negate');
const percent = document.querySelector('.percent');
const dot = document.querySelector('.dot');
const equal = document.querySelector('.equal');

clear.addEventListener('click', () => {
    leftOperand = '';
    rightOperand = '';
    operator = '';
    displayNumber = '';
    operated = false;
    updateDisplay();
});

negate.addEventListener('click', () => {
    if (displayNumber[0] === '-') {
        displayNumber = displayNumber.slice(1);
    } else if (displayNumber === '0' || !displayNumber) {
        displayNumber = displayNumber;
    } else {
        displayNumber = '-' + displayNumber;
    }
    
    updateDisplay();
});

percent.addEventListener('click', () => {
    displayNumber = (Number(displayNumber) / 100).toString();
    updateDisplay();
});

dot.addEventListener('click', () => {
    if (!displayNumber.includes('.')) {
        displayNumber = displayNumber === '' ? '0.' : displayNumber + '.';
    }
    updateDisplay();
});

digits.forEach(digit => {
    digit.addEventListener('click', (event) => { 
        const digitValue = event.target.dataset.value;

        if (leftOperand && operator === '') {
            displayNumber = '';
            displayNumber += digitValue;
            leftOperand = '';
        } else if (operated) {
            displayNumber = '';
            displayNumber += digitValue;
            operated = false;
        }
        else if (displayNumber[0] === '0' && displayNumber.length === 1) {
            if (digitValue !== '0') {
                displayNumber = digitValue;
            }
        } else {
            displayNumber += digitValue;
        }

        updateDisplay();
    });
});

operators.forEach(op => {
    op.addEventListener('click', (e) => {
        if (leftOperand === '') {
            leftOperand = displayNumber;
            operator = e.target.dataset.value;
            operated = true;
        } else if (operated || (leftOperand && !operator)) {
            operator = e.target.dataset.value;
            operated = true;
        } else if (leftOperand && operator && !operated) {
            rightOperand = displayNumber;
            let result = operate(Number(leftOperand), Number(rightOperand), operator);
            displayNumber = result.toString();
            updateDisplay();
            leftOperand = displayNumber;
            operator = e.target.dataset.value;
            operated = true;
            rightOperand = '';
        }
    });
});

equal.addEventListener('click', () => {
    if (!operator) {
        return;
    }

    if (leftOperand && operator && !operated) {
        rightOperand = displayNumber;
        let result = operate(Number(leftOperand), Number(rightOperand), operator);
        displayNumber = result.toString();
        updateDisplay();
        leftOperand = displayNumber;
        operator = '';
        rightOperand = '';
    }
});
