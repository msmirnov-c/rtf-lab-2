/**
 * Создайте собственную реализацию функции bind
 * @param {Function} func передаваемая функция
 * @param {any} context контекст
 * @param {Array<any>} args массив аргументов
 * @return {Function} функция с нужным контекстом
 */
function customBind (func, context, ...args) {
    return function change (...functionArgs) {
        return func.apply(context, args.concat(functionArgs));
    };
}

/* ============================================= */

function sum (x = 0) {
    let firstAddendum = x;

    function nextSum (addendum) {
        if (addendum === undefined) {
            return firstAddendum;
        }

        firstAddendum += addendum;

        return nextSum;
    }

    return nextSum;
}

module.exports = {
    customBind,
    sum
};
