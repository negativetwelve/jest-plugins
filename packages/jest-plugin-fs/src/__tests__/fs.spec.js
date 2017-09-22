// Modules
import fsExtra from 'fs-extra';
import set from 'jest-plugin-set';
import context from 'jest-plugin-context';
import fs from '../fs';


/* eslint-disable no-undef */
describe('fs', () => {
  beforeEach(() => fs.inject());

  context('with mock fs', () => {
    beforeEach(() => fs.mock());
    afterEach(() => fs.restore());

    context('with new file', () => {
      set('filename', () => 'some/path/to/file.txt');
      beforeEach(() => fsExtra.outputFileSync(filename, 'test-content'));

      it('should create the new file', () => {
        expect(fsExtra.readFileSync(filename, 'utf8')).toEqual('test-content');
      });
    });
  });
});
