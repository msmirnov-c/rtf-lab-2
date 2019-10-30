/**
 * Создайте собственную реализацию функции bind
 * @param {Function} func передаваемая функция
 * @param {any} context контекст
 * @param {Array<any>} args массив аргументов
 * @return {Function} функция с нужным контекстом
 */
function customBind (func, context, ...args) {
 // Function.prototype.bind = function(context){
    return function(...args){
        return func.apply(
            context,
            args
        )
    }
}

/**
 * Напишите функцию sum, вычисляющую суммы подобным образом:
 * sum(1)(2)( ) // 3
 * sum(1)(2)(3)( ) // 6
 * sum :: Number -> sum
 * sum :: void -> Number
 */
function sum (x) {
    let a = 0;
    if (x === 'number'){
        a = a + x + sum;
        return a;
    }
    return x;

}

module.exports = {
    customBind,
    sum
};
