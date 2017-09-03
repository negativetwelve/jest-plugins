// Libraries
import React from 'react';

// Modules
import itShallowRenders from '../itShallowRenders';


// Test Components
const View = () => <div><div /></div>;
const Text = () => <div><div /></div>;


/* eslint-disable no-undef */
describe('itShallowRenders', () => {
  describe('View', () => {
    itShallowRenders(() => <View />);
  });

  describe('Text', () => {
    itShallowRenders(() => <Text />);
  });
});
