import { getColorScheme } from '../getColorScheme';
import { ColorScheme } from '../constants';
import { Storage } from '../../storage';

jest.mock('../../storage', () => ({
  Storage: class MockStorage {
    static get = jest.fn();

    static has = jest.fn();
  },
}));

describe('helpers::colorScheme::getColorScheme', () => {
  const mockMatchMedia = jest.fn();

  beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: mockMatchMedia,
    });
  });

  test('should return a color scheme from the HTML element class attribute', () => {
    global.document.documentElement.className = ColorScheme.DARK;
    expect(getColorScheme()).toBe(ColorScheme.DARK);

    global.document.documentElement.className = ColorScheme.LIGHT;
    expect(getColorScheme()).toBe(ColorScheme.LIGHT);

    global.document.documentElement.className = '';
  });

  test("should return a dark color scheme if user's system is set so", () => {
    (Storage.has as jest.Mock).mockReturnValue(false);
    mockMatchMedia.mockReturnValue({
      matches: true,
    });

    expect(getColorScheme()).toBe(ColorScheme.DARK);
  });

  test('should return a value from the store', () => {
    (Storage.has as jest.Mock).mockReturnValue(true);

    (Storage.get as jest.Mock).mockReturnValue(ColorScheme.DARK);
    expect(getColorScheme()).toBe(ColorScheme.DARK);

    (Storage.get as jest.Mock).mockReturnValue(ColorScheme.LIGHT);
    expect(getColorScheme()).toBe(ColorScheme.LIGHT);
  });

  test('should return "light" otherwise', () => {
    (Storage.has as jest.Mock).mockReturnValue(false);
    (Storage.get as jest.Mock).mockReturnValue(undefined);
    mockMatchMedia.mockReturnValue({
      matches: false,
    });

    expect(getColorScheme()).toBe(ColorScheme.LIGHT);
  });
});
