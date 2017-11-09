// Libraries
import os from 'os';
import path from 'path';
import {fs as mockFs, vol} from 'memfs';


/**
 * Root of the filesystem.
 */
const isWindows = os.platform() === 'win32';
const root = isWindows ? process.cwd().split(path.sep)[0] : '/';

/**
 * We allow passing in a nested object of paths. This function combines the
 * paths into a single flattened object of absolute path -> content.
 */
const flatten = (absolutePath, object) => {
  const accumulate = (all, [currentPath, value]) => {
    const joinedPath = path.join(absolutePath, currentPath);
    const fullPath = path.isAbsolute(currentPath) ? currentPath : joinedPath;

    if (typeof value === 'string') {
      return {...all, [fullPath]: value};
    } else {
      return {...all, ...flatten(fullPath, value)};
    }
  };

  return Object.entries(object).reduce(accumulate, {});
};

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
const unmock = (files = [], fsRoot = root) => {
  const readAll = (all, file) => ({...all, [file]: read(file)});
  const filesystem = files.reduce(readAll, {});

  mock(filesystem, fsRoot);
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
  read,
  restore,

  // NOTE(mark): This allows the root to be configurable by the fs object.
  mock: (filesystem) => mock(filesystem, jestFs.root),
  unmock: (files) => unmock(files, jestFs.root),
};


export {mockFs as mock};
export default jestFs;
