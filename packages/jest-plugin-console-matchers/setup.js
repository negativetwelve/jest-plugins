const expect = require('jest-matchers');
const {
  toConsoleError,
  toConsoleInfo,
  toConsoleLog,
  toConsoleWarn,
  toThrowWarning,
} = require('./');


// Injects custom matchers into jest.
expect.extend({
  toConsoleError,
  toConsoleInfo,
  toConsoleLog,
  toConsoleWarn,
  toThrowWarning,
});
