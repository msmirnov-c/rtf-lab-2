/**
 * Создайте собственную реализацию функции bind
 * @param {Function} func передаваемая функция
 * @param {any} context контекст
 * @param {Array<any>} args массив аргументов
 * @return {Function} функция с нужным контекстом
 */
function customBind (func, context, ...args) {
    return function (...newArgs) {
        return func.apply(context, ...args.push(...newArgs));
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
    let tempSum = x;
    function sumNextBrackets (nextArg) {
        if (nextArg == undefined) {
            return tempSum;
        }

        tempSum += nextArg;

        return sumNextBrackets;
    }

    if (tempSum == undefined) {
        return 0;
    }

    return sumNextBrackets;
}

module.exports = {
    customBind,
    sum
};
