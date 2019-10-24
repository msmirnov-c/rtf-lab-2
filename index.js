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

function sum (x = 0) {
    let firstAddendum = x;

    function first (addendum = 0) {
        firstAddendum += addendum;

        return first;
    }

    first.valueOf = () => { return firstAddendum; };

    return first;
}

module.exports = {
    customBind,
    sum
};
