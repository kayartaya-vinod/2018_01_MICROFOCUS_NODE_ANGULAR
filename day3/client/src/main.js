console.log('Hello from main.js');
require('./style1.css');

let factorial = require('./factorial');

console.log('factorial of 5 is ', factorial(5));
console.log('factorial of 7 is ', factorial(7));
console.log('factorial of 12 is ', factorial(12));
console.log('factorial of 15 is ', factorial(15));

require('./one');