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
        response = +getStringInputWithPrompt(prompt);
    } while (isNaN(response));
    return response;
}

function inputOperator(){
    return inputString('Please enter the operator:')
}

function getNumberArray(){
    const quantity = inputNumber('How many numbers do you want to ' + op + '?');
    
    const arr = new Array(quantity);
    
    for (let i = 0; i < quantity; i++){
        arr[i] = inputNumber('Please enter number ' + (i+1) + ':');
    }

    return arr;
}

function calculateAnswer(op, arr) {
    var total = 0;
    
    for (let i = 0; i < quantity; i++){
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

function performOneCalculation() {
    const op = inputOperator();
    const numarr = getNumberArray();
    const answer = calculateAnswer(op, numarr);
    
    console.log('The answer is: ' + answer + "\n");
}

printWelcomeMessage();

while (true) {
    performOneCalculation();
}
