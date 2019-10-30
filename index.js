function customBind (func, context, ...args) {
    return function (...newArgs) {

        return func.apply(context, args.concat(newArgs));
    };
}

function sum (x) {
    if (x === undefined) {
        return 0;
    }

    return function summation (nextArg) {
        if (nextArg === undefined) {
            return Number(this);
        }

        return summation.bind(this + nextArg);
    }.bind(x);
}

module.exports = {
    customBind,
    sum
};
