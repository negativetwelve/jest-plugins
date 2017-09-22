// Libraries
import {vol} from 'memfs';


const fs = {
  mock: (filesystem = {}) => vol.fromJSON(filesystem, '/'),
  read: () => vol.toJSON(),
  restore: () => vol.reset(),
};


export default fs;
