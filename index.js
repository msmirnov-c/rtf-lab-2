/**
 * Создайте собственную реализацию функции bind
 * @param {Function} func передаваемая функция
 * @param {any} context контекст
 * @param {Array<any>} args массив аргументов
 * @return {Function} функция с нужным контекстом
 */
function customBind (func, context, ...args) {
    const newArgs = args.concat();

    return function (...args) {
        func.apply(context, newArgs.concat(args));
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
    if (x === undefined) return 0;

    const quantum = x;

    return (nextNumber) => {
        if (nextNumber === undefined) {
            return quantum;
        }

        return sum(quantum + nextNumber);
    };
}

module.exports = {
    customBind,
    sum
};
