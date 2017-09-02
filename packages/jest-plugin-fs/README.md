# jest-plugin-fs

[![npm](https://img.shields.io/npm/v/jest-plugin-fs.svg)](https://www.npmjs.com/package/jest-plugin-fs)
[![npm](https://img.shields.io/npm/dt/jest-plugin-fs.svg)](https://www.npmjs.com/package/jest-plugin-fs)
[![npm](https://img.shields.io/npm/l/jest-plugin-fs.svg)](https://github.com/negativetwelve/jest-plugins/blob/master/LICENSE)

Jest plugin for mocking out the filesystem.

## Getting Started

Install `jest-plugin-fs` using `yarn`:

```shell
yarn add --dev jest-plugin-fs
```

## Motivation

Jest currently does not have an easy way to mock out the filesystem. This plugin aims to change that. Here's an example:

```javascript
describe('FileWriter', () => {
  beforeEach(() => jest.fs.create({}));
  afterEach(() => jest.fs.restore());

  describe('.write', () => {
    set('filename', () => 'path/to/my/file');
    action('write', () => FileWriter.write(filename));

    it('should write a new file', () => {
      expect(write).not.toThrow();
    });

    describe('resulting file', () => {
      beforeEach(() => write());

      it('should create the new file', () => {
        expect(fs.readFileSync(filename)).toEqual('new-file');
      });
    });
  });
});
```

## Usage

If you want, you can import `fs` from `jest-plugin-fs` at the top of every test:

```javascript
import fs from 'jest-plugin-fs';
```

If you want to install `fs` attached to the global `jest` object, you can modify the `jest` section of your `package.json` to include:

```json
"jest": {
  "setupFiles": [
    "jest-plugin-fs/setup"
  ]
}
```

## Example

Here's an example test that tests `fs` itself:

```javascript
// TODO
```
