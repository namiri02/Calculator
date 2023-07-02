const readline = require('readline-sync');

function printWelcomeMessage() {
    console.log('Welcome to the calculator!');

    console.log('==========================');
}

function inputString(message){
    console.log(message);
    return readline.prompt();
}

function inputNumber(message){
    let response;
    do {
        response = +inputString(message);
    } while (isNaN(response));
    return response;
}

function inputOperator(){
    return inputString('Please enter the operator:')
}

function getNumberArray(op){
    const quantity = inputNumber(`How many numbers do you want to ${op}?`);
    
    const arr = new Array(quantity);
    
    for (let i = 0; i < quantity; i++){
        arr[i] = inputNumber(`Please enter number ${i+1}:`);
    }

    return arr;
}

function calculateAnswer(op, arr) {
    var total = 0;
    
    for (let i = 0; i < arr.length; i++){
        if (op == '+'){
            total += arr[i];
        }
        else if (op == '-'){
            total -= arr[i];
        }
        else if (op == '*'){
            total *= arr[i];
        }
        else {
            total /= arr[i];
        }
    }

    return total;
}

function performOneArithmeticCalculation() {
    const op = inputOperator();
    const numarr = getNumberArray(op);
    const answer = calculateAnswer(op, numarr);
    
    console.log(`The answer is: ${answer}`);
}

function getCalculationMode() {
    return inputString(`Which calculator mode do you want?
    1) Arithmetic
    2) Vowel counting`)
}

function performOneVowelCountingCalculation() {
    const vowelObject = {
        A: 0,
        E: 0,
        I: 0,
        O: 0,
        U: 0
    }

    const userString = inputString('Please enter a string:');

    const vowels = ['A','E','I','O','U'];

    for (let i in userString){
        const normalisedLetter = userString[i].toUpperCase();
        if (vowels.includes(normalisedLetter)){
            if (normalisedLetter == 'A'){
                vowelObject.A = vowelObject.A + 1;
            }
            else if (normalisedLetter == 'E'){
                vowelObject.E = vowelObject.E + 1;
            }
            else if (normalisedLetter == 'I'){
                vowelObject.I = vowelObject.I + 1;
            }
            else if (normalisedLetter == 'O'){
                vowelObject.O = vowelObject.O + 1;
            }
            else if (normalisedLetter == 'U'){
                vowelObject.U = vowelObject.U + 1;
            }
        }
    }

    for (property in vowelObject){
        console.log(`${property}: ${vowelObject[property]}`);
    }
}

const ARITHMETIC_MODE = '1';
const VOWEL_COUNTING_MODE = '2';
printWelcomeMessage();
while (true) {
    const calculationMode = getCalculationMode();
    if (calculationMode === ARITHMETIC_MODE) {
        performOneArithmeticCalculation();
    }
    else if (calculationMode === VOWEL_COUNTING_MODE) {
        performOneVowelCountingCalculation();
    }
}