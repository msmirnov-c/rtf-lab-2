/**
 * Создайте собственную реализацию функции bind
 * @param {Function} func передаваемая функция
 * @param {any} context контекст
 * @param {Array<any>} args массив аргументов
 * @return {Function} функция с нужным контекстом
 */
function customBind (func, context, ...args) {
    var result = (...newargs) => func.apply(context, ...args);

    return result;
}

function sum (x) {
    if (x === undefined) {
        return 0;
    }

    let summator = x;

    return function tmp (n) {
        if (n === undefined) {
            return summator;
        }
        
        summator += n;

        return tmp;
    };
}
module.exports = {
    customBind,
    sum
};
