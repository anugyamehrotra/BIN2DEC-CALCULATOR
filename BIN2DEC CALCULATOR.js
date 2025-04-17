// ANUGYA MEHROTRA

// BINARY TO DECIMAL & DECIMAL TO BINARY CALCUALTOR

//Variable inputs & declaration for the decimal to binary converter
let typeOfCalculation = prompt("Would you like to convert from binary to decimal or decimal to binary? Answer as B2D or D2B!")?.toUpperCase(); // Better to keep .toUpperCase() here to avoid extra if-else statements in lowercase
let decimalInput = parseInt(prompt("Enter a decimal number: "));
let binaryInput = prompt("Enter a binary number:");
var decimalOutput;


// The functions

function convertDecimalToBinary() {
    decimalOutput = decimalInput.toString(2);
    alert("The binary equivalent of " + decimalInput + " is " + decimalOutput);
}

function convertBinaryToDecimal() {
    decimalOutput = parseInt(binaryInput, 2);
    alert("The decimal equivalent of " + binaryInput + " is " + decimalOutput);
}

//If statement to determine which function to run based on user input

if (typeOfCalculation == "D2B") {
    if (decimalInput >= 0) {
        convertDecimalToBinary();
    } else if (decimalInput < 0) {
        alert("Please enter a positive number!");
    } else if (isNaN(decimalInput)) {
        alert("Please enter a number!");
    } else {
        alert("Please enter a number!");
    }
}

if (typeOfCalculation == "B2D") {
    if (/^[01]+$/.test(binaryInput)) {
        convertBinaryToDecimal();
    } else if (binaryInput == "") {
        alert("Please enter a valid binary number!");
    } else if (isNaN(binaryInput)) {
        alert("Please enter a valid binary number!");
    }  else {
        alert("Please enter a valid binary number!");
    }

}


// PERSONAL NOTES:

// --> "/^[01]+$/.test" regex function used to check if a string/input has only 0 and 1 (helpful for most binary numbers and calculations)
//--> Referenced from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions
// -->  https://stackoverflow.com/questions/5550102/regular-expression-javascript-binary-number-validation