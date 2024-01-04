import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Hooks from './Hooks';

describe('<Hooks />', () => {
  test('it should mount', () => {
    render(<Hooks />);
    
    const hooks = screen.getByTestId('Hooks');

    expect(hooks).toBeInTheDocument();
  });
});