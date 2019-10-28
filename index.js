/**
 * Создайте собственную реализацию функции bind
 * @param {Function} func передаваемая функция
 * @param {any} context контекст
 * @param {Array<any>} args массив аргументов
 * @return {Function} функция с нужным контекстом
 */
function customBind (func, context, ...args) {
    return (arguments) => func.call(context, args, arguments);
}

function sum (x) {
    if (x === undefined) {
        return 0;
    }

    return function subSum (number) {
        if (number === undefined) {
            return x;
        }

        return sum(x + number);
    };
}

module.exports = {
    customBind,
    sum
};
