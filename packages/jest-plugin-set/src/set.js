// Modules
import define from './define';
import undefine from './undefine';


/**
 * 'set' allows us to lazily evaluate blocks and override them within
 * different 'describe' blocks.
 */
const set = (name, block) => {
  beforeEach(() => {
    define({scope: global, name, block});
  });

  afterEach(() => {
    undefine({scope: global, name});
  });
};


export default set;
