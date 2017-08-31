// Libraries
import React from 'react';

// Modules
import itRenders from '../itRenders';


// Test Components
const View = () => <div />;
const Text = () => <div />;


/* eslint-disable no-undef */
describe('itRenders', () => {
  describe('View', () => {
    itRenders(() => <View />);
  });

  describe('Text', () => {
    itRenders(() => <Text />);
  });
});
