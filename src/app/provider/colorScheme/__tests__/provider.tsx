import React from 'react';
import { render, screen } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import userEvent from '@testing-library/user-event';
import { ColorSchemeProvider, useColorScheme } from '../provider';
import { ColorScheme } from '../../../../helpers/colorScheme';

describe('app::provider::colorScheme', () => {
  const TestComponent = () => {
    const { scheme, toggleScheme } = useColorScheme();

    return (
      <button type="button" onClick={toggleScheme}>
        {scheme}
      </button>
    );
  };

  test('color scheme context should return current scheme and toggle method', () => {
    render(
      <ColorSchemeProvider>
        <TestComponent />
      </ColorSchemeProvider>
    );

    const button = screen.getByRole('button');

    expect(button.textContent).toEqual(ColorScheme.LIGHT);

    userEvent.click(button);

    expect(button.textContent).toEqual(ColorScheme.DARK);

    userEvent.click(button);

    expect(button.textContent).toEqual(ColorScheme.LIGHT);
  });

  test("useColorScheme hook should throw an error when it's called outside ColorSchemeProvider", () => {
    const { result } = renderHook(() => useColorScheme());

    expect(result.error).toBeDefined();
  });
});
