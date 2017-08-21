/**
 * Sets `context` as a valid global in jest. Because `describe` is not defined
 * at this point in the setup process, we define a lazy getter to access it.
 *
 * NOTE(mark): When jest-plugins works properly, this hack won't be required.
 */
Object.defineProperty(global, 'context', {
  get: function() {
    return require('./').default;
  },
});
