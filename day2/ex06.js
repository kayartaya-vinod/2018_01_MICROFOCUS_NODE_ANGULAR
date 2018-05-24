var fs = require("fs"); // --> filesystem; core module
var path = require("path");
var sleep = require(path.join(__dirname, '..', 'day1', 'vinutils')).sleep;

var filename = path.join(__dirname, '..', 'day1', 'ex05.js');
// filename = __dirname + "/../../day1/ex05.js";

if (!fs.existsSync(filename)) {
    throw new Error('Invalid filename', filename);
}

console.log('Reading the content of the file', filename);
fs.readFile(filename, 'utf-8', (err, content) => {
    if (err) throw err;

    console.log(content);
});

console.log('End of script! Sleeping for 4 seconds...');
sleep(4000);
// var content = fs.readFileSync(filename, 'utf-8');