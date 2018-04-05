// Libraries
import {shallow, toJSON} from 'jest-plugin-enzyme';

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
