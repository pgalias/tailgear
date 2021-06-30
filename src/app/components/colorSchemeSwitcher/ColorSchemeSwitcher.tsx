import React, { FC } from 'react';
import { ColorScheme } from '../../../helpers/colorScheme';
import { useColorScheme } from '../../provider/colorScheme';
import styles from './colorSchemeSwitcher.module.css';

export const ColorSchemeSwitcher: FC = () => {
  const { scheme, toggleScheme } = useColorScheme();

  return (
    <button
      type="button"
      role="switch"
      aria-checked={scheme === ColorScheme.DARK}
      className={styles.switch}
      onClick={toggleScheme}
      title="Toggle color schema"
    >
      <span className={styles.text}>{scheme}</span>
    </button>
  );
};
