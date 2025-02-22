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
    return a / b;
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

let leftOperand = '';
let rightOperand = '';
let operator = '';
let displayNumber = '0';

const digits = document.querySelectorAll('.digit');
const operators = document.querySelectorAll('.operators');
const display = document.querySelector('.display');
const clear = document.querySelector('.clear');
const negate = document.querySelector('.negate');
const percent = document.querySelector('.percent');
const dot = document.querySelector('.dot');
const equal = document.querySelector('.equal');

clear.addEventListener('click', () => {
    displayNumber = '0';
    display.textContent = displayNumber;
    leftOperand = '';
    rightOperand = '';
    operator = '';
});

negate.addEventListener('click', () => {
    if (displayNumber[0] === '-') {
        displayNumber = displayNumber.slice(1);
    } else {
        displayNumber = '-' + displayNumber;
    }
    display.textContent = displayNumber;
});

percent.addEventListener('click', () => {
    displayNumber = displayNumber / 100;
    display.textContent = displayNumber;
});

dot.addEventListener('click', () => {
    displayNumber += '.';
    display.textContent = displayNumber;
});

digits.forEach(digit => {
    digit.addEventListener('click', (event) => { 
        const digitValue = event.target.dataset.value;

        if (displayNumber[0] === '0' && displayNumber[1] !== '.') {
            if (digitValue !== '0') {
                displayNumber = '';
                displayNumber += digitValue;
            } 
        } else {
            displayNumber += digitValue;
        }
        
        display.textContent = displayNumber;
    });
});

operators.forEach(op => {
    op.addEventListener('click', (e) => {
        leftOperand = displayNumber;
        operator = e.target.dataset.value;
        displayNumber = '0';
    });
});

equal.addEventListener('click', () => {
    rightOperand = displayNumber;
    let result = operate(Number(leftOperand), Number(rightOperand), operator)
    displayNumber = result.toString();
    display.textContent = displayNumber;
});
