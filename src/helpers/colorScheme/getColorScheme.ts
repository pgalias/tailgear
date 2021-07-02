import { COLOR_SCHEME_STORAGE_KEY, ColorScheme } from './constants';
import { Storage } from '../storage';

export const getColorScheme = (): ColorScheme => {
  const { classList } = document.documentElement;

  if (classList.contains(ColorScheme.DARK)) {
    return ColorScheme.DARK;
  }

  if (classList.contains(ColorScheme.LIGHT)) {
    return ColorScheme.LIGHT;
  }

  if (
    !Storage.has(COLOR_SCHEME_STORAGE_KEY) &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  ) {
    return ColorScheme.DARK;
  }

  return (
    Storage.get<ColorScheme>(COLOR_SCHEME_STORAGE_KEY) ?? ColorScheme.LIGHT
  );
};
