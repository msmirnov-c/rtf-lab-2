/**
 * Создайте собственную реализацию функции bind
 * @param {Function} func передаваемая функция
 * @param {any} context контекст
 * @param {Array<any>} args массив аргументов
 * @return {Function} функция с нужным контекстом
 */
function customBind (func, context, ...args) {
    return (...bindedArgs) => {
        return func.apply(context, [].concat(args).concat(bindedArgs));
    };
}

/**
 * Напишите функцию sum, вычисляющую суммы подобным образом:
 * sum(1)(2)( ) // 3
 * sum(1)(2)(3)( ) // 6
 * sum :: Number -> sum
 * sum :: void -> Number
 */
function sum (x) {
    return (b) => {
        if (typeof b === 'undefined') {
            return x;
        }

        return sum(x + b);
    };
}

module.exports = {
    customBind,
    sum
};
