// Libraries
import Renderer from 'react-test-renderer';


const itRenders = (render) => {
  it('renders without error', () => {
    expect(render).not.toThrow();
  });

  it('renders snapshot', () => {
    const rendered = render();
    const element = Renderer.create(rendered).toJSON();

    expect(element).toMatchSnapshot();
  });
};


export default itRenders;
