module.exports = {
    extends: "standard",
    env: {
        'jest': true,
        "commonjs": true,
        "node": true
    },
    rules: {
        indent: ['error', 4],
        semi: [2, 'always'],
        'padding-line-between-statements': [
            'error',
            { blankLine: 'always', prev: '*', next: 'return' },
            { blankLine: 'always', prev: ['if', 'for', 'while', 'switch'], next: '*' },
        ],
        camelcase: ['error'],
        'linebreak-style': 'off',
        'no-plusplus': ['off'],
        'no-console': ['error']
    }
};
