/**
 * Создайте собственную реализацию функции bind
 * @param {Function} func передаваемая функция
 * @param {any} context контекст
 * @param {Array<any>} args массив аргументов
 * @return {Function} функция с нужным контекстом
 */
function customBind (func, context, ...args) {
    return function (...funcArgs) {
        args = args.concat(funcArgs);
        func.apply(context, args);
    };
};

/* ============================================= */

/**
 * Напишите функцию sum, вычисляющую суммы подобным образом:
 * sum(1)(2)( ) // 3
 * sum(1)(2)(3)( ) // 6
 * sum :: Number -> sum
 * sum :: void -> Number
 */

function sum (x) {
    if (x === undefined) {
        return 0;
    }

    let result = x;

    return function sumFunc (y) {
        if (typeof y === 'number') {
            result += y;

            return sumFunc;
        }

        return result;
    };
};

module.exports = {
    customBind,
    sum
};
