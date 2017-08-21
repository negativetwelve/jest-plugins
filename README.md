# Jest Plugins

[![CircleCI branch](https://img.shields.io/circleci/project/github/negativetwelve/jest-plugins/master.svg)](https://circleci.com/gh/negativetwelve/jest-plugins)

Augments `jest` with a `plugins` feature for easily adding extensions.

## Getting Started

[The full instructions for utilizing `jest-plugins` in your project are located here.](/packages/jest-plugins#readme)

## Packages

The Jest Plugins repo is managed as a monorepo that is composed of many npm packages.

### Core Packages

Plugin | Version | Description
-------|---------|------------
[`jest-plugins`](/packages/jest-plugins) | [![npm](https://img.shields.io/npm/v/jest-plugins.svg)](https://www.npmjs.com/package/jest-plugins) | Adds the `plugins` feature to Jest.

### Plugin Sets

Plugin | Version | Description
-------|---------|------------
[`jest-plugins-recommended`](/packages/jest-plugins-recommended) | [![npm](https://img.shields.io/npm/v/jest-plugins-recommended.svg)](https://www.npmjs.com/package/jest-plugins-recommended) | Recommended set of jest plugins.

### Plugins

Plugin | Version | Description
-------|---------|------------
[`jest-plugin-action`](/packages/jest-plugin-action) | [![npm](https://img.shields.io/npm/v/jest-plugin-action.svg)](https://www.npmjs.com/package/jest-plugin-action) | Declarative method for testing actions using jest.
[`jest-plugin-console-matchers`](/packages/jest-plugin-console-matchers) | [![npm](https://img.shields.io/npm/v/jest-plugin-console-matchers.svg)](https://www.npmjs.com/package/jest-plugin-console-matchers) | Adds `console` matchers to expect `error`, `info`, `log`, or `warn`.
[`jest-plugin-context`](/packages/jest-plugin-context) | [![npm](https://img.shields.io/npm/v/jest-plugin-context.svg)](https://www.npmjs.com/package/jest-plugin-context) | Adds `context` as an alternative to `describe` for jest.
[`jest-plugin-its`](/packages/jest-plugin-its) | [![npm](https://img.shields.io/npm/v/jest-plugin-its.svg)](https://www.npmjs.com/package/jest-plugin-its) | Adds `its` helper to quickly check `subject` properties.
[`jest-plugin-set`](/packages/jest-plugin-set) | [![npm](https://img.shields.io/npm/v/jest-plugin-set.svg)](https://www.npmjs.com/package/jest-plugin-set) | Declaratively `set` your variables lazily. Implements `let` from RSpec.
[`jest-plugin-unhandled-promise`](/packages/jest-plugin-unhandled-promise) | [![npm](https://img.shields.io/npm/v/jest-plugin-unhandled-promise.svg)](https://www.npmjs.com/package/jest-plugin-unhandled-promise) | Surfaces unhandled promise rejections in jest tests.
