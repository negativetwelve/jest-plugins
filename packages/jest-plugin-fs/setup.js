/**
 * Installs fs and makes it available on the jest global object throughout all
 * test files.
 */
global.fs = require('./').default;
global.fs.inject();
