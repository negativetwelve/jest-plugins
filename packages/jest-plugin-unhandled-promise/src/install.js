// Log all unhandled promises so we can find the source of them.
export default (log = console.error) => {
  process.on('unhandledRejection', error => {
    log(error.stack);
  });
};
