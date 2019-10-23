function customBind (func, context, ...args) {
    const arrayAllArgs = [];

    for (let i = 0; i < args.length; i++) {
        arrayAllArgs[i] = args[i];
    }

    function f (...funcArgs) {
        for (let i = funcArgs.length, j = 0; j < arrayAllArgs.length; i++, j++) {
            funcArgs[i] = arrayAllArgs[j];
        }

        return func.apply(context, funcArgs);
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
