/**
 * Создайте собственную реализацию функции bind
 * @param {Function} func передаваемая функция
 * @param {any} context контекст
 * @param {Array<any>} args массив аргументов
 * @return {Function} функция с нужным контекстом
 */
function customBind (func, context, ...args) {
    // let f = func.bind(context, ...args);
    // return f;  =)
    const defaultArgsArr = args;

    return function (...newArgs) {
        const newArgsArr = newArgs;
        const allArgsArr = defaultArgsArr.concat(newArgsArr);

        return func.apply(context, allArgsArr);
    };
}

/* ============================================== */

/**
 * Напишите функцию sum, вычисляющую суммы подобным образом:
 * sum(1)(2)( ) // 3
 * sum(1)(2)(3)( ) // 6
 * sum :: Number -> sum
 * sum :: void -> Number
 */
function sum (x) {
    if (x === undefined) {
        return 0;
    }

    const total = x;

    return (nextNumber) => {
        if (nextNumber === undefined) {
            return total;
        }

        return sum(total + nextNumber);
    };
}

module.exports = {
    customBind,
    sum
};
