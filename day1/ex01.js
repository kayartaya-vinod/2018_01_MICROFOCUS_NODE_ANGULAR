// This is my first JS file for node.js

function factorial(num) {
    var f = 1;
    while (num > 0) {
        f *= num;
        num--;
    }
    return f;
}

var n = 5;
var f = factorial(n);

console.log(`The factorial of ${n} is ${f}.`);