/**
 * Создайте собственную реализацию функции bind
 * @param {Function} func передаваемая функция
 * @param {any} context контекст
 * @param {Array<any>} args массив аргументов
 * @return {Function} функция с нужным контекстом
 */
function customBind (func, context, ...args) {
    return function (...newArgs) {
        return func.aplly(context, args.concat(newArgs));
    };
}

function sum (x) {
    if (x === undefined) {
        return 0;
    }

    const funcSum = x;

    return funcSum;
}

module.exports = {
    customBind,
    sum
};
