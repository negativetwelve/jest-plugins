/**
 * Installs fs and makes it available on the jest global object throughout all
 * test files.
 */
jest.fs = require('./').default;
