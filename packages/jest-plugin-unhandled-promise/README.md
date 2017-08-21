# jest-plugin-unhandled-promise

[![npm](https://img.shields.io/npm/v/jest-plugin-unhandled-promise.svg)](https://www.npmjs.com/package/jest-plugin-unhandled-promise)
[![npm](https://img.shields.io/npm/dt/jest-plugin-unhandled-promise.svg)](https://www.npmjs.com/package/jest-plugin-unhandled-promise)
[![npm](https://img.shields.io/npm/l/jest-plugin-unhandled-promise.svg)](https://github.com/negativetwelve/jest-plugins/blob/master/LICENSE)

Surfaces unhandled promise rejections in jest tests.

## Getting Started

Install `jest-plugin-unhandled-promise` using `yarn`:

```shell
yarn add --dev jest-plugin-unhandled-promise
```

## Motivation

Currently, when running tests in `jest`, if you have an unhandled promise rejection, you'll see this warning:

```
(node:23112) UnhandledPromiseRejectionWarning: Unhandled promise rejection (rejection id: 1): Error: unhandled error
(node:23112) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.
```

Your tests may or may not pass, and you might miss this error.

With `jest-plugin-unhandled-promise`, you'll see this nice, red stack trace in your console:

```
Error: unhandled error
  at /Users/mark/projects/negativetwelve/jest-plugin-unhandled-promise/src/__tests__/install.spec.js:9:61
  at Promise (<anonymous>)
  at /Users/mark/projects/negativetwelve/jest-plugin-unhandled-promise/src/__tests__/install.spec.js:9:7
  at Promise (<anonymous>)
  at /Users/mark/projects/negativetwelve/jest-plugin-unhandled-promise/src/__tests__/install.spec.js:7:56
  at _callee4$ (/Users/mark/projects/negativetwelve/jest-plugin-unhandled-promise/src/__tests__/install.spec.js:59:17)
  at tryCatch (/Users/mark/projects/negativetwelve/jest-plugin-unhandled-promise/node_modules/regenerator-runtime/runtime.js:65:40)
  at Generator.invoke [as _invoke] (/Users/mark/projects/negativetwelve/jest-plugin-unhandled-promise/node_modules/regenerator-runtime/runtime.js:303:22)
  at Generator.prototype.(anonymous function) [as next] (/Users/mark/projects/negativetwelve/jest-plugin-unhandled-promise/node_modules/regenerator-runtime/runtime.js:117:21)
  at step (/Users/mark/projects/negativetwelve/jest-plugin-unhandled-promise/src/__tests__/install.spec.js:2:364)
```

Now you can easily handle errors and fix up your specs!

## Usage

If you want, you can import `installUnhandledPromise` from `jest-plugin-unhandled-promise` at the top of every test:

```javascript
import installUnhandledPromise from 'jest-plugin-unhandled-promise';

// Pass in your custom log function.
installUnhandledPromise(console.log);
```

If you want to install it as a global for all tests, you can modify the `jest` section of your `package.json` to include:

```json
"jest": {
  "setupFiles": [
    "jest-plugin-unhandled-promise/setup"
  ]
}
```

## Contributing

If you have any ideas on how this module could be better, [create an Issue](https://github.com/negativetwelve/jest-plugins/issues) or [submit a PR](https://github.com/negativetwelve/jest-plugins/pulls).
