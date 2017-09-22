// Libraries
import {fs as mock, vol} from 'memfs';


/**
 * We allow passing in a nested object of paths. This function combines the
 * paths into a single flattened object of absolute path -> content.
 */
const flatten = (root, object) => {
  const accumulate = (all, [path, value]) => {
    const fullPath = `${root}/${path}`;

    if (typeof value === 'string') {
      return {
        ...all,
        [fullPath]: value,
      };
    } else {
      return {
        ...all,
        ...flatten(fullPath, value),
      };
    }
  };

  return Object.entries(object).reduce(accumulate, {});
};

/**
 * Mocked filesystem module that contains the helper functions to create and
 * reset filesystems.
 */
const fs = {
  root: '/',

  /**
   * When we mock the filesystem, we need to first reset, then create an
   * instance from JSON.
   */
  mock: (filesystem = {}) => {
    vol.reset();
    vol.fromJSON(flatten(fs.root, filesystem), fs.root);
  },

  /**
   * Returns a JS object with the mocked filesystem contents.
   */
  read: () => vol.toJSON(),

  /**
   * Restores the filesystem and removes all existing files.
   */
  restore: () => vol.reset(),
};


export {mock};
export default fs;
