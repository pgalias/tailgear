import React, { FunctionComponent } from 'react';
import {
  changeMode,
  isNavigationOpened,
  selectMode,
  toggleNavigationAction,
  useDispatch,
  useSelector,
} from '../store/layout';
import { Header } from '../header/Header';
import { Navigation } from '../navigation/Navigation';
import { Main } from '../main/Main';

import styles from './layout.module.css';

export const Layout: FunctionComponent = () => {
  const isNavigationVisible = useSelector(isNavigationOpened);
  const currentMode = useSelector(selectMode);
  const dispatch = useDispatch();

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
