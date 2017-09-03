# jest-plugin-it-shallow-renders

[![npm](https://img.shields.io/npm/v/jest-plugin-it-shallow-renders.svg)](https://www.npmjs.com/package/jest-plugin-it-shallow-renders)
[![npm](https://img.shields.io/npm/dt/jest-plugin-it-shallow-renders.svg)](https://www.npmjs.com/package/jest-plugin-it-shallow-renders)
[![npm](https://img.shields.io/npm/l/jest-plugin-it-shallow-renders.svg)](https://github.com/negativetwelve/jest-plugins/blob/master/LICENSE)

Jest plugin to quickly test if a React component shallow renders properly.

## Getting Started

Install `jest-plugin-it-shallow-renders` using `yarn`:

```shell
yarn add --dev jest-plugin-it-shallow-renders
```

*NOTE:* This plugin is only compatible with React version >= 16.0.0-alpha.

## Motivation

For almost any React component, you want to test the following rules:

1. It renders without erroring.
2. Changes to a component are expected (snapshot testing).

This plugin allows you to do both just by shallow rendering the component. Here's an example:

```javascript
import UserAvatar from '../UserAvatar';

describe('UserAvatar', () => {
  context('with default props', () => {
    itShallowRenders(() => <UserAvatar />);
  });

  context('with user object', () => {
    set('user', () => new User());
    itShallowRenders(() => <UserAvatar user=user />);
  });
});
```

## Usage

If you want, you can import `itShallowRenders` from `jest-plugin-it-shallow-renders` at the top of every test:

```javascript
import itShallowRenders from 'jest-plugin-it-shallow-renders';
```

If you want to install `itShallowRenders` as a global, you can modify the `jest` section of your `package.json` to include:

```json
"jest": {
  "setupFiles": [
    "jest-plugin-it-shallow-renders/setup"
  ]
}
```
