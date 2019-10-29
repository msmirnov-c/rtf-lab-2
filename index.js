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
    let funcSum = x;
    if (x !== undefined) {
        return function sumY (y) {
            if (y === undefined) {
                return funcSum;
            }

            funcSum += y;

            return sumY;
        };
    }

    return 0;
}

module.exports = {
    customBind,
    sum
};
