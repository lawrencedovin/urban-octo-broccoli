import React from 'react';
import { render } from '@testing-library/react';
import Dog from './Dog';

it('should render w/o crashing', () => {
  render(<Dog name='Pancake' isAdopted={true} />);
});

it('should match snapshot with isAdopted to true', () => {
    const {asFragment} = render(<Dog name='Pancake' isAdopted={true} />);
    expect(asFragment()).toMatchSnapshot();
})

it('should match snapshot with isAdopted to false', () => {
    const {asFragment} = render(<Dog name='Pancake' isAdopted={false} />);
    expect(asFragment()).toMatchSnapshot();
})