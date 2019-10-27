/**
 * Создайте собственную реализацию функции bind
 * @param {Function} func передаваемая функция
 * @param {any} context контекст
 * @param {Array<any>} args массив аргументов
 * @return {Function} функция с нужным контекстом
 */
function customBind (func, context, ...args) {
    return function (...functionArgs) {
        return func.apply(context, args.concat(functionArgs));
    };
}

/* ============================================= */

function sum (x) {
    if (x === undefined) {
        return 0;
    }

    return function accumSum (addendum) {
        if (addendum === undefined) {
            return x;
        }

        x += addendum;

        return accumSum;
    }
}

module.exports = {
    customBind,
    sum
};


