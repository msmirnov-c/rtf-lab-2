function customBind (func, context, ...args) {
    return function (...newArgs) {
        return func.apply(context, args.concat(newArgs));
    };
}

function sum (x) {
    let tempSum = x;
    function sumNextBrackets (nextArg) {
        if (nextArg === undefined) {
            return tempSum;
        }

        tempSum += nextArg;

        return sumNextBrackets;
    }

    if (tempSum === undefined) {
        return 0;
    }

    return sumNextBrackets;
}

module.exports = {
    customBind,
    sum
};
