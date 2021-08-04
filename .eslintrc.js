const path = require('path')

module.exports = {
    root: true,
    settings: {
        'import/resolver': {
            node: {
                paths: [path.resolve(__dirname, './')],
                extensions: ['.js', '.jsx', '.mdx', '.tsx'],
            },
        },
    },
    extends: './packages/eslint-config/index.js',
}
