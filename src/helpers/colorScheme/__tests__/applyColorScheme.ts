import { applyColorScheme } from '../applyColorScheme';
import { COLOR_SCHEME_STORAGE_KEY, ColorScheme } from '../constants';
import { Storage } from '../../storage';

jest.mock('../../storage', () => ({
  Storage: class MockStorage {
    static set = jest.fn();
  },
}));

describe('helpers::colorScheme::applyColorScheme', () => {
  test.each([ColorScheme.LIGHT, ColorScheme.DARK])(
    'should set passed color scheme (%s) as a HTML element class and save the value to storage',
    (colorScheme) => {
      applyColorScheme(colorScheme);

      expect(
        document.documentElement.classList.contains(colorScheme)
      ).toBeTruthy();
      expect(Storage.set).toHaveBeenCalledWith(
        COLOR_SCHEME_STORAGE_KEY,
        colorScheme
      );
    }
  );
});
