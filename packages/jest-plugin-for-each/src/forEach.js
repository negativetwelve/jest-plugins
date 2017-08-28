// Libraries
import invariant from 'invariant';
import set from 'jest-plugin-set';


/**
 * Allows us to test multiple values for the same variable with the same
 * desired outcome. Example, say there were multiple values that all caused
 * an error, it would look like:
 *
 *   forEach({numTires: [1, 2, 3]}, () => {
 *     it('raises an error when numTires < 4', () => {
 *       expect(drive(numTires)).toThrow();
 *     });
 *   });
 *
 */
const forEach = (object, block) => {
  const pairs = Object.entries(object);

  invariant(
    pairs.length === 1,
    `forEach accepts exactly one key / value pair for evaluating. ` +
    `Passing multiple values is currently not supported.`,
  );

  const [key, values] = pairs[0];

  values.map(value => {
    describe(`with ${key} set to ${value}`, () => {
      set(key, () => value);
      block();
    });
  });
};


export default forEach;
