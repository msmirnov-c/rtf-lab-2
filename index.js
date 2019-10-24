/**
 * Создайте собственную реализацию функции bind
 * @param {Function} func передаваемая функция
 * @param {any} context контекст
 * @param {Array<any>} args массив аргументов
 * @return {Function} функция с нужным контекстом
 */
function customBind (func, context, ...args) {
    return func.apply(context, args.concat([].slice.call(arguments)));
}

function sum (x) {
    if (x === undefined) {
        return 0;
    }

    let funcSum = x;
    function sumY (y) {
        if (y !== undefined) {
            funcSum += y;

            return sumY;
        } else {
            return funcSum;
        }
    };

    return sumY;
}

module.exports = {
    customBind,
    sum
};
