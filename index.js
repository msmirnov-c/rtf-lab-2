/**
 * Создайте собственную реализацию функции bind
 * @param {Function} func передаваемая функция
 * @param {any} context контекст
 * @param {Array<any>} args массив аргументов
 * @return {Function} функция с нужным контекстом
 */
function customBind (func, context, ...args) {
    return function (newArgs) {
        return func.apply(context, args.slice(0, args.length).concat(newArgs));
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
    if(x === undefined) {
        return 0;
    }
    
    let tempSum = x;
    function sumNextBrackets (nextArg) {
        if (nextArg == null) {
            return tempSum;
        }

        tempSum += nextArg;

        return sumNextBrackets;
    }

    if (tempSum == null) {
        return 0;
    }

    return sumNextBrackets;
}

module.exports = {
    customBind,
    sum
};
