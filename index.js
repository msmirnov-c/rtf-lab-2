function customBind (func, context, ...args) {
    return function () {
        return func.apply(context, [...args, ...arguments]);
    };
}

function sum (x) {
    if (x === undefined) {
        return 0;
    }

    let count = x;

    return function by (y) {
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
