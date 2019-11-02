/**
 * Создайте собственную реализацию функции bind
 * @param {Function} func передаваемая функция
 * @param {any} context контекст
 * @param {Array<any>} args массив аргументов
 * @return {Function} функция с нужным контекстом
 */
function customBind (func, context, ...args) {
    return (...values) => func.apply(context, args.concat(values));
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
    if (typeof x !== 'number') {
        return 0;
    }

    return function sumOfNumbers (newValue) {
        if (typeof newValue === 'number') {
            x += newValue;

            return sumOfNumbers;
        }

        return x;
    };
}

module.exports = {
    customBind,
    sum
};
