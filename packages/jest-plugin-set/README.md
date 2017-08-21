# jest-plugin-set

[![npm](https://img.shields.io/npm/v/jest-plugin-set.svg)](https://www.npmjs.com/package/jest-plugin-set)
[![npm](https://img.shields.io/npm/dt/jest-plugin-set.svg)](https://www.npmjs.com/package/jest-plugin-set)
[![npm](https://img.shields.io/npm/l/jest-plugin-set.svg)](https://github.com/negativetwelve/jest-plugins/blob/master/LICENSE)

Declarative JS tests with lazy evaluation for jest.

## Getting Started

Install `jest-plugin-set` using `yarn`:

```shell
yarn add --dev jest-plugin-set
```

## Motivation

[RSpec](http://rspec.info/) took the ruby world by storm with its declarative method of TDD. Since moving to JavaScript, I've wanted a similar way of declaring the setup for my tests. Here's what you would normally do to declare a test:

```javascript
describe('User', () => {
  let user;

  describe('.update', () => {
    beforeEach(() => {
      user = new User({firstName: 'Mary', lastName: 'Lamb'});
    });

    describe('with valid firstName and lastName', () => {
      let firstName;
      let lastName;

      beforeEach(() => {
        firstName = 'Test';
        lastName = 'User';
        user.update({firstName, lastName});
      });

      it('should set firstName', () => {
        expect(user.firstName).toEqual('Test');
      });

      it('should compute name', () => {
        expect(user.name).toEqual('Test User');
      });
    });

    describe('with invalid firstName', () => {
      let firstName;
      let lastName;

      beforeEach(() => {
        firstName = null;
        lastName = null;
        user.update({firstName, lastName});
      });

      it('should not override the original firstName', () => {
        expect(user.firstName).toEqual('Mary');
      });
    });
  });
});
```

Some notes:

1. Because of scoping in javascript, we have to declare our variables outside the `beforeEach` blocks in order to reference them.
2. Our `beforeEach` blocks contain _all_ of the setup code necessary which in this trivial example is at least 3 lines per test.
3. We can override variables in nested scopes, but following the chain is non-trivial because the actual variable declaration might be several layers up.

Here's what the same tests look like with using `set` from `jest-plugin-set`:

```javascript
describe('User', () => {
  describe('.update', () => {
    set('user', () => new User({firstName: 'Mary', lastName: 'Lamb'}));

    describe('with valid firstName and lastName', () => {
      set('firstName', () => 'Test');
      set('lastName', () => 'User');

      beforeEach(() => user.update({firstName, lastName}));

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

      beforeEach(() => user.update({firstName, lastName}));

      it('should not override the original firstName', () => {
        expect(user.firstName).toEqual('Mary');
      });
    });
  });
});
```

Even in this trivial example, things are much easier to follow.

1. We can declare `firstName` and `lastName` as variables that we can then reference in our `beforeEach` blocks.
2. We can break up the large `beforeEach` blocks into several distinct `set` blocks.
3. We can easily set defaults in outer scopes (which may or may not be used within a particular test saving performance) and then overriding the values in nested blocks.

## Why `set`?

In JavaScript, `let` is a keyword so the next closest word is...`set` (which still keeps the meaning of what we're doing - settings variables (lazily)).

## Usage

If you want, you can import `set` from `jest-plugin-set` at the top of every test:

```javascript
import set from 'jest-plugin-set';
```

If you want to install `set` as a global, you can modify the `jest` section of your `package.json` to include:

```json
"jest": {
  "setupFiles": [
    "jest-plugin-set/setup"
  ]
}
```

## Example

Here's an example test that tests `set` itself:

```javascript
describe('set', () => {
  set('a', () => 1);
  set('b', () => 2);
  set('c', () => 'hello world');

  describe('variables set to primitives', () => {
    it('should set a', () => {
      expect(a).toEqual(1);
    });

    it('should set b', () => {
      expect(b).toEqual(2);
    });

    it('should set c', () => {
      expect(c).toEqual('hello world');
    });
  });

  describe('variables set to arrays', () => {
    set('a', () => [1, 2, 3]);

    it('should properly set arrays', () => {
      expect(a).toEqual([1, 2, 3]);
    });
  });

  describe('variables set to objects', () => {
    set('b', () => ({test: '1', value: 2, other: 'three'}));

    it('should properly set objects', () => {
      expect(b).toEqual({other: 'three', value: 2, test: '1'});
    });
  });

  describe('nested set calls', () => {
    set('a', () => 10);

    it('should take the inner set', () => {
      expect(a).toEqual(10);
    });
  });

  describe('variables set within other set calls', () => {
    set('b', () => a + 10);

    it('should evaluate outer variables', () => {
      expect(b).toEqual(11);
    });

    it('should be able to reference variables from the outer scope', () => {
      expect(c).toEqual('hello world');
    });
  });
});
```
