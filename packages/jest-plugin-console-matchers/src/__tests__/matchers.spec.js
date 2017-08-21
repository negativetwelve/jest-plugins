// Modules
import action from 'jest-plugin-action';
import context from 'jest-plugin-context';
import 'jest-plugin-console-matchers/setup';


/* eslint-disable no-undef */
describe('console matchers', () => {
  action('noop', () => {});

  describe('toConsoleError', () => {
    context('with console.error message', () => {
      action('error', () => console.error('error message'));

      it('should console.error', () => {
        expect(error).toConsoleError();
      });
    });

    context('without console.error message', () => {
      it('should not console.error', () => {
        expect(noop).not.toConsoleError();
      });
    });
  });

  describe('toConsoleInfo', () => {
    context('with console.info message', () => {
      action('info', () => console.info('info message'));

      it('should console.info', () => {
        expect(info).toConsoleInfo();
      });
    });

    context('without console.info message', () => {
      it('should not console.info', () => {
        expect(noop).not.toConsoleInfo();
      });
    });
  });

  describe('toConsoleLog', () => {
    context('with console.log message', () => {
      action('log', () => console.log('log message'));

      it('should console.log', () => {
        expect(log).toConsoleLog();
      });
    });

    context('without console.log message', () => {
      it('should not console.log', () => {
        expect(noop).not.toConsoleLog();
      });
    });
  });

  describe('toConsoleWarn', () => {
    context('with console.warn message', () => {
      action('warn', () => console.warn('warn message'));

      it('should console.warn', () => {
        expect(warn).toConsoleWarn();
      });
    });

    context('without console.warn message', () => {
      it('should not console.warn', () => {
        expect(noop).not.toConsoleWarn();
      });
    });
  });
});
