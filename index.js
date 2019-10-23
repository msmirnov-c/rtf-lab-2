function customBind (func, context, ...args) {
    function f (...funcArgs) {
        const arrayAllArgs = [];

        for (let i = 0; i < args.length; i++) {
            arrayAllArgs[i] = args[i];
        }

        for (let i = arrayAllArgs.length, j = 0; j < funcArgs.length; i++, j++) {
            arrayAllArgs[i] = funcArgs[j];
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
