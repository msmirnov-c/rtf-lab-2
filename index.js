/**
 * Создайте собственную реализацию функции bind
 * @param {Function} func передаваемая функция
 * @param {any} context контекст
 * @param {Array<any>} args массив аргументов
 * @return {Function} функция с нужным контекстом
 */
function customBind (func, context, ...args) {
    return function (...newFunctionArgs) {
        return func.apply(context, args.concat(newFunctionArgs));
    };
}

function sum (x) {
    if (x === undefined) {
        return 0;
    }

    return function sum (newElement) {
        if (newElement !== undefined) {
            x += newElement;

            return sum;
        }

        return x;
    };
}

module.exports = {
    customBind,
    sum
};
