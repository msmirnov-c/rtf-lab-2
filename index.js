/**
 * Создайте собственную реализацию функции bind
 * @param {Function} func передаваемая функция
 * @param {any} context контекст
 * @param {Array<any>} args массив аргументов
 * @return {Function} функция с нужным контекстом
 */
function customBind (func, context, ...args) {
    return function f(){
        return func.apply(context, args.slice.call(arguments));
    }
    
}

/* ============================================= */

/**
 * Напишите функцию sum, вычисляющую суммы подобным образом:
 * sum(1)(2)( ) // 3
 * sum(1)(2)(3)( ) // 6
 * sum :: Number -> sum
 * sum :: void -> Number
 */

function sum(x = 0) {
    var l = x;
    function nextSum (t = 0) {
       l += t;
       return nextSum;
    }
    nextSum.valueOf = () => { return l };
    return nextSum;
}

module.exports = {
    customBind,
    sum
};
