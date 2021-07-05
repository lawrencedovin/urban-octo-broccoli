import React from 'react';
import { render } from '@testing-library/react';
import FixedComponent from './FixedComponent';

//smoke test
test('it render w/o crashing', () => {
  render(<FixedComponent />);
})


//snapshot test
test('it matches snapshot', () => {
    const { asFragment } = render(<FixedComponent />);
    expect(asFragment()).toMatchSnapshot();
})

