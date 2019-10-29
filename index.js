/**
 * Создайте собственную реализацию функции bind
 * @param {Function} func передаваемая функция
 * @param {any} context контекст
 * @param {Array<any>} args массив аргументов
 * @return {Function} функция с нужным контекстом
 */
function customBind (func, context, ...args) {
    return function (...newArgs) {
        return func.aplly(context, args.concat(newArgs));
    };
}

function sum (x) {
    if (x === undefined) {
        return 0;
    }

    let funcSum = x;
    //function sumY (y) {
    //    if (y !== undefined) {
    //        funcSum += y;
    //
    //        return sumY;
    //    } else {
    //        return funcSum;
    //    }
    //};

    return sumY;
}

module.exports = {
    customBind,
    sum
};
