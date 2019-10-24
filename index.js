/**
 * Создайте собственную реализацию функции bind
 * @param {Function} func передаваемая функция
 * @param {any} context контекст
 * @param {Array<any>} args массив аргументов
 * @return {Function} функция с нужным контекстом
 */
function customBind (func, context, ...args) {
    return function f (...functionArgs) {
        return func.apply(context, args.concat(functionArgs));
    };
}

/* ============================================= */

function sum (x = 0) {
    var l = x;

    function first (t = 0) {
        l += t;

        return first;
    }

    first.valueOf = () => { return l; };

    return first;
}
/*module.exports = {
    customBind,
    sum
};*/
