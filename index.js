/**

 * Создайте собственную реализацию функции bind

 * @param {Function} func передаваемая функция

 * @param {any} context контекст

 * @param {Array<any>} args массив аргументов

 * @return {Function} функция с нужным контекстом

 */

function customBind (func, context, ...args) {
    return function (...newArguments) {
        return func.apply(context, args.concat(newArguments));
    };
}

function sum (x) {
    if (x === undefined) {
        return 0;
    }

    return (...newArguments) => (x === undefined) ? x : sum(x += arguments);
}

module.exports = {

    customBind,

    sum

};
