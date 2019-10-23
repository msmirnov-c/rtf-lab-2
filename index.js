function customBind (func, context, ...args) {
    const arrayAllArgs = [];

    for (let i = 0, j = 2; i < arguments.length; i++, j++) {
        arrayAllArgs[i] = arguments[j];
    }

    function f () {
        for (let i = arrayAllArgs.length, j = 0; j < arguments.length; i++, j++) {
            arrayAllArgs[i] = arguments[j];
        }

        return func.apply(context, arrayAllArgs);
    }

    return f;
}

function sum (x) {
    if (x === undefined) {
        return 0;
    }

    let sumAllElements = x;

    function sumNext (nextEltmtnt) {
        if (nextEltmtnt === undefined) {
            return sumNext.Number();
        }

        sumAllElements += nextEltmtnt;

        return sumNext;
    }

    sumNext.Number = function () {
        return sumAllElements;
    };

    return sumNext;
}
module.exports = {
    customBind,
    sum
};
