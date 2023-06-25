const readline = require('readline-sync');

console.log('Welcome to the calculator!');

console.log('==========================');

console.log('Please enter the operator: ');
const op = readline.prompt();

console.log('Please enter the first number: ');
const firstnum = readline.prompt();

console.log('Please enter the second number: ');
const secondnum = readline.prompt();

if (op == '+'){
    console.log('The answer is ' + (parseFloat(firstnum) + parseFloat(secondnum)));
}
else if (op == '-'){
    console.log('The answer is ' + (parseFloat(firstnum) - parseFloat(secondnum)));
}
else if (op == '*'){
    console.log('The answer is ' + (parseFloat(firstnum) * parseFloat(secondnum)));
}
else if (op == '/'){
    console.log('The answer is ' + (parseFloat(firstnum) / parseFloat(secondnum)));
}