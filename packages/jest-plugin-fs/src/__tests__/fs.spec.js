// Modules
import fsExtra from 'fs-extra';
import set from 'jest-plugin-set';
import fs from '../fs';


/* eslint-disable no-undef */
describe('fs', () => {
  beforeEach(() => fs.mock());
  afterEach(() => fs.restore());

  describe('new file', () => {
    set('filename', () => 'some/path/to/file.txt');
    beforeEach(() => fsExtra.outputFileSync(filename, 'test-content'));

    it('should create the new file', () => {
      expect(fsExtra.readFileSync(filename, 'utf8')).toEqual('test-content');
    });
  });
});
