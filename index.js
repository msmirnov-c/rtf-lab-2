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

function sum (x) {
    if (x === undefined) {
        return 0;
    }

    let res = x;
    const add = (number) => {
        if (number === undefined) {
            return res;
        }

        res += number;

        return add;
    };

    return add;
}

module.exports = {
    customBind,
    sum
};
