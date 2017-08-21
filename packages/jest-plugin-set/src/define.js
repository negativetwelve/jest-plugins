/**
 * Defines a variable called `name` in scope `scope`. The value is evaluated
 * the only when the variable is used. This allows us to create
 * lazily evaluated variables for testing purposes.
 */
const define = ({scope, name, block}) => {
  let value;
  let isEvaluated = false;

  Object.defineProperty(scope, name, {
    configurable: true,

    // Set to the lazily evaluated function.
    get() {
      // If the value has been computed before, return that value.
      // Otherwise, we should compute it!
      if (!isEvaluated) {
        try {
          value = block.call(scope);
        } finally {
          isEvaluated = true;
        }
      }

      return value;
    },
  });
};


export default define;
