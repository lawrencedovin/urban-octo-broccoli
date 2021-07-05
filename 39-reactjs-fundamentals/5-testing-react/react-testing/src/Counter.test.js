import React from 'react';
import { render, screen } from '@testing-library/react';
import Counter from './Counter';

test('it render w/o crashing', () => {
  render(<Counter />);
})