/**
 * Takes in a package.json from the root directory. This reads the package.json
 * and installs all jest-plugins. If a plugin is incorrectly installed or not
 * found, it will throw an error.
 */
export const install = (json) => {
  // Sadly, because jest validates its config, we cannot add an additional
  // key. We use a top-level 'jest-plugins' key instead.
  const plugins = json['jest-plugins'] || [];

  plugins.forEach(plugin => {
    try {
      require(`${plugin}/setup`);
    } catch (error) {
      throw new Error(
        `Unable to find jest plugin: '${plugin}'. Check that your ` +
        `dependencies are installed correctly and that '${plugin}' is a ` +
        `valid jest plugin.`
      );
    }
  });
};
