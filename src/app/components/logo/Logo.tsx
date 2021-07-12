import React, { FunctionComponent } from 'react';
import { ReactComponent as Zephyrus } from '../../../assets/images/logo.svg';
import styles from './styles.module.css';

export const Logo: FunctionComponent = () => (
  <Zephyrus className={styles.logo} />
);
