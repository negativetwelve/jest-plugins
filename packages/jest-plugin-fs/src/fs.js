// Libraries
import mockFs from 'mock-fs';


const fs = {
  mock: (filesystem = {}) => mockFs(filesystem),
  restore: () => mockFs.restore(),
};


export default fs;
