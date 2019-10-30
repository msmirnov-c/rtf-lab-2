/**
 * Создайте собственную реализацию функции bind
 * @param {Function} func передаваемая функция
 * @param {any} context контекст
 * @param {Array<any>} args массив аргументов
 * @return {Function} функция с нужным контекстом
 */
function customBind(func, context, ...args) {
    return function(yetArguments) {
        return func.apply(context, args.concat(yetArguments));
        // Думаю call будет достаточно и правильно...//
    };
}

/* ============================================= */

/**
 * Напишите функцию sum, вычисляющую суммы подобным образом:
 * sum(1)(2)( ) // 3
 * sum(1)(2)(3)( ) // 6
 * sum :: Number -> sum
 * sum :: void -> Number
 */
function sum(x) {
    if (x === undefined) {
        return 0;
    } //Первая часть//

    return nextNumber => {
            if (nextNumber === undefined) {
                return x;
            }

            if (nextNumber !== undefined) {
                return sum(nextNumber + x);
            }
        } //Second part f-n SUM//

}
module.exports = {
    customBind,
    sum
};