/**
 * Создайте собственную реализацию функции bind
 * @param {Function} func передаваемая функция
 * @param {any} context контекст
 * @param {Array<any>} args массив аргументов
 * @return {Function} функция с нужным контекстом
 */
function customBind (func, context, ...args) {
    // code
    return (...params) => func.apply(context, args.concat(params));
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
    if (x === undefined)
        return 0;

    var finalResult = function (result, current) {
        if (current === undefined || current === 0) {
            return result;
        }

        return customBind(finalResult, this, result + current);

    }

    return customBind(finalResult, this, x);

}

module.exports = {
    customBind,
    sum
};
