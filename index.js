/**
 * Создайте собственную реализацию функции bind
 * @param {Function} func передаваемая функция
 * @param {any} context контекст
 * @param {Array<any>} args массив аргументов
 * @return {Function} функция с нужным контекстом
 */
function customBind (func, context, ...args) {
    (...newargs) => func.apply(context, ...args);

    return newargs;
}

function sum (x) {
    let summator = x;
    function tmp (n) {
        summator += n;

        return tmp;
    }
    if (tmp.toString === ' ') { return summator; }

    return tmp;
}
module.exports = {
    customBind,
    sum
};
