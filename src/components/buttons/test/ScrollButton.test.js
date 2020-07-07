import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import { ScrollButton } from '../ScrollButton';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('ScrollButton Component', () => {
  it('should render scroll button component', ()=>{
    const wrapper = shallow(<ScrollButton onClick={() => {}}/>);
    expect(wrapper.exists()).toBe(true);
  })
})
