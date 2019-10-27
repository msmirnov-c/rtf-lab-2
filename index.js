/**
 * Создайте собственную реализацию функции bind
 * @param {Function} func передаваемая функция
 * @param {any} context контекст
 * @param {Array<any>} args массив аргументов
 * @return {Function} функция с нужным контекстом
 */
function customBind (func, context, ...args) {
    //  code
    let firstArg = args.concat();

    return function (...args) {
        func.apply(context, firstArg.concat(args));
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
    let resultSum = 0;
    if (x === undefined) {
        return resultSum;
    } else {
        resultSum = x;
    }

    return function func (y) {
        if (y === undefined) {
            return resultSum;
        } else {
            resultSum += y;
        }

        return func;
    };
}

module.exports = {
    customBind,
    sum
};
