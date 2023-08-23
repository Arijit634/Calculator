let displayValue = "";
let evalValue = "";
let afterCalculation = false;

function appendToDisplay(value) {
    if (afterCalculation) {
        displayValue = value;
        evalValue = value;
        afterCalculation = false;
    } else {
        displayValue += value;
        evalValue += value;
    }
    document.getElementById("display").value = displayValue;
}

function clearDisplay() {
    displayValue = "";
    evalValue = "";
    document.getElementById("display").value = displayValue;
}

function calculate() {
    try {
        displayValue = eval(evalValue);
        document.getElementById("display").value = displayValue;
        evalValue = displayValue;
        afterCalculation = true;
    } catch (error) {
        document.getElementById("display").value = "Error";
        displayValue = "";
        evalValue = "";
    }
}

function backspace() {
    if (displayValue.length > 0) {
        displayValue = displayValue.slice(0, -1);
        evalValue = evalValue.slice(0, -1);
        document.getElementById("display").value = displayValue;
    }
}
