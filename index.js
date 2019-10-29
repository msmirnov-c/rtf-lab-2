/**
 * Создайте собственную реализацию функции bind
 * @param {Function} func передаваемая функция
 * @param {any} context контекст
 * @param {Array<any>} args массив аргументов
 * @return {Function} функция с нужным контекстом
 */

function customBind (func, context, ...args) {
   return function(){
       return func.apply(context);{
        return func.concat(...args);
       }
   }
}

/* ============================================= */

/**
 * Напишите функцию sum, вычисляющую суммы подобным образом:
 * sum(1)(2)( ) // 3
 * sum(1)(2)(3)(4)( ) // 10
 * sum :: Number -> sum
 * sum :: void -> Number
 */
function sum (x) {
    if (x === undefined)
    x = 0
    return x 

    if (x !== undefined);
    x += x
    };

module.exports = {
    customBind,
    sum
};
