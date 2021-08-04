# @boilerinno/eslint-config

Originally based on [airbnb's config](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb).

Fully integrated with [prettier](https://prettier.io/).

[Leverages](https://github.com/benmosher/eslint-plugin-import/tree/master/resolvers/webpack#eslint-import-resolver-webpack) project's webpack config (if one's found) in resolving imports.

In addition to [the core rules](https://eslint.org/docs/rules/) includes:

- [@babel/eslint-plugin](https://github.com/babel/babel/tree/master/eslint/babel-eslint-plugin)
- [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import#rules)
- [eslint-plugin-sort-destructure-keys](https://github.com/mthadley/eslint-plugin-sort-destructure-keys#eslint-plugin-sort-destructure-keys)
- [no-use-extend-native](https://github.com/dustinspecker/eslint-plugin-no-use-extend-native#usage-with-no-extend-native)
- [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react#list-of-supported-rules)
- [eslint-plugin-react-hooks](https://reactjs.org/docs/hooks-rules.html)
- [eslint-plugin-jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y#supported-rules)


Typescript–friendly:

- [@typescript-eslint](https://github.com/typescript-eslint/typescript-eslint) integration
- separate entry point for the extended ruleset

## Install

Install this package, `prettier`, `eslint` itself and `@babel/core` (needed by non-default `@babel/eslint-parser`). Don't forget to [configure your IDE](https://eslint.org/docs/user-guide/integrations)

```bash
npm i eslint prettier @babel/core @boilerinno/eslint-config --save-dev
```

Configuration of `prettier` is totally up to you. Usually it's run in the IDE by [a plugin or extension](https://prettier.io/docs/en/editors.html). However even if you don't do that, errors will be properly shown instead of auto-formatting.

At startup `@babel/eslint-parser` will try to find a valid Babel configuration file in the project (at least to determine which experimental syntax is probably enabled and should be handled), but it's also ok if there's none.

#### Linting Typescript

Small chances you wouldn't have the `typescript` package installed in such case, but still a reminder: you'll do also need it, installed preferably locally

```bash
npm i typescript eslint prettier @babel/core @boilerinno/eslint-config --save-dev
```

## Usage

Choose the respective entry point to inherit from

```javascript
/* .eslintrc.js */

// main ruleset for the JS-only codebase
module.exports = {
  extends: ['@boilerinno/eslint-config'],
};

// or main ruleset + corresponding overrides for the TS (JS+TS) codebase
module.exports = {
  extends: ['@boilerinno/eslint-config/typescript'],
};
```

