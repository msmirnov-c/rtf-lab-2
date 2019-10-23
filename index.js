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
    const emptyArr = [];
    const defaultArgsArr = emptyArr.slice.call(arguments, 2); // массив аргументов по умолчанию

    return function () {
        // массив с новыми переданными аргументами
        const newArgs = emptyArr.slice.call(arguments);
        // соединение двух массивов - все аргументы
        const allArgs = defaultArgsArr.concat(newArgs);

        return func.apply(context, allArgs);
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

    const summary = x;

    return (nextNumber) => {
        if (nextNumber === undefined) {
            return summary;
        }

        return sum(x + nextNumber);
    };
}

module.exports = {
    customBind,
    sum
};
