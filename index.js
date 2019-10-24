/**
 * Создайте собственную реализацию функции bind
 * @param {Function} func передаваемая функция
 * @param {any} context контекст
 * @param {Array<any>} args массив аргументов
 * @return {Function} функция с нужным контекстом
 */
function customBind (func, context, ...args) {
    const bindArgs = [].concat.call(args);

    return function (...args) {
        const funcArgs = [].concat.call(args);

        return func.apply(context, bindArgs.concat(funcArgs));
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

    if (currentSum === undefined) { return 0; }

    function f (y) {
        if (y !== undefined)
            currentSum += y;

        return currentSum;
    }

    return f;
}

module.exports = {
    customBind,
    sum
};
