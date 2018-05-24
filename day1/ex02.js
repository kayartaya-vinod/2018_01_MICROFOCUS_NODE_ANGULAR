var fact = require("./factorial"); 
var os = require("os");

console.log("typeof os is ", typeof os);

var n = 6;
var f = fact(n);

console.log(`The factorial of ${n} is ${f}.`);

console.log(os.userInfo());