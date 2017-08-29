# jest-plugin-clock

[![npm](https://img.shields.io/npm/v/jest-plugin-clock.svg)](https://www.npmjs.com/package/jest-plugin-clock)
[![npm](https://img.shields.io/npm/dt/jest-plugin-clock.svg)](https://www.npmjs.com/package/jest-plugin-clock)
[![npm](https://img.shields.io/npm/l/jest-plugin-clock.svg)](https://github.com/negativetwelve/jest-plugins/blob/master/LICENSE)

Jest plugin to mock dates, times, and datetimes.

## Getting Started

Install `jest-plugin-clock` using `yarn`:

```shell
yarn add --dev jest-plugin-clock
```

## Motivation

When testing dates, you often want to have deterministic outcomes even when using `new Date()` and `Date.now()`. This allows you to set the clock time such that your test can compute the deterministic outcome each time.

## Usage

If you want, you can import `clock` from `jest-plugin-clock` at the top of every test:

```javascript
import clock from 'jest-plugin-clock';
```

If you want to install `clock` as a global, you can modify the `jest` section of your `package.json` to include:

```json
"jest": {
  "setupFiles": [
    "jest-plugin-clock/setup"
  ]
}
```

## Example

Here's an example test that tests `clock` itself:

```javascript
describe('clock', () => {
  context('with string date', () => {
    clock.set('2017-08-16T15:20:40.450');

    it('returns the correct year', () => {
      expect(new Date().getFullYear()).toEqual(2017);
    });

    it('returns the correct month', () => {
      // getMonth is 0-indexed.
      expect(new Date().getMonth()).toEqual(7);
    });

    it('returns the correct day (date)', () => {
      expect(new Date().getDate()).toEqual(16);
    });

    it('returns the correct hour', () => {
      expect(new Date().getHours()).toEqual(15);
    });

    it('returns the correct minute', () => {
      expect(new Date().getMinutes()).toEqual(20);
    });

    it('returns the correct seconds', () => {
      expect(new Date().getSeconds()).toEqual(40);
    });

    it('returns the correct milliseconds', () => {
      expect(new Date().getMilliseconds()).toEqual(450);
    });
  });

  context('with date object', () => {
    clock.set(new Date('2017-08-16T15:20:40.450'));

    it('returns the correct year', () => {
      expect(new Date().getFullYear()).toEqual(2017);
    });

    it('returns the correct month', () => {
      // getMonth is 0-indexed.
      expect(new Date().getMonth()).toEqual(7);
    });

    it('returns the correct day (date)', () => {
      expect(new Date().getDate()).toEqual(16);
    });

    it('returns the correct hour', () => {
      expect(new Date().getHours()).toEqual(15);
    });

    it('returns the correct minute', () => {
      expect(new Date().getMinutes()).toEqual(20);
    });

    it('returns the correct seconds', () => {
      expect(new Date().getSeconds()).toEqual(40);
    });

    it('returns the correct milliseconds', () => {
      expect(new Date().getMilliseconds()).toEqual(450);
    });
  });
});
```
