/**
 * Создайте собственную реализацию функции bind
 * @param {Function} func передаваемая функция
 * @param {any} context контекст
 * @param {Array<any>} args массив аргументов
 * @return {Function} функция с нужным контекстом
 */
function customBind (func, context, ...args) {
    const functionArgs = [].slice.call(arguments);

    return func.apply(context, args.concat(functionArgs));
}

function sum (x) {
    if (x !== undefined) {
        let sum = x;
        
        return function sumY (y) {
            if (y !== undefined) {
                sum += y;

                return sumY;
            } else {
                return sum;
            }
        };
    }

    return 0;
}

module.exports = {
    customBind,
    sum
};
