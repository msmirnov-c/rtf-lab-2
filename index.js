/**
 * Создайте собственную реализацию функции bind
 * @param {Function} func передаваемая функция
 * @param {any} context контекст
 * @param {Array<any>} args массив аргументов
 * @return {Function} функция с нужным контекстом
 */
function customBind (func, context, ...args) {
    let result = func.apply(context, ...args);
    return result;
}
function sum (x) {
    let summator = x;
    function tmp (n) {
        summator += n;

        return tmp;
    }
    tmp.toString = function () {

        return summator;
    };

    return tmp;
}
module.exports = {
    customBind,
    sum
};
