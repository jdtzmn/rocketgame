import React from 'react';
import { shallow } from 'enzyme';
import Welcome from './Welcome';

describe('Welcome', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Welcome />);
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a div', () => {
    expect(wrapper.find('div')).toHaveLength(1);
  });

  it('should render an h1 element inside div', () => {
    expect(wrapper
      .find('div')
      .find('h1'))
      .toHaveLength(1);
  });

  it('should render h1 element with text "Hello World"', () => {
    expect(wrapper
      .find('h1')
      .text())
      .toBe('Rocket Game');
  });
});
