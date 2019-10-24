/* eslint-disable no-console */
/**
 * Создайте собственную реализацию функции bind
 * @param {Function} func передаваемая функция
 * @param {any} context контекст
 * @param {Array<any>} args массив аргументов
 * @return {Function} функция с нужным контекстом
 */
function customBind (func, context, ...args) {
    var extraArgs = [].slice.call(arguments, 2);

    return function () {
        var allArgs = extraArgs.concat([].slice.call(arguments));

        return func.apply(context, allArgs);
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
    if (x === undefined) { return 0; }

    let amount = x;
    function newAmount (y) {
        if (y === undefined) {
            return amount;
        }

        amount += y;

        return newAmount;
    }

    return newAmount;
}

module.exports = {
    customBind,
    sum
};
