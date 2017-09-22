// Libraries
import memfs from 'memfs';


const fs = {
  // For jest, this will set up mocks so that `fs` and `fs-extra` will
  // be overwritten.
  inject: () => {
    jest.mock('fs', () => require('memfs'));
    jest.mock('fs-extra', () => require('memfs'));
  },

  mock: (filesystem = {}) => memfs.vol.fromJSON(filesystem, '/'),
  read: () => memfs.vol.toJSON(),
  restore: () => memfs.vol.reset(),
};


export default fs;
