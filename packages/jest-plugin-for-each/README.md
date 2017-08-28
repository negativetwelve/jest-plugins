# jest-plugin-for-each

[![npm](https://img.shields.io/npm/v/jest-plugin-for-each.svg)](https://www.npmjs.com/package/jest-plugin-for-each)
[![npm](https://img.shields.io/npm/dt/jest-plugin-for-each.svg)](https://www.npmjs.com/package/jest-plugin-for-each)
[![npm](https://img.shields.io/npm/l/jest-plugin-for-each.svg)](https://github.com/negativetwelve/jest-plugins/blob/master/LICENSE)

Jest plugin to test multiple values for a single outcome.

## Getting Started

Install `jest-plugin-for-each` using `yarn`:

```shell
yarn add --dev jest-plugin-for-each
```

## Motivation

Building off of `jest-plugin-set`, we can use `jest-plugin-for-each` to define a set of tests that all expect the same outcome given a different set of fixed values. Here's an example:

```javascript
// TODO
```

## Usage

If you want, you can import `forEach` from `jest-plugin-for-each` at the top of every test:

```javascript
import forEach from 'jest-plugin-for-each';
```

If you want to install `forEach` as a global, you can modify the `jest` section of your `package.json` to include:

```json
"jest": {
  "setupFiles": [
    "jest-plugin-for-each/setup"
  ]
}
```

## Example

Here's an example test that tests `forEach` itself:

```javascript
// TODO
```
