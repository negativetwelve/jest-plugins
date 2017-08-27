// Modules
import {its, subject} from 'jest-plugin-its';


/* eslint-disable no-undef */
describe('its', () => {
  describe('with primitives', () => {
    subject(() => ({a: 1, b: 2}));
    its('a', () => isExpected.toEqual(1));
    its('b', () => isExpected.toEqual(2));
  });

  describe('with functions', () => {
    subject(() => ({a: () => 1, b: () => 2}));
    its('a', () => isExpected.toEqual(1));
    its('b', () => isExpected.toEqual(2));
  });

  describe('with nested properties', () => {
    subject(() => ({a: {b: {c: 1, d: 2}}}));
    its('a.b.c', () => isExpected.toEqual(1));
    its('a.b.d', () => isExpected.toEqual(2));
  });
});
