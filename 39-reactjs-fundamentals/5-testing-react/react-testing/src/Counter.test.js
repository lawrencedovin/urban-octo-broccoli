import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Counter from './Counter';

test('it render w/o crashing', () => {
  render(<Counter />);
});

test('playing with queries', () => {
    const { getByText } = render(<Counter />);
    getByText(`Let's count`, {exact: false});
});

test('button clicks', () => {
    const { getByText } = render(<Counter/>);
    const h2 = getByText('Current count: 0');
    const btn = getByText('Add');
    fireEvent.click(btn);
    expect(h2).toHaveTextContent('1');
    expect(h2).not.toHaveTextContent('0');
});
