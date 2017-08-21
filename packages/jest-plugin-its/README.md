# jest-plugin-its

[![npm](https://img.shields.io/npm/v/jest-plugin-its.svg)](https://www.npmjs.com/package/jest-plugin-its)
[![npm](https://img.shields.io/npm/dt/jest-plugin-its.svg)](https://www.npmjs.com/package/jest-plugin-its)
[![npm](https://img.shields.io/npm/l/jest-plugin-its.svg)](https://github.com/negativetwelve/jest-plugins/blob/master/LICENSE)

Adds `subject` and `its` implementations from RSpec to Jest.

## Getting Started

Install `jest-plugin-its` using `yarn`:

```shell
yarn add --dev jest-plugin-its
```

## Motivation

## Usage

If you want, you can import `its` and `subject` for each test file via:

```javascript
import {its, subject} from 'jest-plugin-its';
```

If you want to install `its` and `subject` as globals, you can modify the `jest` section of your `package.json` to include:

```json
"jest": {
  "setupFiles": [
    "jest-plugin-its/setup"
  ]
},
```

## Example

Here's an example that tests the implementation of `its`:

```javascript
import {its, subject} from '../';

describe('its', () => {
  describe('with primitives', () => {
    subject(() => ({a: 1, b: 2}));
    its('a', () => isExpected.toEqual(1));
    its('b', () => isExpected.toEqual(2));
  });

  describe('with functions', () => {
    subject(() => ({a: () => 1, b: () => 2}));
    its('a', () => isExpected.toEqual(1));
    its('b', () => isExpected.toEqual(2));
  });

  describe('with nested properties', () => {
    subject(() => ({a: {b: {c: 1, d: 2}}}));
    its('a.b.c', () => isExpected.toEqual(1));
    its('a.b.d', () => isExpected.toEqual(2));
  });
});
```
