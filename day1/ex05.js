var execAfterDelay = require("./vinutils").execAfterDelay;

console.log("Start of script");

var delay = 0;
setTimeout(() => { 
    console.log(`Executing after a timeout of ${delay} seconds...`)
}, delay);

delay = 7000;
execAfterDelay(() => { 
    console.log(`Executing after a sleeping for ${delay} seconds...`)
}, delay);


console.log("End of script");
