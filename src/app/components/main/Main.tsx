import React, { FunctionComponent, useEffect } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { RoutesList } from '../../routes';
import { changeMode, useDispatch } from '../../store/layout';
import { StaticPages } from '../../constants/staticPages';
import styles from './main.module.css';

export const Main: FunctionComponent = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  useEffect(() => {
    const mode = StaticPages.some((page) => page.url === pathname)
      ? 'static'
      : 'preview';
    dispatch(changeMode(mode));
  }, [pathname]);

  return (
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
};
