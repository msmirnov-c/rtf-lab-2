/**
 * Создайте собственную реализацию функции bind
 * @param {Function} func передаваемая функция
 * @param {any} context контекст
 * @param {Array<any>} args массив аргументов
 * @return {Function} функция с нужным контекстом
 */
function customBind(func, context, ...args) {
  return function(...newArgs) {
    return func.apply(context, args.concat(newArgs));
  };
}

/* ============================================= */

function sum(x) {
  if (x === undefined) {
    return 0;
  }

  return function(num) {
    if (num !== undefined) {
      return sum(x + num);
    }
    return x;
  };
}

module.exports = {
  customBind,
  sum
};
