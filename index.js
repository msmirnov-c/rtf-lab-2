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
    let storage = 0;

    if (isNaN(x)) {
        return storage;
    }

    storage += x;

    function sumOfNumbers (x) {
        if (isNaN(x)) {
            return storage;
        }

        storage += x;

        return sumOfNumbers;
    }

    return sumOfNumbers;
}

module.exports = {
    customBind,
    sum
};
