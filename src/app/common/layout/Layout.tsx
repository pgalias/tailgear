import React, { FunctionComponent, useEffect } from 'react';
import {
  changeMode,
  isNavigationOpened,
  selectMode,
  toggleNavigationAction,
  useDispatch,
  useSelector,
} from '../../store/layout';
import { Header } from '../header';
import { Navigation } from '../navigation';
import { Main } from '../main';

import styles from './layout.module.css';

export const Layout: FunctionComponent = () => {
  const isNavigationVisible = useSelector(isNavigationOpened);
  const currentMode = useSelector(selectMode);
  const dispatch = useDispatch();

  useEffect(() => {
    const { width } = window.screen;

    dispatch(toggleNavigationAction(width > 1024));
  }, []);

  const onHamburgerClick = () => {
    dispatch(toggleNavigationAction());
  };

  const onModeChange = () => {
    const toggledMode = currentMode === 'preview' ? 'code' : 'preview';

    dispatch(changeMode(toggledMode));
  };

  return (
    <div
      className={`${styles.layout} ${
        !isNavigationVisible ? styles.layoutWithNav : ''
      }`}
    >
      <Header onHamburgerClick={onHamburgerClick} onModeChange={onModeChange} />
      {isNavigationVisible && <Navigation />}
      <Main />
    </div>
  );
};
