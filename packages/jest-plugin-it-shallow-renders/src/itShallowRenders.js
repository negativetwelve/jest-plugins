// Libraries
import {shallow} from 'enzyme';
import toJSON from 'enzyme-to-json';


const itShallowRenders = (render) => {
  it('shallow renders without error', () => {
    expect(render).not.toThrow();
  });

  it('shallow renders snapshot', () => {
    const rendered = render();
    const element = toJSON(shallow(rendered));

    expect(element).toMatchSnapshot();
  });
};


export default itShallowRenders;
