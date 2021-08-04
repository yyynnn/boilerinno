/*
    Rules, re-implemented to support experimental syntax provided by Babel.
    Each corresponds to a core eslint rule, and has the same options.
    https://github.com/babel/eslint-plugin-babel#rules
*/

module.exports = {
    /*
      Disallow unused expressions
      https://eslint.org/docs/rules/no-unused-expressions

      [Fixes]
      Doesn't fail when using `do` expressions`
  */
    '@babel/no-unused-expressions': [
        'error',
        {
            allowShortCircuit: true,
            allowTernary: false,
            allowTaggedTemplates: false,
        },
    ],
}
