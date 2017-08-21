# jest-plugin-context

[![npm](https://img.shields.io/npm/v/jest-plugin-context.svg)](https://www.npmjs.com/package/jest-plugin-context)
[![npm](https://img.shields.io/npm/dt/jest-plugin-context.svg)](https://www.npmjs.com/package/jest-plugin-context)
[![npm](https://img.shields.io/npm/l/jest-plugin-context.svg)](https://github.com/negativetwelve/jest-plugins/blob/master/LICENSE)

Adds `context` as an alternative to `describe` for jest.

## Getting Started

Install `jest-plugin-context` using `yarn`:

```shell
yarn add --dev jest-plugin-context
```

## Motivation

[RSpec](http://rspec.info/) took the ruby world by storm with its declarative method of TDD. In RSpec, `describe` it used to wrap a set of tests against one functionality while `context` is to wrap a set of tests against one functionality under the same state.

The difference being you should only `describe` to test the User model and specifically `describe` the `#name` method. However, testing different states of the `#name` method should use different context. You can view an example of this below.

## Usage

If you want, you can import `context` from `jest-plugin-context` at the top of every test:

```javascript
import context from 'jest-plugin-context';
```

If you want to install `context` as a global, you can modify the `jest` section of your `package.json` to include:

```json
"jest": {
  "setupFiles": [
    "jest-plugin-context/setup"
  ]
}
```

## Example

Here's an example test that uses `context`:

```javascript
describe('User', () => {

  describe('#name', () => {
    set('firstName', () => 'Harry');
    set('lastName', () => 'Potter');
    set('user', () => new User({firstName, lastName}));

    context('with blank first name', () => {
      set('firstName', () => null);

      it('should return only the last name', () => {
        expect(user.name).toEqual('Potter');
      });
    });

    context('with blank last name', () => {
      set('lastName', () => null);

      it('should return only the first name', () => {
        expect(user.name).toEqual('Harry');
      });
    });
  });
});
```
