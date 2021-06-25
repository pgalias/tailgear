import React, { FC } from 'react';
import styles from './navigation.module.css';

type Props = {
  children: JSX.Element[];
};

export const Navigation: FC<Props> = ({ children }) => (
  <nav className={styles.navigation}>
    <div className={styles.wrapper}>{children}</div>
  </nav>
);
