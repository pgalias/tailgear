import React, { FunctionComponent } from 'react';
import { Switch } from 'react-router-dom';
import { RoutesList } from '../../routes';
import styles from './main.module.css';

export const Main: FunctionComponent = () => (
  <main className={styles.main}>
    <div className={styles.wrapper}>
      <Switch>
        <RoutesList />
      </Switch>
    </div>
  </main>
);
