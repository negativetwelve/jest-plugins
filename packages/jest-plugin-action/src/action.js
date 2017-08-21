// Modules
import set from 'jest-plugin-set';


/**
 * 'action' allows us to lazily define functions that we want to test.
 */
const action = (name, block) => set(name, () => block);


export default action;
