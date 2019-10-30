function customBind (func, context, ...args) {
    return function (...newArguments) {
        return func.apply(context, args.concat(newArguments));
    };
}

function sum (x) {
    if (x === undefined) {
        return 0;
    }

    return (newSum) => newSum === undefined ? x : sum(x = x + newSum);
}

module.exports = {

    customBind,

    sum

};
