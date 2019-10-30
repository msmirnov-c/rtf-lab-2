function customBind (func, context, ...args) {
    return function myFunction (...newNumbers) {
        return func.apply(context, args.concat(newNumbers));
    };
}

function sum (x) {
    if (x === undefined) {
        return 0;
    }

    return function sumOfNumbers (newNumber) {
        if (newNumber === undefined) {
            return x;
        }

        x += newNumber;
        return sumOfNumbers;
    };
}

module.exports = {
    customBind,
    sum
};
