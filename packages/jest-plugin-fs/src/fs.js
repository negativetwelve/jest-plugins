// Libraries
import memfs from 'memfs';


const fs = {
  inject: () => jest.mock('fs', () => require('memfs').fs),
  mock: (filesystem = {}) => memfs.vol.fromJSON(filesystem, '/'),
  read: () => memfs.vol.toJSON(),
  restore: () => memfs.vol.reset(),
};


export default fs;
