/**
 * Requires all jest-plugins and sets them up. This assumes that your packages
 * are installed in a flat node_modules directory.
 */
const install = require('./');
const json = require('../../package.json');

install(json);
