/**
 * Создайте собственную реализацию функции bind
 * @param {Function} func передаваемая функция
 * @param {any} context контекст
 * @param {Array<any>} args массив аргументов
 * @return {Function} функция с нужным контекстом
 */
function customBind (func, context, ...args) {
    return function (newArgs) {
        func.call(context, args, newArgs);
    };
}

function sum (x) {
    if (x !== undefined) {
        return [].reduce.call(arguments, function (a, b) {
            return a + b;
        });

    };

    return 0;
}

module.exports = {
    customBind,
    sum
};
