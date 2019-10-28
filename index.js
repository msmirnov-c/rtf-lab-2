function customBind (func, context, ...args) {
    return function () {
        return func.apply(context, [...args, ...arguments]);
    };
}

function sum (x) {
    if (x === undefined) {
        return 0;
    }

    return function innerSumFunction (y) {
        if (y === undefined) {
            return x;
        }

        x += y;

        return innerSumFunction;
    };
}

module.exports = {
    customBind,
    sum
};
