# jest-plugin-action

[![npm](https://img.shields.io/npm/v/jest-plugin-action.svg)](https://www.npmjs.com/package/jest-plugin-action)
[![npm](https://img.shields.io/npm/dt/jest-plugin-action.svg)](https://www.npmjs.com/package/jest-plugin-action)
[![npm](https://img.shields.io/npm/l/jest-plugin-action.svg)](https://github.com/negativetwelve/jest-plugins/blob/master/LICENSE)

Declarative method for testing actions using jest.

## Getting Started

Install `jest-plugin-action` using `yarn`:

```shell
yarn add --dev jest-plugin-action
```

## Motivation

If you haven't already, check out [`jest-set`](https://github.com/negativetwelve/jest-set). `jest-plugin-action` builds on `jest-set` by providing the `action` keyword which allows you to define a function. These functions are lazily defined and are useful for passing directly into `expect` to test errors, warnings, etc, or for passing into `beforeEach` to easily set up a scenario before defining expectations. Here's an example:

```javascript
describe('User', () => {
  describe('.update', () => {
    set('user', () => new User({firstName: 'Mary', lastName: 'Lamb'}));

    describe('with valid firstName and lastName', () => {
      set('firstName', () => 'Test');
      set('lastName', () => 'User');
      action('updateUser', () => user.update({firstName, lastName}));
      beforeEach(updateUser);

      it('should set firstName', () => {
        expect(user.firstName).toEqual('Test');
      });

      it('should compute name', () => {
        expect(user.name).toEqual('Test User');
      });
    });

    describe('with invalid firstName', () => {
      set('firstName', () => null);
      set('lastName', () => null);
      action('updateUser', () => user.update({firstName, lastName}));

      it('should throw an error', () => {
        expect(updateUser).toThrow(ValidationError);
      });
    });
  });
});
```

Even in this trivial example, it's easy to see the power of `action`.

1. We can declare actions in the same way we declare our variables. That keeps all of our changes in one place.
2. We can create easy-to-read expectations for actions: `expect(userUser).toThrow(ValidationError);`. It doesn't get any better than this.
3. Using lazy actions, we can declare them in one scope and access / override variables in another scope, just like `set`!

## Usage

If you want, you can import `action` from `jest-plugin-action` at the top of every test:

```javascript
import action from 'jest-plugin-action';
```

If you want to install `action` as a global, you can modify the `jest` section of your `package.json` to include:

```json
"jest": {
  "setupFiles": [
    "jest-plugin-action/setup"
  ]
}
```

## Example

Here's an example test that tests `action` itself:

```javascript
describe('action', () => {
  set('a', () => 1);
  set('b', () => 2);
  action('add', () => a + b);
  action('multiply', () => a * b);
  action('divide', () => {
    if (b === 0) {
      throw new Error('Cannot divide by zero');
    } else {
      return a / b;
    }
  });

  describe('add', () => {
    it('should not throw an error', () => {
      expect(add).not.toThrow();
    });
  });

  describe('multiply', () => {
    it('should not throw an error', () => {
      expect(multiply).not.toThrow();
    });
  });

  describe('division', () => {
    context('with b < 0', () => {
      set('b', () => -42);

      it('should not throw an error', () => {
        expect(divide).not.toThrow();
      });
    });

    context('with b = 0', () => {
      set('b', () => 0);

      it('should throw an error', () => {
        expect(divide).toThrow('Cannot divide by zero');
      });
    });

    context('with b > 0', () => {
      set('b', () => 100);

      it('should not throw an error', () => {
        expect(divide).not.toThrow();
      });
    });
  });
});
```
