// Libraries
import Renderer from 'react-test-renderer';


const itShallowRenders = (render) => {
  it('shallow renders without error', () => {
    expect(render).not.toThrow();
  });

  it('shallow renders snapshot', () => {
    const rendered = render();
    const element = Renderer.create(rendered).toJSON();

    expect(element).toMatchSnapshot();
  });
};


export default itShallowRenders;
