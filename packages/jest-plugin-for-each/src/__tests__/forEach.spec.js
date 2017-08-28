// Modules
import forEach from '../forEach';


/* eslint-disable no-undef */
describe('forEach', () => {
  forEach({value: [1, 2, 3]}, () => {
    it('should be > 0', () => {
      expect(value).toBeGreaterThan(0);
    });
  });

  forEach({value: [-1, -2, -3]}, () => {
    it('should be < 0', () => {
      expect(value).toBeLessThan(0);
    });
  });
});
