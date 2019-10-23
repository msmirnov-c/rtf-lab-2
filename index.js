/**
 * Создайте собственную реализацию функции bind
 * @param {Function} func передаваемая функция
 * @param {any} context контекст
 * @param {Array<any>} args массив аргументов
 * @return {Function} функция с нужным контекстом
 */
function customBind (func, context, ...args) {
    return (...args2) => func.apply(context, args.concat(args2));
}

/* ============================================= */

/**
 * Напишите функцию sum, вычисляющую суммы подобным образом:
 * sum(1)(2)( ) // 3
 * sum(1)(2)(3)( ) // 6
 * sum :: Number -> sum
 * sum :: void -> Number
 */
let res = 0;
let isCounting = true;

function sum (x) {
    if (x === null) {
        if (!isCounting) {
            return null;
        }

        isCounting = false;

        return res;
    }

    if (!Number.isInteger(x)) {
        return null;
    }

    if (isCounting) {
        res += x;
    } else {
        res = x;
        isCounting = true;
    }

    return sum;
}

module.exports = {
    customBind,
    sum
};
