/**
 * Создайте собственную реализацию функции bind
 * @param {Function} func передаваемая функция
 * @param {any} context контекст
 * @param {Array<any>} args массив аргументов
 * @return {Function} функция с нужным контекстом
 */
function customBind (func, context, ...args) {
    return (...wrappedArgs) => func.apply(context, [].concat(args).concat(wrappedArgs));
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
    const ctx = {
        accumulator: this.accumulator ? this.accumulator + x : x
    };
    if (!this.accumulator){
        return x === undefined ? 0 : sum.bind(ctx);
    }

    if (this.accumulator && x !== undefined){
        return sum.bind(ctx);
    }

    return this.accumulator;
}

module.exports = {
    customBind,
    sum
};
