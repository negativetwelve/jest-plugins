// Modules
import context from 'jest-plugin-context';
import set from 'jest-plugin-set';
import fsExtra from 'fs-extra';
import path from 'path';
import fs from '../fs';

// Path to the fixtures directory.
const FIXTURES = path.join(__dirname, '..', '__fixtures__');

// Require the mock for the `fs` module.
jest.mock('fs', () => require('jest-plugin-fs/mock'));

/* eslint-disable no-undef */
describe('fs', () => {
  beforeEach(() => fs.mock());
  afterEach(() => fs.restore());

  context('with new file', () => {
    set('filename', () => 'some/path/to/file.txt');
    beforeEach(() => fsExtra.outputFileSync(filename, 'test-content'));

    it('should create the new file', () => {
      expect(fsExtra.readFileSync(filename, 'utf8')).toEqual('test-content');
    });
  });

  context('with nested directories', () => {
    set('filesystem', () => ({
      test: {
        directory: {
          nested: {
            file: 'hello there',
          },
        },
      },
    }));

    beforeEach(() => fs.mock(filesystem));

    it('should create nested directories', () => {
      expect(
        fsExtra.readFileSync('/test/directory/nested/file', 'utf8'),
      ).toEqual('hello there');
    });
  });

  describe('#files', () => {
    context('with empty filesystem', () => {
      beforeEach(() => fs.mock());

      it('should return an empty object', () => {
        expect(fs.files()).toEqual({});
      });
    });

    context('with files', () => {
      beforeEach(() => fs.mock({
        test: 'content',
        hello: 'goodbye',
      }));

      it('should return the files', () => {
        expect(fs.files()).toEqual({'/test': 'content', '/hello': 'goodbye'});
      });
    });

    context('with nested files', () => {
      beforeEach(() => fs.mock({
        test: {
          nested: {
            file: 'hi',
          },
        },
      }));

      it('should return the full path', () => {
        expect(fs.files()).toEqual({'/test/nested/file': 'hi'});
      });
    });
  });

  describe('#unmock', () => {
    context('with unmocked file', () => {
      set('file', () => path.join(FIXTURES, 'test.txt'));

      beforeEach(() => fs.unmock([file]));

      it('should exist in the virtual filesystem', () => {
        expect(fsExtra.readFileSync(file, 'utf8')).toEqual('this is a test\n');
      });
    });
  });
});
