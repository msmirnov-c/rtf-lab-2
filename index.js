/**
 * Создайте собственную реализацию функции bind
 * @param {Function} func передаваемая функция
 * @param {any} context контекст
 * @param {Array<any>} args массив аргументов
 * @return {Function} функция с нужным контекстом
 */
function customBind (func, context, ...args) {
    // code
    return function (...newNumbers) {
        return func.bind(context, args.concat(newNumbers));
    }
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
    // code
    if (x === undefined) {
        return 0;
    }
    function sumOfNumbers (newNumber) {
        if (newNumber !== undefined) {
            x += newNumber;
        }
        return x;
    }
    return sumOfNumbers;
}

module.exports = {
    customBind,
    sum
};
