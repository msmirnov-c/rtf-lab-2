/**
 * Создайте собственную реализацию функции bind
 * @param {Function} func передаваемая функция
 * @param {any} context контекст
 * @param {Array<any>} args массив аргументов
 * @return {Function} функция с нужным контекстом
 */
function customBind (func, context, ...args) {
    return func.apply(context, args);
}

function sum(x) {
    let sum = x;
    return function sumY(y) {
        if (y !== undefined) {
            sum += y;
            return sumY;

        } else {
            return sum;

        }
    }
}

module.exports = {
    customBind,
    sum
};
