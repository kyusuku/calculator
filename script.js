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

const digits = document.querySelectorAll('.digit');
const display = document.querySelector('.display');

digits.forEach(digit => {
    digit.addEventListener('click', (event) => { 
        const digitValue = event.target.dataset.value;

        if (displayNumber[0] === '0') {
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

let leftOperand = '';
let rightOperand = '';
let operator = '';
let displayNumber = '0';
let start = false;

