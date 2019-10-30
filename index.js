/**
 * Создайте собственную реализацию функции bind
 * @param {Function} func передаваемая функция
 * @param {any} context контекст
 * @param {Array<any>} args массив аргументов
 * @return {Function} функция с нужным контекстом
 */
function customBind (func, context, ...args) {
    return function () {
        return func.apply(context, args.concat(...arguments));
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

function sum (x) {
    let result = {
        value: this.value === undefined ? x : this.value + x
    };
    if (x === undefined)
    {
        if (this.value === undefined) return 0;
        return this.value;
    };
    return sum.bind(result);
}

module.exports = {
    customBind,
    sum
};
