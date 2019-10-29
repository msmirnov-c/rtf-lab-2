/**
 * Создайте собственную реализацию функции bind
 * @param {Function} func передаваемая функция
 * @param {any} context контекст
 * @param {Array<any>} args массив аргументов
 * @return {Function} функция с нужным контекстом
 */
function customBind (func, context, ...args) {
    return (...newargs) => func.apply(context, args.concat(...newargs));
}

function sum (x) {
    if (x === undefined) {
        return 0;
    }

    return function tmp (n) {
        if (n === undefined) {
            return x;
        }

        x += n;

        return tmp;
    };
}
module.exports = {
    customBind,
    sum
};
