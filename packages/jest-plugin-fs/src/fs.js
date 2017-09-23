// Libraries
import fs from 'fs';
import {fs as mockFs, vol} from 'memfs';
import {ufs} from 'unionfs';


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
const jestFs = {
  root: '/',

  /**
   * When we mock the filesystem, we need to first reset, then create an
   * instance from JSON.
   */
  mock: (filesystem = {}) => {
    vol.reset();
    vol.fromJSON(flatten(jestFs.root, filesystem), jestFs.root);
  },

  /**
   * Returns a JS object with the mocked filesystem contents.
   */
  read: () => vol.toJSON(),

  /**
   * Resets the mocked volume and restores the fs module.
   */
  restore: () => {
    vol.reset();
  },
};

ufs.use(mockFs).use(fs);


export {ufs as mock};
export default jestFs;
