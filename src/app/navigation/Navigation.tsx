import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { ComponentsList } from '../components';
import styles from './navigation.module.css';

export const Navigation: FunctionComponent = () => (
  <nav className={styles.navigation}>
    <Link to="/">Home</Link>
    {ComponentsList()}
  </nav>
);
