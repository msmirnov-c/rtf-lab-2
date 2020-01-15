
function customBind (func, context, ...args) {
    return function (...newArgs) {
        func.apply(context, args.concat(newArgs));
    };
}

/* ============================================= */

function sum (x) {
    if (x === undefined) {
        return 0;
    }

    return function (nextNumber) {
        if (nextNumber === undefined) {
            return x;
        }

        return sum(x + nextNumber);
    };
}

module.exports = {
    customBind,
    sum
};
