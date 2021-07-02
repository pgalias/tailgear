import { toggleColorScheme } from '../toggleColorScheme';
import { getColorScheme } from '../getColorScheme';
import { setColorScheme } from '../setColorScheme';
import { ColorScheme } from '../constants';

jest.mock('../getColorScheme', () => ({
  getColorScheme: jest.fn(),
}));

jest.mock('../setColorScheme', () => ({
  setColorScheme: jest.fn(),
}));

describe('helpers::colorScheme::toggleColorScheme', () => {
  test.each`
    current              | next
    ${ColorScheme.DARK}  | ${ColorScheme.LIGHT}
    ${ColorScheme.LIGHT} | ${ColorScheme.DARK}
  `('should set $next if $current is currently set', ({ current, next }) => {
    (getColorScheme as jest.Mock).mockReturnValue(current);
    toggleColorScheme();

    expect(setColorScheme).toHaveBeenCalledWith(next);
  });
});
