/* eslint-disable no-undef */
describe('installation', () => {
  describe('e2e', () => {
    it('installs plugins without erroring', () => {
      expect(1 + 1).toEqual(2);
    });
  });

  describe('set', () => {
    set('a', () => 1);

    it('installs set properly', () => {
      expect(a).toEqual(1);
    });
  });
});
