/**
 * Создайте собственную реализацию функции bind
 * @param {Function} func передаваемая функция
 * @param {any} context контекст
 * @param {Array<any>} args массив аргументов
 * @return {Function} функция с нужным контекстом
 */
function customBind (func, context, ...args) {
    const primaryArgs = [].concat(args);

    return function (...newArgs) {
        return func.apply(context, primaryArgs.concat([].concat(newArgs)));
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
    if (typeof x === 'undefined') { return 0; }

    let tempSum = x;
    function callBack (newTemp) {
        if (typeof newTemp !== 'undefined') {
            tempSum += newTemp;

            return callBack;
        } else return tempSum;
    }

    return callBack;
    // code
}

module.exports = {
    customBind,
    sum
};
