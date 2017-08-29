// Modules
import context from 'jest-plugin-context';
import clock from '../clock';


/* eslint-disable no-undef */
describe('clock', () => {
  context('with string date', () => {
    clock.set('2017-08-16T15:20:40.450');

    it('returns the correct year', () => {
      expect(new Date().getFullYear()).toEqual(2017);
    });

    it('returns the correct month', () => {
      // getMonth is 0-indexed.
      expect(new Date().getMonth()).toEqual(7);
    });

    it('returns the correct day (date)', () => {
      expect(new Date().getDate()).toEqual(16);
    });

    it('returns the correct hour', () => {
      expect(new Date().getHours()).toEqual(15);
    });

    it('returns the correct minute', () => {
      expect(new Date().getMinutes()).toEqual(20);
    });

    it('returns the correct seconds', () => {
      expect(new Date().getSeconds()).toEqual(40);
    });

    it('returns the correct milliseconds', () => {
      expect(new Date().getMilliseconds()).toEqual(450);
    });
  });

  context('with date object', () => {
    clock.set(new Date('2017-08-16T15:20:40.450'));

    it('returns the correct year', () => {
      expect(new Date().getFullYear()).toEqual(2017);
    });

    it('returns the correct month', () => {
      // getMonth is 0-indexed.
      expect(new Date().getMonth()).toEqual(7);
    });

    it('returns the correct day (date)', () => {
      expect(new Date().getDate()).toEqual(16);
    });

    it('returns the correct hour', () => {
      expect(new Date().getHours()).toEqual(15);
    });

    it('returns the correct minute', () => {
      expect(new Date().getMinutes()).toEqual(20);
    });

    it('returns the correct seconds', () => {
      expect(new Date().getSeconds()).toEqual(40);
    });

    it('returns the correct milliseconds', () => {
      expect(new Date().getMilliseconds()).toEqual(450);
    });
  });
});
