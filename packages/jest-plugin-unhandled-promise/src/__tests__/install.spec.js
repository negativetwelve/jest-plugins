// Modules
import action from 'jest-plugin-action';
import context from 'jest-plugin-context';
import set from 'jest-plugin-set';
import install from 'jest-plugin-unhandled-promise';


/* eslint-disable no-undef */
describe('unhandled promise', () => {
  action('createUnhandledPromise', () => new Promise((resolve, reject) => {
    // Inner promise is the unhandled one.
    new Promise((resolve, reject) => reject(new Error('unhandled error')));

    // HACK(mark): Need to do this on the next tick, hence the setTimeout.
    setTimeout(resolve, 0);
  }));

  context('with default log', () => {
    beforeEach(async () => {
      console.error = jest.fn();
      install();
      await createUnhandledPromise();
    });

    it('should call console.error 1 time', () => {
      expect(console.error).toHaveBeenCalledTimes(1);
    });
  });

  context('with custom console.log', () => {
    beforeEach(async () => {
      console.log = jest.fn();
      install(console.log);
      await createUnhandledPromise();
    });

    it('should call console.log 1 time', () => {
      expect(console.log).toHaveBeenCalledTimes(1);
    });
  });

  context('with custom log', () => {
    set('log', () => jest.fn());
    beforeEach(async () => {
      install(log);
      await createUnhandledPromise();
    });

    it('should call the custom log 1 time', () => {
      expect(log).toHaveBeenCalledTimes(1);
    });
  });

  context('with multiple calls', () => {
    set('handler', () => jest.fn());
    beforeEach(async () => {
      install(handler);
      await createUnhandledPromise();
      await createUnhandledPromise();
      await createUnhandledPromise();
      await createUnhandledPromise();
      await createUnhandledPromise();
    });

    it('should call the custom handler 5 times', () => {
      expect(handler).toHaveBeenCalledTimes(5);
    });
  });
});
