import React, { FunctionComponent } from 'react';
import {
  changeMode,
  isNavigationOpened,
  selectMode,
  toggleNavigationAction,
  useDispatch,
  useSelector,
} from '../store';
import { Header } from '../header/Header';

import styles from './layout.module.css';

export const Layout: FunctionComponent = () => {
  const navigationVisibility = useSelector(isNavigationOpened);
  const currentMode = useSelector(selectMode);
  const dispatch = useDispatch();

  const onHamburgerClick = () => {
    dispatch(toggleNavigationAction());
  };

  const onCopy = () => null;

  const onModeChange = () => {
    const toggledMode = currentMode === 'preview' ? 'code' : 'preview';

    dispatch(changeMode(toggledMode));
  };

  return (
    <div className={styles.layout}>
      <Header
        onHamburgerClick={onHamburgerClick}
        onCopy={onCopy}
        onModeChange={onModeChange}
      />
    </div>
  );
};
