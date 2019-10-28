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
    if (x === undefined) {
        return 0;
    }

    function updateSum (addend) {
        if (addend === undefined) {
            return x;
        } else {
            x += addend;

            return updateSum;
        }
    }

    return updateSum;
}

module.exports = {
    customBind,
    sum
};
