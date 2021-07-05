import React from 'react';
import { render } from '@testing-library/react';
import Counter from './Counter';

test('it render w/o crashing', () => {
  render(<Counter />);
})

test('playing with queries', () => {
    const { getByText } = render(<Counter />);
    getByText(`Let's count`, {exact: false});
})