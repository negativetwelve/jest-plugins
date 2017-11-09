// Libraries
import {fs as mockFs, vol} from 'memfs';


/**
 * We allow passing in a nested object of paths. This function combines the
 * paths into a single flattened object of absolute path -> content.
 */
const flatten = (absolutePath, object) => {
  const accumulate = (all, [currentPath, value]) => {
    const fullPath = `${absolutePath}/${currentPath}`;

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
 * Root of the filesystem.
 */
const root = '/';

/**
 * Escape hatch that uses real `fs` to read files from the filesystem.
 * Use this to load fixture data from real files.
 */
const read = (filename) => {
  return require.requireActual('fs').readFileSync(filename, 'utf8');
};

/**
 * Returns a JS object with the mocked filesystem contents.
 */
const files = () => vol.toJSON();

/**
 * When we mock the filesystem, we traverse the object to get the
 * full paths to the file.
 */
const mock = (filesystem = {}, fsRoot = root) => {
  vol.fromJSON(flatten(fsRoot, filesystem), fsRoot);
};

/**
 * Reads the passed in files from the filesystem and adds them to the
 * virtual mocked filesystem
 */
const unmock = (files = []) => {
  const readAll = (all, file) => ({...all, [file]: read(file)});
  const filesystem = files.reduce(readAll, {});

  mock(filesystem, '');
};

/**
 * Resets the mocked volume and restores the fs module.
 */
const restore = () => vol.reset();

/**
 * Mocked filesystem module that contains the helper functions to create and
 * reset filesystems.
 */
const jestFs = {
  root,
  files,

  // NOTE(mark): This allows the root to be configurable by the fs object.
  mock: (filesystem) => mock(filesystem, jestFs.root),
  read,
  restore,
  unmock,
};


export {mockFs as mock};
export default jestFs;
