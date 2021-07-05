import React from 'react';
import { render } from '@testing-library/react';
import Toggler from './Toggler';

it('should start showing text onload', () => {
    const { getByText } = render(<Toggler/>);
    const heading = getByText('Hello World');
    expect(heading).toHaveClass('Toggler-text');
    expect(heading).toBeInTheDocument();
});