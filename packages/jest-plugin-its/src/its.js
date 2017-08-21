// Libraries
import invariant from 'invariant';
import set from 'jest-plugin-set';


// TOOD(mark): We should try to create a local scope to not clutter
// global. This works for now.
const scope = global;

/**
 * Method can either be a single string `getTask` or it can be a chain
 * of methods `props.app.cdn`. We evaluate all parts of the split method
 * making sure to chain the caller as we traverse the methods.
 */
const evaluateMethod = (subject, method) => {
  const tokens = method.split('.');
  let caller = subject;
  let value = subject;

  tokens.forEach(token => {
    caller = value;

    // By default, we just treat it as a property.
    //
    // Example:
    //     its('id', () => {});
    //
    // This tests `subject.id`.
    //
    value = value[token];

    invariant(
      value !== undefined,
      `Undefined method: '${token}' for subject: ${caller}.`,
    );

    // If it's a function (like a getter function) and it takes in 0 args,
    // then we can also evaluate it:
    //
    // Example:
    //     its('getIsCurrent', () => {});
    //
    // This tests `subject.getIsCurrent()`.
    //
    if (typeof value === 'function') {
      value = value.call(caller);
    }
  });

  return value;
};

const its = (method, expectation) => {
  describe(`#${method}`, () => {
    set('__itsSubject', () => {
      const subject = scope.__subject;

      invariant(
        subject !== undefined,
        `Subject is not defined. Make sure you set a subject using: ` +
        `'subject(() => someVariable);'`,
      );

      return evaluateMethod(subject, method);
    });

    set('isExpected', () => expect(scope.__itsSubject));

    // TODO(mark): Better it messages, right now we only get a good message
    // when it fails.
    it(`is correct`, () => {
      // Call the expectation to assert values.

      // TODO(mark): expect.assertions(number) is coming soon to jest.
      // Until then, we'll have to keep hackily checking that the return
      // value is undefined.
      const result = expectation.call(scope);

      // All calls to `isExpected` will set the `actual` value.
      // This is a quick check to make sure `isExpected` was called.
      invariant(
        typeof result === 'undefined',
        `Expectation did not call 'isExpected'. Test did not validate ` +
        `anything.`
      );
    });
  });
};


export default its;
