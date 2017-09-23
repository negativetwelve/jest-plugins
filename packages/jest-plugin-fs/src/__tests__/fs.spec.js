// Modules
import context from 'jest-plugin-context';
import set from 'jest-plugin-set';
import fsExtra from 'fs-extra';
import fs from '../fs';


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

  describe('#read', () => {
    context('with empty filesystem', () => {
      beforeEach(() => fs.mock());

      it('should return an empty object', () => {
        expect(fs.read()).toEqual({});
      });
    });

    context('with files', () => {
      beforeEach(() => fs.mock({
        test: 'content',
        hello: 'goodbye',
      }));

      it('should return the files', () => {
        expect(fs.read()).toEqual({test: 'content', hello: 'goodbye'});
      });
    });

    content('with nested files', () => {
      beforeEach(() => fs.mock({
        test: {
          nested: {
            file: 'hi',
          },
        },
      }));

      it('should return the full path', () => {
        expect(fs.read()).toEqual({'/test/nested/file': 'hi'});
      });
    });
  });
});
