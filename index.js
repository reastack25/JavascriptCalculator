// Arithmetic functions
// Simple arithmetic functions
function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if (num2 === 0) {
        return 'Error: Division by zero';
    }
    return num1 / num2;
}

// Calculation history storage
let calculationHistory = [];// empty array to store  history

// Function to add calculation to history
function addToHistory(operand1, operand2, operator, result) {
    const calculation = {
        num1: operand1,
        num2: operand2,
        operator: operator,
        result: result,
    };
    
    calculationHistory.push(calculation);
    return calculation;
}

// Function to display calculation history
function displayHistory() {
    if (calculationHistory.length === 0) {
        console.log('No stored calculations found.');
        return;
    }
    
    console.log('\n Calculation History ');
    let i = 0;
    while (i < calculationHistory.length) {
        const calc = calculationHistory[i];
        console.log(`${i + 1}. ${calc.num1} ${calc.operator} ${calc.num2} = ${calc.result} `);
        i++;
    }
}

// Function to perform calculations and track history
function performCalculation(num1, num2, operator) {
    let result;
    
    if (operator === '+') {
        result = add(num1, num2);
    } else if (operator === '-') {
        result = subtract(num1, num2);
    } else if (operator === '*') {
        result = multiply(num1, num2);
    } else if (operator === '/') {
        result = divide(num1, num2);
    } else {
        return 'Error: Invalid operator';
    }
    
    // Add to history
    addToHistory(num1, num2, operator, result);
    return result;
}

// Function to clear history
function clearHistory() {
    calculationHistory = [];
    console.log('Calculation history cleared.');
}

// Function to get history count
function getHistoryCount() {
    return calculationHistory.length;
}
// demo of calculator functions

function demoCalculator() {
    console.log(' Calculator Demo \n');
    
    // Test addition
    console.log('Testing Addition:');
    console.log(`5 + 3 = ${performCalculation(5, 3, '+')}`);
    console.log(`10 + 7 = ${performCalculation(10, 7, '+')}`);
    
    // Test subtraction
    console.log('\nTesting Subtraction:');
    console.log(`15 - 8 = ${performCalculation(15, 8, '-')}`);
    console.log(`7 - 12 = ${performCalculation(7, 12, '-')}`);
    
    // Test multiplication
    console.log('\nTesting Multiplication:');
    console.log(`4 * 6 = ${performCalculation(4, 6, '*')}`);
    console.log(`9 * 3 = ${performCalculation(9, 3, '*')}`);
    
    // Test division
    console.log('\nTesting Division:');
    console.log(`20 / 4 = ${performCalculation(20, 4, '/')}`);
    console.log(`15 / 3 = ${performCalculation(15, 3, '/')}`);
    console.log(`5 / 0 = ${performCalculation(5, 0, '/')}`); // Division by zero
    
    // Display history
    console.log('\n Current History Status ');
    console.log(`Total calculations performed: ${getHistoryCount()}`);
    displayHistory();
    
    // Test with more operations
    console.log('\n Additional Calculations ');
    console.log(`8 * 7 = ${performCalculation(8, 7, '*')}`);
    console.log(`100 / 25 = ${performCalculation(100, 25, '/')}`);
    console.log(`50 + 25 = ${performCalculation(50, 25, '+')}`);
    
    // Show updated history
    console.log('\n Updated History ');
    displayHistory();
    
    // Test empty history scenario
    console.log('\n Testing Clear History ');
    clearHistory();
    displayHistory();
    
    // Add new calculations after clear
    console.log('\n New Calculations After Clear ');
    console.log(`30 + 45 = ${performCalculation(30, 45, '+')}`);
    console.log(`18 * 2 = ${performCalculation(18, 2, '*')}`);
    
    // Final history display
    console.log('\n Final History ');
    displayHistory();
}
demoCalculator();