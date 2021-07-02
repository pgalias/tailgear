import { setColorScheme } from '../setColorScheme';
import { COLOR_SCHEME_STORAGE_KEY, ColorScheme } from '../constants';
import { Storage } from '../../storage';

jest.mock('../../storage', () => ({
  Storage: class MockStorage {
    static set = jest.fn();
  },
}));

describe('helpers::colorScheme::setColorScheme', () => {
  test('should set passed color scheme as a HTML element class and save the value to storage', () => {
    setColorScheme(ColorScheme.DARK);

    expect(
      document.documentElement.classList.contains(ColorScheme.DARK)
    ).toBeTruthy();
    expect(Storage.set).toHaveBeenCalledWith(
      COLOR_SCHEME_STORAGE_KEY,
      ColorScheme.DARK
    );
  });
});
