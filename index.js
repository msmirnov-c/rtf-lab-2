/**
 * Создайте собственную реализацию функции bind
 * @param {Function} func передаваемая функция
 * @param {any} context контекст
 * @param {Array<any>} args массив аргументов
 * @return {Function} функция с нужным контекстом
 */
function customBind (func, context, ...args) {
    return function () {
        const inputArgs = [].slice.call(arguments);

        return func.apply(context, args.concat(inputArgs));
    };
}

/* ============================================= */

/**
 * Напишите функцию sum, вычисляющую суммы подобным образом:
 * sum(1)(2)( ) // 3
 * sum(1)(2)(3)(4)( ) // 10
 * sum :: Number -> sum
 * sum :: void -> Number
 */
let accumulator = 0;
function sum (x) {
    if (x === undefined) {
        const result = accumulator;
        accumulator = 0;

        return result;
    }

    accumulator += x;

    return sum;
}

module.exports = {
    customBind,
    sum
};
