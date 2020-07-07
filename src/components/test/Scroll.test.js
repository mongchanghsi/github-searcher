import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Scroll from '../Scroll';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Scroll Component', () => {
  it('should render scroll component', ()=>{
    const wrapper = shallow(<Scroll showParams={10}/>);
    expect(wrapper.exists()).toBe(true);
  });

})
