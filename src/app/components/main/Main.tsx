import React, { FC, ReactElement } from 'react';
import styles from './main.module.css';

type Props = {
  children: ReactElement;
};

export const Main: FC<Props> = ({ children }) => (
  <main className={styles.main}>
    <div className={styles.wrapper}>{children}</div>
  </main>
);
