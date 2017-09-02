// Libraries
import mockFs from 'mock-fs';


const fs = {
  create: (filesystem) => mockFs(filesystem),
  restore: () => mockFs.restore(),
};


export default fs;
