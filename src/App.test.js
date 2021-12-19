import App from './App';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

test('renders without error', () => {
  const wrapper = shallow(<App />);
  const appComponent = wrapper.find("[data-test='component-app']");
  expect(appComponent.length).toBe(1);
});

test('renders increment button', () => {
  
});

test('renders counter display', () => {
  
});

test('renders counter starts at 0', () => {
  
});

test('renders clicking button increment counter display ', () => {
  
});
