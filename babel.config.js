const noHMR = process.env.HMR === 'off'
const isProduction = process.env.NODE_ENV === 'production'
const isStoryBook = process.env.IS_SB === '1'
// assssss
module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                useBuiltIns: 'entry',
                corejs: '3.6',
                modules: 'commonjs',
            },
        ],
        '@babel/preset-react',
        [
            '@babel/preset-typescript',
            {
                onlyRemoveTypeImports: true, // this is important for proper files watching
            },
        ],
    ],
    plugins: [
        '@babel/plugin-syntax-dynamic-import',
        '@babel/plugin-proposal-class-properties',
        '@babel/plugin-proposal-optional-chaining',
        '@babel/plugin-proposal-nullish-coalescing-operator',
        [
            'babel-plugin-styled-components',
            {
                fileName: isProduction,
            },
        ],
    ],
    env: {
        development: {
            plugins: isStoryBook || isProduction || noHMR ? [] : ['react-refresh/babel'],
        },
    },
}
