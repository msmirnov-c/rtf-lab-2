const { customBind, sum} = require('./index');

describe('bind, call, apply', () => {
    describe('customBind', () => {
        it('должен закреплять аргументы и контекст', () => {
            let lastContext = null;
            let lastParams = null;
            const context = { test: 'test' };

            function call (...params) {
                lastContext = this;
                lastParams = params;
            }

            const bindedFunc = customBind(call, context, 1, 3);

            bindedFunc(4);
            expect(lastContext).toEqual(context);
            expect(lastParams).toEqual([1, 3, 4]);
        });
    });

    describe('sum', () => {
        it('Должно считать сумму нескольких слагаемых', () => {
            expect(sum(1)(2)(4)()).toBe(7);
        });
    });
});
