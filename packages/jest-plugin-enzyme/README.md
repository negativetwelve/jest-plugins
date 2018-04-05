# jest-plugin-enzyme

[![npm](https://img.shields.io/npm/v/jest-plugin-enzyme.svg)](https://www.npmjs.com/package/jest-plugin-enzyme)
[![npm](https://img.shields.io/npm/dt/jest-plugin-enzyme.svg)](https://www.npmjs.com/package/jest-plugin-enzyme)
[![npm](https://img.shields.io/npm/l/jest-plugin-enzyme.svg)](https://github.com/negativetwelve/jest-plugins/blob/master/LICENSE)

Jest plugin to quickly add enzyme to tests.

## Getting Started

Install `jest-plugin-enzyme` using `yarn`:

```shell
yarn add --dev jest-plugin-enzyme
```

## Usage

This package isn't used directly within tests. It's used to construct other `jest-plugins` like `jest-plugin-it-shallow-renders`.

If you want to configure enzyme for react automatically, you can modify the `jest` section of your `package.json` to include:

```json
"jest": {
  "setupFiles": [
    "jest-plugin-enzyme/setup"
  ]
}
```
