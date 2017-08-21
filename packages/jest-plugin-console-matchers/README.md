# jest-plugin-console-matchers

[![npm](https://img.shields.io/npm/v/jest-plugin-console-matchers.svg)](https://www.npmjs.com/package/jest-plugin-console-matchers)
[![npm](https://img.shields.io/npm/dt/jest-plugin-console-matchers.svg)](https://www.npmjs.com/package/jest-plugin-console-matchers)
[![npm](https://img.shields.io/npm/l/jest-plugin-console-matchers.svg)](https://github.com/negativetwelve/jest-plugins/blob/master/LICENSE)

Adds `jest` matchers for watching `console` methods.

## Getting Started

Install `jest-plugin-console-matchers` using `yarn`:

```shell
yarn add --dev jest-plugin-console-matchers
```

## Matchers

Adds the following matchers which check for `console` methods to be called:

| Matcher | Method |
|---------|--------|
| `toConsoleError` | `console.error` |
| `toConsoleInfo` | `console.info` |
| `toConsoleLog` | `console.log` |
| `toConsoleWarn` | `console.warn` |
| `toThrowWarning` | `warning` |

## Usage

If you want, you can import the matchers to install them in a set of tests.

```javascript
import 'jest-plugin-console-matchers/setup';
```

If you want to install the matchers globally, you can modify the jest section of your package.json to include:

```json
"jest": {
  "setupFiles": [
    "jest-plugin-console-matchers/setup"
  ]
}
```

## Example

Example spec that uses these matchers.

```javascript
import 'jest-plugin-console-matchers/setup';

describe('User', () => {
  set('user', () => new User());

  describe('.sayHello', () => {
    it('logs hello', () => {
      expect(() => user.sayHello()).toConsoleLog();
    });
  });

  describe('.delete', () => {
    it('warns about deleting', () => {
      expect(() => user.delete()).toConsoleWarn();
    });
  });
});
```

## Contributing

If you have any ideas on how this plugin could be better, [create an Issue](https://github.com/negativetwelve/jest-plugins/issues) or [submit a PR](https://github.com/negativetwelve/jest-plugins/pulls).
