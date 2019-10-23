/**
 * Создайте собственную реализацию функции bind
 * @param {Function} func передаваемая функция
 * @param {any} context контекст
 * @param {Array<any>} args массив аргументов
 * @return {Function} функция с нужным контекстом
 */
function customBind (func, context, ...args) {
    let arrayAllArgs = [];

    for (let i = 2; i < arguments.length; i++) {
        arrayAllArgs[i] = arguments[i];
    }

    function f(){

        for (let i = arrayAllArgs.length, j = 0; j < arguments.length; i++, j++) {
            arrayAllArgs[i] = arguments[j];
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

    if (x === undefined) {

        return 0;
    }

}

module.exports = {
    customBind,
    sum
};
