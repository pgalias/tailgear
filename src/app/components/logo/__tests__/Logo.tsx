import React from 'react';
import { render, screen } from '@testing-library/react';
import { Logo } from '../Logo';

describe('app::components::Logo', () => {
  test('should render a logo', () => {
    render(<Logo />);

    expect(screen.getByAltText(/no logo yet :\)/i)).toBeInTheDocument();
    expect(screen.getByRole('img')).toMatchSnapshot();
  });
});
