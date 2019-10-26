/**
 * Создайте собственную реализацию функции bind
 * @param {Function} func передаваемая функция
 * @param {any} context контекст
 * @param {Array<any>} args массив аргументов
 * @return {Function} функция с нужным контекстом
 */
function customBind (func, context, ...args) {
    return function (...newArgs) {
        return func.apply(context, args.concat(newArgs));
    };
}

/* ============================================= */

/**
 * Напишите функцию sum, вычисляющую суммы подобным образом:
 * sum(1)(2)( ) // 3
 * sum(1)(2)(3)( ) // 6
 * sum :: Number -> sum
 * sum :: void -> Number
 */
function sum (x) {
    let currentSum = x;

    if (currentSum === undefined) {
        return 0;
    }

    function summing (y) {
        if (y !== undefined) {
            currentSum += y;

            return summing;
        }

        return currentSum;
    }

    return summing;
}

module.exports = {
    customBind,
    sum
};
