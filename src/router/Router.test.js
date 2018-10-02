import React from 'react';
import { shallow } from 'enzyme';
import Router from './Router';

describe('Router', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Router />);
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a Switch component', () => {
    expect(wrapper.find('Switch')).toHaveLength(1);
  });

  it('should render 1 Route component inside Switch component', () => {
    expect(wrapper
      .find('Switch')
      .find('Route'))
      .toHaveLength(1);
  });
});
