const readline = require('readline-sync');

console.log('Welcome to the calculator!');

console.log('Enter your first number:');
const firstnum = readline.prompt();

console.log('Enter your second number:');
const secondnum = readline.prompt();

console.log(parseFloat(firstnum) * parseFloat(secondnum));