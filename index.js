/**
 * Создайте собственную реализацию функции bind
 * @param {Function} func передаваемая функция
 * @param {any} context контекст
 * @param {Array<any>} bindedArgs массив аргументов
 * @return {Function} функция с нужным контекстом
 */
function customBind (func, context, ...bindedArgs) {
    return (...args) => {
        return func.apply(context, bindedArgs.concat(args));
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
    if (x === undefined) {
        return this.total === undefined ? 0 : this.total;
    }

    return sum.bind({
        total: this.total ? this.total + x : x
    });
}

module.exports = {
    customBind,
    sum
};
