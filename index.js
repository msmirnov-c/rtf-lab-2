/**
 * Создайте собственную реализацию функции bind
 * @param {Function} func передаваемая функция
 * @param {any} context контекст
 * @param {Array<any>} args массив аргументов
 * @return {Function} функция с нужным контекстом
 */
function customBind (func, context, ...args) {
    const arrArgs = [].slice.call(arguments, 2); // массив аргументов, переданных изначально

    return function () {
        const arrOfAllArgs = arrArgs.concat([].slice.call(arguments)); // конечный массив аргументов

        return func.apply(context, arrOfAllArgs);
    };
}

/* ============================================= */

function sum (x) {
    if (x !== undefined) {
        return function (num) {
            if (num !== undefined) {
                return sum(x + num);
            } else {
                return x;
            }
        };
    }

    return 0;
}

module.exports = {
    customBind,
    sum
};
