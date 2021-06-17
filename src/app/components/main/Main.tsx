import React, { FunctionComponent } from 'react';
import { Route, Switch } from 'react-router-dom';
import { RoutesList } from '../../routes';
import styles from './main.module.css';

export const Main: FunctionComponent = () => (
  <main className={styles.main}>
    <div className={styles.wrapper}>
      <Switch>
        <Route path="/" exact>
          Honey, I`m home
        </Route>
        <Route path="/contribution">Coming soon</Route>
        <RoutesList />
      </Switch>
    </div>
  </main>
);
