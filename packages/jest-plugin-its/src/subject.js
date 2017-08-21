// Libraries
import invariant from 'invariant';
import set from 'jest-plugin-set';


// NOTE(mark): We have to give the globally set __subject a different
// name so it doesn't override the function `subject`.
const subject = (block) => {
  invariant(
    typeof block === 'function',
    `'subject' requires a function. Received: ${typeof block}.`,
  );

  set('__subject', block);
};


export default subject;
