/**
 * Создайте собственную реализацию функции bind
 * @param {Function} func передаваемая функция
 * @param {any} context контекст
 * @param {Array<any>} args массив аргументов
 * @return {Function} функция с нужным контекстом
 */
function customBind (func, context, ...args) {
    const a = function (func, context) {
        const b = [].slice.call(...args, 2);

        return function () {
            var c = [].slice.call(...args);

            return func.apply(context, b.concat(c));
        };
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
    if (x === 'number') {
        return x + sum;
    }

    return 0;
}

module.exports = {
    customBind,
    sum
};
