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
    let result = x;
    if (x == undefined) return 0;
    else return getSumOfX;
    function getSumOfX(nextX){
        if (nextX == undefined) return result;
        result += nextX;
        return getSumOfX;
    }
}

module.exports = {
    customBind,
    sum
};
