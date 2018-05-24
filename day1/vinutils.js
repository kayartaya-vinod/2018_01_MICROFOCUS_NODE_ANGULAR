module.exports.sleep = duration => {
    var ms1 = Date.now();
    while ((Date.now() - ms1) <= duration);
}

module.exports.execAfterDelay = (callback, duration) => {
    if (!callback || typeof callback != 'function') {
        throw new Error('Callback was not supplied or not a function!');
    }
    if (!duration || typeof duration != 'number' || duration <= 0) {
        throw new Error('Duration must be a positive number!');
    }

    module.exports.sleep(duration);
    callback();
}