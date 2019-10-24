/**
 * Создайте собственную реализацию функции bind
 * @param {Function} func передаваемая функция
 * @param {any} context контекст
 * @param {Array<any>} args массив аргументов
 * @return {Function} функция с нужным контекстом
 */
function customBind (func, context, ...args) {
    return function () {
        const argumentsOfFunc = [].slice.call(arguments);

        return func.apply(context, args.concat(argumentsOfFunc));
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
    if (x === undefined) return 0;

    let resOfAdd = x;

    return function (y) {
        if (y === undefined) return resOfAdd;

        resOfAdd = resOfAdd + y;

        return sum.call(y, resOfAdd);
    };
}

module.exports = {
    customBind,
    sum
};
