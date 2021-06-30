import { getColorScheme } from './getColorScheme';
import { ColorScheme } from './constants';
import { setColorScheme } from './setColorScheme';

export const toggleColorScheme = (): void => {
  const currentColorScheme = getColorScheme();
  const nextColorScheme =
    currentColorScheme === ColorScheme.LIGHT
      ? ColorScheme.DARK
      : ColorScheme.LIGHT;

  setColorScheme(nextColorScheme);
};
