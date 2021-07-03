import { getColorScheme } from './getColorScheme';
import { ColorScheme } from './constants';

export const toggleColorScheme = (
  colorScheme = getColorScheme()
): ColorScheme =>
  colorScheme === ColorScheme.LIGHT ? ColorScheme.DARK : ColorScheme.LIGHT;
