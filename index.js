const readline = require('readline-sync');

console.log('Welcome to the calculator!');

console.log('==========================');

console.log('Please enter the operator: ');
const op = readline.prompt();

console.log('How many numbers do you want to ' + op + '?');
const quantity = readline.prompt();

const arr = new Array(+quantity);

for (let i = 0; i < quantity; i++){
    console.log('Please enter number ' + (i+1) + ':');
    arr[i] = parseFloat(readline.prompt());


}

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


console.log('The answer is: ' + total);