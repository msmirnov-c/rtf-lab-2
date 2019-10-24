function customBind (func, context, ...args) {
    return function (...funcArgs) {
        const arrayAllArgs = args.concat(funcArgs);

        return func.apply(context, arrayAllArgs);
    };
}

function sum (x) {
    if (x === undefined) {
        return 0;
    }

    let sumAllElements = x;

    function sumNext (nextElement) {
        if (nextElement === undefined) {
            return sumAllElements;
        }

        sumAllElements += nextElement;

        return sumNext;
    }

    return sumNext;
}
module.exports = {
    customBind,
    sum
};
