module.exports = num => {
    let f = 1;
    while (num > 0) {
        f *= num--;
    }
    return f;
}