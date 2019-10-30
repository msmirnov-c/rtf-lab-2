/**
 * Создайте собственную реализацию функции bind
 * @param {Function} func передаваемая функция
 * @param {any} context контекст
 * @param {Array<any>} args массив аргументов
 * @return {Function} функция с нужным контекстом
 */
function customBind (func, context, ...args) {
    return func.call(context, ...args);
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
    if ( typeof(x) === 'undefined') return 0;
    
    let result = x;
    function getSum (nextX) {
        
        if ( typeof(nextX) === 'undefined') return result;
        
        result += nextX;
        
        return getSum;
    }
    return getSum;
}

module.exports = {
    customBind,
    sum
};
