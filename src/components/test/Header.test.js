import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Header from '../Header';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Header Component', () => {
  it('should render header component', ()=>{
    const wrapper = shallow(<Header/>);
    expect(wrapper.exists()).toBe(true);
  })
})
