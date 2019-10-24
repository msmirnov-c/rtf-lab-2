/**
 * Создайте собственную реализацию функции bind
 * @param {Function} func передаваемая функция
 * @param {any} context контекст
 * @param {Array<any>} args массив аргументов
 * @return {Function} функция с нужным контекстом
 */
function customBind (func, context, ...args) {
    return function (...inputArgs) {
        return func.apply(context, args.concat(inputArgs));
    };
}

/* ============================================= */

/**
 * Напишите функцию sum, вычисляющую суммы подобным образом:
 * sum(1)(2)( ) // 3
 * sum(1)(2)(3)(4)( ) // 10
 * sum :: Number -> sum
 * sum :: void -> Number
 */
function sum (x) {
    if (x === undefined) return 0;

    const accumulator = [];
    accumulator.push(x);
    const addNextItem = (nextItem) => {
        if (nextItem === undefined) {
            return accumulator.reduce((a, b) => a + b);
        }

        accumulator.push(nextItem);

        return addNextItem;
    };

    return addNextItem;
}

module.exports = {
    customBind,
    sum
};
