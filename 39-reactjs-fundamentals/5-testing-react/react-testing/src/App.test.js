import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('it render w/o crashing', () => {
  render(<App />);
})