import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Toggler from './Toggler';

// it('should start showing text onload', () => {
//     const { getByText } = render(<Toggler/>);
//     const heading = getByText('Hello World');
//     expect(heading).toHaveClass('Toggler-text');
//     expect(heading).toBeInTheDocument();
// });

it('should toggle', () => {
    const { getByText } = render(<Toggler/>);
    const heading = getByText('Hello World');
    expect(heading).toHaveClass('Toggler-text');
    const btn = getByText('Toggle');
    
    expect(heading).toBeInTheDocument();
    fireEvent.click(btn);
    expect(heading).not.toBeInTheDocument();

});