// const path = require('path');

const tsRules = require('./lib/typescript.js')

module.exports = {
    env: {
        browser: true,
        es2021: true /* Also sets `parserOptions.ecmaVersion: 12` */,
        jest: true,
        node: true /* Also sets `parserOptions.globalReturn: true` */,
    },

    globals: require('./globals'),

    settings: {
        /*
        Used by `no-useless-path-segments` w/ `noUselessIndex` option
        to determine which index-files to consider as such.
        Obviously doesn't contain `.jsx` as `index` mostly should
        just re-export things from named files nearby.
    */
        'import/extensions': ['.js', '.json'],

        /*
        No warnings will be thrown on any import with paths
        matching pattern(s) in this option (e.g. if the imported
        module doesn't contain corresponding named exports).
        Not to be confused with checks for the existance of the module itself
        by `no-unresolved` rule which has its own `ignore` option.

        [Note]
        Airbnb includes `.json` here, but it seems to work otherwise too
    */
        'import/ignore': ['\\.(css|less|scss)$'],

        /*
        Additional global environment modules (such as node's `fs`)
        which resolvers aren't aware of by default
    */
        'import/core-modules': [],

        react: {
            /*
          Will default to that in the future, meanwhile another explicit option
      */
            version: 'detect',
        },
    },

    parser: '@babel/eslint-parser',
    parserOptions: {
        sourceType: 'module',
        ecmaFeatures: {
            /*
          Makes eslint analyze modules as if strict-mode is enabled
          for them even if it's not (no such directive is set in the code).
          Thus the directive may (should) not be used (`strict` rule)
          while this option is set to true.
      */
            impliedStrict: true,

            /*
          Not quite an `ecma` feature, but still needed for enabling JSX parsing
      */
            jsx: true,
        },

        /*
        Allow `@babel/eslint-parser` to run on files that do not have
        a Babel configuration associated with them. When no configuration
        file is found it will not parse any experimental syntax.
    */
        requireConfigFile: false,
    },

    plugins: ['@babel', 'import', 'jsx-a11y', 'no-use-extend-native', 'react', 'react-hooks', 'sort-destructure-keys', 'json', 'functional'],
    extends: [
        'plugin:json/recommended',
        /*
        3-in-1
        – Extends prettier-config
          (just disables rules which prettier handles itself)
        – Adds prettier-plugin
          (custom handlers for rules disabled above)
        – Enables cumulative `prettier/prettier` rule
          (outputs own errors for handled syntax instead of eslint's ones
          in case auto-formatting with prettier is not used in the project)
    */
        'plugin:prettier/recommended',

        /*
        Disables related rules from the `babel` plugin
        in favor of custom handling
    */
        'prettier/babel',

        /*
        Disables related rules from the `react` plugin
        in favor of custom handling
    */
        'prettier/react',
    ],
    rules: require('./lib'),

    overrides: [
        {
            env: {
                es6: true,
            },
            files: ['*.ts', '*.tsx'],
            parser: '@typescript-eslint/parser',
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
                ecmaVersion: 2021,
                sourceType: 'module',
                project: '../../tsconfig.json',
                createDefaultProgram: true,
                tsconfigRootDir: __dirname,
            },
            settings: {
                react: {
                    version: 'detect',
                },
            },
            plugins: ['@typescript-eslint'],
            extends: [
                /*
            3-in-1
            – Sets parser to '@typescript-eslint/parser'
            – Adds '@typescript-eslint' plugin
            – Enables recommended set of rules
        */
                'plugin:@typescript-eslint/recommended',

                /*
            Some `import/*` values overrides, related to types
            and additional file extensions

            [Note]
            Configuration seems strange, pay close attention
            if any troubles appear
            https://github.com/benmosher/eslint-plugin-import/blob/master/config/typescript.js
        */
                'plugin:import/typescript',

                /*
            Disables related rules from the `@typescript-eslint` plugin
            in favor of custom handling
        */
                'prettier/@typescript-eslint',
            ],
            rules: tsRules,
        },
        {
            /*
          Enables 4 related rules, disables 2 conflicting
          from `core` and `react` rulesets.
          https://github.com/mdx-js/eslint-mdx/blob/master/packages/eslint-plugin-mdx/src/configs/recommended.ts
      */
            files: ['*.mdx'],
            extends: ['plugin:mdx/recommended'],
        },
    ],
}
