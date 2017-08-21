const expect = require('jest-matchers');
const {
  toConsoleDebug,
  toConsoleError,
  toConsoleLog,
  toConsoleWarn,
  toThrowWarning,
} = require('./');


// Injects custom matchers into jest.
expect.extend({
  toConsoleDebug,
  toConsoleError,
  toConsoleLog,
  toConsoleWarn,
  toThrowWarning,
});
