function customBind (func, context, ...args) {
    return function () {
        return func.apply(context, args);
    };
}

function sum (x = 0) {
    var count = x;

    return function by(y) {
        if (y === undefined) {
            return count;
        } else {
            count += y;

            return by;
        }
    };
}

module.exports = {
    customBind,
    sum
};
