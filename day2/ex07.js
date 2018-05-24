var fs = require("fs");
var path = require("path");

var dirname = path.join(__dirname, '..', 'day1');

fs.readdir(dirname, (err, filenames) => {

    if(err) throw err;

    console.log('contents of the dir', dirname);
    // filenames.forEach((filename, index) => console.log(`${index + 1}. ${filename}`));
    filenames.forEach(filename => console.log(filename));
});

console.log('End of script');