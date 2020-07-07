import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import { render } from '@testing-library/react';
import Searcher from '../Searcher';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

// Unit Test
describe('Searcher Component', () => {
  it('should render searcher component', ()=>{
    const wrapper = shallow(<Searcher/>);
    expect(wrapper.exists()).toBe(true);
  });
})

// Integration Test
describe('Searcher Component Full Run', () => {
  it('should be able to display repo upon request', ()=>{
    const wrapper = mount(<Searcher/>);
    const textField = wrapper.find('inputfield');
    console.log(textField)
    expect(textField).toBe('')
    // expect(wrapper.find("TextField")).toBe(true);
  })
})
