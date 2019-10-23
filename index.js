/**
 * Создайте собственную реализацию функции bind
 * @param {Function} func передаваемая функция
 * @param {any} context контекст
 * @param {Array<any>} args массив аргументов
 * @return {Function} функция с нужным контекстом
 */
function customBind (func, context, ...args) {
    const arrayAllArgs = [];

    for (let i = 0; i < args.length; i++) {
        arrayAllArgs[i] = args[i];
    }

    function f (...funcArgs) {
        for (let i = arrayAllArgs.length, j = 0; j < funcArgs.length; i++, j++) {
            arrayAllArgs[i] = funcArgs[j];
        }

        return func.apply(context, arrayAllArgs);
    }

    return f;
}

/* ============================================= */

/**
 * Напишите функцию sum, вычисляющую суммы подобным образом:
 * sum(1)(2)( ) // 3
 * sum(1)(2)(3)( ) // 6
 * sum :: Number -> sum
 * sum :: void -> Number
 */
function sum (x) {
}
module.exports = {
    customBind,
    sum
};
