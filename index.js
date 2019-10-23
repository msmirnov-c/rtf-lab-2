function customBind (func, context, ...args) {

}

function sum (x) {
    if (x === undefined) {
        return 0;
    }

    let sumAllElements = x;

    function sumNext (nextEltmtnt) {
        if (nextEltmtnt === undefined) {
            return sumNext.Number();
        }

        sumAllElements += nextEltmtnt;

        return sumNext;
    }

    sumNext.Number = function () {
        return sumAllElements;
    };

    return sumNext;
}
module.exports = {
    customBind,
    sum
};
