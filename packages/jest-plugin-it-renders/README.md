# jest-plugin-it-renders

[![npm](https://img.shields.io/npm/v/jest-plugin-it-renders.svg)](https://www.npmjs.com/package/jest-plugin-it-renders)
[![npm](https://img.shields.io/npm/dt/jest-plugin-it-renders.svg)](https://www.npmjs.com/package/jest-plugin-it-renders)
[![npm](https://img.shields.io/npm/l/jest-plugin-it-renders.svg)](https://github.com/negativetwelve/jest-plugins/blob/master/LICENSE)

Jest plugin to quickly test if a React component renders properly.

## Getting Started

Install `jest-plugin-it-renders` using `yarn`:

```shell
yarn add --dev jest-plugin-it-renders
```

*NOTE:* If you're using a version of React before 16.0.0 (basically anything in the ^15.0.0 range), you'll have to use `jest-plugin-it-renders` version `1.8.0`.

## Motivation

For almost any React component, you want to test the following rules:

1. It renders without erroring.
2. Changes to a component are expected (snapshot testing).

This plugin allows you to do both just by rendering the component. Here's an example:

```javascript
import UserAvatar from '../UserAvatar';

describe('UserAvatar', () => {
  context('with default props', () => {
    itRenders(() => <UserAvatar />);
  });

  context('with user object', () => {
    set('user', () => new User());
    itRenders(() => <UserAvatar user=user />);
  });
});
```

## Usage

If you want, you can import `itRenders` from `jest-plugin-it-renders` at the top of every test:

```javascript
import itRenders from 'jest-plugin-it-renders';
```

If you want to install `itRenders` as a global, you can modify the `jest` section of your `package.json` to include:

```json
"jest": {
  "setupFiles": [
    "jest-plugin-it-renders/setup"
  ]
}
```
