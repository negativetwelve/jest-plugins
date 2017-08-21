/**
 * Base of all console matchers. This is a higher order function that mocks
 * out the console method and counts the number of calls.
 */
export const createConsoleMatcher = (method) => (callback, message) => {
  const spy = jest.spyOn(global.console, method).mockImplementation(jest.fn);
  const value = callback();
  const count = spy.mock.calls.length;
  const pass = count > 0;

  // Restore the mock to allow other console methods.
  spy.mockRestore();

  if (count > 0) {
    return {
      pass: true,
      message: () => `expected 'console.${method}' to not be called`,
    };
  } else {
    return {
      pass: false,
      message: () => `expected 'console.${method}' to be called at least once`,
    };
  }
};

export const toConsoleError = createConsoleMatcher('error');
export const toConsoleInfo = createConsoleMatcher('info');
export const toConsoleLog = createConsoleMatcher('log');
export const toConsoleWarn = createConsoleMatcher('warn');

// Special case for Facebook's warning module.
export const toThrowWarning = createConsoleMatcher('error');
