import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import { SearchButton } from '../SearchButton';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('SearchButton Component', () => {
  it('should render search button component', ()=>{
    const wrapper = shallow(<SearchButton/>);
    expect(wrapper.exists()).toBe(true);
  })
})
