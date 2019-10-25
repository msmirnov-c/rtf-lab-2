/**
 * Создайте собственную реализацию функции bind
 * @param {Function} func передаваемая функция
 * @param {any} context контекст
 * @param {Array<any>} args массив аргументов
 * @return {Function} функция с нужным контекстом
 */
function customBind (func, context, ...args) {
    var firstArgs = [].slice.call(arguments, 2);

    return function () {
        var remainArgs = [].slice.call(arguments);

        return func.apply(context, firstArgs.concat(remainArgs));
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
    if (sum === undefined) return 0;

    let count = x;
    function newSum (nsum) {
        if (nsum !== undefined) {
            count += nsum;

            return newSum;
        }

        else return count;
    }

    return newSum;
}

module.exports = {
    customBind,
    sum
};
