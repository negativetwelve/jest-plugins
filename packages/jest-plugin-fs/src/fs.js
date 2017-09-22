// Libraries
import {vol} from 'memfs';


const fs = {
  /**
   * When we mock the filesystem, we need to first reset, then create an
   * instance from JSON.
   */
  mock: (filesystem = {}) => {
    vol.reset();
    vol.fromJSON(filesystem, '/');
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


export {fs as mock} from 'memfs';
export default fs;
