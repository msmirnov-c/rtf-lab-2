function customBind (func, context, ...args) {
    return function (...newNumbers) {
        return func.bind(context, args.concat(newNumbers));
    };
}

function sum (x) {
    if (x === undefined) {
        return 0;
    }

    function sumOfNumbers (newNumber) {
        if (newNumber !== undefined) {
            x += newNumber;
        }

        return x;
    }

    return sumOfNumbers;
}

module.exports = {
    customBind,
    sum
};
