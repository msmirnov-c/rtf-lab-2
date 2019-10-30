/**
 * Создайте собственную реализацию функции bind
 * @param {Function} func передаваемая функция
 * @param {any} context контекст
 * @param {Array<any>} args массив аргументов
 * @return {Function} функция с нужным контекстом
 */
function customBind (func, context, ...args) {
    return function (...nextArgs) {
        func.apply(context, [...args, ...nextArgs]);
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
function sum (x) {
    let res = x;
    if (res === undefined) return 0;

    const f = function (newX) {
        if (newX === undefined) return res;

        res += newX;

        return sum(res);
    };

    return f;
}

module.exports = {
    customBind,
    sum
};
