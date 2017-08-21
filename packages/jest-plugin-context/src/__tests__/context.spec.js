// Modules
import context from 'jest-plugin-context';


describe('context', () => {
  context('with context', () => {
    it('should run tests normally', () => {
      expect(1 + 1).toEqual(2);
    });
  });
});
