// Modules
import action from 'jest-plugin-action';
import context from 'jest-plugin-context';
import '../../setup';


/* eslint-disable no-undef */
describe('console matchers', () => {
  action('noop', () => {});

  describe('toConsoleDebug', () => {
    context('with console.debug message', () => {
      action('debug', () => console.debug('debug message'));

      it('should console.debug', () => {
        expect(debug).toConsoleDebug();
      });
    });

    context('without console.debug message', () => {
      it('should not console.debug', () => {
        expect(noop).not.toConsoleDebug();
      });
    });
  });
});
