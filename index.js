/**
 * Создайте собственную реализацию функции bind
 * @param {Function} func передаваемая функция
 * @param {any} context контекст
 * @param {Array<any>} args массив аргументов
 * @return {Function} функция с нужным контекстом
 */
function customBind (func, context, ...args) {
    // code
    return function (...arguments) {
        return func.apply(context, args.concat(arguments));
    };
}

/* ============================================= */

/**
 * Напишите функцию sum, вычисляющую суммы подобным образом:
 * sum(1)(2)( ) // 3
 * sum(1)(2)(3)( ) // 6
 * sum :: Number -> sum
 * sum :: void -> Number
 * node.js?
 */

function sum (x) {
    // code
    if (typeof (x) !== 'number') {
        return 0;
    }

    return function (n) {
        if (typeof (n) !== 'number') {
            return x;
        }

        x += n;

        return sum(x);
    };
}

module.exports = {
    customBind,
    sum
};
