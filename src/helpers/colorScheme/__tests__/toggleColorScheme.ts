import { toggleColorScheme } from '../toggleColorScheme';
import { getColorScheme } from '../getColorScheme';
import { ColorScheme } from '../constants';

jest.mock('../getColorScheme', () => ({
  getColorScheme: jest.fn(),
}));

describe('helpers::colorScheme::toggleColorScheme', () => {
  test.each`
    current              | next
    ${ColorScheme.DARK}  | ${ColorScheme.LIGHT}
    ${ColorScheme.LIGHT} | ${ColorScheme.DARK}
  `('should return $next if $current is currently set', ({ current, next }) => {
    (getColorScheme as jest.Mock).mockReturnValue(current);
    expect(toggleColorScheme()).toEqual(next);
  });

  test.each`
    current              | next
    ${ColorScheme.DARK}  | ${ColorScheme.LIGHT}
    ${ColorScheme.LIGHT} | ${ColorScheme.DARK}
  `(
    'should return $next if $current is provided as an argument',
    ({ current, next }) => {
      expect(toggleColorScheme(current)).toEqual(next);
    }
  );
});
