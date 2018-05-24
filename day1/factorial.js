function fn(num) {
    if(num<=0) return 1;

    return num * fn(num-1);
}

module.exports = fn;