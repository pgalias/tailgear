import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ColorSchemeSwitcher } from '../ColorSchemeSwitcher';
import { ColorScheme } from '../../../../helpers/colorScheme';
import { wrapper } from '../../../../helpers/tests';

describe('app::components::ColorSchemeSwitcher', () => {
  const { Wrapper } = wrapper();

  test('should render a color scheme switcher with current scheme state', () => {
    render(<ColorSchemeSwitcher />, { wrapper: Wrapper });

    const switcher = screen.getByRole('switch');

    expect(switcher.textContent).toBe(ColorScheme.LIGHT);
  });

  test('should change a color scheme after click the switcher', () => {
    render(<ColorSchemeSwitcher />, { wrapper: Wrapper });

    const switcher = screen.getByRole('switch');
    userEvent.click(switcher);

    expect(switcher.textContent).toBe(ColorScheme.DARK);
  });
});
