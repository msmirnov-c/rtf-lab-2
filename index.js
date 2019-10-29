/**
 * Создайте собственную реализацию функции bind
 * @param {Function} func передаваемая функция
 * @param {any} context контекст
 * @param {Array<any>} args массив аргументов
 * @return {Function} функция с нужным контекстом
 */
function customBind (func, context, ...args) {
    // code
    // test commit
}

/* ============================================= */

/**
 * Напишите функцию sum, вычисляющую суммы подобным образом:
 * sum(1)(2)( ) // 3
 * sum(1)(2)(3)( ) // 6
 * sum :: Number -> sum
 * sum :: void -> Number
 */
let n = 0;

function sum (x) {
    // code
    if (typeof (x) !== 'number') {
        if (n === 0) {
            x = 0;
        } else {
            return n;
        }
    }

    x += n;
    n = x;
}

module.exports = {
    customBind,
    sum
};
