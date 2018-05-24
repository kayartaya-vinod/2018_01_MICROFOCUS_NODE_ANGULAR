// module name: "mathutils"
// var mathutils  = require("./mathutils");

// by default module.exports is an empty object {}
// we can add new properties to this object by using dot notation or [] notation
module.exports.factorial = num => {
    var f = 1;
    while (num > 0) {
        f *= num;
        num--;
    }
    return f;
};

module.exports['square'] = n => n*n;

