// Libraries
import context from 'jest-plugin-context';
import set from 'jest-plugin-set';
import action from 'jest-plugin-action';


/* eslint-disable no-undef */
describe('action', () => {
  set('a', () => 1);
  set('b', () => 2);
  action('add', () => a + b);
  action('multiply', () => a * b);
  action('divide', () => {
    if (b === 0) {
      throw new Error('Cannot divide by zero');
    } else {
      return a / b;
    }
  });

  describe('add', () => {
    it('should not throw an error', () => {
      expect(add).not.toThrow();
    });
  });

  describe('multiply', () => {
    it('should not throw an error', () => {
      expect(multiply).not.toThrow();
    });
  });

  describe('division', () => {
    context('with b < 0', () => {
      set('b', () => -42);

      it('should not throw an error', () => {
        expect(divide).not.toThrow();
      });
    });

    context('with b = 0', () => {
      set('b', () => 0);

      it('should throw an error', () => {
        expect(divide).toThrow('Cannot divide by zero');
      });
    });

    context('with b > 0', () => {
      set('b', () => 100);

      it('should not throw an error', () => {
        expect(divide).not.toThrow();
      });
    });
  });
});
