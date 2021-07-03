import { COLOR_SCHEME_STORAGE_KEY, ColorScheme } from './constants';
import { Storage } from '../storage';

export const applyColorScheme = (colorScheme: ColorScheme): void => {
  const { classList } = document.documentElement;
  classList.remove(ColorScheme.LIGHT, ColorScheme.DARK);
  classList.add(colorScheme);

  Storage.set(COLOR_SCHEME_STORAGE_KEY, colorScheme);
};
