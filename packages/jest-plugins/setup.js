/**
 * Ideally, this would be the only entry point to jest-plugins. However, we
 * have a couple of issues to overcome:
 *
 *   1. jest-config and jest-validate work together to validate the config.
 *      This raises warnings whenever a custom key is applied to the config.
 *   2. We cannot reliably require the package.json of the currently tested
 *      project because of the new `projects` feature of jest. Once we have
 *      a way to resolve the package.json, we can handle setting up the plugins
 *      automatically.
 *
 */
