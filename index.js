/**
 * Создайте собственную реализацию функции bind
 * @param {Function} func передаваемая функция
 * @param {any} context контекст
 * @param {Array<any>} args массив аргументов
 * @return {Function} функция с нужным контекстом
 */
function customBind (func, context, ...args) {
    return func.apply(context, [...args, ...arguments]);
}
// слава https://learn.javascript.ru/call-apply
/* ============================================= */
/**
 * Напишите функцию sum, вычисляющую суммы подобным образом:
 * sum(1)(2)( ) // 3
 * sum(1)(2)(3)( ) // 6
 * sum :: Number -> sum
 * sum :: void -> Number
 */
function sum (x) {
    let First = x;
    if (First === undefined) {
        return 0;
    }

    function BoyNextDoor (Next) {
        if (Next === undefined) {
            return First;
        }

        First += Next;

        return BoyNextDoor;
    }

    return BoyNextDoor;
}

module.exports = {
    customBind,
    sum
};
