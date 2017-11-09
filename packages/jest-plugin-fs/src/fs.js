// Libraries
import {fs as mockFs, vol} from 'memfs';


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
   * Returns a JS object with the mocked filesystem contents.
   */
  files: () => {
    return vol.toJSON();
  },

  /**
   * When we mock the filesystem, we traverse the object to get the
   * full paths to the file.
   */
  mock: (filesystem = {}) => {
    vol.fromJSON(flatten(jestFs.root, filesystem), jestFs.root);
  },

  /**
   * Escape hatch that uses real `fs` to read files from the filesystem.
   * Use this to load fixture data from real files.
   */
  read: (filename) => {
    return require.requireActual('fs').readFileSync(filename, 'utf8');
  },

  /**
   * Resets the mocked volume and restores the fs module.
   */
  restore: () => {
    vol.reset();
  },
};


export {mockFs as mock};
export default jestFs;
