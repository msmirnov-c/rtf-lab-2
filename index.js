/**
 * Создайте собственную реализацию функции bind
 * @param {Function} func передаваемая функция
 * @param {any} context контекст
 * @param {Array<any>} args массив аргументов
 * @return {Function} функция с нужным контекстом
 */
function customBind (func, context, ...args) {
    return function () {
        const givenArguments = [].slice.call(arguments);

        return func.apply(context, args.concat(givenArguments));
    };
}

/**
 * Напишите функцию sum, вычисляющую суммы подобным образом:
 * sum(1)(2)( ) // 3
 * sum(1)(2)(3)( ) // 6
 * sum :: Number -> sum
 * sum :: void -> Number
 */
function sum (x) {
    if (x === undefined) {
        return 0;
    } else {
        return function (y) {
            if (y === undefined) return x;

            return sum(x + y);
        };
    }
}

module.exports = {
    customBind,
    sum
};
