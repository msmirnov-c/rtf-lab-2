/**
 * Создайте собственную реализацию функции bind
 * @param {Function} func передаваемая функция
 * @param {any} context контекст
 * @param {Array<any>} args массив аргументов
 * @return {Function} функция с нужным контекстом
 */
function customBind (func, context, ...args) {
    // code
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
    // code
    let n = 0;

    if (typeof (x) !== 'number' && n === 0) {
        x = 0;
    }

    return function (x) {
        if (typeof (x) !== 'number' && n > 0) {
            return n;
        }

        n += x;

        return n;
    };
}

module.exports = {
    customBind,
    sum
};
