document.getElementById("input-equation").value

let lastOperator = undefined;
let buffer = "";
let operand1 = undefined;


function insert(element) {

    var lastSymbol = document.getElementById("input-equation").value.toString().slice(-1);
    let operatorsArr = ["/", "*", "+", "-", "^"];

    // Save first operand if its empty
    if (operatorsArr.includes(element) && buffer != "" && operand1 == undefined) {
        operand1 = parseFloat(buffer);
        buffer = "";
    }

    // return if string is empty
    if (operand1 == undefined && operatorsArr.includes(element)) {
        return
    }

    // if operator is inserted update lastOperator
    if (operatorsArr.includes(element)) {

        //if operand1 and operator exist
        if (operand1 != undefined && lastOperator != undefined && buffer != "") {
            calculateFunction();
        }

        // if operator already inserted delete last operator
        if (operatorsArr.includes(lastSymbol)) {
            deleteData();
        }
        document.getElementById("input-equation").value += element
        lastOperator = element;

    } else {
        document.getElementById("input-equation").value += element;
        buffer += element;
    }

}

function calculateFunction() {
    operand1 = calculate(operand1, parseFloat(buffer), lastOperator);
    buffer = "";
    document.getElementById("input-equation").value = operand1;
}

function calculate(firstOperand, secondOperand, operator) {

    switch (operator) {
        case "+":
            return firstOperand + secondOperand;
            break;
        case "-":
            return firstOperand - secondOperand;
            break;
        case "*":
            return firstOperand * secondOperand;
            break;
        case "/":
            return firstOperand / secondOperand;
            break;
        case "^":
            return Math.pow(firstOperand, secondOperand);
            break;
        default:
            return secondOperand;
    }
}

function clearData() {
    document.getElementById("input-equation").value = "";
    lastOperator = undefined;
    buffer = "";
    operand1 = undefined;
}

function deleteData() {
    document.getElementById("input-equation").value = document.getElementById("input-equation").value.toString().slice(0, -1);
    lastOperator = undefined;
}

function mathSqrt() {
    const squareRoot = Math.sqrt(parseFloat(document.getElementById("input-equation").value));
    document.getElementById("input-equation").value = isNaN(squareRoot) ? "Error" : squareRoot;
}

function negative() {
    if (!isNaN(document.getElementById("input-equation").value)) {
        if (document.getElementById("input-equation").value == undefined) {
            return
        }
        else {
            document.getElementById("input-equation").value = -document.getElementById("input-equation").value;
            buffer = -buffer;
        }
    } else return
}