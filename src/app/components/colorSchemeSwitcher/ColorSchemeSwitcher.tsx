import React, { FC, useEffect, useState } from 'react';
import {
  ColorScheme,
  getColorScheme,
  setColorScheme,
  toggleColorScheme,
} from '../../../helpers/colorScheme';
import styles from './colorSchemeSwitcher.module.css';

export const ColorSchemeSwitcher: FC = () => {
  const [scheme, setScheme] = useState<ColorScheme>(getColorScheme());

  useEffect(() => {
    setColorScheme(scheme);
  }, []);

  const onClick = () => {
    toggleColorScheme();
    setScheme(getColorScheme());
  };

  return (
    <button
      type="button"
      role="switch"
      aria-checked={scheme === ColorScheme.DARK}
      className={styles.switch}
      onClick={onClick}
      title="Toggle color schema"
    >
      {scheme}
    </button>
  );
};
