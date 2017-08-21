# jest-plugins

[![npm](https://img.shields.io/npm/v/jest-plugins.svg)](https://www.npmjs.com/package/jest-plugins)
[![npm](https://img.shields.io/npm/dt/jest-plugins.svg)](https://www.npmjs.com/package/jest-plugins)
[![npm](https://img.shields.io/npm/l/jest-plugins.svg)](https://github.com/negativetwelve/jest-plugins/blob/master/LICENSE)

Adds plugins support to Jest.

## Getting Started

Install `jest-plugins` using `yarn`:

```shell
yarn add --dev jest-plugins
```

## Usage

In order to utilize `jest-plugins` in your project, you must configure the setup to add your custom plugins. If `jest-plugins` ever is merged into `jest`, then this will be simpler, until then, follow the instructions below.

First, find your `jest` config which is either in your `package.json` or in a top-level file called `jest.config.js`. Add a key `setupTestFrameworkScriptFile` and point it to another file at the top-level called `jest-plugins.js`.

Inside `jest-plugins.js`, write the following:

```javascript
require('jest-plugins')([
  // List all jest-plugins here.
  'jest-plugin-action',
  'jest-plugin-console-matchers',
  'jest-plugin-context',
  'jest-plugin-its',
  'jest-plugin-set',
  'jest-plugin-unhandled-promise',
]);
```

This is requiring each of the plugins and including it automatically in your project. By design, the `setupTestFrameworkScriptFile` runs _after_ `jest` and the test environment have been set up which gives plugins the maximum capabilities to modify the environment.

Once installed, run `jest` to run your tests and plugins should be accessible in your test files.
