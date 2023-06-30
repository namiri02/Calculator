const readline = require('readline-sync');

console.log('Welcome to the calculator!');

console.log('==========================');

console.log('Please enter the operator: ');
const op = readline.prompt();

console.log('How many numbers do you want to ' + op + '?');
const quantity = readline.prompt();

const arr = new Array(quantity);

var total = 0;
for (let i = 0; i < quantity; i++){
    console.log('Please enter number ' + (i+1) + ':');
    var current = parseFloat(readline.prompt());
    if (op == '+'){
        total += current;
    }
    else if (op == '-'){
        total -= current;
    }
    else if (op == '*'){
        total *= current;
    }
    else {
        total /= current;
    }
}

console.log('The answer is: ' + total);