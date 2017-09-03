// Modules
import 'raf/polyfill';
import '../setup';
import React from 'react';


// Test Components
const View = () => <div />;
const Text = () => <View><div /></View>;
const Undefined = () => undefined;


/* eslint-disable no-undef */
describe('jest-plugins-react', () => {
  const globals = [
    'itRenders',
    'itShallowRenders',
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

  describe('itShallowRenders', () => {
    itShallowRenders(() => <View />);
    itShallowRenders(() => <Text />);
  });
});
