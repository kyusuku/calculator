function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function multiply(a, b) {
    return a / b;
}

function operate(leftOperand, rightOperand, operator) {
    switch (operator) {
        case "+": 
            return add(leftOperand, rightOperand);
            break;
        case "-":
            return subtract(leftOperand, rightOperand);
            break;
        case "*":
            return multiply(leftOperand, rightOperand);
            break;
        case "/":
            return divide(leftOperand, rightOperand);
    }
}

let leftOperand;
let rightOperand;
let operator;

