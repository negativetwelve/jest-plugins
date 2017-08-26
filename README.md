# Jest Plugins

[![CircleCI branch](https://img.shields.io/circleci/project/github/negativetwelve/jest-plugins/master.svg)](https://circleci.com/gh/negativetwelve/jest-plugins)
[![Coverage Status](https://coveralls.io/repos/github/negativetwelve/jest-plugins/badge.svg?branch=master)](https://coveralls.io/github/negativetwelve/jest-plugins?branch=master)

Adds plugins feature to jest for easily adding extensions.

## Getting Started

[The full instructions for utilizing `jest-plugins` in your project are located here.](/packages/jest-plugins#readme)

## Packages

The Jest Plugins repo is managed as a monorepo that is composed of many npm packages.

### Core Packages

Plugin | Version | Description
-------|---------|------------
[`jest-plugins`](/packages/jest-plugins) | [![npm](https://img.shields.io/npm/v/jest-plugins.svg)][npm-plugins] | Adds the `plugins` feature to Jest.

[npm-plugins]: https://www.npmjs.com/package/jest-plugins

### Plugin Sets

Plugin | Version | Description
-------|---------|------------
[`jest-plugins-recommended`](/packages/jest-plugins-recommended) | [![npm](https://img.shields.io/npm/v/jest-plugins-recommended.svg)][npm-recommended] | Recommended set of jest plugins.

[npm-recommended]: https://www.npmjs.com/package/jest-plugins-recommended

### Plugins

Plugin | Version | Description
-------|---------|------------
[`jest-plugin-action`](/packages/jest-plugin-action) | [![npm](https://img.shields.io/npm/v/jest-plugin-action.svg)][npm-action] | Declarative method for testing actions using jest.
[`jest-plugin-console-matchers`](/packages/jest-plugin-console-matchers) | [![npm](https://img.shields.io/npm/v/jest-plugin-console-matchers.svg)][npm-console-matchers] | Adds `console` matchers to expect `error`, `info`, `log`, or `warn`.
[`jest-plugin-context`](/packages/jest-plugin-context) | [![npm](https://img.shields.io/npm/v/jest-plugin-context.svg)][npm-context] | Adds `context` as an alternative to `describe` for jest.
[`jest-plugin-its`](/packages/jest-plugin-its) | [![npm](https://img.shields.io/npm/v/jest-plugin-its.svg)][npm-its] | Adds `its` helper to quickly check `subject` properties.
[`jest-plugin-set`](/packages/jest-plugin-set) | [![npm](https://img.shields.io/npm/v/jest-plugin-set.svg)][npm-set] | Declaratively `set` your variables lazily. Implements `let` from RSpec.
[`jest-plugin-unhandled-promise`](/packages/jest-plugin-unhandled-promise) | [![npm](https://img.shields.io/npm/v/jest-plugin-unhandled-promise.svg)][npm-unhandled-promise] | Surfaces unhandled promise rejections in jest tests.

[npm-action]: https://www.npmjs.com/package/jest-plugin-action
[npm-console-matchers]: https://www.npmjs.com/package/jest-plugin-console-matchers
[npm-context]: https://www.npmjs.com/package/jest-plugin-context
[npm-its]: https://www.npmjs.com/package/jest-plugin-its
[npm-set]: https://www.npmjs.com/package/jest-plugin-set
[npm-unhandled-promise]: https://www.npmjs.com/package/jest-plugin-unhandled-promise
