// Modules
import '../setup';
import React from 'react';


// Test Components
const View = () => <div />;
const Text = () => <div />;
const Undefined = () => undefined;


/* eslint-disable no-undef */
describe('jest-plugins-react', () => {
  const globals = [
    'itRenders',
  ];

  globals.forEach(globalFunction => {
    describe(globalFunction, () => {
      it('should be defined as a global', () => {
        expect(global[globalFunction]).toBeDefined();
      });
    });
  });

  describe('itRenders', () => {
    itRenders(() => <View />);
    itRenders(() => <Text />);
  });
});
