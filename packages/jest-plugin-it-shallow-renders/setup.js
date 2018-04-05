// Set up Enzyme for React.
require('jest-plugin-enzyme/setup');

/**
 * Installs itShallowRenders and makes it available as a global function
 * throughout all test files.
 */
global.itShallowRenders = require('./').default;
