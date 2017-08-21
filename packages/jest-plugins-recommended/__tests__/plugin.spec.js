// Modules
import 'jest-plugins-recommended/setup';


/* eslint-disable no-undef */
describe('jest-plugins-recommended', () => {
  const globals = [
    'action',
    'context',
    'its',
    'set',
    'subject',
  ];

  globals.forEach(globalFunction => {
    describe(globalFunction, () => {
      set('globalFunction', () => globalFunction);
      it('should be defined as a global', () => {
        expect(global[globalFunction]).toBeDefined();
      });
    });
  });
});
