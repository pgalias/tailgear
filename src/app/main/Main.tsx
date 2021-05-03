import React, { FunctionComponent } from 'react';
import { Route, Switch } from 'react-router-dom';
import { RoutesList } from '../components';
import styles from './main.module.css';

export const Main: FunctionComponent = () => (
  <main className={styles.main}>
    <Switch>
      <Route path="/" exact>
        Honey, I`m home
      </Route>
      {RoutesList()}
    </Switch>
  </main>
);
