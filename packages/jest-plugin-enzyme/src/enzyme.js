// Libraries
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJSON from 'enzyme-to-json';

Enzyme.configure({adapter: new Adapter()});

export {shallow, toJSON};
export default Enzyme;
