function customBind (func, context, ...args) {
  return function() {
    return func.apply(context, args);  }
}

function sum(x) {
 if (x === undefined) {
   return 0;
 }
 
 return function summation(nextArg) {
  if (nextArg === undefined) {
     return Number(this);
   }
   
   return summation.bind(this + nextArg);
   
 }.bind(x);
}

module.exports = {
    customBind,
    sum
};
