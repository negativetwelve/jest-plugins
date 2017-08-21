// Modules
import set from '../set';


/* eslint-disable no-undef */
describe('set', () => {
  set('a', () => 1);
  set('b', () => 2);
  set('c', () => 'hello world');

  describe('variables set to primitives', () => {
    it('should set a', () => {
      expect(a).toEqual(1);
    });

    it('should set b', () => {
      expect(b).toEqual(2);
    });

    it('should set c', () => {
      expect(c).toEqual('hello world');
    });
  });

  describe('variables set to arrays', () => {
    set('a', () => [1, 2, 3]);

    it('should properly set arrays', () => {
      expect(a).toEqual([1, 2, 3]);
    });
  });

  describe('variables set to objects', () => {
    set('b', () => ({test: '1', value: 2, other: 'three'}));

    it('should properly set objects', () => {
      expect(b).toEqual({other: 'three', value: 2, test: '1'});
    });
  });

  describe('nested set calls', () => {
    set('a', () => 10);

    it('should take the inner set', () => {
      expect(a).toEqual(10);
    });
  });

  describe('variables set within other set calls', () => {
    set('b', () => a + 10);

    it('should evaluate outer variables', () => {
      expect(b).toEqual(11);
    });

    it('should be able to reference variables from the outer scope', () => {
      expect(c).toEqual('hello world');
    });
  });
});
